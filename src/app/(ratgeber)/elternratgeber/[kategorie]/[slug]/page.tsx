import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/elternratgeber/ArticleBody";
import { ArticleHero } from "@/components/elternratgeber/ArticleHero";
import { NewsletterCta } from "@/components/elternratgeber/NewsletterCta";
import { NewsletterFloat } from "@/components/newsletter/NewsletterFloat";
import { RelatedArticles } from "@/components/elternratgeber/RelatedArticles";
import { FeatureBacklink } from "@/components/elternratgeber/FeatureBacklink";
import { ScrollTracker } from "@/components/elternratgeber/ScrollTracker";
import { ShareBar } from "@/components/elternratgeber/ShareBar";
import { getFeaturesForArticleSlug } from "@/lib/elternratgeber/feature-mapping";
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
import { DEFAULT_AUTHOR } from "@/lib/elternratgeber/types";

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
  const features = getFeaturesForArticleSlug(article.slug);
  const baseUrl = "https://www.kidgonet.de";
  const url = `${baseUrl}/elternratgeber/${article.kategorie}/${article.slug}`;

  const author = article.author ?? DEFAULT_AUTHOR;
  const isDefaultAuthor = !article.author;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    datePublished: article.veroeffentlicht,
    dateModified: article.aktualisiert ?? article.veroeffentlicht,
    inLanguage: "de-DE",
    image: article.cover ? [`${baseUrl}${article.cover}`] : undefined,
    description: article.teaser,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: {
      "@type": "Blog",
      name: "Kidgonet Elternratgeber",
      url: `${baseUrl}/elternratgeber`,
    },
    author: isDefaultAuthor
      ? {
          "@type": "Organization",
          name: author.name,
          url: `${baseUrl}/ueber-uns`,
        }
      : {
          "@type": "Person",
          name: author.name,
          ...(author.url
            ? {
                url: author.url.startsWith("/")
                  ? `${baseUrl}${author.url}`
                  : author.url,
              }
            : {}),
          ...(author.role ? { jobTitle: author.role } : {}),
        },
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
      <nav className="mx-auto w-full max-w-[760px] px-5 pt-8 text-xs font-extrabold uppercase tracking-wide text-text-dark sm:px-8">
        <Link href="/elternratgeber" className="hover:text-brand-yellow">
          Elternratgeber
        </Link>{" "}
        <span aria-hidden className="text-brand-yellow">›</span>{" "}
        <Link
          href={`/elternratgeber/${k.slug}`}
          className="hover:text-brand-yellow"
        >
          {k.name}
        </Link>
      </nav>
      <ArticleHero article={article} />
      <ArticleBody body={article.body} slug={article.slug} />
      <FeatureBacklink features={features} />
      <ShareBar url={url} title={article.title} />
      {/* Inline-CTA nur auf Mobile, floating Widget übernimmt Desktop */}
      <div className="md:hidden">
        <NewsletterCta />
      </div>
      <NewsletterFloat />
      <RelatedArticles articles={related} />
      <ScrollTracker slug={article.slug} kategorie={article.kategorie} />
    </>
  );
}
