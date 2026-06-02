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

export function getRelatedArticlesForFeature(
  feature: FeatureSlug,
): ArticleSummary[] {
  const slugs = FEATURE_TO_ARTICLE_SLUGS[feature];
  const all = getAllArticles();
  return slugs
    .map((slug) => all.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .map(toSummary);
}
