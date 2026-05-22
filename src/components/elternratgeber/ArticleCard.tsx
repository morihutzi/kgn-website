import Image from "next/image";
import Link from "next/link";
import { KategorieBadge } from "./KategorieBadge";
import { formatDate, formatLesezeit } from "@/lib/elternratgeber/format";
import type { ArticleSummary } from "@/lib/elternratgeber/types";

type Props = {
  article: ArticleSummary;
  variant?: "default" | "compact" | "featured";
};

export function ArticleCard({ article, variant = "default" }: Props) {
  const href = `/elternratgeber/${article.kategorie}/${article.slug}`;
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-card border border-[var(--color-border)] bg-white shadow-sm transition-shadow hover:shadow-md ${
        isFeatured ? "md:flex-row" : ""
      }`}
    >
      {article.cover && (
        <Link
          href={href}
          className={`relative block ${
            isFeatured ? "md:w-1/2 md:shrink-0" : ""
          } aspect-[16/10] overflow-hidden bg-gray-100`}
        >
          <Image
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
        </Link>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <KategorieBadge slug={article.kategorie} />
        <h3
          className={`font-extrabold leading-tight text-text-dark ${
            isFeatured ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          <Link
            href={href}
            className="hover:text-brand-yellow transition-colors"
          >
            {article.title}
          </Link>
        </h3>
        {article.teaser && (
          <p className="line-clamp-3 text-sm leading-relaxed text-text-dark/75">
            {article.teaser}
          </p>
        )}
        <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-text-dark/60">
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
