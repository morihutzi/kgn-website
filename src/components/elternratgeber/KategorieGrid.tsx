import Link from "next/link";
import { elternratgeberKategorien } from "@/content/elternratgeber/kategorien";
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
        return (
          <Link
            key={k.slug}
            href={`/elternratgeber/${k.slug}`}
            className="group relative flex flex-col gap-3 overflow-hidden rounded-card border border-[var(--color-border)] bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div
              className="absolute inset-x-0 top-0 h-1.5"
              style={{ backgroundColor: k.farbe }}
            />
            <div className="flex items-baseline justify-between gap-3 pt-2">
              <h3 className="text-xl font-extrabold text-text-dark group-hover:text-brand-yellow transition-colors">
                {k.name}
              </h3>
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-bold"
                style={{
                  backgroundColor: `${k.farbe}15`,
                  color: k.farbe,
                }}
              >
                {count}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-text-dark/75">
              {k.beschreibung}
            </p>
            <span className="mt-2 text-sm font-bold text-brand-yellow">
              Beiträge ansehen →
            </span>
          </Link>
        );
      })}
    </div>
  );
}
