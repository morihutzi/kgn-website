import { getAllArticles, toSummary } from "./articles";
import type { ArticleSummary } from "./types";

export type FeatureSlug =
  | "bildschirmzeit"
  | "webfilter"
  | "standort"
  | "sperrmodus"
  | "apps-freigeben";

const FEATURE_TO_ARTICLE_SLUGS: Record<FeatureSlug, string[]> = {
  bildschirmzeit: [
    "bildschirmzeit-fuer-kinder-was-eltern-wissen-muessen",
    "wie-viel-bildschirmzeit-ist-gesund",
    "bildschirmzeit-app-fuer-familien-sicher-ohne-ueberwachung",
  ],
  webfilter: [
    "sicher-surfen-so-schuetzt-du-dein-kind-im-netz",
    "kindersuchmaschinen-vergleich-sicheres-surfen-mit-kidgonet",
    "darknet-was-eltern-wissen-muessen-gefahren-und-schutzmassnahmen-fuer-kinder",
  ],
  standort: [
    "instagram-standortfunktion-risiken-erkennen-und-kinder-schuetzen",
    "cybergrooming-rtl-dokumentation-risiken-kinder",
    "privatsphaere-fuer-kinder",
  ],
  sperrmodus: [
    "handysucht-bei-kindern-wie-eltern-fruehzeitig-eingreifen-koennen",
    "kind-staendig-am-handy-tipps-elterncoach",
    "bildschirmzeit-12-jahre-tipps-empfehlungen",
  ],
  "apps-freigeben": [
    "welche-apps-sind-2025-die-besten-fuer-kinder-unsere-top-auswahl",
    "gefaehrliche-apps-kinder-cybergrooming-2024",
    "ab-wie-viel-jahren-ist-snapchat-erlaubt-das-sollten-eltern-wissen",
  ],
};

/** Artikel-Zusammenfassungen zu einer expliziten Slug-Liste (Reihenfolge bleibt erhalten). */
export function getArticleSummariesBySlugs(slugs: string[]): ArticleSummary[] {
  const all = getAllArticles();
  return slugs
    .map((slug) => all.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .map(toSummary);
}

export function getRelatedArticlesForFeature(
  feature: FeatureSlug,
): ArticleSummary[] {
  return getArticleSummariesBySlugs(FEATURE_TO_ARTICLE_SLUGS[feature]);
}

/**
 * Kuratierte Artikel-Auswahl fuer die Funktions-Uebersichtsseite
 * (`/was-kann-die-app`): je ein starker Beitrag aus den Kernthemen
 * Bildschirmzeit, sicheres Surfen und App-Auswahl.
 */
export function getOverviewRelatedArticles(): ArticleSummary[] {
  return getArticleSummariesBySlugs([
    "bildschirmzeit-fuer-kinder-was-eltern-wissen-muessen",
    "sicher-surfen-so-schuetzt-du-dein-kind-im-netz",
    "welche-apps-sind-2025-die-besten-fuer-kinder-unsere-top-auswahl",
  ]);
}
