import type { ElternratgeberKategorieSlug } from "@/content/elternratgeber/kategorien";

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  kategorie: ElternratgeberKategorieSlug;
  veroeffentlicht: string;
  aktualisiert?: string;
  lesezeit?: number;
  cover?: string;
  coverAlt?: string;
  teaser?: string;
  tags?: string[];
  wpId?: number;
  originalUrl?: string;
  empfehlung?: { featured?: boolean };
  verwandt?: string[];
  seo?: {
    title?: string;
    description?: string;
    noindex?: boolean;
  };
};

export type Article = ArticleFrontmatter & {
  body: string;
};

export type ArticleSummary = Omit<ArticleFrontmatter, "seo">;
