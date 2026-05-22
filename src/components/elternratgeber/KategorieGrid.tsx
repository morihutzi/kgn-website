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
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {elternratgeberKategorien.map((k) => {
        const count = counts.get(k.slug) ?? 0;
        const c = brandFarbeClasses[k.brandFarbe];
        return (
          <Link
            key={k.slug}
            href={`/elternratgeber/${k.slug}`}
            className={`group flex flex-col gap-3 rounded-[20px] border-2 ${c.border} bg-white p-7 transition-transform hover:-translate-y-0.5`}
          >
            <span
              className={`inline-flex w-fit rounded-full border-2 bg-white px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide ${c.border} ${c.text}`}
            >
              {count} {count === 1 ? "Beitrag" : "Beiträge"}
            </span>
            <h3 className="text-2xl font-extrabold leading-tight text-text-dark">
              {k.name}
            </h3>
            <p className="text-sm leading-relaxed text-text-dark">
              {k.beschreibung}
            </p>
            <span
              className={`mt-3 inline-flex items-center gap-1 text-sm font-extrabold ${c.text}`}
            >
              Beiträge ansehen
              <span aria-hidden>→</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
