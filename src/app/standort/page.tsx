import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CheckBadge } from "@/components/ui/CheckBadge";
import { FAQItem } from "@/components/sections/FAQItem";
import { ConnectDevicesMockupScaled } from "@/components/mockups/ConnectDevicesMockupScaled";
import { JsonLd, faqPageSchema, breadcrumbSchema, softwareApplicationSchema } from "@/components/seo/JsonLd";
import { siteConfig, trialCopy } from "@/content/site";
import { RelatedArticles } from "@/components/elternratgeber/RelatedArticles";
import { getRelatedArticlesForFeature } from "@/lib/elternratgeber/feature-mapping";

export const metadata: Metadata = {
  title: "Standort Kind verfolgen – Echtzeit-Ortung | Kidgonet",
  description:
    "Mit Kidgonet den Standort deines Kindes in Echtzeit im Elternportal sehen. GPS-Ortung für iOS und Android, Datenschutz DSGVO-konform, Server in Deutschland.",
  alternates: { canonical: "/standort" },
  openGraph: {
    title: "Standort Kind verfolgen – Kidgonet Echtzeit-Ortung",
    description:
      "Immer wissen, wo dein Kind ist: Echtzeit-Standort auf dem Eltern-Smartphone, DSGVO-konform, Daten nur in Deutschland.",
    url: "https://www.kidgonet.de/standort",
  },
};

const faqs = [
  {
    question: "Wie genau ist die Standortbestimmung?",
    answer:
      "Kidgonet nutzt GPS auf dem Kinderhandy und zeigt den Standort auf einer Karte im Elternportal an. Die Genauigkeit beträgt in der Regel 5 bis 15 Meter.",
  },
  {
    question: "Kann mein Kind die Ortung deaktivieren?",
    answer:
      "Nein. Kinder können die Standortfunktion nicht selbst deaktivieren. Ab 15 Jahren kann die Ortung aus Datenschutzgründen eigenständig abgeschaltet werden.",
  },
  {
    question: "Werden Standortdaten gespeichert?",
    answer:
      "Standortdaten werden maximal 30 Tage gespeichert und danach automatisch gelöscht. Daten werden ausschließlich auf Servern in Deutschland verarbeitet.",
  },
  {
    question: "Funktioniert die Ortung auch ohne Mobilfunknetz?",
    answer:
      "Die Standortdaten werden über das Mobilfunknetz übertragen. Ohne Netzverbindung wird der zuletzt bekannte Standort angezeigt.",
  },
];

export default function StandortPage() {
  const related = getRelatedArticlesForFeature("standort");
  return (
    <>
      <JsonLd data={softwareApplicationSchema} />
      <JsonLd data={faqPageSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", url: "https://www.kidgonet.de" },
          { name: "Was kann die App?", url: "https://www.kidgonet.de/was-kann-die-app" },
          { name: "Standort verfolgen", url: "https://www.kidgonet.de/standort" },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-yellow/15 via-white to-white py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
                Standort
              </p>
              <h1 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-text-dark md:text-5xl">
                Standort deines Kindes – immer in Echtzeit
              </h1>
              <p className="mt-4 text-lg text-text-dark/70">
                Sieh auf deinem Smartphone, wo dein Kind gerade ist. Der Echtzeit-Standort wird direkt im Elternportal auf einer Karte angezeigt – ohne dass dein Kind es merkt.
              </p>
              <ul className="mt-6 grid gap-2">
                {[
                  "GPS-Ortung in Echtzeit auf der Karte",
                  "Letzte bekannte Position bei fehlender Verbindung",
                  "Standortdaten nur auf deutschen Servern gespeichert",
                  "Automatische Löschung nach 30 Tagen",
                  "DSGVO-konform, keine Weitergabe an Dritte",
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
              <ConnectDevicesMockupScaled width={220} />
            </div>
          </div>
        </Container>
      </section>

      {/* Datenschutz-Hinweis */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <h2 className="text-center text-2xl font-extrabold text-text-dark md:text-3xl">
            Ortung mit Respekt vor der Privatsphäre
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-dark/70">
            Kidgonet versteht: Auch Kinder haben ein Recht auf Privatsphäre. Deshalb sind Standortdaten auf das Nötigste beschränkt.
          </p>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Keine Browser-Historie",
                body: "Kidgonet speichert keine besuchten Webseiten, keine App-Nutzungsdetails und keine Chat-Verläufe.",
              },
              {
                title: "Automatische Datenlöschung",
                body: "Standortdaten werden nach 30 Tagen automatisch und unwiderruflich gelöscht.",
              },
              {
                title: "Nur in Deutschland",
                body: "Alle Daten werden ausschließlich auf Servern in Deutschland gespeichert und verarbeitet.",
              },
              {
                title: "Ab 15 Jahren selbst deaktivierbar",
                body: "Teenager ab 15 Jahren können die Ortung eigenständig abschalten – ein bewusster Schritt zu mehr Eigenverantwortung.",
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
              Häufige Fragen zur Standortverfolgung
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
        heading="Sicherheit & Standort: Mehr aus unserem Elternratgeber"
      />

      {/* CTA */}
      <section className="border-t border-border bg-white py-14 md:py-20">
        <Container className="text-center">
          <h2 className="text-2xl font-extrabold text-text-dark md:text-3xl">
            Jetzt Standort deines Kindes im Blick behalten
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
