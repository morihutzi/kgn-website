import type { MetadataRoute } from "next";
import { elternratgeberKategorien } from "@/content/elternratgeber/kategorien";
import { getAllArticles } from "@/lib/elternratgeber/articles";

const BASE = "https://www.kidgonet.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/was-kann-die-app`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/preise`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/elternratgeber`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const kategorieRoutes: MetadataRoute.Sitemap = elternratgeberKategorien.map(
    (k) => ({
      url: `${BASE}/elternratgeber/${k.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }),
  );

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${BASE}/elternratgeber/${a.kategorie}/${a.slug}`,
    lastModified: new Date(a.aktualisiert ?? a.veroeffentlicht),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...kategorieRoutes, ...articleRoutes];
}
