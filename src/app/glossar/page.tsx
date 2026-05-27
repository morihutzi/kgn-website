import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";
import {
  glossarTermsSorted,
  glossarLetters,
} from "@/content/glossar";

export const metadata: Metadata = {
  title: "Glossar: Digitaler Kinderschutz – Begriffe erklärt",
  description:
    "Alle Begriffe rund um Kinderschutz, Bildschirmzeit und digitale Sicherheit einfach erklärt: DNS-Filter, Parental Control, Cybermobbing und mehr.",
  alternates: { canonical: "/glossar" },
  openGraph: {
    title: "Glossar: Digitaler Kinderschutz – Begriffe erklärt",
    description:
      "Von Bildschirmzeit bis Webfilter: Alle Fachbegriffe rund um Kinderschutz und digitale Sicherheit verständlich erklärt.",
    url: "https://www.kidgonet.de/glossar",
  },
};

const BASE_URL = "https://www.kidgonet.de";

const definedTermListSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${BASE_URL}/glossar#termset`,
  name: "Glossar Digitaler Kinderschutz",
  description:
    "Fachbegriffe rund um digitalen Kinderschutz, Bildschirmzeit und Online-Sicherheit für Kinder, erklärt von Kidgonet.",
  inLanguage: "de-DE",
  publisher: { "@id": `${BASE_URL}/#organization` },
  hasDefinedTerm: glossarTermsSorted.map((t) => ({
    "@type": "DefinedTerm",
    "@id": `${BASE_URL}/glossar#${t.slug}`,
    name: t.term,
    description: t.shortDefinition,
    inDefinedTermSet: `${BASE_URL}/glossar#termset`,
    url: `${BASE_URL}/glossar#${t.slug}`,
  })),
};

export default function GlossarPage() {
  return (
    <>
      <JsonLd data={definedTermListSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Start", url: BASE_URL },
          { name: "Glossar", url: `${BASE_URL}/glossar` },
        ])}
      />

      {/* Hero */}
      <section className="bg-brand-yellow">
        <Container>
          <div className="py-16 md:py-24">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/80">
              Wissen
            </p>
            <h1 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Glossar: Digitaler Kinderschutz
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/95 md:text-lg">
              Alle Begriffe rund um Kinderschutz, Bildschirmzeit und digitale
              Sicherheit — klar und verständlich erklärt.
            </p>
          </div>
        </Container>
      </section>

      {/* Buchstaben-Navigation */}
      <div className="sticky top-0 z-10 border-b border-text-dark/10 bg-white/95 backdrop-blur-sm">
        <Container>
          <nav
            aria-label="Zum Buchstaben springen"
            className="flex flex-wrap gap-1 py-3"
          >
            {glossarLetters.map((letter) => (
              <a
                key={letter}
                href={`#${letter}`}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-extrabold text-text-dark transition hover:bg-brand-yellow hover:text-white"
              >
                {letter}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* Begriffe */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-16">
            {glossarLetters.map((letter) => {
              const terms = glossarTermsSorted.filter(
                (t) => t.term[0].toUpperCase() === letter,
              );
              return (
                <div key={letter}>
                  {/* Buchstaben-Anker */}
                  <h2
                    id={letter}
                    className="mb-6 border-b-2 border-brand-yellow pb-2 text-2xl font-extrabold text-text-dark"
                  >
                    {letter}
                  </h2>

                  <dl className="space-y-10">
                    {terms.map((t) => (
                      <div key={t.slug} id={t.slug} className="scroll-mt-20">
                        <dt className="text-xl font-extrabold text-text-dark">
                          {t.term}
                        </dt>
                        <dd className="mt-2 space-y-2">
                          <p className="text-base font-semibold leading-relaxed text-text-dark/90">
                            {t.shortDefinition}
                          </p>
                          <p className="text-base leading-relaxed text-text-dark/70">
                            {t.description}
                          </p>
                          {t.learnMoreHref && (
                            <Link
                              href={t.learnMoreHref}
                              className="inline-flex items-center gap-1 text-sm font-extrabold text-brand-yellow hover:underline"
                            >
                              {t.learnMoreLabel ?? "Mehr erfahren"}
                              <span aria-hidden>→</span>
                            </Link>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
