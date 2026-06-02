import { getAllArticles } from "@/lib/elternratgeber/articles";
import { getKategorieBySlug } from "@/content/elternratgeber/kategorien";

// Für `output: "export"`: statisch zur Build-Zeit erzeugen.
export const dynamic = "force-static";

const BASE = "https://www.kidgonet.de";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(): Promise<Response> {
  const articles = getAllArticles().slice(0, 50);

  const items = articles
    .map((a) => {
      const url = `${BASE}/elternratgeber/${a.kategorie}/${a.slug}`;
      const kategorie = getKategorieBySlug(a.kategorie);
      const pubDate = new Date(a.veroeffentlicht).toUTCString();
      return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      ${kategorie ? `<category>${escapeXml(kategorie.name)}</category>` : ""}
      <description>${escapeXml(a.teaser ?? "")}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Kidgonet Elternratgeber</title>
    <link>${BASE}/elternratgeber</link>
    <description>Ratgeber, Interviews und Tipps fuer Familien rund um Mediennutzung, Bildschirmzeit und Sicherheit im Netz.</description>
    <language>de-de</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
