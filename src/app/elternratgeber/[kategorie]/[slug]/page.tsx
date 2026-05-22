import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/elternratgeber/ArticleBody";
import { ArticleHero } from "@/components/elternratgeber/ArticleHero";
import { NewsletterCta } from "@/components/elternratgeber/NewsletterCta";
import { RelatedArticles } from "@/components/elternratgeber/RelatedArticles";
import { ScrollTracker } from "@/components/elternratgeber/ScrollTracker";
import { ShareBar } from "@/components/elternratgeber/ShareBar";
import {
  elternratgeberKategorien,
  getKategorieBySlug,
  type ElternratgeberKategorieSlug,
} from "@/content/elternratgeber/kategorien";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/elternratgeber/articles";

type Params = { kategorie: string; slug: string };

export function generateStaticParams(): Params[] {
  return getAllArticles().map((a) => ({
    kategorie: a.kategorie,
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { kategorie, slug } = await params;
  const k = getKategorieBySlug(kategorie);
  if (!k) return {};
  const article = getArticleBySlug(
    k.slug as ElternratgeberKategorieSlug,
    slug,
  );
  if (!article) return {};
  const canonical = `/elternratgeber/${article.kategorie}/${article.slug}`;
  return {
    title: article.seo?.title ?? article.title,
    description: article.seo?.description ?? article.teaser,
    alternates: { canonical },
    openGraph: {
      title: article.title,
      description: article.teaser,
      type: "article",
      publishedTime: article.veroeffentlicht,
      modifiedTime: article.aktualisiert,
      images: article.cover ? [{ url: article.cover }] : undefined,
    },
    robots: article.seo?.noindex ? { index: false, follow: false } : undefined,
  };
}

export default async function ArtikelPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { kategorie, slug } = await params;
  const k = getKategorieBySlug(kategorie);
  if (!k) notFound();
  const article = getArticleBySlug(
    k.slug as ElternratgeberKategorieSlug,
    slug,
  );
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const baseUrl = "https://www.kidgonet.de";
  const url = `${baseUrl}/elternratgeber/${article.kategorie}/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.veroeffentlicht,
    dateModified: article.aktualisiert ?? article.veroeffentlicht,
    image: article.cover ? [`${baseUrl}${article.cover}`] : undefined,
    description: article.teaser,
    mainEntityOfPage: url,
    publisher: {
      "@type": "Organization",
      name: "Kidgonet",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/brand/favicon-192.png`,
      },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Elternratgeber",
        item: `${baseUrl}/elternratgeber`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: k.name,
        item: `${baseUrl}/elternratgeber/${k.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <nav className="mx-auto w-full max-w-[760px] px-5 pt-8 text-sm text-text-dark/60 sm:px-8">
        <Link href="/elternratgeber" className="hover:text-brand-yellow">
          Elternratgeber
        </Link>{" "}
        <span aria-hidden>›</span>{" "}
        <Link
          href={`/elternratgeber/${k.slug}`}
          className="hover:text-brand-yellow"
        >
          {k.name}
        </Link>
      </nav>
      <ArticleHero article={article} />
      <ArticleBody body={article.body} />
      <ShareBar url={url} title={article.title} />
      <section className="mx-auto w-full max-w-[760px] px-5 pb-8 sm:px-8">
        <NewsletterCta variant="card" />
      </section>
      <RelatedArticles articles={related} />
      <ScrollTracker slug={article.slug} kategorie={article.kategorie} />
    </>
  );
}
