import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CheckBadge } from "@/components/ui/CheckBadge";
import { FAQItem } from "@/components/sections/FAQItem";
import { AppsFreigebenMockupScaled } from "@/components/mockups/AppsFreigebenMockupScaled";
import { JsonLd, faqPageSchema, breadcrumbSchema } from "@/components/seo/JsonLd";
import { siteConfig, trialCopy } from "@/content/site";
import { RelatedArticles } from "@/components/elternratgeber/RelatedArticles";
import { getRelatedArticlesForFeature } from "@/lib/elternratgeber/feature-mapping";

export const metadata: Metadata = {
  title: "Apps freigeben – Ausnahmen für Kinder einrichten (iOS & Android)",
  description:
    "Mit Kidgonet gezielt Apps für dein Kind freigeben: Lern-Apps, Notfall-Apps und Musik auch dann nutzbar, wenn das Bildschirmzeitlimit erreicht ist.",
  alternates: { canonical: "/apps-freigeben" },
  openGraph: {
    title: "Apps freigeben – Kidgonet Kinderschutz-App",
    description:
      "Lern-Apps, Notfall-Apps und Musik auch bei gesperrtem Bildschirm freigeben. Du entscheidest, was immer erreichbar bleibt.",
    url: "https://www.kidgonet.de/apps-freigeben",
  },
};

const faqs = [
  {
    question: "Welche Apps kann ich als Ausnahme freigeben?",
    answer:
      "Du kannst jede auf dem Gerät installierte App als Ausnahme markieren. Typische Beispiele: Lern-Apps für die Schule, die Telefon-App, Navigations-Apps oder eine Musik-App.",
  },
  {
    question: "Gilt die Freigabe immer oder nur zu bestimmten Zeiten?",
    answer:
      "Du kannst festlegen, ob eine App dauerhaft freigegeben ist oder nur in bestimmten Zeitfenstern – zum Beispiel die Lern-App nur unter der Woche.",
  },
  {
    question: "Kann mein Kind neue Apps selbst installieren?",
    answer:
      "Nein. Neue Apps sind standardmäßig gesperrt, bis du sie im Elternportal explizit freigibst. So behältst du immer den Überblick.",
  },
  {
    question: "Unterscheidet sich die Freigabe von App-Blocker?",
    answer:
      "App-Freigabe und App-Blocker sind zwei Seiten derselben Funktion: Du kannst Apps entweder generell sperren oder gezielt als Ausnahme freigeben, die auch nach Ablauf des Bildschirmzeitlimits nutzbar bleibt.",
  },
];

export default function AppsFreigebenPage() {
  const related = getRelatedArticlesForFeature("apps-freigeben");
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", url: "https://www.kidgonet.de" },
          { name: "Was kann die App?", url: "https://www.kidgonet.de/was-kann-die-app" },
          { name: "Apps freigeben", url: "https://www.kidgonet.de/apps-freigeben" },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-yellow/15 via-white to-white py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
                Apps freigeben
              </p>
              <h1 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-text-dark md:text-5xl">
                Apps gezielt freigeben – auch wenn das Limit erreicht ist
              </h1>
              <p className="mt-4 text-lg text-text-dark/70">
                Bildschirmzeitlimit erreicht, aber die Lern-App soll trotzdem nutzbar bleiben? Mit Kidgonet gibst du einzelne Apps als Ausnahme frei – du behältst die Kontrolle.
              </p>
              <ul className="mt-6 grid gap-2">
                {[
                  "Lern-Apps auch nach Ablauf des Tageslimits nutzbar",
                  "Telefon und Notfall-Apps immer erreichbar",
                  "Musik-App für die Mittagspause freigeben",
                  "Zeitgesteuerte Freigaben für bestimmte Wochentage",
                  "Neue Apps erst nach Eltern-Genehmigung nutzbar",
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
              </div>
            </div>
            <div className="flex justify-center">
              <AppsFreigebenMockupScaled width={220} />
            </div>
          </div>
        </Container>
      </section>

      {/* Beispiele */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <h2 className="text-center text-2xl font-extrabold text-text-dark md:text-3xl">
            Typische Freigabe-Beispiele
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Schule & Lernen",
                body: "Duolingo, Khan Academy oder die Schulcloud bleiben auch nach Ablauf des Tageslimits geöffnet, damit Hausaufgaben nicht leiden.",
              },
              {
                title: "Notfall & Sicherheit",
                body: "Die Telefon-App bleibt immer erreichbar. Dein Kind kann dich jederzeit anrufen, auch wenn das Handy gesperrt ist.",
              },
              {
                title: "Entspannung",
                body: "Musik hören ist entspannend, kein Bildschirm. Spotify oder Apple Music als Ausnahme freigeben – ohne Bildschirmzeitverbrauch.",
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
              Häufige Fragen zur App-Freigabe
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
        heading="Apps & Altersfreigaben: Mehr aus unserem Elternratgeber"
      />

      {/* CTA */}
      <section className="border-t border-border bg-white py-14 md:py-20">
        <Container className="text-center">
          <h2 className="text-2xl font-extrabold text-text-dark md:text-3xl">
            Jetzt App-Freigaben einrichten
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
