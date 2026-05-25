import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FAQItem } from "@/components/sections/FAQItem";
import { hilfeCategories } from "@/content/hilfe";

export const metadata: Metadata = {
  title: "Hilfe & FAQ – Kidgonet Kinderschutz-App",
  description:
    "Häufige Fragen zu Kidgonet: Installation, Bildschirmzeit begrenzen, Webfilter einrichten, Standort, Abonnement und mehr.",
  alternates: { canonical: "/hilfe" },
  openGraph: {
    title: "Hilfe & FAQ – Kidgonet Kinderschutz-App",
    description:
      "Antworten auf die häufigsten Fragen zur Kidgonet Kinderschutz-App.",
    url: "https://www.kidgonet.de/hilfe",
  },
};

export default function HilfePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-yellow/15 via-white to-white py-16 md:py-24">
        <Container className="text-center">
          <h1 className="text-balance text-3xl font-extrabold leading-tight text-text-dark md:text-5xl">
            Wie können wir Dir helfen?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-dark/70">
            Hier findest Du Antworten auf die häufigsten Fragen zu Kidgonet.
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">
            {hilfeCategories.map((category) => (
              <div key={category.title}>
                <h2 className="mb-4 text-xl font-extrabold text-text-dark">
                  {category.title}
                </h2>
                <div className="rounded-2xl border border-border bg-white px-6 shadow-sm">
                  <ul>
                    {category.items.map((item) => (
                      <FAQItem key={item.question} question={item.question}>
                        <p>{item.answer}</p>
                      </FAQItem>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-warm py-12 md:py-16">
        <Container className="text-center">
          <p className="text-lg font-bold text-text-dark">
            Noch Fragen? Wir helfen gerne.
          </p>
          <p className="mt-2 text-text-dark/70">
            Schreib uns einfach eine E-Mail — wir antworten schnell.
          </p>
          <a
            href="mailto:support@kidgonet.de"
            className="mt-5 inline-flex items-center gap-2 rounded-button bg-brand-yellow px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
          >
            support@kidgonet.de
          </a>
        </Container>
      </section>
    </>
  );
}
