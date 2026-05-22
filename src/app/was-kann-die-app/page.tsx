import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import type { FeatureGridIcon } from "@/content/features";
import { featuresPage } from "@/content/features";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Was kann die App?",
  description:
    "Bildschirmzeit, altersgerechter Webfilter, Geräteortung und SOS Button. Alle Funktionen von Kidgonet im Überblick.",
};

const {
  hero,
  featureGrid,
  privacy,
  webfilter,
  screenTime,
  portal,
  nummerGegenKummer,
  moreInfo,
} = featuresPage;

const SECTIONS: { id: string; label: string; ordinal: string }[] = [
  { id: featureGrid.sectionId, label: "Funktionen", ordinal: "01" },
  { id: privacy.sectionId, label: "Datenschutz", ordinal: "02" },
  { id: webfilter.sectionId, label: "Webfilter", ordinal: "03" },
  { id: screenTime.sectionId, label: "Bildschirmzeit", ordinal: "04" },
  { id: portal.sectionId, label: "Elternportal", ordinal: "05" },
  { id: nummerGegenKummer.sectionId, label: "Partner", ordinal: "06" },
  { id: moreInfo.sectionId, label: "Weitere Infos", ordinal: "07" },
];

// ── Reusable atoms ───────────────────────────────────────────────────────

function SectionEyebrow({
  ordinal,
  children,
}: {
  ordinal: string;
  children: React.ReactNode;
}) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
      <span className="font-serif text-base font-normal italic tracking-normal text-text-muted">
        {ordinal}
      </span>
      <span aria-hidden="true" className="h-px w-8 bg-brand-orange" />
      <span>{children}</span>
    </p>
  );
}

function SectionHeadline({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`font-serif text-[34px] font-medium leading-[1.05] tracking-[-0.01em] text-text-dark md:text-[44px] ${className}`}
    >
      {children}
    </h2>
  );
}

function YellowUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="absolute inset-x-[-2%] bottom-[8%] z-0 h-[40%] bg-brand-yellow/40"
      />
    </span>
  );
}

function GreenCheck() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-green"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-3 w-3 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
      >
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function CrossMark() {
  return (
    <svg
      aria-label="Nicht gefiltert"
      role="img"
      viewBox="0 0 24 24"
      className="mx-auto h-4 w-4 text-neutral-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function CheckMark() {
  return (
    <svg
      aria-label="Gefiltert"
      role="img"
      viewBox="0 0 24 24"
      className="mx-auto h-4 w-4 text-brand-green"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureIcon({ type }: { type: FeatureGridIcon }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "timer":
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 text-text-dark" aria-hidden="true">
          <circle cx="18" cy="20" r="11" {...stroke} />
          <path d="M18 13v7l4 3" {...stroke} />
          <path d="M14 5h8M18 5v3" {...stroke} />
        </svg>
      );
    case "devices":
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 text-text-dark" aria-hidden="true">
          <rect x="4" y="10" width="18" height="12" rx="2" {...stroke} />
          <rect
            x="14"
            y="15"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinejoin="round"
            fill="white"
          />
          <line x1="22" y1="29" x2="24" y2="29" {...stroke} />
        </svg>
      );
    case "apps":
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 text-text-dark" aria-hidden="true">
          <rect x="5" y="5" width="10" height="10" rx="2.5" {...stroke} />
          <rect x="21" y="5" width="10" height="10" rx="2.5" {...stroke} />
          <rect x="5" y="21" width="10" height="10" rx="2.5" {...stroke} />
          <circle cx="26" cy="26" r="5" {...stroke} />
          <path d="M26 23.5v5M23.5 26h5" {...stroke} />
        </svg>
      );
    case "filter":
      return (
        <svg viewBox="0 0 36 36" className="h-9 w-9 text-text-dark" aria-hidden="true">
          <circle cx="18" cy="18" r="12" {...stroke} />
          <path d="M9 14h18M11 22h14M14 27h8" {...stroke} />
          <circle cx="18" cy="18" r="2.5" fill="currentColor" />
        </svg>
      );
  }
}

// ── Page ─────────────────────────────────────────────────────────────────

