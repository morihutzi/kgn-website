import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/layout/Section";
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

function FeatureMockup({ type }: { type: FeatureGridIcon }) {
  switch (type) {
    case "timer":
      return <ChildviewMockupScaled width={125} />;
    case "devices":
      return <ElternportalMockup />;
    case "apps":
      return <AppsFreigebenMockup />;
    case "filter":
      return <InternetfilterMockup />;
  }
}

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
      className="bg-surface-warm py-10 md:py-14"
    >
      <Section>
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_1fr] md:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow bg-white px-3 py-1 text-sm text-text-dark">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-brand-yellow"
              />
              {hero.eyebrow}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] text-text-dark md:text-[40px]">
              {hero.headlineLead}{" "}
              <span className="text-brand-yellow">{hero.headlineEmphasis}</span>
            </h1>
            <p className="mt-3 text-base text-text-dark md:text-lg">
              {hero.subheadline}
            </p>
            <ul className="mt-5 grid gap-2">
              {hero.bullets.map((bullet) => (
                <li key={bullet.id} className="flex items-start gap-3">
                  <CheckBadge />
                  <span className="text-sm leading-snug text-text-dark">
                    {bullet.text}
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

          <div className="flex justify-center">
            <ChildviewMockupScaled width={170} />
          </div>
        </div>
      </Section>
    </section>
  );
}

// ── 2. FEATURE-GRID ──────────────────────────────────────────────────────

function FeatureGridSection() {
  const headlineId = `${featureGrid.sectionId}-heading`;
  return (
    <section
      id={featureGrid.sectionId}
      aria-labelledby={headlineId}
      className="bg-white py-10 md:py-14"
    >
      <Section maxWidth={1080}>
        <SectionHeading id={headlineId} size="small" align="center">
          {featureGrid.headline}
        </SectionHeading>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-text-dark md:text-base">
          {featureGrid.sub}
        </p>

        {/* Mobile: horizontal scroll-snap */}
        <ol className="mt-7 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:hidden">
          {featureGrid.cards.map((card, idx) => (
            <li
              key={card.id}
              className="flex min-w-[calc(100%-2rem)] snap-center flex-col items-center text-center"
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
            </li>
          ))}
        </ol>

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

        <CallToActionBlock
          label={featureGrid.ctaLabel}
          sub={featureGrid.ctaSub}
          button={featureGrid.ctaButton}
        />
      </Section>
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
        <SectionHeading id={headlineId} align="center">
          {privacy.headline}
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
                <p className="text-sm font-extrabold text-text-dark">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-dark">
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
        <SectionHeading id={headlineId} align="center">
          {webfilter.headline}
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
            <SectionHeading id={headlineId}>{screenTime.headline}</SectionHeading>
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

          <div className="relative mx-auto w-full max-w-[400px] md:max-w-none">
            <div className="overflow-hidden rounded-[16px] border border-neutral-200 bg-white">
              <Image
                src={screenTime.image.src}
                alt={screenTime.image.alt}
                width={800}
                height={600}
                sizes="(min-width: 768px) 420px, 100vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {screenTime.subFeatures.map((feature) => (
            <li
              key={feature.id}
              className="rounded-[16px] border border-neutral-200 bg-white p-4"
            >
              <h3 className="text-sm font-extrabold text-brand-yellow">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-text-dark">
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
        <SectionHeading id={headlineId} align="center">
          {portal.headline}
        </SectionHeading>
        <p className="mx-auto mt-3 max-w-2xl text-center text-text-dark">
          {portal.intro}
        </p>

        <div className="mt-7 grid gap-6 md:grid-cols-[1fr_1.3fr] md:gap-8">
          <div className="self-start rounded-[16px] border-2 border-brand-yellow bg-white p-5">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-text-muted">
              {portal.licenseExample.headline}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-text-dark">
              {portal.licenseExample.description}
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-[10px] bg-surface-muted p-2">
                <p className="text-xl font-extrabold text-brand-yellow">5</p>
                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-text-muted">
                  Lizenzen
                </p>
              </div>
              <div className="rounded-[10px] bg-surface-muted p-2">
                <p className="text-xl font-extrabold text-brand-yellow">∞</p>
                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-text-muted">
                  Kinder
                </p>
              </div>
              <div className="rounded-[10px] bg-surface-muted p-2">
                <p className="text-xl font-extrabold text-brand-yellow">7</p>
                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-text-muted">
                  Tage gratis
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-text-muted">
              {portal.settingsHeadline}
            </p>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {portal.settingsBullets.map((bullet) => (
                <li
                  key={bullet.id}
                  className="flex items-start gap-2 rounded-[10px] bg-surface-muted px-3 py-2"
                >
                  <CheckBadge />
                  <span className="text-xs text-text-dark">{bullet.text}</span>
                </li>
              ))}
            </ul>
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
            <SectionHeading id={headlineId}>
              {nummerGegenKummer.headline}
            </SectionHeading>
            <p className="mt-3 text-sm text-text-dark">
              {nummerGegenKummer.intro}
            </p>
            <a
              href={nummerGegenKummer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-text-dark underline decoration-brand-yellow decoration-[3px] underline-offset-[6px] hover:decoration-brand-green"
            >
              {nummerGegenKummer.urlLabel}
              <span aria-hidden="true">↗</span>
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
        <SectionHeading id={headlineId} align="center">
          {moreInfo.headline}
        </SectionHeading>

        <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {moreInfo.cards.map((card) => (
            <li key={card.id}>
              <article className="h-full rounded-[16px] border border-neutral-200 bg-white p-4">
                <h3 className="text-sm font-extrabold text-brand-yellow">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-text-dark">
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
    <div className="mt-10 overflow-hidden rounded-[16px] bg-brand-yellow px-6 py-7 text-center md:py-8">
      <p className="text-lg font-extrabold leading-snug text-white md:text-xl">
        {label}
      </p>
      <p className="mt-1 text-sm text-white/90">{sub}</p>
      <Button
        href={siteConfig.portalWelcomeUrl}
        external
        variant="primary"
        size="md"
        className="mt-4 !bg-white !text-text-dark hover:!bg-surface-muted"
      >
        {button}
      </Button>
    </div>
  );
}
