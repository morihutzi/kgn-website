import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { HilfeFaqTabs } from "@/components/sections/HilfeFaqTabs";
import { hilfeCategories } from "@/content/hilfe";
import { JsonLd, faqPageSchema } from "@/components/seo/JsonLd";

// Alle sichtbaren Hilfe-FAQs als FAQPage-Schema (1:1 aus hilfeCategories,
// damit strukturierte Daten und sichtbarer Inhalt exakt uebereinstimmen).
const hilfeFaqItems = hilfeCategories.flatMap((c) => c.items);

export const metadata: Metadata = {
  title: "Hilfe – Installation & FAQs",
  description:
    "Antworten auf häufige Fragen rund um Kidgonet: Installation für iOS und Android, Bildschirmzeit, Webfilter, Standort, Abonnement und mehr.",
  alternates: { canonical: "/hilfe" },
  openGraph: {
    title: "Hilfe – Installation & FAQs",
    description:
      "Antworten auf häufige Fragen rund um Kidgonet: Installation, Funktionen, Datenschutz und Abonnement.",
    url: "https://www.kidgonet.de/hilfe",
  },
};

export default function HilfePage() {
  return (
    <>
      <JsonLd data={faqPageSchema(hilfeFaqItems)} />

      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-yellow">
        {/* Decorative dots */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
        <Container className="relative">
          <div className="py-8 md:py-10">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/80">
              Hilfe-Center
            </p>
            <h1 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Antworten auf <span className="italic font-normal">deine</span> Fragen
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/95 md:text-lg">
              Installation, Funktionen, Datenschutz, Abo. Hier findest du in
              wenigen Sekunden, was du wissen musst.
            </p>
          </div>
        </Container>

        {/* Bottom diagonal slashes */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-px h-5 bg-white/30"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-px h-3 bg-white/50"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* ── 2. INSTALL CARDS — short intro + cards ─────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
              Schritt 1 · Installation
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-text-dark md:text-4xl">
              In 5 Minuten startklar
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-dark/70 md:text-lg">
              Kidgonet ist schnell eingerichtet: App installieren, Berechtigungen
              erteilen, mit dem Eltern-Portal verbinden. Wähle das passende
              Betriebssystem.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            <InstallCard
              platform="Für iPhone"
              title="Kidgonet auf iOS einrichten"
              subtitle="Bildschirmzeit, Webfilter, Standort. Etwa 5 Minuten."
              href="/hilfe/installation-ios"
              icon="ios"
            />
            <InstallCard
              platform="Für Android"
              title="Kidgonet auf Android einrichten"
              subtitle="Berechtigungen, Webfilter, Standort, Pairing."
              href="/hilfe/installation-android"
              icon="android"
            />
          </div>
        </Container>
      </section>

      {/* ── 3. FAQ ─────────────────────────────────────────────────── */}
      <section className="bg-surface-warm py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
              Schritt 2 · Fragen klären
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-text-dark md:text-4xl">
              Häufig gestellte Fragen
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-dark/70 md:text-lg">
              Geordnet nach Themen. Tippe auf eine Frage, um die Antwort zu
              sehen.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <HilfeFaqTabs categories={hilfeCategories} />
          </div>
        </Container>
      </section>

      {/* ── 4. CONTACT CTA ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F4F0EB] py-16 md:py-20">
        {/* Decorative dot grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #F9B000 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
              Schritt 3 · Persönlicher Support
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-text-dark md:text-4xl">
              Deine Frage war nicht dabei?
              <br />
              <span className="text-brand-yellow">Wir antworten persönlich.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-dark/70 md:text-lg">
              Kostenloser Support per E-Mail. Antwort in der Regel innerhalb
              eines Werktags. Keine Hotline-Warteschleife, kein Chatbot.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:support@kidgonet.de"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-brand-yellow/30 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-yellow/40 md:text-base"
              >
                <MailIcon />
                support@kidgonet.de
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <p className="mt-5 text-xs text-text-dark/50">
              Oder schreib uns direkt im Eltern-Portal unter portal.kidgonet.de
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

// ── Sub-components ───────────────────────────────────────────────────

function InstallCard({
  platform,
  title,
  subtitle,
  href,
  icon,
}: {
  platform: string;
  title: string;
  subtitle: string;
  href: string;
  icon: "ios" | "android";
}) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:shadow-xl hover:shadow-brand-yellow/10"
    >
      {/* Watermark icon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 size-44 opacity-[0.05] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-[0.08]"
      >
        {icon === "ios" ? (
          <IosIcon className="h-full w-full fill-brand-yellow" />
        ) : (
          <AndroidIcon className="h-full w-full fill-brand-yellow" />
        )}
      </div>

      {/* Foreground icon chip */}
      <div className="relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow text-white shadow-md shadow-brand-yellow/30 transition-transform group-hover:scale-105">
        {icon === "ios" ? (
          <IosIcon className="size-7 fill-current" />
        ) : (
          <AndroidIcon className="size-7 fill-current" />
        )}
      </div>

      <div className="relative flex-1">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
          {platform}
        </p>
        <p className="mt-1 text-base font-extrabold leading-snug text-text-dark md:text-lg">
          {title}
        </p>
        <p className="mt-1 text-xs text-text-dark/65 md:text-sm">{subtitle}</p>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="relative size-5 shrink-0 stroke-brand-yellow transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </Link>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16v12H4z" />
      <path d="M4 6l8 7 8-7" />
    </svg>
  );
}

function IosIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M17.05 12.04c-.03-2.74 2.24-4.07 2.34-4.13-1.27-1.86-3.25-2.12-3.96-2.15-1.69-.17-3.3.99-4.16.99-.86 0-2.18-.96-3.59-.94-1.85.03-3.55 1.07-4.5 2.73-1.92 3.33-.49 8.26 1.38 10.96.91 1.32 2 2.81 3.42 2.76 1.37-.06 1.89-.89 3.55-.89 1.65 0 2.13.89 3.58.86 1.48-.03 2.42-1.35 3.32-2.68 1.04-1.53 1.47-3 1.5-3.08-.03-.01-2.88-1.1-2.91-4.37zM14.35 4c.75-.9 1.25-2.16 1.11-3.41-1.07.04-2.37.71-3.14 1.61-.69.8-1.3 2.08-1.13 3.31 1.2.09 2.41-.61 3.16-1.51z" />
    </svg>
  );
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M17.6 9.48l1.84-3.18a.39.39 0 00-.14-.54.39.39 0 00-.54.14l-1.86 3.22a11.42 11.42 0 00-9.8 0L5.24 5.9a.39.39 0 00-.54-.14.39.39 0 00-.14.54L6.4 9.48A10.81 10.81 0 001 18h22a10.81 10.81 0 00-5.4-8.52zM7 15.25a.94.94 0 11.94-.94.94.94 0 01-.94.94zm10 0a.94.94 0 11.94-.94.94.94 0 01-.94.94z" />
    </svg>
  );
}
