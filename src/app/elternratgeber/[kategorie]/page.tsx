import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtikelListe } from "@/components/elternratgeber/ArtikelListe";
import { KategorieHero } from "@/components/elternratgeber/KategorieHero";
import { NewsletterCta } from "@/components/elternratgeber/NewsletterCta";
import { Container } from "@/components/layout/Container";
import {
  elternratgeberKategorien,
  getKategorieBySlug,
  type ElternratgeberKategorieSlug,
} from "@/content/elternratgeber/kategorien";
import {
  getArticlesByKategorie,
  toSummary,
} from "@/lib/elternratgeber/articles";

type Params = { kategorie: string };

export function generateStaticParams(): Params[] {
  return elternratgeberKategorien.map((k) => ({ kategorie: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { kategorie: slug } = await params;
  const kategorie = getKategorieBySlug(slug);
  if (!kategorie) return {};
  return {
    title: `${kategorie.name} – Elternratgeber`,
    description: kategorie.beschreibung,
    alternates: { canonical: `/elternratgeber/${kategorie.slug}` },
  };
}

export default async function KategoriePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { kategorie: slug } = await params;
  const kategorie = getKategorieBySlug(slug);
  if (!kategorie) notFound();
  const articles = getArticlesByKategorie(
    kategorie.slug as ElternratgeberKategorieSlug,
  ).map(toSummary);

  return (
    <>
      <KategorieHero kategorie={kategorie} count={articles.length} />
      <section className="bg-white py-12 md:py-16">
        <Container>
          <nav className="mb-8 text-sm font-extrabold uppercase tracking-wide">
            <Link
              href="/elternratgeber"
              className="text-text-dark hover:text-brand-yellow"
            >
              ← Alle Themen
            </Link>
          </nav>
          <ArtikelListe articles={articles} />
        </Container>
      </section>
      <NewsletterCta />
    </>
  );
}
