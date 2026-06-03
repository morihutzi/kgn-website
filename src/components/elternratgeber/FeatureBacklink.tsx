import Link from "next/link";
import type { FeatureMeta } from "@/lib/elternratgeber/feature-mapping";

/**
 * Dezenter Verweis vom Artikel zur passenden Kidgonet-Funktion (interne
 * Verlinkung / Topical Authority). Rendert nichts, wenn keine Funktion passt.
 */
export function FeatureBacklink({ features }: { features: FeatureMeta[] }) {
  if (features.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-[760px] px-5 py-8 sm:px-8">
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
          Passende Kidgonet-Funktion
        </p>
        <ul className="mt-4 grid gap-3">
          {features.map((f) => (
            <li key={f.slug}>
              <Link
                href={f.href}
                className="group flex items-start gap-4 rounded-xl border border-border bg-white p-4 transition hover:border-brand-yellow hover:shadow-sm"
              >
                <div className="flex-1">
                  <p className="font-extrabold text-text-dark group-hover:text-brand-yellow">
                    {f.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-text-dark/70">
                    {f.blurb}
                  </p>
                </div>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="mt-1 size-5 shrink-0 stroke-brand-yellow transition-transform group-hover:translate-x-1"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
