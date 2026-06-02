import { ArticleCard } from "./ArticleCard";
import type { ArticleSummary } from "@/lib/elternratgeber/types";

type Props = {
  articles: ArticleSummary[];
  featuredFirst?: boolean;
};

export function ArtikelListe({ articles, featuredFirst = false }: Props) {
  if (articles.length === 0) {
    return (
      <p className="text-text-dark/60">
        Hier erscheinen bald Beiträge.
      </p>
    );
  }

  if (featuredFirst && articles.length > 0) {
    const [first, ...rest] = articles;
    return (
      <div className="flex flex-col gap-8">
        <ArticleCard article={first} variant="featured" />
        {rest.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => (
        <ArticleCard key={a.slug} article={a} />
      ))}
    </div>
  );
}
