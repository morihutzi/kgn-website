/**
 * Keyword → interne Feature-Page Mapping fuer automatisches Linking
 * in Elternratgeber-Artikeln.
 *
 * Bei jeder ersten Erwaehnung des Keywords im Artikel-Body wird ein
 * Markdown-Link auf die entsprechende Feature-Page eingefuegt. So entsteht
 * automatisches internes Linkjuice ohne Pflege pro Artikel.
 */

type Rule = {
  /** Regex der das Keyword im Text matcht (case-insensitive, word boundary) */
  pattern: RegExp;
  /** Ziel-URL der internen Feature-Page */
  href: string;
};

// Reihenfolge ist wichtig: spezifischere Begriffe vor allgemeineren matchen,
// damit z.B. "Bildschirmzeit-App" nicht von "Bildschirmzeit" ueberschrieben wird.
const RULES: Rule[] = [
  { pattern: /\b(Kindersicherung\s+Handy)\b/i, href: "/kindersicherung-handy" },
  {
    pattern: /\b(Kindersicherung\s+iPhone)\b/i,
    href: "/kindersicherung-iphone",
  },
  {
    pattern: /\b(Kindersicherung\s+Android)\b/i,
    href: "/kindersicherung-android",
  },
  { pattern: /\b(Bildschirmzeit-App)\b/i, href: "/bildschirmzeit-app" },
  { pattern: /\b(Bildschirmzeit)\b/i, href: "/bildschirmzeit" },
  { pattern: /\b(Webfilter|Internetfilter)\b/i, href: "/webfilter" },
  { pattern: /\b(Sperrmodus)\b/i, href: "/sperrmodus" },
  { pattern: /\b(Apps?\s+freigeben|App-Freigabe)\b/i, href: "/apps-freigeben" },
  { pattern: /\b(Geräteortung|Standort\s+des\s+Kindes)\b/i, href: "/standort" },
];

/**
 * Findet die erste Vorkommen jedes Keywords ausserhalb existierender
 * Markdown-Links / Code-Bloecke / Code-Inline und ersetzt sie durch einen Link.
 *
 * Strategie: Body in Segmente splitten (Code-Bloecke, Inline-Code,
 * existierende Links als "skip"-Segmente). Nur in Text-Segmenten ersetzen.
 */
export function autoLinkKeywords(body: string, currentSlug: string): string {
  // Segmente die nicht angefasst werden duerfen
  const skipSegments: Array<{ start: number; end: number }> = [];

  // Code-Bloecke ```...```
  for (const m of body.matchAll(/```[\s\S]*?```/g)) {
    if (m.index !== undefined) {
      skipSegments.push({ start: m.index, end: m.index + m[0].length });
    }
  }
  // Inline-Code `...`
  for (const m of body.matchAll(/`[^`\n]+`/g)) {
    if (m.index !== undefined) {
      skipSegments.push({ start: m.index, end: m.index + m[0].length });
    }
  }
  // Bestehende Markdown-Links [text](url)
  for (const m of body.matchAll(/\[[^\]]+\]\([^)]+\)/g)) {
    if (m.index !== undefined) {
      skipSegments.push({ start: m.index, end: m.index + m[0].length });
    }
  }
  // Headings/Listen-Marker am Zeilenanfang nicht generell skippen,
  // sondern erlauben — Links in H2/H3 sind OK fuer SEO.

  const isInSkipSegment = (idx: number) =>
    skipSegments.some((s) => idx >= s.start && idx < s.end);

  let out = body;
  const usedRules = new Set<string>();

  for (const rule of RULES) {
    // Wenn der Artikel selbst die Ziel-Page ist, nicht auf sich selbst linken
    if (rule.href.endsWith(currentSlug)) continue;
    if (usedRules.has(rule.href)) continue;

    // Globaler Regex mit Capture-Group, damit der genaue Treffer eingesetzt
    // wird (Originalschreibweise behalten)
    const globalPattern = new RegExp(
      rule.pattern.source,
      rule.pattern.flags.includes("g")
        ? rule.pattern.flags
        : rule.pattern.flags + "g",
    );

    const match = (() => {
      for (const m of out.matchAll(globalPattern)) {
        if (m.index === undefined) continue;
        if (isInSkipSegment(m.index)) continue;
        return m;
      }
      return null;
    })();

    if (!match || match.index === undefined) continue;

    const original = match[0];
    const link = `[${original}](${rule.href})`;
    out =
      out.slice(0, match.index) +
      link +
      out.slice(match.index + original.length);

    // Skip-Segments verschieben sich, weil der Body laenger geworden ist
    const delta = link.length - original.length;
    for (const s of skipSegments) {
      if (s.start > match.index) {
        s.start += delta;
        s.end += delta;
      }
    }
    // Den neu eingefuegten Link auch als skip-Segment markieren, damit er
    // nicht in weiteren Rules erneut gematcht wird
    skipSegments.push({ start: match.index, end: match.index + link.length });

    usedRules.add(rule.href);
  }

  return out;
}
