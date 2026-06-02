import { ArticleCard } from "./ArticleCard";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/Section";
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
    <section className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading size="default" align="left" className="mb-8">
          {heading}
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </Container>
    </section>
  );
}
