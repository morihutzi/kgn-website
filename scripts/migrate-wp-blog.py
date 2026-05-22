#!/usr/bin/env python3
"""
Migriert alle Posts vom WordPress-Backend (kidgonet.de) in das
neue Next-Repo. Erzeugt:

  src/content/elternratgeber/artikel/<kategorie>/<slug>.mdx
  public/images/elternratgeber/<slug>/<original-name-or-cover>.<ext>

Lauf einfach mit:  python3 scripts/migrate-wp-blog.py
"""
from __future__ import annotations

import html
import json
import mimetypes
import os
import re
import sys
import textwrap
import time
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any

from markdownify import markdownify as md

WP_BASE = "https://www.kidgonet.de/wp-json/wp/v2"
ROOT = Path(__file__).resolve().parents[1]
CONTENT_DIR = ROOT / "src/content/elternratgeber/artikel"
IMG_DIR = ROOT / "public/images/elternratgeber"
CACHE_DIR = ROOT / "tmp/wp-migration"
CACHE_DIR.mkdir(parents=True, exist_ok=True)

CAT_EXPERT_TALK = 74
CAT_MEDIENTIPPS = 76
CAT_SMARTPHONES = 147
CAT_ALLGEMEIN = 1


def http_get_json(url: str) -> Any:
    with urllib.request.urlopen(url, timeout=60) as r:
        return json.loads(r.read().decode("utf-8"))


