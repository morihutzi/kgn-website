import type { ElternratgeberKategorieSlug } from "@/content/elternratgeber/kategorien";

export type Author = {
  name: string;
  /** Kurze Funktionsbeschreibung, z.B. "Co-Founder Kidgonet" */
  role?: string;
  /** Pfad zum Avatar */
  avatar?: string;
  /** Optionale URL der Autoren-Seite */
  url?: string;
};

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
  /** Autor; default ist die Kidgonet Redaktion */
  author?: Author;
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

/** Default-Autor, wenn im Frontmatter keiner gesetzt ist */
export const DEFAULT_AUTHOR: Author = {
  name: "Kidgonet Redaktion",
  role: "Familie & digitale Medien",
  avatar: "/brand/smiley-square.png",
  url: "/ueber-uns",
};
