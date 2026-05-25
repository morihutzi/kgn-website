import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Presse – Pressematerial & Downloads",
  description:
    "Pressemitteilungen, Fotos und Corporate Design von Kidgonet zum Download. Pressekontakt: info@kidgonet.de.",
  alternates: { canonical: "/presse" },
};

const downloads = [
  {
    title: "Pressemitteilung",
    description: "Manuel Neuer wird Partner von Kidgonet — Sicherer Rückhalt im Umgang mit digitalen Medien",
    label: "PDF herunterladen",
    href: "#",
  },
  {
    title: "Press Kit",
    description: "Umfassendes Informationsmaterial über Kidgonet, das Produkt und das Team",
    label: "Kit herunterladen",
    href: "#",
  },
  {
    title: "Fotos (Web)",
    description: "Bildmaterial in Web-Auflösung als ZIP-Archiv",
    label: "ZIP herunterladen",
    href: "#",
  },
  {
    title: "Fotos (Druck)",
    description: "Bildmaterial in Druckauflösung als ZIP-Archiv",
    label: "ZIP herunterladen",
    href: "#",
  },
  {
    title: "Corporate Design / Logos",
    description: "Logo-Dateien in verschiedenen Formaten (SVG, PNG, PDF)",
    label: "Logos herunterladen",
    href: "#",
  },
];

export default function PressePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-yellow/15 via-white to-white py-16 md:py-24">
        <Container className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
            Presse
          </p>
          <h1 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-text-dark md:text-5xl">
            Pressematerial
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-dark/70">
            Texte dürfen vollständig oder teilweise verwendet werden. Bilder und Fotos sind kostenlos nutzbar unter Quellenangabe <em>©Kidgonet</em>.
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-2xl font-extrabold text-text-dark">
              Downloads
            </h2>
            <ul className="space-y-4">
              {downloads.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center justify-between gap-6 rounded-card border border-border bg-white p-5 shadow-sm"
                >
                  <div>
                    <p className="font-bold text-text-dark">{item.title}</p>
                    <p className="mt-0.5 text-sm text-text-dark/65">
                      {item.description}
                    </p>
                  </div>
                  <a
                    href={item.href}
                    className="shrink-0 rounded-button border-2 border-brand-yellow px-4 py-2 text-sm font-bold text-brand-yellow transition hover:bg-brand-yellow hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-warm py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg font-bold text-text-dark">
              Presseanfragen
            </p>
            <p className="mt-2 text-text-dark/70">
              Für Interviews, Bildanfragen oder weitere Informationen stehen wir gerne zur Verfügung.
            </p>
            <a
              href="mailto:info@kidgonet.de"
              className="mt-5 inline-flex items-center gap-2 rounded-button bg-brand-yellow px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
            >
              info@kidgonet.de
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
