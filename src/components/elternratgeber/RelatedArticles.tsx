import { ArticleCard } from "./ArticleCard";
import type { ArticleSummary } from "@/lib/elternratgeber/types";

type Props = {
  articles: ArticleSummary[];
  heading?: string;
};

export function RelatedArticles({
  articles,
  heading = "Diese Beiträge könnten dich auch interessieren",
}: Props) {
  if (articles.length === 0) return null;
  return (
    <section className="mx-auto w-full max-w-[1100px] px-5 py-12 sm:px-8 md:py-16">
      <h2 className="mb-6 text-2xl font-extrabold text-text-dark md:text-3xl">
        {heading}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </section>
  );
}
