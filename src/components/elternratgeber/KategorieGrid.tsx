import Link from "next/link";
import {
  brandFarbeClasses,
  elternratgeberKategorien,
} from "@/content/elternratgeber/kategorien";
import { getAllArticles } from "@/lib/elternratgeber/articles";

export function KategorieGrid() {
  const articles = getAllArticles();
  const counts = new Map<string, number>();
  for (const a of articles) {
    counts.set(a.kategorie, (counts.get(a.kategorie) ?? 0) + 1);
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {elternratgeberKategorien.map((k) => {
        const count = counts.get(k.slug) ?? 0;
        const c = brandFarbeClasses[k.brandFarbe];
        return (
          <Link
            key={k.slug}
            href={`/elternratgeber/${k.slug}`}
            className={`group relative flex flex-col gap-4 overflow-hidden rounded-[20px] ${c.bg} p-7 text-white transition-transform hover:-translate-y-0.5`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-text-dark">
                {count} {count === 1 ? "Beitrag" : "Beiträge"}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold leading-tight text-white">
              {k.name}
            </h3>
            <p className="text-sm leading-relaxed text-white/95">
              {k.beschreibung}
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-sm font-extrabold text-white">
              Beiträge ansehen
              <span aria-hidden>→</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
