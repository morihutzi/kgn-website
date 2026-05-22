import type { Metadata } from "next";
import Link from "next/link";
import { KategorieGrid } from "@/components/elternratgeber/KategorieGrid";
import { ArtikelListe } from "@/components/elternratgeber/ArtikelListe";
import { NewsletterCta } from "@/components/elternratgeber/NewsletterCta";
import {
  getAllArticles,
  toSummary,
} from "@/lib/elternratgeber/articles";

export const metadata: Metadata = {
  title: "Elternratgeber",
  description:
    "Ratgeber, Interviews und Tipps rund um Bildschirmzeit, Mediensicherheit, Smartphones, Apps und digitale Erziehung in der Familie.",
  alternates: { canonical: "/elternratgeber" },
};

export default function ElternratgeberHome() {
  const all = getAllArticles();
  const latest = all.slice(0, 7).map(toSummary);

  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-surface-warm">
        <div className="mx-auto w-full max-w-[1100px] px-5 py-12 sm:px-8 md:py-20">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
            Wissen für Familien
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight text-text-dark md:text-5xl md:leading-[1.1]">
            Elternratgeber
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-dark/80 md:text-lg">
            Praktische Ratgeber, Hintergründe und Expertinnen-Interviews zu
            Bildschirmzeit, Mediensicherheit, Smartphones und digitalem
            Familienalltag.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-5 py-12 sm:px-8 md:py-16">
        <h2 className="mb-6 text-2xl font-extrabold text-text-dark md:text-3xl">
          Themen
        </h2>
        <KategorieGrid />
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-5 pb-12 sm:px-8 md:pb-16">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-2xl font-extrabold text-text-dark md:text-3xl">
            Neueste Beiträge
          </h2>
          <Link
            href="/elternratgeber/feed.xml"
            className="text-sm font-semibold text-brand-yellow hover:underline"
          >
            RSS-Feed
          </Link>
        </div>
        <ArtikelListe articles={latest} featuredFirst />
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-5 pb-16 sm:px-8">
        <NewsletterCta />
      </section>
    </>
  );
}
