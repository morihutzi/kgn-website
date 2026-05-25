import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Über uns – Das Team hinter Kidgonet",
  description:
    "Kidgonet wurde von Eltern für Eltern entwickelt. Unsere Mission: Kinder sicher und begleitet in der digitalen Welt aufwachsen zu lassen.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: "Über uns – Das Team hinter Kidgonet",
    description:
      "Von Eltern für Eltern: Kidgonet schützt Kinder sicher und begleitet im digitalen Alltag.",
    url: "https://www.kidgonet.de/ueber-uns",
  },
};

const values = [
  {
    title: "Mit Kindern für Kinder entwickelt",
    description:
      "Unser Produkt entstand unter Einbeziehung von Kinderbelangen und in enger Zusammenarbeit mit Pädagogen und Behörden wie dem LKA München — damit es für Eltern und Kinder wirklich funktioniert.",
  },
  {
    title: "Privatsphäre hat höchste Priorität",
    description:
      "Persönliche Daten werden weder gespeichert noch weitergeleitet — auch nicht an Eltern. Kidgonet versteht sich ausdrücklich nicht als Überwachungsinstrument, sondern als Begleiter.",
  },
  {
    title: "Medienkompetenz stärken",
    description:
      "Schutz allein reicht nicht. Kinder sollen lernen, digitale Medien bewusst und verantwortungsvoll zu nutzen. Freiheit mit Verantwortung — das ist unser Ansatz.",
  },
];

const team = [
  {
    name: "Moritz Hutzler",
    role: "Co-Founder",
    image: null,
  },
  {
    name: "Jannis Hutzler",
    role: "Co-Founder",
    image: null,
  },
  {
    name: "Manuel Neuer",
    role: "Markenbotschafter",
    image: "/images/testimonials/manuel-neuer.jpg",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-yellow/15 via-white to-white py-16 md:py-24">
        <Container className="max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
            Über uns
          </p>
          <h1 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-text-dark md:text-5xl">
            Kinder sicher durch die digitale Welt begleiten
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-dark/75">
            Unsere Mission bei Kidgonet ist es, Kinder sicher und begleitet in der digitalen Welt aufwachsen zu lassen. Wir arbeiten mit Experten, Pädagogen und Behörden zusammen — denn Go online. Aber sicher!
          </p>
        </Container>
      </section>

      {/* Werte */}
      <section className="py-12 md:py-16">
        <Container>
          <h2 className="text-center text-2xl font-extrabold text-text-dark md:text-3xl">
            Wofür wir stehen
          </h2>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {values.map((value) => (
              <li
                key={value.title}
                className="rounded-card border border-border bg-white p-6 shadow-sm"
              >
                <div className="mb-3 size-8 rounded-full bg-brand-yellow/20 ring-2 ring-brand-yellow/40" />
                <h3 className="font-extrabold text-text-dark">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dark/70">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Team */}
      <section className="border-t border-border bg-surface-warm py-12 md:py-16">
        <Container>
          <h2 className="text-center text-2xl font-extrabold text-text-dark md:text-3xl">
            Das Team
          </h2>
          <ul className="mx-auto mt-10 flex flex-wrap justify-center gap-8 md:gap-12">
            {team.map((member) => (
              <li key={member.name} className="flex flex-col items-center gap-3">
                <div className="relative size-24 overflow-hidden rounded-full border-2 border-brand-yellow bg-brand-yellow/10">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-2xl font-extrabold text-brand-yellow">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <p className="font-bold text-text-dark">{member.name}</p>
                  <p className="text-sm text-text-dark/60">{member.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <Container className="text-center">
          <p className="text-xl font-extrabold text-text-dark md:text-2xl">
            Überzeug Dich selbst — 7 Tage kostenlos testen
          </p>
          <p className="mt-2 text-text-dark/70">
            Kein Zahlungsmittel erforderlich. Jederzeit kündbar.
          </p>
          <div className="mt-6">
            <Button href={siteConfig.portalRegisterUrl} external size="lg">
              Jetzt kostenlos starten
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
