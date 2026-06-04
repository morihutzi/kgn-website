import type { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { CheckBadge } from "@/components/ui/CheckBadge";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { RelatedArticles } from "@/components/elternratgeber/RelatedArticles";
import { getOverviewRelatedArticles } from "@/lib/elternratgeber/feature-mapping";
import { FeatureCarousel } from "@/components/sections/FeatureCarousel";
import { ChildviewMockupScaled } from "@/components/mockups/ChildviewMockupScaled";
import { ConnectDevicesMockupScaled } from "@/components/mockups/ConnectDevicesMockupScaled";
import { LaptopElternportalMockup } from "@/components/mockups/LaptopElternportalMockup";
import { AppsFreigebenMockupScaled } from "@/components/mockups/AppsFreigebenMockupScaled";
import { InternetfilterMockupScaled } from "@/components/mockups/InternetfilterMockupScaled";
import type { FeatureGridIcon } from "@/content/features";
import { featuresPage } from "@/content/features";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Was kann die App? Alle Funktionen im Überblick",
  description:
    "Bildschirmzeit begrenzen, Webfilter einrichten, Apps sperren, Standort verfolgen: Alle Funktionen der Kidgonet Kinderschutz-App im Überblick.",
  alternates: { canonical: "/was-kann-die-app" },
  openGraph: {
    title: "Was kann Kidgonet? Alle Funktionen der Kinderschutz-App",
    description:
      "Bildschirmzeit, altersgerechter Webfilter, App-Blocker, Standortverfolgung und SOS-Funktion. Alle Kidgonet-Funktionen im Überblick.",
    url: "https://www.kidgonet.de/was-kann-die-app",
  },
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

function FeatureMockup({ type }: { type: FeatureGridIcon }) {
  switch (type) {
    case "timer":
      return <ChildviewMockupScaled width={125} />;
    case "devices":
      return <ConnectDevicesMockupScaled width={125} />;
    case "apps":
      return <AppsFreigebenMockupScaled width={125} />;
    case "filter":
      return <InternetfilterMockupScaled width={125} />;
  }
}

export default function WasKannDieAppPage() {
  return (
    <>
      <HeroSection />
      <FeatureGridSection />
      <PrivacySection />
      <SurfenCtaSection />
      <WebfilterSection />
      <ScreenTimeSection />
      <PortalSection />
      <NgkSection />
      <MoreInfoSection />
      <FeaturePagesSection />
      <RelatedArticles
        articles={getOverviewRelatedArticles()}
        heading="Mehr Wissen aus dem Elternratgeber"
      />
      <FinalCTA />
    </>
  );
}

// ── 1. HERO ──────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id={hero.sectionId}
      aria-label="Einleitung"
      className="bg-white pt-10 pb-8 md:py-14"
    >
      <Section>
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_1fr] md:gap-10">
          <div>
            {/* Headline + kompaktes Phone — mobil zweispaltig, ab md einspaltig */}
            <div className="flex items-center gap-4 md:block">
              <div className="min-w-0 flex-1">
                <span className="inline-flex items-center rounded-full border border-brand-yellow bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-yellow">
                  {hero.eyebrow}
                </span>
                <h1 className="mt-4 text-[26px] font-extrabold leading-[1.05] text-text-dark md:text-[40px]">
                  {hero.headlineLead}{" "}
                  <span className="block whitespace-nowrap text-brand-yellow md:inline">
                    {hero.headlineEmphasis}
                  </span>
                </h1>
                <p className="mt-3 text-base text-text-dark md:text-lg">
                  Bildschirmzeit, Webfilter,
                  <br className="md:hidden" /> Standort und mehr.
                  <br className="md:hidden" /> Du steuerst alles aus dem
                  Elternportal.
                </p>
              </div>
              {/* Phone nur mobil — neben der Headline geerdet statt frei schwebend */}
              <div className="mr-3 shrink-0 md:hidden">
                <ChildviewMockupScaled width={110} />
              </div>
            </div>
            <ul className="mt-5 grid gap-2">
              {hero.bullets.map((bullet) => (
                <li key={bullet.id} className="flex items-start gap-3">
                  <CheckBadge />
                  <span className="text-sm leading-snug text-text-dark">
                    <strong className="font-extrabold">{bullet.strong}</strong>
                    {bullet.rest}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button
                href={siteConfig.portalWelcomeUrl}
                external
                variant="primary"
                size="md"
              >
                {hero.ctaLabel}
              </Button>
              <a
                href={`#${featureGrid.sectionId}`}
                className="text-sm font-semibold text-text-dark underline decoration-brand-yellow decoration-2 underline-offset-[6px] hover:decoration-brand-green"
              >
                {hero.ctaSecondaryLabel}
              </a>
            </div>
          </div>

          <HeroMockupCluster />
        </div>
      </Section>
    </section>
  );
}

function HeroMockupCluster() {
  return (
    <div className="relative mx-auto hidden w-full items-center justify-center md:flex md:py-6">
      {/* Background smiley — square container, object-contain to avoid distortion */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/2 top-1/2 z-0 hidden h-[320px] w-[320px] -translate-y-1/2 translate-x-[58%] md:block"
      >
        <ExportedImage
          src="/brand/smiley.png"
          alt=""
          fill
          sizes="320px"
          className="object-contain opacity-25 blur-sm"
        />
      </div>

      {/* Phone mockup: ChildviewMockup (Countdown-Timer aus der Kinder-App) */}
      <div className="relative z-10">
        <ChildviewMockupScaled width={200} />
      </div>

      {/* Top-right badge: Erwachseneninhalte blockiert */}
      <div className="absolute right-[-4%] top-2 z-20 hidden items-center gap-2.5 rounded-[14px] border border-neutral-100 bg-white px-3 py-2.5 shadow-[0_12px_30px_-12px_rgba(74,74,73,0.25)] md:flex">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 flex-shrink-0 text-text-dark"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3l18 18" />
          <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
          <path d="M16.681 16.673A8.717 8.717 0 0 1 12 18c-4 0-7.333-2-10-6 1.265-1.898 2.624-3.336 4.077-4.314m3.225-1.55A10.405 10.405 0 0 1 12 6c4 0 7.333 2 10 6a15.518 15.518 0 0 1-2.236 2.952" />
        </svg>
        <div>
          <p className="text-xs font-extrabold leading-tight text-text-dark">
            Erwachseneninhalte blockiert
          </p>
          <p className="mt-0.5 text-[10px] text-text-muted">In Echtzeit</p>
        </div>
      </div>

      {/* Bottom-left badge: Standort */}
      <div className="absolute bottom-4 left-[-4%] z-20 hidden items-center gap-2.5 rounded-[14px] border border-neutral-100 bg-white px-3 py-2.5 shadow-[0_12px_30px_-12px_rgba(74,74,73,0.25)] md:flex">
        <div>
          <p className="text-xs font-extrabold leading-tight text-text-dark">
            Standort in Echtzeit
          </p>
          <p className="mt-0.5 text-[10px] text-text-muted">
            Immer wissen, wo dein Kind ist
          </p>
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 flex-shrink-0 text-brand-yellow"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      </div>
    </div>
  );
}

// ── 2. FEATURE-GRID ──────────────────────────────────────────────────────

function FeatureGridSection() {
  const headlineId = `${featureGrid.sectionId}-heading`;
  return (
    <section
      id={featureGrid.sectionId}
      aria-labelledby={headlineId}
      className="bg-[#F4F0EB] pt-8 pb-10 md:py-14"
    >
      <Section maxWidth={1080}>
        <SectionHeading id={headlineId} size="small" align="center">
          Das kann die Kidgonet
          <br className="md:hidden" /> Kinderschutz App
        </SectionHeading>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-text-dark md:text-base">
          {featureGrid.sub}
        </p>

        {/* Mobile: Carousel mit Pfeilen + Punkt-Indikatoren */}
        <FeatureCarousel ariaLabel="Kernfunktionen der App">
          {featureGrid.cards.map((card, idx) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-[260px] items-center justify-center">
                <FeatureMockup type={card.icon} />
              </div>
              <p className="mt-3 text-xs font-semibold text-brand-yellow">
                Funktion {idx + 1}
              </p>
              <p className="mt-1 text-balance text-sm font-bold text-text-dark">
                {card.title}
              </p>
              <p className="mt-1 max-w-[260px] text-xs text-text-dark">
                {card.body}
              </p>
            </div>
          ))}
        </FeatureCarousel>

        {/* Desktop: 4-column grid */}
        <ol className="mt-7 hidden gap-4 md:grid md:grid-cols-4">
          {featureGrid.cards.map((card, idx) => (
            <li
              key={card.id}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-[290px] items-center justify-center">
                <FeatureMockup type={card.icon} />
              </div>
              <p className="mt-2 text-xs font-semibold text-brand-yellow">
                Funktion {idx + 1}
              </p>
              <p className="mt-1 text-balance text-base font-bold text-text-dark">
                {card.title}
              </p>
              <p className="mt-1 max-w-[240px] text-sm text-text-dark">
                {card.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>
    </section>
  );
}

// ── 2b. DOWNLOAD-CTA (nach Privatsphäre) ─────────────────────────────────

function SurfenCtaSection() {
  return (
    <section aria-label="App herunterladen" className="bg-white px-6 md:px-4">
      {/* Negativer Margin zieht die Karte in die Polster der Nachbar-Sections,
          damit der Abstand oben/unten nicht doppelt aufschlägt. */}
      <div className="mx-auto -my-8 max-w-[1080px] md:-my-10">
        <CallToActionBlock
          label={featureGrid.ctaLabel}
          sub={featureGrid.ctaSub}
          button={featureGrid.ctaButton}
        />
      </div>
    </section>
  );
}

// ── 3. PRIVACY ───────────────────────────────────────────────────────────

function PrivacySection() {
  const headlineId = `${privacy.sectionId}-heading`;
  return (
    <section
      id={privacy.sectionId}
      aria-labelledby={headlineId}
      className="bg-surface-muted py-10 md:py-14"
    >
      <Section>
        <SectionHeading id={headlineId} align="right">
          Kidgonet spioniert dein
          <br className="md:hidden" /> Kind nicht aus.
        </SectionHeading>
        <p className="mx-auto mt-3 max-w-2xl text-center text-text-dark">
          {privacy.intro}
        </p>
        <ul className="mx-auto mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">
          {privacy.bullets.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-3 rounded-[16px] border border-neutral-200 bg-white p-4"
            >
              <CheckBadge />
              <div>
                <p className="text-base font-extrabold text-text-dark">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-text-dark">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </section>
  );
}

// ── 4. WEBFILTER ─────────────────────────────────────────────────────────

function WebfilterSection() {
  const headlineId = `${webfilter.sectionId}-heading`;
  return (
    <section
      id={webfilter.sectionId}
      aria-labelledby={headlineId}
      className="bg-white py-10 md:py-14"
    >
      <Section>
        <SectionHeading id={headlineId} align="right">
          Ein Internetfilter, der mit
          <br className="md:hidden" /> dem Alter mitwächst.
        </SectionHeading>
        <p className="mx-auto mt-3 max-w-2xl text-center text-text-dark">
          {webfilter.intro}
        </p>

        <ul className="mt-7 grid gap-3 sm:grid-cols-3">
          {webfilter.ageGroups.map((group, idx) => {
            const intensity =
              idx === 0 ? "Streng" : idx === 1 ? "Moderat" : "Grundlegend";
            return (
              <li
                key={group.id}
                className="rounded-[16px] border-2 border-brand-yellow bg-white p-4"
              >
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-text-muted">
                  {group.short}
                </p>
                <p className="mt-1.5 text-lg font-extrabold text-text-dark">
                  {group.label}
                </p>
                <p className="mt-1 text-xs text-text-dark">
                  {group.description}
                </p>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-[9px] font-extrabold uppercase tracking-[0.16em] text-text-muted">
                    <span>Filter</span>
                    <span>{intensity}</span>
                  </div>
                  <div className="mt-1 flex gap-1">
                    {[0, 1, 2].map((segment) => (
                      <span
                        key={segment}
                        className={`h-1.5 flex-1 rounded-full ${
                          segment <= 2 - idx
                            ? "bg-brand-yellow"
                            : "bg-neutral-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>
    </section>
  );
}

// ── 5. SCREEN TIME ───────────────────────────────────────────────────────

function ScreenTimeSection() {
  const headlineId = `${screenTime.sectionId}-heading`;
  return (
    <section
      id={screenTime.sectionId}
      aria-labelledby={headlineId}
      className="bg-surface-muted py-10 md:py-14"
    >
      <Section maxWidth={900}>
        <div className="grid gap-8 md:grid-cols-[1fr_1.05fr] md:gap-10">
          <div>
            <SectionHeading id={headlineId} align="right">
              {screenTime.headline}
            </SectionHeading>
            <p className="mt-3 text-text-dark">{screenTime.body}</p>
            <ul className="mt-5 grid gap-2">
              {screenTime.bullets.map((bullet) => (
                <li key={bullet.id} className="flex items-start gap-3">
                  <CheckBadge />
                  <span className="text-sm text-text-dark">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto flex w-full justify-center md:justify-end">
            {/* Soft yellow glow behind phone */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-0 size-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow/25 blur-3xl"
            />
            <ChildviewMockupScaled width={200} />
          </div>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {screenTime.subFeatures.map((feature) => (
            <li
              key={feature.id}
              className="rounded-[16px] border border-neutral-200 bg-white p-4"
            >
              <h3 className="text-base font-extrabold text-brand-yellow">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-text-dark">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </section>
  );
}

// ── 6. PORTAL ────────────────────────────────────────────────────────────

function PortalSection() {
  const headlineId = `${portal.sectionId}-heading`;
  return (
    <section
      id={portal.sectionId}
      aria-labelledby={headlineId}
      className="bg-white py-10 md:py-14"
    >
      <Section>
        <SectionHeading id={headlineId} align="right">
          {portal.headline}
        </SectionHeading>
        <p className="mx-auto mt-3 max-w-xl text-center text-text-dark">
          Steuere alles über das Elternportal. Verfügbar als App für iOS
          und Android oder im Browser auf jedem Gerät.
        </p>

        <div className="mt-10 grid items-end gap-10 md:grid-cols-[auto_1fr] md:gap-10">
          <div className="flex flex-col items-center text-center">
            <ConnectDevicesMockupScaled width={150} />
            <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-yellow">
              Als App
            </p>
            <p className="mt-1 text-sm font-bold text-text-dark">
              iOS und Android
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <LaptopElternportalMockup />
            <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-yellow">
              Im Browser
            </p>
            <p className="mt-1 text-sm font-bold text-text-dark">
              Laptop, Tablet, Handy
            </p>
          </div>
        </div>
      </Section>
    </section>
  );
}

// ── 7. NUMMER GEGEN KUMMER ───────────────────────────────────────────────

function NgkSection() {
  const headlineId = `${nummerGegenKummer.sectionId}-heading`;
  return (
    <section
      id={nummerGegenKummer.sectionId}
      aria-labelledby={headlineId}
      className="bg-surface-muted py-10 md:py-14"
    >
      <Section>
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-10">
          <div>
            <SectionHeading id={headlineId} align="right">
              {nummerGegenKummer.headline}
            </SectionHeading>
            <p className="mt-3 text-sm text-text-dark">
              {nummerGegenKummer.intro}
            </p>
            <a
              href={nummerGegenKummer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-text-dark transition hover:text-brand-yellow"
            >
              {nummerGegenKummer.urlLabel}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          <figure className="rounded-[16px] border border-neutral-200 bg-white p-5 md:p-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-text-muted">
              {nummerGegenKummer.subHeadline}
            </p>
            <blockquote className="mt-3 border-l-4 border-brand-yellow pl-4">
              <p className="text-base font-semibold leading-snug text-text-dark md:text-lg">
                {`„${nummerGegenKummer.quote}“`}
              </p>
            </blockquote>
            <figcaption className="mt-4 text-xs leading-relaxed text-text-dark">
              {nummerGegenKummer.quoteContext}
            </figcaption>
          </figure>
        </div>
      </Section>
    </section>
  );
}

// ── 8. MORE INFO ─────────────────────────────────────────────────────────

function MoreInfoSection() {
  const headlineId = `${moreInfo.sectionId}-heading`;
  return (
    <section
      id={moreInfo.sectionId}
      aria-labelledby={headlineId}
      className="bg-white py-10 md:py-14"
    >
      <Section>
        <SectionHeading id={headlineId} align="right">
          {moreInfo.headline}
        </SectionHeading>

        <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {moreInfo.cards.map((card) => (
            <li key={card.id}>
              <article className="h-full rounded-[16px] border border-neutral-200 bg-white p-4">
                <h3 className="text-base font-extrabold text-brand-yellow">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-dark">
                  {card.body}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Section>
    </section>
  );
}

// ── 9. FEATURE PAGES ─────────────────────────────────────────────────────

const featurePages = [
  { href: "/bildschirmzeit", title: "Bildschirmzeit begrenzen", body: "Tageslimits, Wochenpläne und Sofort-Sperre für alle Geräte." },
  { href: "/webfilter", title: "Internetfilter für Kinder", body: "Browserunabhängiger DNS-Filter, drei Altersgruppen, automatische Updates." },
  { href: "/apps-freigeben", title: "Apps freigeben", body: "Lern-Apps und Notfall-Apps auch nach Ablauf des Limits nutzbar lassen." },
  { href: "/standort", title: "Standort verfolgen", body: "Echtzeit-GPS-Ortung im Elternportal, DSGVO-konform, Server in Deutschland." },
  { href: "/sperrmodus", title: "Alle Geräte sofort sperren", body: "Ein Klick sperrt alle Geräte – für Hausaufgaben, Mahlzeiten oder Schlafenszeit." },
];

function FeaturePagesSection() {
  const topRow = featurePages.slice(0, 3);
  const bottomRow = featurePages.slice(3);
  return (
    <section className="bg-surface-muted py-10 md:py-14">
      <Section>
        <SectionHeading align="right">Alle Funktionen im Detail</SectionHeading>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-text-dark md:text-base">
          Lies mehr über jede einzelne Funktion und wie sie im Familienalltag hilft.
        </p>
        <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topRow.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="group flex h-full flex-col rounded-[16px] border border-neutral-200 bg-white p-5 transition hover:border-brand-yellow hover:shadow-sm"
              >
                <h3 className="text-sm font-extrabold text-text-dark group-hover:text-brand-yellow">
                  {page.title}
                </h3>
                <p className="mt-1 flex-1 text-xs leading-relaxed text-text-dark/70">
                  {page.body}
                </p>
                <span className="mt-3 text-xs font-bold text-brand-yellow">
                  Mehr erfahren →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {bottomRow.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="group flex h-full flex-col rounded-[16px] border border-neutral-200 bg-white p-5 transition hover:border-brand-yellow hover:shadow-sm"
              >
                <h3 className="text-sm font-extrabold text-text-dark group-hover:text-brand-yellow">
                  {page.title}
                </h3>
                <p className="mt-1 flex-1 text-xs leading-relaxed text-text-dark/70">
                  {page.body}
                </p>
                <span className="mt-3 text-xs font-bold text-brand-yellow">
                  Mehr erfahren →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
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
    <div className="relative overflow-hidden rounded-[20px] bg-[#F8F2E7]">
      {/* Faded background photo of teens with smartphone */}
      <ExportedImage
        src="/images/banners/cta-teens.jpeg"
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 1024px) 1080px, 100vw"
        priority={false}
        className="object-cover object-right opacity-100"
      />

      {/* Content overlay */}
      <div className="relative z-10 px-6 py-10 text-left md:py-14 md:pr-[48%]">
        <p className="text-xl font-extrabold leading-snug text-text-dark md:text-2xl">
          {label}
        </p>
        <p className="mt-2 text-sm text-text-dark/75 md:text-base">{sub}</p>
        <div className="mt-5 flex flex-col items-start gap-4">
          <Button
            href={siteConfig.portalWelcomeUrl}
            external
            variant="primary"
            size="md"
          >
            {button}
          </Button>

          {/* Store badges — mobile only */}
          <StoreBadges size="sm" className="md:hidden" />
        </div>
      </div>
    </div>
  );
}
