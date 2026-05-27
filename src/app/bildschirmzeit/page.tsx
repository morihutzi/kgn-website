import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CheckBadge } from "@/components/ui/CheckBadge";
import { FAQItem } from "@/components/sections/FAQItem";
import { ChildviewMockupScaled } from "@/components/mockups/ChildviewMockupScaled";
import { JsonLd, faqPageSchema, breadcrumbSchema } from "@/components/seo/JsonLd";
import { siteConfig, trialCopy } from "@/content/site";
import { RelatedArticles } from "@/components/elternratgeber/RelatedArticles";
import { getRelatedArticlesForFeature } from "@/lib/elternratgeber/feature-mapping";

export const metadata: Metadata = {
  title: "Bildschirmzeit begrenzen – App für iOS & Android",
  description:
    "Mit Kidgonet Bildschirmzeit einfach begrenzen: Tageslimits, Wochenpläne, App-Pausen und Sofort-Sperre. Kinderschutz-App für iOS und Android.",
  alternates: { canonical: "/bildschirmzeit" },
  openGraph: {
    title: "Bildschirmzeit begrenzen – Kinderschutz-App Kidgonet",
    description:
      "Bildschirmzeit für Kinder einfach und wirkungsvoll begrenzen. Tageslimits, geplante Pausen und Sofort-Sperre – alles aus dem Elternportal.",
    url: "https://www.kidgonet.de/bildschirmzeit",
  },
};

const faqs = [
  {
    question: "Ab welchem Alter macht eine Bildschirmzeit-Begrenzung Sinn?",
    answer:
      "Experten empfehlen bereits ab dem Grundschulalter klare Bildschirmzeitregeln. Mit Kidgonet kannst du altersgerechte Limits von wenigen Minuten bis mehrere Stunden pro Tag festlegen.",
  },
  {
    question: "Kann mein Kind das Limit umgehen, indem es ein anderes Gerät nutzt?",
    answer:
      "Nein. Kidgonet addiert die Bildschirmzeiten aller verbundenen Geräte. Wenn das Tageslimit auf Smartphone und Tablet zusammen gilt, hilft ein Gerätewechsel nicht.",
  },
  {
    question: "Was passiert, wenn das Limit erreicht ist?",
    answer:
      "Das Kinderhandy zeigt einen Sperrbildschirm. Notfallanrufe und freigegebene Apps (z.B. Lern-Apps) bleiben weiter nutzbar.",
  },
  {
    question: "Kann ich die Bildschirmzeit spontan verlängern?",
    answer:
      "Ja. Im Elternportal kannst du mit einem Klick Extra-Zeit hinzufügen oder das Limit für einen Tag temporär aufheben – zum Beispiel in den Ferien.",
  },
];

export default function BildschirmzeitPage() {
  const related = getRelatedArticlesForFeature("bildschirmzeit");
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", url: "https://www.kidgonet.de" },
          { name: "Was kann die App?", url: "https://www.kidgonet.de/was-kann-die-app" },
          { name: "Bildschirmzeit begrenzen", url: "https://www.kidgonet.de/bildschirmzeit" },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-yellow/15 via-white to-white py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
                Bildschirmzeit
              </p>
              <h1 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-text-dark md:text-5xl">
                Bildschirmzeit begrenzen – einfach und wirkungsvoll
              </h1>
              <p className="mt-4 text-lg text-text-dark/70">
                Lege fest, wie lange dein Kind täglich online sein darf. Kidgonet setzt das Limit auf allen Geräten gleichzeitig durch – egal ob Handy oder Tablet.
              </p>
              <ul className="mt-6 grid gap-2">
                {[
                  "Tageslimits und Wochenpläne frei einstellbar",
                  "Geräteübergreifend: Handy und Tablet werden addiert",
                  "Automatische Pausen für Hausaufgaben oder Mahlzeiten",
                  "Extra-Zeit per Klick spontan hinzufügen",
                  "Sofort-Sperre für alle Geräte auf einmal",
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
              <ChildviewMockupScaled width={220} />
            </div>
          </div>
        </Container>
      </section>

      {/* Wie es funktioniert */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <h2 className="text-center text-2xl font-extrabold text-text-dark md:text-3xl">
            So funktioniert die Bildschirmzeit-Begrenzung
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-dark/70">
            Drei Schritte, fertig eingerichtet.
          </p>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "App installieren",
                body: "Kidgonet auf dem Kinderhandy installieren und mit deinem Elternkonto verbinden. Dauert weniger als 5 Minuten.",
              },
              {
                step: "2",
                title: "Limit festlegen",
                body: "Im Elternportal täglich erlaubte Bildschirmzeit einstellen – separat für Wochentage und Wochenende.",
              },
              {
                step: "3",
                title: "Fertig",
                body: "Kidgonet sperrt das Gerät automatisch, sobald das Limit erreicht ist. Du wirst per Push benachrichtigt.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-card border border-border bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-sm font-extrabold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 font-extrabold text-text-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dark/70">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface-warm py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-2xl font-extrabold text-text-dark">
              Häufige Fragen zur Bildschirmzeit-Begrenzung
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
        heading="Mehr zur Bildschirmzeit aus unserem Elternratgeber"
      />

      {/* CTA */}
      <section className="border-t border-border bg-white py-14 md:py-20">
        <Container className="text-center">
          <h2 className="text-2xl font-extrabold text-text-dark md:text-3xl">
            Jetzt Bildschirmzeit sinnvoll begrenzen
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
