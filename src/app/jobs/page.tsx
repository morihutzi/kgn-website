import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Jobs – Werde Teil des Kidgonet-Teams",
  description:
    "Stellenangebote bei Kidgonet in Brunnthal: Social Media Manager, Werkstudent. Jetzt bewerben und Großes bewegen.",
  alternates: { canonical: "/jobs" },
};

const openPositions = [
  {
    title: "Social Media Manager (m/w/d)",
    type: "Teilzeit",
    description:
      "Du entwickelst und betreust unsere Social-Media-Präsenz auf Instagram, Facebook und LinkedIn. Du erstellst Content, planst Kampagnen und baust unsere Community auf.",
  },
  {
    title: "Werkstudent (m/w/d)",
    type: "Teilzeit",
    description:
      "Du unterstützt unser Team in verschiedenen Bereichen — von Marketing über Produktentwicklung bis hin zu Kundenkommunikation. Du arbeitest direkt mit den Gründern zusammen.",
  },
];

export default function JobsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-yellow/15 via-white to-white py-16 md:py-24">
        <Container className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
            Karriere
          </p>
          <h1 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-text-dark md:text-5xl">
            Create. Innovate. Educate.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-dark/70">
            Wir suchen Menschen, die bereit sind, gemeinsam in einem kleinen Team Großes zu bewegen.
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-2xl font-extrabold text-text-dark">
              Offene Stellen
            </h2>
            <ul className="space-y-5">
              {openPositions.map((pos) => (
                <li
                  key={pos.title}
                  className="rounded-card border border-border bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-extrabold text-text-dark">{pos.title}</h3>
                    <span className="shrink-0 rounded-full bg-brand-yellow/15 px-3 py-1 text-xs font-bold text-brand-yellow">
                      {pos.type}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-dark/70">
                    {pos.description}
                  </p>
                  <div className="mt-5">
                    <Button
                      href="mailto:jobs@kidgonet.com"
                      external
                      size="md"
                      variant="outline"
                    >
                      Jetzt bewerben
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-warm py-12 md:py-16">
        <Container className="text-center">
          <p className="text-lg font-bold text-text-dark">
            Keine passende Stelle dabei?
          </p>
          <p className="mt-2 text-text-dark/70">
            Wir freuen uns auch über Initiativbewerbungen.
          </p>
          <div className="mt-6">
            <Button href="mailto:jobs@kidgonet.com" external size="md">
              Initiativbewerbung senden
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
