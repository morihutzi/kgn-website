import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { FeatureList } from "@/components/sections/FeatureList";
import { Steps } from "@/components/sections/Steps";
import { ManuelNeuer } from "@/components/sections/ManuelNeuer";
import { Testimonials } from "@/components/sections/Testimonials";
import { Comparison } from "@/components/sections/Comparison";
import { FAQ } from "@/components/sections/FAQ";
import { FAQItem } from "@/components/sections/FAQItem";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  JsonLd,
  breadcrumbSchema,
  softwareApplicationSchema,
  faqPageSchema,
} from "@/components/seo/JsonLd";
import { RelatedArticles } from "@/components/elternratgeber/RelatedArticles";
import {
  getRelatedArticlesForFeature,
  getArticleSummariesBySlugs,
  type FeatureSlug,
} from "@/lib/elternratgeber/feature-mapping";
import { faq } from "@/content/home";

export type LandingContent = {
  /** Slug der Page, fuer Breadcrumb-Schema (z.B. "kindersicherung-handy") */
  slug: string;
  /** Anzeigename in der Breadcrumb (z.B. "Kindersicherung Handy") */
  breadcrumbName: string;
  /** Hero-H1 mit Ziel-Keyword (wichtigster On-Page-SEO-Hebel) */
  heroHeadline: React.ReactNode;
  /** Hero-Subline */
  heroSubheadline: React.ReactNode;
  /** Kleiner Eyebrow ueber dem SEO-Block, z.B. "Kindersicherung iPhone" */
  eyebrow: string;
  /** Hauptueberschrift im SEO-Block */
  headline: string;
  /** 1–3 Absaetze fuer den SEO-Content-Block */
  paragraphs: React.ReactNode[];
  /** Optionale H2-Abschnitte unter den Intro-Absaetzen (mehr Texttiefe + Struktur). */
  sections?: Array<{ heading: string; body: React.ReactNode[] }>;
  /** Eyebrow ueber dem FAQ-Block */
  faqEyebrow: string;
  /** Ueberschrift ueber dem FAQ-Block */
  faqHeadline: string;
  /** Keyword-spezifische FAQ-Eintraege */
  faqs: Array<{ question: string; answer: string }>;
  /** Optional: passende Ratgeber-Artikel zu einer Funktion einblenden (interne Verzahnung). */
  relatedFeature?: FeatureSlug;
  /**
   * Optional: explizite Artikel-Slugs fuer den "Passende Tipps"-Block.
   * Hat Vorrang vor `relatedFeature`. Fuer Keyword-Seiten ohne eigene Funktionsseite,
   * die gezielt auf thematisch passende Artikel verlinken sollen.
   */
  relatedArticleSlugs?: string[];
};

export function KeywordLandingPage({ content }: { content: LandingContent }) {
  return (
    <>
      <JsonLd data={softwareApplicationSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Start", url: "https://www.kidgonet.de" },
          {
            name: content.breadcrumbName,
            url: `https://www.kidgonet.de/${content.slug}`,
          },
        ])}
      />
      <JsonLd
        data={faqPageSchema([
          ...content.faqs,
          ...faq.items.map((i) => ({ question: i.question, answer: i.answer })),
        ])}
      />

      <Hero
        headline={content.heroHeadline}
        subheadline={content.heroSubheadline}
      />
      <FeatureList />
      <SeoBlock
        eyebrow={content.eyebrow}
        headline={content.headline}
        paragraphs={content.paragraphs}
        sections={content.sections}
      />
      <Steps />
      <ManuelNeuer />
      <Testimonials />
      <Comparison />
      <KeywordFaqBlock
        eyebrow={content.faqEyebrow}
        headline={content.faqHeadline}
        faqs={content.faqs}
      />
      {content.relatedArticleSlugs ? (
        <RelatedArticles
          articles={getArticleSummariesBySlugs(content.relatedArticleSlugs)}
          heading="Passende Tipps aus dem Elternratgeber"
        />
      ) : content.relatedFeature ? (
        <RelatedArticles
          articles={getRelatedArticlesForFeature(content.relatedFeature)}
          heading="Passende Tipps aus dem Elternratgeber"
        />
      ) : null}
      <FAQ />
      <FinalCTA />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────

function SeoBlock({
  eyebrow,
  headline,
  paragraphs,
  sections,
}: {
  eyebrow: string;
  headline: string;
  paragraphs: React.ReactNode[];
  sections?: Array<{ heading: string; body: React.ReactNode[] }>;
}) {
  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-text-dark md:text-4xl">
            {headline}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-dark/80 md:text-lg">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {sections?.map((s, sIdx) => (
            <div key={sIdx} className="mt-10">
              <h3 className="text-xl font-extrabold leading-tight text-text-dark md:text-2xl">
                {s.heading}
              </h3>
              <div className="mt-3 space-y-4 text-base leading-relaxed text-text-dark/80 md:text-lg">
                {s.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function KeywordFaqBlock({
  eyebrow,
  headline,
  faqs,
}: {
  eyebrow: string;
  headline: string;
  faqs: Array<{ question: string; answer: string }>;
}) {
  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-text-dark md:text-4xl">
              {headline}
            </h2>
          </div>

          <ul className="mt-10 space-y-3">
            {faqs.map((f) => (
              <FAQItem key={f.question} question={f.question}>
                {f.answer}
              </FAQItem>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
