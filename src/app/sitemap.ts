import { execSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { elternratgeberKategorien } from "@/content/elternratgeber/kategorien";
import { getAllArticles } from "@/lib/elternratgeber/articles";

// Für `output: "export"`: statisch zur Build-Zeit erzeugen.
export const dynamic = "force-static";

const BASE = "https://www.kidgonet.de";

const fallback = new Date();

function lastModified(relPath: string): Date {
  const abs = join(/* turbopackIgnore: true */ process.cwd(), relPath);
  if (!existsSync(abs)) return fallback;
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${relPath}"`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (iso) return new Date(iso);
  } catch {
    /* git nicht verfügbar (z.B. Docker-Build ohne .git) */
  }
  return statSync(abs).mtime;
}

type StaticEntry = {
  path: string;
  file: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

const staticEntries: StaticEntry[] = [
  { path: "/", file: "src/app/page.tsx", changeFrequency: "weekly", priority: 1 },
  { path: "/kindersicherung-handy", file: "src/app/kindersicherung-handy/page.tsx", changeFrequency: "monthly", priority: 0.95 },
  { path: "/kindersicherung-iphone", file: "src/app/kindersicherung-iphone/page.tsx", changeFrequency: "monthly", priority: 0.9 },
  { path: "/kindersicherung-android", file: "src/app/kindersicherung-android/page.tsx", changeFrequency: "monthly", priority: 0.9 },
  { path: "/bildschirmzeit-app", file: "src/app/bildschirmzeit-app/page.tsx", changeFrequency: "monthly", priority: 0.9 },
  { path: "/kinderschutz-app-deutschland", file: "src/app/(landingpages)/kinderschutz-app-deutschland/page.tsx", changeFrequency: "monthly", priority: 0.85 },
  { path: "/was-kann-die-app", file: "src/app/was-kann-die-app/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  { path: "/preise", file: "src/app/preise/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hilfe", file: "src/app/hilfe/page.tsx", changeFrequency: "monthly", priority: 0.7 },
  { path: "/hilfe/installation-ios", file: "src/app/hilfe/installation-ios/page.tsx", changeFrequency: "monthly", priority: 0.7 },
  { path: "/hilfe/installation-android", file: "src/app/hilfe/installation-android/page.tsx", changeFrequency: "monthly", priority: 0.7 },
  { path: "/elternratgeber", file: "src/app/elternratgeber/page.tsx", changeFrequency: "weekly", priority: 0.9 },
  { path: "/bildschirmzeit", file: "src/app/bildschirmzeit/page.tsx", changeFrequency: "monthly", priority: 0.85 },
  { path: "/webfilter", file: "src/app/webfilter/page.tsx", changeFrequency: "monthly", priority: 0.85 },
  { path: "/apps-freigeben", file: "src/app/apps-freigeben/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  { path: "/standort", file: "src/app/standort/page.tsx", changeFrequency: "monthly", priority: 0.75 },
  { path: "/sperrmodus", file: "src/app/sperrmodus/page.tsx", changeFrequency: "monthly", priority: 0.75 },
  { path: "/ueber-uns", file: "src/app/ueber-uns/page.tsx", changeFrequency: "monthly", priority: 0.6 },
  { path: "/jobs", file: "src/app/jobs/page.tsx", changeFrequency: "monthly", priority: 0.5 },
  { path: "/presse", file: "src/app/presse/page.tsx", changeFrequency: "monthly", priority: 0.5 },
  { path: "/agb", file: "src/app/agb/page.tsx", changeFrequency: "yearly", priority: 0.3 },
  { path: "/impressum", file: "src/app/impressum/page.tsx", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", file: "src/app/datenschutz/page.tsx", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz-ios-app", file: "src/app/datenschutz-ios-app/page.tsx", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz-android-app", file: "src/app/datenschutz-android-app/page.tsx", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = staticEntries.map((e) => ({
    url: `${BASE}${e.path}`,
    lastModified: lastModified(e.file),
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));

  const kategorieRoutes: MetadataRoute.Sitemap = elternratgeberKategorien.map(
    (k) => ({
      url: `${BASE}/elternratgeber/${k.slug}`,
      lastModified: lastModified("src/content/elternratgeber/kategorien.ts"),
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
