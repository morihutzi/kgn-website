import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { CheckBadge } from "@/components/ui/CheckBadge";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ChildviewMockupScaled } from "@/components/mockups/ChildviewMockupScaled";
import { ElternportalMockup } from "@/components/mockups/ElternportalMockup";
import { AppsFreigebenMockup } from "@/components/mockups/AppsFreigebenMockup";
import { InternetfilterMockup } from "@/components/mockups/InternetfilterMockup";
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

// ── Reusable atoms ───────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-text-muted">
      {children}
    </p>
  );
}

function FeatureMockup({ type }: { type: FeatureGridIcon }) {
  switch (type) {
    case "timer":
      return <ChildviewMockupScaled width={150} />;
    case "devices":
      return <ElternportalMockup />;
    case "apps":
      return <AppsFreigebenMockup />;
    case "filter":
      return <InternetfilterMockup />;
  }
}

// ── Page ─────────────────────────────────────────────────────────────────

export default function WasKannDieAppPage() {
  return (
    <>
      <HeroSection />
      <FeatureGridSection />
      <PrivacySection />
      <WebfilterSection />
      <ScreenTimeSection />
      <PortalSection />
      <NgkSection />
      <MoreInfoSection />
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
      className="bg-white py-12 md:py-16"
    >
      <Container className="!max-w-[1100px]">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_1fr] md:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow bg-white px-4 py-1.5 text-sm text-text-dark">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-brand-yellow"
              />
              {hero.eyebrow}
            </span>
            <h1 className="mt-5 text-[34px] font-extrabold leading-[1.05] text-text-dark md:text-[48px] lg:text-[56px]">
              {hero.headlineLead}{" "}
              <span className="text-brand-yellow">{hero.headlineEmphasis}</span>
            </h1>
            <p className="mt-4 max-w-md text-lg text-text-dark md:text-xl">
              {hero.subheadline}
            </p>
            <ul className="mt-6 grid gap-2.5">
              {hero.bullets.map((bullet) => (
                <li key={bullet.id} className="flex items-start gap-3">
                  <CheckBadge />
                  <span className="text-[15px] leading-snug text-text-dark">
                    {bullet.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button
                href={siteConfig.portalWelcomeUrl}
                external
                variant="primary"
                size="lg"
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
      </Container>
    </section>
  );
}

function HeroMockupCluster() {
  return (
    <div className="relative mx-auto flex w-full max-w-[480px] items-center justify-center py-10 md:py-16">
      {/* Background smiley — large, faded, behind phone */}
      <Image
        src="/images/icons/smiley-orange.png"
        alt=""
        aria-hidden="true"
        width={70}
        height={64}
        className="pointer-events-none absolute right-[-12%] top-1/2 -z-0 hidden h-[420px] w-auto -translate-y-1/2 opacity-20 blur-sm md:block"
      />

      {/* Phone mockup */}
      <div className="relative z-10">
        <ChildviewMockupScaled width={260} />
      </div>

      {/* Top-right badge: blocked content */}
      <div className="absolute right-[-4%] top-6 z-20 hidden items-center gap-3 rounded-[14px] border border-neutral-100 bg-white px-4 py-3 shadow-[0_12px_30px_-12px_rgba(74,74,73,0.25)] md:flex">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6 flex-shrink-0 text-text-dark"
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
          <p className="text-sm font-extrabold leading-tight text-text-dark">
            Erwachseneninhalte blockiert
          </p>
          <p className="mt-0.5 text-xs text-text-muted">In Echtzeit</p>
        </div>
      </div>

      {/* Bottom-left badge: location */}
      <div className="absolute bottom-6 left-[-4%] z-20 hidden items-center gap-3 rounded-[14px] border border-neutral-100 bg-white px-4 py-3 shadow-[0_12px_30px_-12px_rgba(74,74,73,0.25)] md:flex">
        <div>
          <p className="text-sm font-extrabold leading-tight text-text-dark">
            Standort im Blick
          </p>
          <p className="mt-0.5 text-xs text-text-muted">
            Sieh wo dein Kind gerade ist
          </p>
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6 flex-shrink-0 text-brand-yellow"
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
      className="bg-surface-muted py-14 md:py-20"
    >
      <Container className="!max-w-[1100px]">
        <div className="max-w-2xl text-center md:mx-auto">
          <Eyebrow>{featureGrid.eyebrow}</Eyebrow>
          <SectionHeading id={headlineId} align="center" className="mt-3">
            {featureGrid.headline}
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-xl text-text-dark md:text-lg">
            {featureGrid.sub}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureGrid.cards.map((card) => (
            <li key={card.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-neutral-200 bg-white">
                <div className="flex items-center justify-center bg-surface-warm px-4 py-6">
                  <FeatureMockup type={card.icon} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-extrabold leading-tight text-text-dark">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-dark">
                    {card.body}
                  </p>
                </div>
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

// ── 3. PRIVACY ───────────────────────────────────────────────────────────

function PrivacySection() {
  const headlineId = `${privacy.sectionId}-heading`;
  return (
    <section
      id={privacy.sectionId}
      aria-labelledby={headlineId}
      className="bg-white py-14 md:py-20"
    >
      <Container className="!max-w-[1100px]">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-14">
          <div>
            <Eyebrow>{privacy.eyebrow}</Eyebrow>
            <SectionHeading id={headlineId} className="mt-3">
              {privacy.headline}
            </SectionHeading>
            <p className="mt-4 max-w-md text-text-dark">{privacy.intro}</p>
          </div>

          <ul className="grid gap-3">
            {privacy.bullets.map((item) => (
              <li
                key={item.id}
                className="flex items-start gap-4 rounded-[16px] border border-neutral-200 bg-white p-5"
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
        </div>
      </Container>
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
      className="bg-surface-muted py-14 md:py-20"
    >
      <Container className="!max-w-[1100px]">
        <div className="max-w-2xl text-center md:mx-auto">
          <Eyebrow>{webfilter.eyebrow}</Eyebrow>
          <SectionHeading id={headlineId} align="center" className="mt-3">
            {webfilter.headline}
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-xl text-text-dark md:text-lg">
            {webfilter.intro}
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {webfilter.ageGroups.map((group, idx) => {
            const intensity =
              idx === 0 ? "Streng" : idx === 1 ? "Moderat" : "Grundlegend";
            return (
              <li
                key={group.id}
                className="rounded-[16px] border-2 border-brand-yellow bg-white p-6"
              >
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-green">
                  {group.short}
                </p>
                <p className="mt-2 text-2xl font-extrabold text-text-dark">
                  {group.label}
                </p>
                <p className="mt-2 text-sm text-text-dark">{group.description}</p>
                <div className="mt-5">
                  <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-[0.16em] text-text-muted">
                    <span>Filter</span>
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
      </Container>
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
      className="bg-white py-14 md:py-20"
    >
      <Container className="!max-w-[1100px]">
        <div className="grid gap-10 md:grid-cols-[1fr_1.05fr] md:gap-14">
          <div>
            <Eyebrow>{screenTime.eyebrow}</Eyebrow>
            <SectionHeading id={headlineId} className="mt-3">
              {screenTime.headline}
            </SectionHeading>
            <p className="mt-4 text-text-dark md:text-lg">{screenTime.body}</p>
            <ul className="mt-6 grid gap-2.5">
              {screenTime.bullets.map((bullet) => (
                <li key={bullet.id} className="flex items-start gap-3">
                  <CheckBadge />
                  <span className="text-text-dark">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] md:max-w-none">
            <div className="overflow-hidden rounded-[20px] border border-neutral-200 bg-white">
              <Image
                src={screenTime.image.src}
                alt={screenTime.image.alt}
                width={800}
                height={600}
                sizes="(min-width: 768px) 520px, 100vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-3">
          {screenTime.subFeatures.map((feature) => (
            <li
              key={feature.id}
              className="rounded-[16px] border border-neutral-200 bg-white p-6"
            >
              <h3 className="text-base font-extrabold text-brand-yellow">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dark">
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

// ── 6. PORTAL ────────────────────────────────────────────────────────────

function PortalSection() {
  const headlineId = `${portal.sectionId}-heading`;
  return (
    <section
      id={portal.sectionId}
      aria-labelledby={headlineId}
      className="bg-surface-muted py-14 md:py-20"
    >
      <Container className="!max-w-[1100px]">
        <div className="max-w-2xl text-center md:mx-auto">
          <Eyebrow>{portal.eyebrow}</Eyebrow>
          <SectionHeading id={headlineId} align="center" className="mt-3">
            {portal.headline}
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-xl text-text-dark">{portal.intro}</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.3fr] md:gap-12">
          <div className="self-start rounded-[16px] border-2 border-brand-yellow bg-white p-6">
            <Eyebrow>{portal.licenseExample.headline}</Eyebrow>
            <p className="mt-4 text-sm leading-relaxed text-text-dark">
              {portal.licenseExample.description}
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-[12px] bg-surface-muted p-3">
                <p className="text-2xl font-extrabold text-brand-yellow">5</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">
                  Lizenzen
                </p>
              </div>
              <div className="rounded-[12px] bg-surface-muted p-3">
                <p className="text-2xl font-extrabold text-brand-yellow">∞</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">
                  Kinder
                </p>
              </div>
              <div className="rounded-[12px] bg-surface-muted p-3">
                <p className="text-2xl font-extrabold text-brand-yellow">7</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">
                  Tage gratis
                </p>
              </div>
            </div>
          </div>

          <div>
            <Eyebrow>{portal.settingsHeadline}</Eyebrow>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {portal.settingsBullets.map((bullet) => (
                <li
                  key={bullet.id}
                  className="flex items-start gap-3 rounded-[12px] bg-white px-4 py-3"
                >
                  <CheckBadge />
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

// ── 7. NUMMER GEGEN KUMMER ───────────────────────────────────────────────

function NgkSection() {
  const headlineId = `${nummerGegenKummer.sectionId}-heading`;
  return (
    <section
      id={nummerGegenKummer.sectionId}
      aria-labelledby={headlineId}
      className="bg-white py-14 md:py-20"
    >
      <Container className="!max-w-[1100px]">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14">
          <div>
            <Eyebrow>{nummerGegenKummer.eyebrow}</Eyebrow>
            <SectionHeading id={headlineId} className="mt-3">
              {nummerGegenKummer.headline}
            </SectionHeading>
            <p className="mt-4 text-text-dark">{nummerGegenKummer.intro}</p>
            <a
              href={nummerGegenKummer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-text-dark underline decoration-brand-yellow decoration-[3px] underline-offset-[6px] hover:decoration-brand-green"
            >
              {nummerGegenKummer.urlLabel}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <figure className="rounded-[16px] border border-neutral-200 bg-white p-6 md:p-8">
            <Eyebrow>{nummerGegenKummer.subHeadline}</Eyebrow>
            <blockquote className="mt-4 border-l-4 border-brand-yellow pl-5">
              <p className="text-lg font-semibold leading-snug text-text-dark md:text-xl">
                {`„${nummerGegenKummer.quote}“`}
              </p>
            </blockquote>
            <figcaption className="mt-5 text-sm leading-relaxed text-text-dark">
              {nummerGegenKummer.quoteContext}
            </figcaption>
          </figure>
        </div>
      </Container>
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
      className="bg-surface-muted py-14 md:py-20"
    >
      <Container className="!max-w-[1100px]">
        <div className="max-w-2xl text-center md:mx-auto">
          <Eyebrow>{moreInfo.eyebrow}</Eyebrow>
          <SectionHeading id={headlineId} align="center" className="mt-3">
            {moreInfo.headline}
          </SectionHeading>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moreInfo.cards.map((card) => (
            <li key={card.id}>
              <article className="h-full rounded-[16px] border border-neutral-200 bg-white p-6">
                <h3 className="text-base font-extrabold text-brand-yellow">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dark">
                  {card.body}
                </p>
              </article>
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
    <div className="mt-14 overflow-hidden rounded-[20px] bg-brand-yellow px-7 py-8 text-center md:py-10">
      <p className="text-xl font-extrabold leading-snug text-white md:text-2xl">
        {label}
      </p>
      <p className="mt-2 text-sm text-white/90">{sub}</p>
      <Button
        href={siteConfig.portalWelcomeUrl}
        external
        variant="primary"
        size="lg"
        className="mt-5 !bg-white !text-text-dark hover:!bg-surface-muted"
      >
        {button}
      </Button>
    </div>
  );
}
