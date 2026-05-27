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
    { url: `${BASE}/hilfe`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/hilfe/installation-ios`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/hilfe/installation-android`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/elternratgeber`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/bildschirmzeit`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/webfilter`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/apps-freigeben`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/standort`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/sperrmodus`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/ueber-uns`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/jobs`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/presse`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/datenschutz-ios-app`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/datenschutz-android-app`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
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
