import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { KategorieBadge } from "./KategorieBadge";
import { ArticleCoverFallback } from "./ArticleCoverFallback";
import { formatDate, formatLesezeit } from "@/lib/elternratgeber/format";
import type { ArticleSummary } from "@/lib/elternratgeber/types";

type Props = {
  article: ArticleSummary;
  variant?: "default" | "featured";
};

export function ArticleCard({ article, variant = "default" }: Props) {
  const href = `/elternratgeber/${article.kategorie}/${article.slug}`;
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_4px_18px_rgba(74,74,73,0.08)] transition-shadow hover:shadow-[0_8px_28px_rgba(74,74,73,0.12)] ${
        isFeatured ? "md:flex-row" : ""
      }`}
    >
      <Link
        href={href}
        className={`relative block overflow-hidden bg-text-dark ${
          isFeatured ? "md:w-1/2 md:shrink-0 aspect-[4/3]" : "aspect-[16/10]"
        }`}
      >
        {article.cover ? (
          <ExportedImage
            src={article.cover}
            alt={article.coverAlt ?? article.title}
            fill
            sizes={
              isFeatured
                ? "(min-width: 768px) 50vw, 100vw"
                : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <ArticleCoverFallback kategorie={article.kategorie} title={article.title} />
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <KategorieBadge slug={article.kategorie} />
        <h3
          className={`font-extrabold leading-tight text-text-dark ${
            isFeatured ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          <Link
            href={href}
            className="transition-colors hover:text-brand-yellow"
          >
            {article.title}
          </Link>
        </h3>
        {article.teaser && (
          <p
            className={`text-sm leading-relaxed text-text-dark ${
              isFeatured ? "line-clamp-4 md:text-base" : "line-clamp-3"
            }`}
          >
            {article.teaser}
          </p>
        )}
        <div className="mt-auto flex items-center gap-3 pt-2 text-xs font-semibold text-text-dark">
          <time dateTime={article.veroeffentlicht}>
            {formatDate(article.veroeffentlicht)}
          </time>
          {article.lesezeit ? (
            <>
              <span aria-hidden>·</span>
              <span>{formatLesezeit(article.lesezeit)}</span>
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
}
