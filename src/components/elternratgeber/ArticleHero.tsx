import ExportedImage from "next-image-export-optimizer";
import { AuthorByline } from "./AuthorByline";
import { ArticleCoverFallback } from "./ArticleCoverFallback";
import { KategorieBadge } from "./KategorieBadge";
import { formatDate, formatLesezeit } from "@/lib/elternratgeber/format";
import { DEFAULT_AUTHOR, type Article } from "@/lib/elternratgeber/types";

type Props = { article: Article };

export function ArticleHero({ article }: Props) {
  const author = article.author ?? DEFAULT_AUTHOR;
  return (
    <header className="mx-auto w-full max-w-[760px] px-5 pt-8 pb-6 sm:px-8 md:pt-12 md:pb-8">
      <div className="flex flex-col items-start gap-4">
        <KategorieBadge slug={article.kategorie} size="md" asLink />
        <h1 className="text-3xl font-extrabold leading-[1.15] text-brand-yellow md:text-[40px] md:leading-[1.1]">
          {article.title}
        </h1>
        {article.teaser && (
          <p className="text-lg leading-relaxed text-text-dark md:text-xl">
            {article.teaser}
          </p>
        )}
        <AuthorByline author={author} className="mt-1" />
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-text-dark/70">
          <time dateTime={article.veroeffentlicht}>
            Veröffentlicht {formatDate(article.veroeffentlicht)}
          </time>
          {article.lesezeit ? (
            <>
              <span aria-hidden>·</span>
              <span>{formatLesezeit(article.lesezeit)}</span>
            </>
          ) : null}
          {article.aktualisiert &&
            article.aktualisiert !== article.veroeffentlicht && (
              <>
                <span aria-hidden>·</span>
                <span>Aktualisiert am {formatDate(article.aktualisiert)}</span>
              </>
            )}
        </div>
      </div>
      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-text-dark">
        {article.cover ? (
          <ExportedImage
            src={article.cover}
            alt={article.coverAlt ?? article.title}
            fill
            sizes="(min-width: 768px) 760px, 100vw"
            priority
            className="object-cover"
          />
        ) : (
          <ArticleCoverFallback kategorie={article.kategorie} title={article.title} />
        )}
      </div>
    </header>
  );
}
