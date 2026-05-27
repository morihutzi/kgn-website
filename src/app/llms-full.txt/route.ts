import { getAllArticles } from "@/lib/elternratgeber/articles";
import { elternratgeberKategorien } from "@/content/elternratgeber/kategorien";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

const BASE_URL = "https://www.kidgonet.de";

export function GET() {
  const articles = getAllArticles().filter((a) => !a.seo?.noindex);

  // Artikel nach Kategorie gruppieren
  const byKategorie = new Map<string, typeof articles>();
  for (const article of articles) {
    if (!byKategorie.has(article.kategorie)) {
      byKategorie.set(article.kategorie, []);
    }
    byKategorie.get(article.kategorie)!.push(article);
  }

  const kategorieBlocks = elternratgeberKategorien
    .filter((k) => byKategorie.has(k.slug))
    .map((k) => {
      const list = byKategorie
        .get(k.slug)!
        .map(
          (a) =>
            `- [${a.title}](${BASE_URL}/elternratgeber/${a.kategorie}/${a.slug})` +
            (a.teaser ? `: ${a.teaser}` : ""),
        )
        .join("\n");
      return `### ${k.name}\n\n${list}`;
    })
    .join("\n\n");

  const content = `# Kidgonet – Vollständiger Inhalt

> Kidgonet ist die DSGVO-konforme Kinderschutz-App aus Deutschland für iOS und Android.
> Entwickelt von der Kidgonet GmbH, Brunnthal bei München.

## Produkt

- **App:** Kidgonet
- **Plattformen:** iOS (${siteConfig.appStoreUrl}), Android (${siteConfig.playStoreUrl})
- **Testphase:** ${siteConfig.trialDays} Tage kostenlos, 30 Tage Geld-zurück-Garantie
- **Preise:** Monatsabo €4,99/Monat · Jahresabo €2,99/Monat (5 Lizenzen je)
- **Datenschutz:** DSGVO-konform, Server in Deutschland, keine Datenweitergabe an Dritte

## Kernfunktionen

- [Bildschirmzeit begrenzen](${BASE_URL}/bildschirmzeit): Tageslimits, Wochenpläne, geräteübergreifend
- [Webfilter](${BASE_URL}/webfilter): DNS-basierter Altersfilter (bis 6 / bis 12 / bis 16 Jahre)
- [Apps sperren & freigeben](${BASE_URL}/apps-freigeben): einzelne Apps blockieren oder erlauben
- [Standortverfolgung](${BASE_URL}/standort): Echtzeit-Standort im Elternportal
- [Sperrmodus](${BASE_URL}/sperrmodus): Internet und Apps sofort sperren

## Seiten

- [Startseite](${BASE_URL}/)
- [Was kann die App](${BASE_URL}/was-kann-die-app)
- [Preise](${BASE_URL}/preise)
- [Hilfe & FAQ](${BASE_URL}/hilfe)
- [Über uns](${BASE_URL}/ueber-uns)
- [Glossar](${BASE_URL}/glossar): Fachbegriffe rund um digitalen Kinderschutz
- [Datenschutz](${BASE_URL}/datenschutz)
- [Impressum](${BASE_URL}/impressum)

## Installations-Anleitungen

- [Kidgonet auf Android einrichten](${BASE_URL}/hilfe/installation-android): 12-Schritte-Anleitung
- [Kidgonet auf iOS einrichten](${BASE_URL}/hilfe/installation-ios): Schritt-für-Schritt-Anleitung

## Elternratgeber (${articles.length} Artikel)

${kategorieBlocks}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
