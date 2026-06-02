import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CheckBadge } from "@/components/ui/CheckBadge";
import { FAQItem } from "@/components/sections/FAQItem";
import { InternetfilterMockupScaled } from "@/components/mockups/InternetfilterMockupScaled";
import { JsonLd, faqPageSchema, breadcrumbSchema, softwareApplicationSchema } from "@/components/seo/JsonLd";
import { siteConfig, trialCopy } from "@/content/site";
import { RelatedArticles } from "@/components/elternratgeber/RelatedArticles";
import { getRelatedArticlesForFeature } from "@/lib/elternratgeber/feature-mapping";

export const metadata: Metadata = {
  title: "Internetfilter für Kinder – Webfilter App iOS & Android",
  description:
    "Kidgonet sperrt automatisch ungeeignete Webseiten auf dem Kinderhandy. DNS-basierter Webfilter, browserunabhängig, drei Altersgruppen. Für iOS und Android.",
  alternates: { canonical: "/webfilter" },
  openGraph: {
    title: "Internetfilter für Kinder – Kidgonet Webfilter App",
    description:
      "Altersgerechter Webfilter für Kinder: Pornografie, Gewalt und gefährliche Inhalte werden automatisch gesperrt – browserunabhängig auf iOS und Android.",
    url: "https://www.kidgonet.de/webfilter",
  },
};

const faqs = [
  {
    question: "Funktioniert der Webfilter auch in Apps, nicht nur im Browser?",
    answer:
      "Ja. Kidgonet nutzt einen DNS-basierten Filter, der systemweit wirkt – unabhängig davon, ob dein Kind den Safari-Browser, Chrome oder eine App nutzt.",
  },
  {
    question: "Kann mein Kind den Filter deaktivieren?",
    answer:
      "Nein. Der Filter läuft als systemweiter VPN-Dienst auf dem Gerät und kann nur mit dem Eltern-PIN deaktiviert werden.",
  },
  {
    question: "Wird der Webfilter auch aktualisiert, wenn neue Seiten auftauchen?",
    answer:
      "Ja. Kidgonet aktualisiert die Filterlisten automatisch und kontinuierlich, ohne dass du etwas tun musst.",
  },
];

const ageGroups = [
  {
    label: "0 bis 8 Jahre",
    intensity: "Streng",
    bars: 3,
    body: "Nahezu alle Inhalte außer Kinderthemen gesperrt. Sicher für die ersten Schritte im Internet.",
  },
  {
    label: "9 bis 12 Jahre",
    intensity: "Moderat",
    bars: 2,
    body: "Schädliche und jugendgefährdende Inhalte gesperrt, altersgerechte Bildungs- und Unterhaltungsseiten frei.",
  },
  {
    label: "13 bis 16 Jahre",
    intensity: "Grundlegend",
    bars: 1,
    body: "Klarer Schutz vor Pornografie und Gewalt, mehr Eigenverantwortung für Teenager.",
  },
];

export default function WebfilterPage() {
  const related = getRelatedArticlesForFeature("webfilter");
  return (
    <>
      <JsonLd data={softwareApplicationSchema} />
      <JsonLd data={faqPageSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", url: "https://www.kidgonet.de" },
          { name: "Was kann die App?", url: "https://www.kidgonet.de/was-kann-die-app" },
          { name: "Internetfilter für Kinder", url: "https://www.kidgonet.de/webfilter" },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-yellow/15 via-white to-white py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
                Webfilter
              </p>
              <h1 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-text-dark md:text-5xl">
                Internetfilter für Kinder – automatisch, browserunabhängig
              </h1>
              <p className="mt-4 text-lg text-text-dark/70">
                Kidgonet sperrt gefährliche Webseiten und Inhalte auf dem Kinderhandy – ohne dass du jede Seite manuell pflegen musst. Der Filter passt sich dem Alter deines Kindes an.
              </p>
              <ul className="mt-6 grid gap-2">
                {[
                  "Browserunabhängig: wirkt in allen Apps und Browsern",
                  "DNS-basiert: kein Traffic wird durch externe Server geleitet",
                  "Drei Altersgruppen: 0–8, 9–12, 13–16 Jahre",
                  "Automatische Filter-Updates ohne manuellen Aufwand",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <CheckBadge />
                    <span className="text-sm leading-snug text-text-dark">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={siteConfig.portalWelcomeUrl} external variant="primary" size="md">
                  {trialCopy.cta}
                </Button>
                <Link
                  href="/was-kann-die-app"
                  className="text-sm font-semibold text-text-dark underline decoration-brand-yellow decoration-2 underline-offset-[6px]"
                >
                  Alle Funktionen ansehen
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <InternetfilterMockupScaled width={220} />
            </div>
          </div>
        </Container>
      </section>

      {/* Altersgruppen */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <h2 className="text-center text-2xl font-extrabold text-text-dark md:text-3xl">
            Ein Filter, der mit dem Alter mitwächst
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-dark/70">
            Je jünger das Kind, desto strenger der Filter – automatisch angepasst.
          </p>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {ageGroups.map((group) => (
              <li
                key={group.label}
                className="rounded-card border-2 border-brand-yellow bg-white p-6"
              >
                <p className="text-xs font-extrabold uppercase tracking-widest text-text-dark/50">
                  {group.intensity}
                </p>
                <h3 className="mt-1 text-lg font-extrabold text-text-dark">{group.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dark/70">{group.body}</p>
                <div className="mt-4 flex gap-1.5">
                  {[1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className={`h-2 flex-1 rounded-full ${i <= group.bars ? "bg-brand-yellow" : "bg-neutral-200"}`}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface-warm py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-2xl font-extrabold text-text-dark">
              Häufige Fragen zum Internetfilter
            </h2>
            <ul>
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question}>
                  <p>{faq.answer}</p>
                </FAQItem>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <RelatedArticles
        articles={related}
        heading="Sicher surfen: Mehr aus unserem Elternratgeber"
      />

      {/* CTA */}
      <section className="border-t border-border bg-white py-14 md:py-20">
        <Container className="text-center">
          <h2 className="text-2xl font-extrabold text-text-dark md:text-3xl">
            Jetzt Internetfilter einrichten
          </h2>
          <p className="mx-auto mt-3 max-w-md text-text-dark/70">
            {trialCopy.ctaSub}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.portalWelcomeUrl} external size="md">
              Kostenlos starten
            </Button>
            <Button href="/was-kann-die-app" variant="outline" size="md">
              Alle Funktionen
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
