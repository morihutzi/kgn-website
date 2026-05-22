import { cache } from "react";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  elternratgeberKategorien,
  type ElternratgeberKategorieSlug,
} from "@/content/elternratgeber/kategorien";
import type { Article, ArticleSummary } from "./types";

const CONTENT_ROOT = path.join(
  process.cwd(),
  "src/content/elternratgeber/artikel",
);

function readArticleFile(absPath: string): Article {
  const raw = fs.readFileSync(absPath, "utf-8");
  const parsed = matter(raw);
  const data = parsed.data as Record<string, unknown>;
  const kategorie = String(data.kategorie ?? "") as ElternratgeberKategorieSlug;
  return {
    title: String(data.title ?? ""),
    slug: String(data.slug ?? path.basename(absPath, ".mdx")),
    kategorie,
    veroeffentlicht: String(data.veroeffentlicht ?? ""),
    aktualisiert: data.aktualisiert ? String(data.aktualisiert) : undefined,
    lesezeit:
      typeof data.lesezeit === "number" ? data.lesezeit : undefined,
    cover: data.cover ? String(data.cover) : undefined,
    coverAlt: data.coverAlt ? String(data.coverAlt) : undefined,
    teaser: data.teaser ? String(data.teaser) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    wpId: typeof data.wpId === "number" ? data.wpId : undefined,
    originalUrl: data.originalUrl ? String(data.originalUrl) : undefined,
    empfehlung: (data.empfehlung as Article["empfehlung"]) ?? undefined,
    verwandt: Array.isArray(data.verwandt)
      ? data.verwandt.map(String)
      : undefined,
    seo: (data.seo as Article["seo"]) ?? undefined,
    body: parsed.content,
  };
}

export const getAllArticles = cache((): Article[] => {
  const articles: Article[] = [];
  for (const kategorie of elternratgeberKategorien) {
    const dir = path.join(CONTENT_ROOT, kategorie.slug);
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir)) {
      if (!entry.endsWith(".mdx")) continue;
      articles.push(readArticleFile(path.join(dir, entry)));
    }
  }
  articles.sort((a, b) => b.veroeffentlicht.localeCompare(a.veroeffentlicht));
  return articles;
});

export const getArticlesByKategorie = cache(
  (slug: ElternratgeberKategorieSlug): Article[] =>
    getAllArticles().filter((a) => a.kategorie === slug),
);

export const getArticleBySlug = cache(
  (
    kategorieSlug: ElternratgeberKategorieSlug,
    artikelSlug: string,
  ): Article | undefined =>
    getAllArticles().find(
      (a) => a.kategorie === kategorieSlug && a.slug === artikelSlug,
    ),
);

export function toSummary(article: Article): ArticleSummary {
  const { ...rest } = article;
  // Drop body and seo
  const summary: ArticleSummary = {
    title: rest.title,
    slug: rest.slug,
    kategorie: rest.kategorie,
    veroeffentlicht: rest.veroeffentlicht,
    aktualisiert: rest.aktualisiert,
    lesezeit: rest.lesezeit,
    cover: rest.cover,
    coverAlt: rest.coverAlt,
    teaser: rest.teaser,
    tags: rest.tags,
    wpId: rest.wpId,
    originalUrl: rest.originalUrl,
    empfehlung: rest.empfehlung,
    verwandt: rest.verwandt,
  };
  return summary;
}

export function getRelatedArticles(
  article: Article,
  limit = 3,
): ArticleSummary[] {
  if (article.verwandt && article.verwandt.length > 0) {
    const all = getAllArticles();
    return article.verwandt
      .map((slug) => all.find((a) => a.slug === slug))
      .filter((a): a is Article => Boolean(a))
      .slice(0, limit)
      .map(toSummary);
  }
  const sameKat = getArticlesByKategorie(article.kategorie)
    .filter((a) => a.slug !== article.slug)
    .slice(0, limit);
  return sameKat.map(toSummary);
}

export function getLatestArticles(limit = 6): ArticleSummary[] {
  return getAllArticles().slice(0, limit).map(toSummary);
}

export function getFeaturedArticles(): ArticleSummary[] {
  return getAllArticles()
    .filter((a) => a.empfehlung?.featured)
    .map(toSummary);
}
