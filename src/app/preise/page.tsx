import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PricingTable } from "@/components/sections/PricingTable";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pricingPage } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Preise – Kinderschutz-App ab €2,99 / Monat",
  description:
    "Kidgonet Preise: Monatsabo €4,99 oder Jahresabo €2,99 pro Monat. 7 Tage kostenlos testen, 30 Tage Geld-zurück-Garantie.",
  alternates: { canonical: "/preise" },
  openGraph: {
    title: "Preise – Kidgonet Kinderschutz-App ab €2,99 / Monat",
    description:
      "Monatsabo €4,99 oder Jahresabo €2,99/Monat. 7 Tage kostenlos testen, 30 Tage Geld-zurück-Garantie.",
    url: "https://www.kidgonet.de/preise",
  },
};

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-1 h-5 w-5 flex-shrink-0 text-brand-green"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path
        d="M5 13l4 4L19 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PreisePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-yellow/15 via-white to-white py-16 md:py-24">
        <Container className="text-center">
          <h1 className="text-balance text-3xl font-extrabold leading-tight text-text-dark md:text-5xl">
            {pricingPage.hero.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-text-dark/80 md:text-2xl">
            {pricingPage.hero.subheadline}
          </p>
        </Container>
      </section>

      <PricingTable />

      <Section>
        <h2 className="sr-only">Vorteile auf einen Blick</h2>
        <ul className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {pricingPage.highlights.map((h) => (
            <li
              key={h.title}
              className="flex flex-col items-center rounded-card bg-white p-6 text-center shadow-sm"
            >
              <h3 className="text-lg font-bold text-brand-green">{h.title}</h3>
              <p className="mt-2 text-sm text-text-dark/85">{h.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-center text-3xl font-bold text-text-dark md:text-4xl">
          {pricingPage.includedFeatures.headline}
        </h2>
        <ul className="mx-auto mt-10 grid max-w-2xl gap-3 md:grid-cols-2">
          {pricingPage.includedFeatures.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-text-dark">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCTA />
    </>
  );
}