export default function WasKannDieAppPage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Section Nav ─────────────────────────────────────────────────── */}
      <SectionNav />

      {/* ── 2. Feature-Grid ─────────────────────────────────────────────── */}
      <FeatureGridSection />

      {/* ── 3. Datenschutz ──────────────────────────────────────────────── */}
      <PrivacySection />

      {/* ── 4. Webfilter ────────────────────────────────────────────────── */}
      <WebfilterSection />

      {/* ── 5. Bildschirmzeit ───────────────────────────────────────────── */}
      <ScreenTimeSection />

      {/* ── 6. Elternportal ─────────────────────────────────────────────── */}
      <PortalSection />

      {/* ── 7. Nummer gegen Kummer ──────────────────────────────────────── */}
      <NgkSection />

      {/* ── 8. Weitere Informationen ────────────────────────────────────── */}
      <MoreInfoSection />

      {/* ── 9. Final CTA (existing) ─────────────────────────────────────── */}
      <FinalCTA />
    </>
  );
}

// ── Section: HERO ────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id={hero.sectionId}
      aria-label="Einleitung"
      className="relative overflow-hidden bg-surface-warm"
    >
      {/* Decorative diagonal grain pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(74, 74, 73, 0.08) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <Container className="relative pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-orange">
              <span aria-hidden="true" className="h-px w-10 bg-brand-orange" />
              {hero.eyebrow}
            </p>
            <h1 className="mt-6 font-serif text-[44px] font-medium leading-[0.96] tracking-[-0.02em] text-text-dark md:text-[68px] lg:text-[80px]">
              {hero.headlineLead}
              <br />
              <YellowUnderline>{hero.headlineEmphasis}</YellowUnderline>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-text-dark md:text-xl">
              {hero.subheadline}
            </p>
            <ul className="mt-8 grid gap-3">
              {hero.bullets.map((bullet) => (
                <li key={bullet.id} className="flex items-start gap-3">
                  <GreenCheck />
                  <span className="text-[15px] leading-snug text-text-dark md:text-base">
                    {bullet.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                href={siteConfig.portalWelcomeUrl}
                external
                variant="secondary"
                size="lg"
              >
                {hero.ctaLabel}
              </Button>
              <a
                href={`#${featureGrid.sectionId}`}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-text-dark underline decoration-brand-yellow decoration-2 underline-offset-[6px] hover:decoration-brand-orange"
              >
                {hero.ctaSecondaryLabel}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Portal mock UI card */}
          <PortalMockup />
        </div>
      </Container>
    </section>
  );
}

function PortalMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
      {/* Floating yellow accent */}
      <div
        aria-hidden="true"
        className="absolute -left-6 -top-6 z-0 h-24 w-24 rounded-full bg-brand-yellow/30 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-8 -right-8 z-0 h-32 w-32 rounded-full bg-brand-orange/20 blur-3xl"
      />

      <div className="relative z-10 rotate-[1.5deg] rounded-[28px] border border-neutral-200 bg-white p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] md:p-7">
        {/* Mock browser/app chrome */}
        <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-orange/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-green/80" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
            Elternportal
          </span>
        </div>

        <div className="mt-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
            Bildschirmzeit Heute
          </p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-serif text-5xl font-medium text-text-dark">
              1:47
            </span>
            <span className="text-sm text-text-muted">von 2:30 Std.</span>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-yellow to-brand-orange"
              style={{ width: "70%" }}
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-[14px] bg-surface-warm p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                Status
              </p>
              <p className="mt-1 font-serif text-lg font-medium text-text-dark">
                Online
              </p>
            </div>
            <div className="rounded-[14px] bg-surface-warm p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                Webfilter
              </p>
              <p className="mt-1 font-serif text-lg font-medium text-brand-green">
                Aktiv
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-[14px] bg-text-dark p-4 text-white">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                SOS Internet sperren
              </span>
              <span
                aria-hidden="true"
                className="flex h-6 w-11 items-center rounded-full bg-brand-orange p-0.5"
              >
                <span className="ml-auto block h-5 w-5 rounded-full bg-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Section: SECTION NAV ─────────────────────────────────────────────────

