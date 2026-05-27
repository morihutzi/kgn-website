import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CheckBadge } from "@/components/ui/CheckBadge";
import { FAQItem } from "@/components/sections/FAQItem";
import { TwoModesMockupScaled } from "@/components/mockups/TwoModesMockupScaled";
import { JsonLd, faqPageSchema, breadcrumbSchema } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Internet & Handy sofort sperren – Sperrmodus für Kinder",
  description:
    "Mit dem Kidgonet Sperrmodus Internet und Apps auf dem Kinderhandy sofort sperren. Ein Klick im Elternportal – alle Geräte offline. Für iOS und Android.",
  alternates: { canonical: "/sperrmodus" },
  openGraph: {
    title: "Alle Geräte sofort sperren – Kidgonet Sperrmodus",
    description:
      "Ein Klick im Elternportal sperrt sofort alle Geräte deines Kindes. Internet aus, Hausaufgaben an.",
    url: "https://www.kidgonet.de/sperrmodus",
  },
};

const faqs = [
  {
    question: "Was genau wird beim Sperrmodus gesperrt?",
    answer:
      "Alle Internetverbindungen werden sofort unterbrochen. Gesperrte Apps können nicht geöffnet werden. Telefonieren und SMS bleiben möglich – dein Kind ist immer erreichbar.",
  },
  {
    question: "Kann ich Musik als Ausnahme erlauben?",
    answer:
      "Ja. Du kannst festlegen, ob die Musik-App auch im Sperrmodus nutzbar bleibt – so darf dein Kind entspannen, ohne online zu gehen.",
  },
  {
    question: "Wie schnell wird der Sperrmodus aktiv?",
    answer:
      "Innerhalb weniger Sekunden nach dem Klick im Elternportal wird die Sperre auf allen verbundenen Geräten durchgesetzt.",
  },
  {
    question: "Kann mein Kind den Sperrmodus aufheben?",
    answer:
      "Nein. Der Sperrmodus kann nur von Eltern über das Elternportal deaktiviert werden. Kinder können ihn nicht umgehen.",
  },
];

export default function SperrmodusPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", url: "https://www.kidgonet.de" },
          { name: "Was kann die App?", url: "https://www.kidgonet.de/was-kann-die-app" },
          { name: "Sperrmodus", url: "https://www.kidgonet.de/sperrmodus" },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-yellow/15 via-white to-white py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
                Sperrmodus
              </p>
              <h1 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-text-dark md:text-5xl">
                Alle Geräte sofort sperren – mit einem Klick
              </h1>
              <p className="mt-4 text-lg text-text-dark/70">
                Hausaufgaben, Familienessen oder einfach eine Auszeit vom Bildschirm: Mit dem Sperrmodus schaltest du alle Geräte deines Kindes in Sekunden offline.
              </p>
              <ul className="mt-6 grid gap-2">
                {[
                  "Ein Klick im Elternportal sperrt alle verbundenen Geräte",
                  "Sofortige Wirkung innerhalb von Sekunden",
                  "Telefonieren bleibt immer möglich",
                  "Optional: Musik-App als Ausnahme erlauben",
                  "Kind kann den Sperrmodus nicht umgehen",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <CheckBadge />
                    <span className="text-sm leading-snug text-text-dark">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={siteConfig.portalWelcomeUrl} external variant="primary" size="md">
                  7 Tage kostenlos testen
                </Button>
                <Link
                  href="/bildschirmzeit"
                  className="text-sm font-semibold text-text-dark underline decoration-brand-yellow decoration-2 underline-offset-[6px]"
                >
                  Bildschirmzeit begrenzen
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <TwoModesMockupScaled width={260} />
            </div>
          </div>
        </Container>
      </section>

      {/* Wann sinnvoll */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <h2 className="text-center text-2xl font-extrabold text-text-dark md:text-3xl">
            Wann der Sperrmodus hilft
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Hausaufgaben",
                body: "Ablenkung durch YouTube oder Spiele ausschalten, bis die Aufgaben erledigt sind. Danach einfach wieder freigeben.",
              },
              {
                title: "Familienzeit",
                body: "Beim Abendessen, im Urlaub oder beim gemeinsamen Spielen: Internet aus, Aufmerksamkeit auf die Familie.",
              },
              {
                title: "Schlafenszeit",
                body: "Nächtliches Scrollen verhindern: Automatisch zu einer festen Uhrzeit alle Geräte sperren lassen.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-card border border-border bg-white p-6 shadow-sm"
              >
                <h3 className="font-extrabold text-brand-yellow">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dark/70">{item.body}</p>
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
              Häufige Fragen zum Sperrmodus
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

      {/* CTA */}
      <section className="border-t border-border bg-white py-14 md:py-20">
        <Container className="text-center">
          <h2 className="text-2xl font-extrabold text-text-dark md:text-3xl">
            Jetzt Sperrmodus einrichten
          </h2>
          <p className="mx-auto mt-3 max-w-md text-text-dark/70">
            7 Tage kostenlos testen, keine Kreditkarte nötig.
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
