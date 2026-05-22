import type { Metadata } from "next";
import Link from "next/link";
import { ArtikelListe } from "@/components/elternratgeber/ArtikelListe";
import { KategorieGrid } from "@/components/elternratgeber/KategorieGrid";
import { NewsletterCta } from "@/components/elternratgeber/NewsletterCta";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/Section";
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
      {/* Hero: solides Brand-Yellow Band wie FeatureList */}
      <section className="bg-brand-yellow">
        <Container>
          <div className="py-12 md:py-20">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/85">
              Wissen für Familien
            </p>
            <h1 className="mt-2 text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
              Elternratgeber
            </h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-white md:text-lg">
              Praktische Ratgeber, Hintergründe und Expertinnen-Interviews zu
              Bildschirmzeit, Mediensicherheit, Smartphones und digitalem
              Familienalltag.
            </p>
          </div>
        </Container>
      </section>

      {/* Themen / Kategorien */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeading className="mb-8">Themen</SectionHeading>
          <KategorieGrid />
        </Container>
      </section>

      {/* Neueste Beiträge */}
      <section className="bg-white pb-14 md:pb-20">
        <Container>
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
            <SectionHeading>Neueste Beiträge</SectionHeading>
            <Link
              href="/elternratgeber/feed.xml"
              className="text-sm font-extrabold uppercase tracking-wide text-brand-yellow hover:underline"
            >
              RSS-Feed
            </Link>
          </div>
          <ArtikelListe articles={latest} featuredFirst />
        </Container>
      </section>

      {/* Newsletter */}
      <NewsletterCta />
    </>
  );
}