function SectionNav() {
  return (
    <nav
      aria-label="Inhalt der Seite"
      className="sticky top-20 z-30 hidden border-y border-neutral-200 bg-surface/95 backdrop-blur lg:block"
    >
      <Container className="!max-w-[1200px] py-3">
        <ol className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group inline-flex items-baseline gap-2 transition-colors hover:text-text-dark"
              >
                <span className="font-serif text-base font-normal italic tracking-normal">
                  {s.ordinal}
                </span>
                <span>{s.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}

// ── Section: FEATURE GRID ────────────────────────────────────────────────

function FeatureGridSection() {
  const headlineId = `${featureGrid.sectionId}-heading`;
  return (
    <section
      id={featureGrid.sectionId}
      aria-labelledby={headlineId}
      className="bg-surface py-20 md:py-28"
    >
      <Container className="!max-w-[1200px]">
        <div className="max-w-2xl">
          <SectionEyebrow ordinal="01">{featureGrid.eyebrow}</SectionEyebrow>
          <SectionHeadline id={headlineId} className="mt-5">
            {featureGrid.headline}
          </SectionHeadline>
          <p className="mt-5 max-w-xl text-lg text-text-dark/80">{featureGrid.sub}</p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureGrid.cards.map((card, idx) => (
            <li key={card.id}>
              <article className="group relative flex h-full flex-col rounded-[20px] border border-neutral-200 bg-surface-warm p-6 transition-all hover:border-text-dark hover:bg-white">
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 font-serif text-sm italic text-text-muted"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <FeatureIcon type={card.icon} />
                </span>
                <h3 className="mt-6 font-serif text-xl font-medium leading-tight text-text-dark">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-dark/85">
                  {card.body}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <CallToActionBlock
          label={featureGrid.ctaLabel}
          sub={featureGrid.ctaSub}
          button={featureGrid.ctaButton}
        />
      </Container>
    </section>
  );
}

// ── Section: PRIVACY ─────────────────────────────────────────────────────

function PrivacySection() {
  const headlineId = `${privacy.sectionId}-heading`;
  return (
    <section
      id={privacy.sectionId}
      aria-labelledby={headlineId}
      className="bg-surface-ink py-20 text-white md:py-28"
    >
      <Container className="!max-w-[1200px]">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-yellow">
              <span className="font-serif text-base font-normal italic tracking-normal text-white/50">
                02
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-brand-yellow" />
              <span>{privacy.eyebrow}</span>
            </p>
            <h2
              id={headlineId}
              className="mt-5 font-serif text-[34px] font-medium leading-[1.05] tracking-[-0.01em] text-white md:text-[44px]"
            >
              {privacy.headline}
            </h2>
            <p className="mt-3 font-serif text-2xl italic text-brand-yellow md:text-3xl">
              {privacy.statement}
            </p>
            <p className="mt-6 max-w-md text-base text-white/70">{privacy.intro}</p>

            {/* Lock comparison */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              <ComparisonCard
                state="open"
                label={privacy.comparison.other.label}
                sub={privacy.comparison.other.sub}
              />
              <ComparisonCard
                state="closed"
                label={privacy.comparison.kidgonet.label}
                sub={privacy.comparison.kidgonet.sub}
              />
            </div>
          </div>

          <ol className="grid gap-0">
            {privacy.bullets.map((item, idx) => (
              <li
                key={item.id}
                className="grid gap-4 border-t border-white/10 py-6 md:grid-cols-[60px_1fr] md:gap-6 last:border-b last:border-white/10"
              >
                <span className="font-serif text-2xl italic text-brand-yellow md:text-3xl">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-serif text-xl font-medium text-white md:text-2xl">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 md:text-base">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function ComparisonCard({
  state,
  label,
  sub,
}: {
  state: "open" | "closed";
  label: string;
  sub: string;
}) {
  const isOpen = state === "open";
  return (
    <div
      className={`flex flex-col items-start rounded-[18px] p-5 ${
        isOpen
          ? "bg-white/5"
          : "bg-brand-yellow text-text-dark"
      }`}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        {isOpen ? (
          <>
            <rect x="8" y="14" width="16" height="12" rx="2" />
            <path d="M11 14V9a5 5 0 0 1 10 0" strokeLinecap="round" />
          </>
        ) : (
          <>
            <rect x="8" y="14" width="16" height="12" rx="2" />
            <path d="M11 14V9a5 5 0 0 1 10 0v5" strokeLinecap="round" />
          </>
        )}
      </svg>
      <p
        className={`mt-4 text-sm font-bold ${isOpen ? "text-white" : "text-text-dark"}`}
      >
        {label}
      </p>
      <p
        className={`mt-1 text-xs leading-snug ${
          isOpen ? "text-white/60" : "text-text-dark/75"
        }`}
      >
        {sub}
      </p>
    </div>
  );
}

// ── Section: WEBFILTER ───────────────────────────────────────────────────

function WebfilterSection() {
  const headlineId = `${webfilter.sectionId}-heading`;
  return (
    <section
      id={webfilter.sectionId}
      aria-labelledby={headlineId}
      className="bg-surface py-20 md:py-28"
    >
      <Container className="!max-w-[1200px]">
        <div className="max-w-2xl">
          <SectionEyebrow ordinal="03">{webfilter.eyebrow}</SectionEyebrow>
          <SectionHeadline id={headlineId} className="mt-5">
            {webfilter.headline}
          </SectionHeadline>
          <p className="mt-5 max-w-xl text-lg text-text-dark/80">{webfilter.intro}</p>
        </div>

        {/* Type cards */}
        <ul className="mt-14 grid gap-6 sm:grid-cols-3">
          {webfilter.typeCards.map((card, idx) => (
            <li
              key={card.id}
              className="relative rounded-[20px] bg-surface-warm p-6"
            >
              <span
                aria-hidden="true"
                className="absolute -top-3 left-6 inline-flex h-6 items-center rounded-full bg-text-dark px-3 font-serif text-xs italic text-brand-yellow"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-lg font-medium text-text-dark">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-dark/85">
                {card.body}
              </p>
            </li>
          ))}
        </ul>

        {/* Age group tiers */}
        <div className="mt-20 max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
            Drei Altersstufen
          </p>
          <h3 className="mt-3 font-serif text-2xl font-medium text-text-dark md:text-3xl">
            Das Alter des Kindes bestimmt die Intensität.
          </h3>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {webfilter.ageGroups.map((group, idx) => {
            const intensity = idx === 0 ? "Streng" : idx === 1 ? "Moderat" : "Grundlegend";
            return (
              <li
                key={group.id}
                className="relative overflow-hidden rounded-[20px] border border-neutral-200 bg-white p-6"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                  {group.short}
                </span>
                <p className="mt-3 font-serif text-2xl font-medium text-text-dark">
                  {group.label}
                </p>
                <p className="mt-2 text-sm text-text-dark/75">{group.description}</p>
                <div className="mt-6">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted">
                    <span>Filter Intensität</span>
                    <span>{intensity}</span>
                  </div>
                  <div className="mt-2 flex gap-1">
                    {[0, 1, 2].map((segment) => (
                      <span
                        key={segment}
                        className={`h-1.5 flex-1 rounded-full ${
                          segment <= 2 - idx ? "bg-brand-yellow" : "bg-neutral-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Filter table */}
        <div className="mt-20 max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
            Filterkategorien
          </p>
          <h3 className="mt-3 font-serif text-2xl font-medium text-text-dark md:text-3xl">
            {webfilter.tableHeadline}
          </h3>
          <p className="mt-3 text-sm text-text-dark/70">{webfilter.tableNote}</p>
        </div>

        <div className="mt-8 overflow-x-auto rounded-[20px] border border-neutral-200 bg-white">
          <table className="w-full min-w-[640px] text-sm">
            <caption className="sr-only">{webfilter.tableHeadline}</caption>
            <thead>
              <tr className="border-b border-neutral-200 bg-surface-warm">
                <th
                  scope="col"
                  className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.16em] text-text-dark"
                >
                  Kategorie
                </th>
                {webfilter.ageGroups.map((g) => (
                  <th
                    key={g.id}
                    scope="col"
                    className="px-3 py-4 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-text-dark"
                  >
                    {g.short}
                    <span className="ml-1 font-normal text-text-muted normal-case tracking-normal">
                      ({g.id})
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {webfilter.categories.map((cat, idx) => (
                <tr
                  key={cat.id}
                  className={
                    idx % 2 === 0
                      ? "bg-white"
                      : "bg-surface-warm/40"
                  }
                >
                  <th
                    scope="row"
                    className="px-5 py-3 text-left text-sm font-medium text-text-dark"
                  >
                    {cat.name}
                  </th>
                  <td className="px-3 py-3 text-center">
                    {cat["0-8"] ? <CheckMark /> : <CrossMark />}
                  </td>
                  <td className="px-3 py-3 text-center">
                    {cat["9-12"] ? <CheckMark /> : <CrossMark />}
                  </td>
                  <td className="px-3 py-3 text-center">
                    {cat["13-15"] ? <CheckMark /> : <CrossMark />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

// ── Section: SCREEN TIME ─────────────────────────────────────────────────

function ScreenTimeSection() {
  const headlineId = `${screenTime.sectionId}-heading`;
  return (
    <section
      id={screenTime.sectionId}
      aria-labelledby={headlineId}
      className="bg-surface-warm py-20 md:py-28"
    >
      <Container className="!max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionEyebrow ordinal="04">{screenTime.eyebrow}</SectionEyebrow>
            <SectionHeadline id={headlineId} className="mt-5">
              {screenTime.headline}
            </SectionHeadline>
            <p className="mt-6 text-lg text-text-dark/80">{screenTime.body}</p>
            <ul className="mt-8 grid gap-3">
              {screenTime.bullets.map((bullet) => (
                <li key={bullet.id} className="flex items-start gap-3">
                  <GreenCheck />
                  <span className="text-text-dark">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mock phone screenshots */}
          <PhoneMockGrid />
        </div>

        {/* Sub-features */}
        <ul className="mt-20 grid gap-5 sm:grid-cols-3">
          {screenTime.subFeatures.map((feature) => (
            <li
              key={feature.id}
              className="rounded-[20px] border border-neutral-200 bg-white p-6"
            >
              <p className="font-serif text-3xl italic text-brand-orange">
                {feature.keyhint}
              </p>
              <h3 className="mt-4 font-serif text-xl font-medium text-text-dark">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-dark/85">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>

        <CallToActionBlock
          label={screenTime.ctaLabel}
          sub={screenTime.ctaSub}
          button={screenTime.ctaButton}
        />
      </Container>
    </section>
  );
}

function PhoneMockGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {screenTime.mockups.map((mock, idx) => (
        <div
          key={mock.id}
          className={`relative aspect-[9/16] overflow-hidden rounded-[24px] border border-neutral-200 bg-white p-4 ${
            idx % 2 === 1 ? "lg:mt-8" : ""
          }`}
        >
          <div
            aria-hidden="true"
            className={`absolute inset-0 bg-gradient-to-br ${mock.accent}`}
          />
          {/* Notch */}
          <div className="relative z-10 mx-auto mb-4 h-1 w-12 rounded-full bg-text-dark/20" />
          <div className="relative z-10 space-y-3">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-text-muted">
              Kidgonet
            </p>
            <p className="font-serif text-base font-medium leading-tight text-text-dark">
              {mock.title}
            </p>
            <div className="rounded-[10px] bg-white/80 p-3 backdrop-blur-sm">
              <p className="text-[10px] text-text-dark/80">{mock.time}</p>
            </div>
            <div className="rounded-[10px] bg-text-dark p-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  Aktiv
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-4 w-7 items-center rounded-full bg-brand-yellow p-0.5"
                >
                  <span className="ml-auto block h-3 w-3 rounded-full bg-white" />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Section: PORTAL ──────────────────────────────────────────────────────

function PortalSection() {
  const headlineId = `${portal.sectionId}-heading`;
  return (
    <section
      id={portal.sectionId}
      aria-labelledby={headlineId}
      className="bg-surface py-20 md:py-28"
    >
      <Container className="!max-w-[1200px]">
        <div className="max-w-2xl">
          <SectionEyebrow ordinal="05">{portal.eyebrow}</SectionEyebrow>
          <SectionHeadline id={headlineId} className="mt-5">
            {portal.headline}
          </SectionHeadline>
          <p className="mt-5 text-lg text-text-dark/80">{portal.intro}</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* License example */}
          <div className="self-start rounded-[20px] bg-surface-cream p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
              {portal.licenseExample.headline}
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-text-dark">
              {portal.licenseExample.description}
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-[10px] bg-white p-3">
                <p className="font-serif text-2xl font-medium text-text-dark">5</p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-text-muted">
                  Lizenzen
                </p>
              </div>
              <div className="rounded-[10px] bg-white p-3">
                <p className="font-serif text-2xl font-medium text-text-dark">∞</p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-text-muted">
                  Kinder
                </p>
              </div>
              <div className="rounded-[10px] bg-white p-3">
                <p className="font-serif text-2xl font-medium text-text-dark">14</p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-text-muted">
                  Tage gratis
                </p>
              </div>
            </div>
          </div>

          {/* Settings checklist */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
              {portal.settingsHeadline}
            </p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {portal.settingsBullets.map((bullet, idx) => (
                <li
                  key={bullet.id}
                  className="flex items-baseline gap-3 border-b border-neutral-100 py-2.5"
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-xs italic text-text-muted"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-text-dark">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── Section: NUMMER GEGEN KUMMER ─────────────────────────────────────────

function NgkSection() {
  const headlineId = `${nummerGegenKummer.sectionId}-heading`;
  return (
    <section
      id={nummerGegenKummer.sectionId}
      aria-labelledby={headlineId}
      className="relative overflow-hidden bg-surface-cream py-20 md:py-28"
    >
      <Container className="!max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <SectionEyebrow ordinal="06">{nummerGegenKummer.eyebrow}</SectionEyebrow>
            <SectionHeadline id={headlineId} className="mt-5">
              {nummerGegenKummer.headline}
            </SectionHeadline>
            <p className="mt-6 text-base leading-relaxed text-text-dark/85">
              {nummerGegenKummer.intro}
            </p>
            <a
              href={nummerGegenKummer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-text-dark underline decoration-brand-yellow decoration-[3px] underline-offset-[6px] hover:decoration-brand-orange"
            >
              {nummerGegenKummer.urlLabel}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <figure className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-2 -top-12 font-serif text-[140px] leading-none text-brand-yellow/60 md:text-[200px]"
            >
              „
            </span>
            <blockquote className="relative pl-12 md:pl-20">
              <p className="font-serif text-2xl font-medium leading-[1.25] text-text-dark md:text-3xl">
                {nummerGegenKummer.quote}
              </p>
            </blockquote>
            <figcaption className="mt-8 pl-12 md:pl-20">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                {nummerGegenKummer.subHeadline}
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-text-dark/85">
                {nummerGegenKummer.quoteContext}
              </p>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}

// ── Section: MORE INFO ───────────────────────────────────────────────────

function MoreInfoSection() {
  const headlineId = `${moreInfo.sectionId}-heading`;
  return (
    <section
      id={moreInfo.sectionId}
      aria-labelledby={headlineId}
      className="bg-surface py-20 md:py-28"
    >
      <Container className="!max-w-[1200px]">
        <div className="max-w-2xl">
          <SectionEyebrow ordinal="07">{moreInfo.eyebrow}</SectionEyebrow>
          <SectionHeadline id={headlineId} className="mt-5">
            {moreInfo.headline}
          </SectionHeadline>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-[20px] border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {moreInfo.cards.map((card, idx) => (
            <li key={card.id} className="bg-white p-7 transition-colors hover:bg-surface-warm">
              <span
                aria-hidden="true"
                className="font-serif text-xs italic text-text-muted"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-lg font-medium text-text-dark">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-dark/85">
                {card.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

// ── Reusable: CTA Block ──────────────────────────────────────────────────

function CallToActionBlock({
  label,
  sub,
  button,
}: {
  label: string;
  sub: string;
  button: string;
}) {
  return (
    <div className="mt-16 overflow-hidden rounded-[24px] bg-text-dark p-8 md:p-12">
      <div className="grid items-center gap-6 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="font-serif text-2xl font-medium leading-tight text-white md:text-3xl">
            {label}
          </p>
          <p className="mt-2 text-sm text-white/70">{sub}</p>
        </div>
        <div className="md:justify-self-end">
          <Button
            href={siteConfig.portalWelcomeUrl}
            external
            variant="secondary"
            size="lg"
          >
            {button}
          </Button>
        </div>
      </div>
    </div>
  );
}