def fetch_all_posts() -> list[dict]:
    cache_file = CACHE_DIR / "posts_full.json"
    if cache_file.exists():
        return json.loads(cache_file.read_text(encoding="utf-8"))
    page = 1
    all_posts: list[dict] = []
    while True:
        url = f"{WP_BASE}/posts?per_page=100&page={page}&_embed=wp:featuredmedia"
        data = http_get_json(url)
        if not data:
            break
        all_posts.extend(data)
        if len(data) < 100:
            break
        page += 1
    cache_file.write_text(
        json.dumps(all_posts, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    return all_posts


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[äÄ]", "ae", text)
    text = re.sub(r"[öÖ]", "oe", text)
    text = re.sub(r"[üÜ]", "ue", text)
    text = re.sub(r"[ß]", "ss", text)
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")


def pick_category(post: dict) -> str:
    cats = post.get("categories", [])
    if CAT_EXPERT_TALK in cats:
        return "expert-talk"
    if CAT_SMARTPHONES in cats:
        return "smartphones-tablets"
    if CAT_MEDIENTIPPS in cats:
        return "medientipps"
    title = strip_html(post["title"]["rendered"]).lower()
    expert_markers = (
        "interview",
        "expert talk",
        "im gespräch",
        "manuel neuer",
        "joachim schuch",
        "sara flieder",
        "susanne jansen",
        "christopher end",
        "margarete berger",
        "stefanie fröhlich",
        "nina franz",
        "philine schwalbach",
        "annika bremerich",
        "aline fink",
        "mirjam lamberti",
        "nadia polat",
        "lea lanzinger",
        "lars brockmann",
        "sascha amrhein",
        "laura tzanev",
    )
    if any(m in title for m in expert_markers):
        return "expert-talk"
    return "medientipps"


def strip_html(s: str) -> str:
    return html.unescape(re.sub(r"<[^>]+>", "", s)).strip()


# Dateinamen-Muster fuer dekorative Brand-/Loader-Assets, die kein
# redaktionelles Bild sind.
SKIP_IMAGE_PATTERNS = (
    "kidgonet-jugendschutz-app",
    "kidgonet-logo",
    "kidgonet_logo",
    "logo-weiss",
    "spinner.gif",
    "spinner-",
    "data:image",
)


def is_skip_image(url: str) -> bool:
    lowered = url.lower()
    return any(p in lowered for p in SKIP_IMAGE_PATTERNS)


def image_basename_key(url: str) -> str:
    """Erzeugt einen normalisierten Schluessel zum Vergleich von
    WordPress-Bildvarianten (z.B. ``Foo-1024x683.jpg`` und ``Foo-scaled.jpg``
    haben denselben Schluessel ``foo``)."""
    name = os.path.basename(urllib.parse.urlparse(url).path)
    name = name.rsplit(".", 1)[0]
    name = re.sub(r"-\d+x\d+$", "", name)
    name = re.sub(r"-scaled$", "", name)
    name = re.sub(r"-e\d+$", "", name)
    return name.lower()


def extract_image_urls(html_str: str) -> list[str]:
    urls = re.findall(r"<img[^>]+src=\"([^\"]+)\"", html_str)
    return [u for u in urls if u.startswith("http") and not is_skip_image(u)]


def strip_skip_images_from_html(
    html_str: str, cover_key: str | None = None
) -> str:
    """Entfernt dekorative Brand-Bilder UND Varianten des Cover-Bilds.
    Cover wird bereits im Hero ausgespielt; Varianten (1024x683 etc.)
    duerfen im Body nicht ein zweites Mal auftauchen."""

    def replace(match: re.Match[str]) -> str:
        tag = match.group(0)
        src_match = re.search(r"src=\"([^\"]+)\"", tag)
        if not src_match:
            return tag
        src = src_match.group(1)
        if is_skip_image(src):
            return ""
        if cover_key and image_basename_key(src) == cover_key:
            return ""
        return tag

    return re.sub(r"<img[^>]+>", replace, html_str)


def safe_url(url: str) -> str:
    parsed = urllib.parse.urlsplit(url)
    safe_path = urllib.parse.quote(parsed.path, safe="/%-_.~")
    return urllib.parse.urlunsplit(
        (parsed.scheme, parsed.netloc, safe_path, parsed.query, parsed.fragment)
    )


def download(url: str, dest: Path) -> Path | None:
    if dest.exists() and dest.stat().st_size > 0:
        return dest
    try:
        req = urllib.request.Request(
            safe_url(url), headers={"User-Agent": "kidgonet-migration/1.0"}
        )
        with urllib.request.urlopen(req, timeout=60) as r:
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(r.read())
        return dest
    except Exception as e:  # pragma: no cover
        print(f"  ! download fail {url}: {e}", file=sys.stderr)
        return None


def file_ext_from_url(url: str) -> str:
    path = urllib.parse.urlparse(url).path
    ext = os.path.splitext(path)[1].lower()
    if ext in {".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif", ".svg"}:
        return ext
    return ".jpg"


def safe_image_name(url: str, index: int) -> str:
    name = os.path.basename(urllib.parse.urlparse(url).path)
    name = re.sub(r"[^A-Za-z0-9._-]+", "-", name)
    if not name or name == "-":
        name = f"img-{index}{file_ext_from_url(url)}"
    return name


def normalize_wp_url(url: str) -> str:
    return url.replace("&amp;", "&")


def escape_mdx_unsafe(md_text: str) -> str:
    # MDX behandelt { und < strikt. In fences sind sie egal, ausserhalb
    # ersetzen wir vereinzelte { und } durch HTML-Entities.
    out_lines: list[str] = []
    in_fence = False
    for line in md_text.split("\n"):
        if line.startswith("```"):
            in_fence = not in_fence
            out_lines.append(line)
            continue
        if in_fence:
            out_lines.append(line)
            continue
        line = line.replace("{", "&#123;").replace("}", "&#125;")
        out_lines.append(line)
    return "\n".join(out_lines)


def clean_md_body(md_text: str, title: str) -> str:
    md_text = re.sub(r"\n{3,}", "\n\n", md_text).strip()
    lines = md_text.split("\n")

    def drop_leading_empty(ls: list[str]) -> list[str]:
        while ls and not ls[0].strip():
            ls = ls[1:]
        return ls

    # Strip fuehrenden Bild-Block (WP dupliziert das Featured-Image meist als
    # erstes Bild im Body – Cover wird bereits im Hero ausgespielt).
    lines = drop_leading_empty(lines)
    if lines and re.match(r"^!\[[^\]]*\]\([^\)]+\)\s*$", lines[0].strip()):
        lines = lines[1:]
        lines = drop_leading_empty(lines)

    # Strip leading H1 (Titel steckt schon im Hero / der Frontmatter).
    if lines and re.match(r"^#\s+\S", lines[0]):
        lines = lines[1:]
        lines = drop_leading_empty(lines)

    # WP nutzt manchmal mehrere H2 als Titel-Fragmente am Anfang ("Bayerischer
    # Digitalpreis" / "B.DiGiTAL 2025" / "..."). Wenn 2+ aufeinanderfolgende
    # H2 am Anfang stehen UND ihr Inhalt im Titel vorkommt, werden sie
    # gestrippt.
    def _title_norm(s: str) -> str:
        return re.sub(r"[^\w]+", "", s, flags=re.UNICODE).lower()

    leading_h2: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        m = re.match(r"^##\s+(.+)$", line)
        if m:
            leading_h2.append(m.group(1).strip())
            i += 1
            continue
        break

    if len(leading_h2) >= 2:
        title_n = _title_norm(title)
        combined_n = _title_norm(" ".join(leading_h2))
        match = combined_n and (combined_n in title_n or title_n[:30] in combined_n)
        if match:
            lines = lines[i:]
            lines = drop_leading_empty(lines)

    md_text = "\n".join(lines)
    # Restliche H1 im Body zu H2 demoten (nur eine H1 pro Seite zulassen).
    md_text = re.sub(r"^# (?=\S)", "## ", md_text, flags=re.MULTILINE)
    # Headings: remove inline bold/italic markers inside headings (## **Foo** -> ## Foo)
    md_text = re.sub(
        r"^(#{1,6}\s+)\*\*(.+?)\*\*\s*$",
        r"\1\2",
        md_text,
        flags=re.MULTILINE,
    )
    md_text = re.sub(
        r"^(#{1,6}\s+)\*(.+?)\*\s*$",
        r"\1\2",
        md_text,
        flags=re.MULTILINE,
    )
    # Doppelte Bold-Marker (****Text****) auf normal Bold reduzieren
    md_text = re.sub(r"\*{4}([^*]+?)\*{4}", r"**\1**", md_text)
    # CommonMark-Autolinks <https://...> -> [url](url) (MDX behandelt < strikt)
    md_text = re.sub(
        r"<(https?://[^>\s]+)>",
        lambda m: f"[{m.group(1)}]({m.group(1)})",
        md_text,
    )
    # Reste von Mail-Autolinks <foo@bar>
    md_text = re.sub(
        r"<([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})>",
        lambda m: f"[{m.group(1)}](mailto:{m.group(1)})",
        md_text,
    )
    return md_text.strip()


def html_to_mdx_body(
    html_str: str,
    img_map: dict[str, str],
    title: str,
    cover_key: str | None = None,
) -> str:
    cleaned = re.sub(r"<!--.*?-->", "", html_str, flags=re.DOTALL)
    cleaned = re.sub(r"<script[\s\S]*?</script>", "", cleaned)
    cleaned = re.sub(r"<style[\s\S]*?</style>", "", cleaned)
    cleaned = strip_skip_images_from_html(cleaned, cover_key=cover_key)
    for src, local in img_map.items():
        cleaned = cleaned.replace(src, local)
        cleaned = cleaned.replace(src.replace("&", "&amp;"), local)
    md_text = md(
        cleaned,
        heading_style="ATX",
        bullets="-",
        strip=["span", "div", "figure", "figcaption"],
    )
    md_text = clean_md_body(md_text, title)
    md_text = escape_mdx_unsafe(md_text)
    return md_text


def yaml_escape(s: str) -> str:
    s = s.replace("\\", "\\\\").replace("\"", "\\\"")
    return s


def build_frontmatter(meta: dict) -> str:
    lines = ["---"]
    for k, v in meta.items():
        if v is None or v == "":
            continue
        if isinstance(v, bool):
            lines.append(f"{k}: {'true' if v else 'false'}")
        elif isinstance(v, int):
            lines.append(f"{k}: {v}")
        elif isinstance(v, list):
            if not v:
                continue
            lines.append(f"{k}:")
            for item in v:
                lines.append(f"  - \"{yaml_escape(str(item))}\"")
        else:
            lines.append(f"{k}: \"{yaml_escape(str(v))}\"")
    lines.append("---\n")
    return "\n".join(lines)


def read_time_minutes(text: str) -> int:
    words = len(re.findall(r"\S+", text))
    return max(1, round(words / 200))


def main() -> None:
    print("Lade alle Posts...")
    posts = fetch_all_posts()
    print(f"  -> {len(posts)} Posts gefunden\n")

    written = 0
    for post in posts:
        title = strip_html(post["title"]["rendered"])
        slug = post.get("slug") or slugify(title)
        kategorie = pick_category(post)
        date = post.get("date", "")[:10]
        modified = post.get("modified", "")[:10]
        teaser = strip_html(post.get("excerpt", {}).get("rendered", ""))
        content_html = post.get("content", {}).get("rendered", "")

        # Featured media
        cover_local: str | None = None
        cover_alt: str | None = None
        cover_key: str | None = None
        embedded = post.get("_embedded", {})
        media_list = embedded.get("wp:featuredmedia", []) or []
        media = media_list[0] if media_list else None
        if media and isinstance(media, dict) and not media.get("data"):
            cover_url = (
                media.get("source_url")
                or media.get("media_details", {})
                .get("sizes", {})
                .get("full", {})
                .get("source_url")
            )
            if cover_url:
                cover_key = image_basename_key(cover_url)
                ext = file_ext_from_url(cover_url)
                local_rel = f"/images/elternratgeber/{slug}/cover{ext}"
                dest = ROOT / "public" / local_rel.lstrip("/")
                if download(normalize_wp_url(cover_url), dest):
                    cover_local = local_rel
                cover_alt = strip_html(media.get("alt_text") or title)

        # Inline images
        img_urls = extract_image_urls(content_html)

        # Fallback Cover aus erstem Inline-Bild, falls Featured fehlt
        if not cover_local and img_urls:
            fallback_url = normalize_wp_url(img_urls[0])
            cover_key = image_basename_key(fallback_url)
            ext = file_ext_from_url(fallback_url)
            local_rel = f"/images/elternratgeber/{slug}/cover{ext}"
            dest = ROOT / "public" / local_rel.lstrip("/")
            if download(fallback_url, dest):
                cover_local = local_rel
                cover_alt = title
        img_map: dict[str, str] = {}
        for i, raw_url in enumerate(img_urls, start=1):
            # Cover-Varianten ueberspringen (werden bereits im Hero gezeigt)
            if cover_key and image_basename_key(raw_url) == cover_key:
                continue
            url = normalize_wp_url(raw_url)
            name = safe_image_name(url, i)
            local_rel = f"/images/elternratgeber/{slug}/{name}"
            dest = ROOT / "public" / local_rel.lstrip("/")
            if download(url, dest):
                img_map[raw_url] = local_rel

        body_md = html_to_mdx_body(content_html, img_map, title, cover_key)
        lesezeit = read_time_minutes(body_md)
        # Teaser saeubern: redundante Titel-Wiederholung am Anfang entfernen
        if teaser and teaser.lower().startswith(title.lower()):
            teaser = teaser[len(title) :].strip(" -–—.:;,")
        teaser = re.sub(r"\s+", " ", teaser).strip()
        if len(teaser) > 240:
            teaser = teaser[:237].rstrip() + "..."

        # Tags (aus _embedded.wp:term wenn vorhanden, sonst leer)
        tags: list[str] = []
        terms_groups = embedded.get("wp:term", []) or []
        for group in terms_groups:
            if not isinstance(group, list):
                continue
            for term in group:
                if term.get("taxonomy") == "post_tag":
                    name = strip_html(term.get("name", ""))
                    if name:
                        tags.append(name)

        frontmatter = build_frontmatter(
            {
                "title": title,
                "slug": slug,
                "kategorie": kategorie,
                "veroeffentlicht": date,
                "aktualisiert": modified if modified != date else None,
                "lesezeit": lesezeit,
                "cover": cover_local,
                "coverAlt": cover_alt,
                "teaser": teaser,
                "tags": tags,
                "wpId": post.get("id"),
                "originalUrl": post.get("link"),
            }
        )

        out_path = CONTENT_DIR / kategorie / f"{slug}.mdx"
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(frontmatter + body_md + "\n", encoding="utf-8")
        written += 1
        print(f"  [{kategorie:20}] {slug}")
        time.sleep(0.05)

    print(f"\nFertig: {written} Beitraege geschrieben nach {CONTENT_DIR}")


if __name__ == "__main__":
    main()
