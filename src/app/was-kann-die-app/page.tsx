import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { featuresPage } from "@/content/features";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Was kann die App?",
  description:
    "Bildschirmzeit, altersgerechter Webfilter, Geräteortung und SOS-Button — alle Funktionen von Kidgonet im Überblick.",
};

function GreenCheck() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FilterCheck({ active }: { active: boolean }) {
  if (!active) {
    return (
      <svg
        aria-label="Nicht gefiltert"
        role="img"
        viewBox="0 0 24 24"
        className="mx-auto h-5 w-5 text-neutral-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg
      aria-label="Gefiltert"
      role="img"
      viewBox="0 0 24 24"
      className="mx-auto h-5 w-5 text-brand-green"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OpenLockIcon() {
  return (
    <svg viewBox="0 0 64 64" className="mx-auto h-16 w-16" fill="none" aria-hidden="true">
      <rect x="12" y="28" width="40" height="28" rx="4" fill="#FC5802" opacity="0.15" stroke="#FC5802" strokeWidth="2" />
      <path d="M22 28V20a14 14 0 0 1 28 0" stroke="#FC5802" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="32" cy="42" r="4" fill="#FC5802" />
      <line x1="32" y1="46" x2="32" y2="52" stroke="#FC5802" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ClosedLockIcon() {
  return (
    <svg viewBox="0 0 64 64" className="mx-auto h-16 w-16" fill="none" aria-hidden="true">
      <rect x="12" y="28" width="40" height="28" rx="4" fill="#c6c500" opacity="0.15" stroke="#c6c500" strokeWidth="2" />
      <path d="M22 28V20a10 10 0 0 1 20 0v8" stroke="#c6c500" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="32" cy="42" r="4" fill="#c6c500" />
      <line x1="32" y1="46" x2="32" y2="52" stroke="#c6c500" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function FeatureIcon({ type }: { type: string }) {
  if (type === "timer") {
    return (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden="true">
        <circle cx="20" cy="22" r="14" stroke="#c6c500" strokeWidth="2.5" />
        <path d="M20 12v10l6 4" stroke="#c6c500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 4h8" stroke="#c6c500" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "devices") {
    return (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden="true">
        <rect x="4" y="10" width="20" height="14" rx="2" stroke="#c6c500" strokeWidth="2.5" />
        <rect x="16" y="16" width="20" height="14" rx="2" fill="white" stroke="#c6c500" strokeWidth="2.5" />
        <path d="M14 28h-4M12 28v4" stroke="#c6c500" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "apps") {
    return (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="12" height="12" rx="3" stroke="#c6c500" strokeWidth="2.5" />
        <rect x="22" y="6" width="12" height="12" rx="3" stroke="#c6c500" strokeWidth="2.5" />
        <rect x="6" y="22" width="12" height="12" rx="3" stroke="#c6c500" strokeWidth="2.5" />
        <path d="M26 26l4 4M30 26l-4 4" stroke="#f9b000" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 28h8" stroke="#c6c500" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="14" stroke="#c6c500" strokeWidth="2.5" />
      <path d="M14 20h12M20 14v12" stroke="#FC5802" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 16l-12 8" stroke="#FC5802" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function WasKannDieAppPage() {
  const { hero, featureGrid, privacy, webfilter, screenTime, portal, nummerGegenKummer, moreInfo } = featuresPage;

  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#fffbe6] to-white py-16 md:py-24">
        <Container>
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-extrabold leading-tight text-text-dark md:text-5xl lg:text-6xl">
                {hero.headline}
              </h1>
              <p className="mt-4 text-xl font-semibold text-brand-yellow md:text-2xl">
                {hero.subheadline}
              </p>
              <ul className="mt-6 space-y-3">
                {hero.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <GreenCheck />
                    <span className="text-text-dark md:text-lg">{bullet}</span>
                  </li>
                ))}
              </ul>
              <Button
                href={siteConfig.portalWelcomeUrl}
                external
                variant="secondary"
                size="lg"
                className="mt-8"
              >
                {hero.ctaLabel}
              </Button>
            </div>
            {/* Portal screenshot placeholder */}
            <div className="hidden flex-shrink-0 md:block">
              <div className="flex h-80 w-64 items-center justify-center rounded-2xl border-2 border-neutral-200 bg-neutral-50 text-sm text-neutral-400">
                <span className="text-center leading-relaxed">
                  Portal-Screenshot
                  <br />
                  (Placeholder)
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Feature-Grid ─────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20">
        <Container>
          <h2 className="text-center text-3xl font-extrabold text-text-dark md:text-4xl">
            {featureGrid.headline}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {featureGrid.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-card border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4">
                  <FeatureIcon type={card.icon} />
                </div>
                <h3 className="text-xl font-bold text-text-dark">{card.title}</h3>
                <p className="mt-3 text-text-dark">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-card bg-brand-yellow px-6 py-8 text-center">
            <p className="text-lg font-bold text-white md:text-xl">
              {featureGrid.ctaLabel}
            </p>
            <Button
              href={siteConfig.portalWelcomeUrl}
              external
              variant="secondary"
              size="lg"
              className="mt-4"
            >
              {featureGrid.ctaButton}
            </Button>
          </div>
        </Container>
      </section>

      {/* ── 3. Datenschutz ──────────────────────────────────────────────────── */}
      <section className="bg-[#fafafa] py-14 md:py-20">
        <Container>
          <h2 className="text-center text-3xl font-extrabold text-text-dark md:text-4xl">
            {privacy.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text-dark">
            {privacy.intro}
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {privacy.bullets.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4 rounded-card border border-neutral-200 bg-white p-5"
              >
                <GreenCheck />
                <div>
                  <p className="font-bold text-text-dark">{item.title}</p>
                  <p className="mt-1 text-sm text-text-dark">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Vergleichs-Grafik */}
          <div className="mx-auto mt-10 flex max-w-md flex-col items-stretch gap-4 sm:flex-row">
            <div className="flex flex-1 flex-col items-center rounded-card border border-neutral-200 bg-white px-6 py-8">
              <OpenLockIcon />
              <p className="mt-4 text-center font-bold text-[#FC5802]">Andere Apps</p>
              <p className="mt-1 text-center text-sm text-neutral-500">
                Speichern & verkaufen Daten
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center rounded-card border border-neutral-200 bg-white px-6 py-8">
              <ClosedLockIcon />
              <p className="mt-4 text-center font-bold text-brand-green">Kidgonet</p>
              <p className="mt-1 text-center text-sm text-neutral-500">
                Privatsphäre bleibt geschützt
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. Altersgerechter Webfilter ────────────────────────────────────── */}
      <section className="py-14 md:py-20">
        <Container>
          <h2 className="text-center text-3xl font-extrabold text-text-dark md:text-4xl">
            {webfilter.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text-dark">
            {webfilter.intro}
          </p>

          {/* 3 Typ-Cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {webfilter.typeCards.map((card) => (
              <div
                key={card.title}
                className="rounded-card border border-neutral-200 bg-white p-5"
              >
                <h3 className="font-bold text-brand-green">{card.title}</h3>
                <p className="mt-2 text-sm text-text-dark">{card.body}</p>
              </div>
            ))}
          </div>

          {/* Altersgruppen-Karten */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {webfilter.ageGroups.map((group) => (
              <div
                key={group.id}
                className="rounded-card border-2 border-brand-yellow bg-white p-5 text-center"
              >
                <p className="text-lg font-extrabold text-text-dark">{group.label}</p>
                <p className="mt-1 text-sm text-text-dark">{group.description}</p>
              </div>
            ))}
          </div>

          {/* Filtertabelle */}
          <h3 className="mt-10 text-xl font-bold text-text-dark">
            {webfilter.tableHeadline}
          </h3>
          <div className="mt-4 overflow-x-auto rounded-card border border-neutral-200 bg-white">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="bg-brand-yellow">
                  <th
                    scope="col"
                    className="px-4 py-3 text-left font-semibold text-white"
                  >
                    Kategorie
                  </th>
                  {webfilter.ageGroups.map((g) => (
                    <th
                      key={g.id}
                      scope="col"
                      className="px-4 py-3 text-center font-semibold text-white"
                    >
                      {g.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {webfilter.categories.map((cat, idx) => (
                  <tr
                    key={cat.name}
                    className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50"}
                  >
                    <th
                      scope="row"
                      className="px-4 py-2.5 text-left font-medium text-text-dark"
                    >
                      {cat.name}
                    </th>
                    <td className="px-4 py-2.5 text-center">
                      <FilterCheck active={cat["0-8"]} />
                    </td>
                    <td className="px-4 py-2.5 text-center">
                      <FilterCheck active={cat["9-12"]} />
                    </td>
                    <td className="px-4 py-2.5 text-center">
                      <FilterCheck active={cat["13-15"]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ── 5. Bildschirmzeitregulierung ────────────────────────────────────── */}
      <section className="bg-[#fafafa] py-14 md:py-20">
        <Container>
          <h2 className="text-center text-3xl font-extrabold text-text-dark md:text-4xl">
            {screenTime.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text-dark">
            {screenTime.body}
          </p>

          {/* Bullets */}
          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            {screenTime.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <GreenCheck />
                <span className="text-text-dark">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Screenshot-Placeholder-Cards */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {screenTime.screenshots.map((shot) => (
              <div
                key={shot.label}
                className="flex aspect-[9/16] max-h-64 flex-col items-center justify-end rounded-2xl border border-neutral-200 bg-neutral-100 pb-4"
              >
                <span className="px-2 text-center text-xs font-semibold text-neutral-500">
                  {shot.label}
                </span>
              </div>
            ))}
          </div>

          {/* Sub-Features */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {screenTime.subFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-card border border-neutral-200 bg-white p-5"
              >
                <h3 className="font-bold text-brand-green">{feature.title}</h3>
                <p className="mt-2 text-sm text-text-dark">{feature.body}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-card bg-brand-yellow px-6 py-8 text-center">
            <p className="text-lg font-bold text-white md:text-xl">
              {screenTime.ctaLabel}
            </p>
            <Button
              href={siteConfig.portalWelcomeUrl}
              external
              variant="secondary"
              size="lg"
              className="mt-4"
            >
              {screenTime.ctaButton}
            </Button>
          </div>
        </Container>
      </section>

      {/* ── 6. Elternportal ─────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20">
        <Container>
          <h2 className="text-center text-3xl font-extrabold text-text-dark md:text-4xl">
            {portal.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text-dark">
            {portal.intro}
          </p>

          {/* Lizenz-Erklärung */}
          <div className="mx-auto mt-8 max-w-2xl rounded-card border border-neutral-200 bg-white p-6">
            <p className="text-sm text-text-dark">
              {portal.licenseExample.description}
            </p>
          </div>

          {/* Einstellungs-Bullets */}
          <h3 className="mt-10 text-xl font-bold text-text-dark">
            {portal.licenseExample.headline}
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {portal.settingsBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <GreenCheck />
                <span className="text-text-dark">{bullet}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── 7. Nummer gegen Kummer ──────────────────────────────────────────── */}
      <section className="bg-[#fafafa] py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold text-text-dark md:text-4xl">
              {nummerGegenKummer.headline}
            </h2>
            <p className="mt-4 text-text-dark">{nummerGegenKummer.intro}</p>
            <p className="mt-3 text-text-dark">{nummerGegenKummer.mission}</p>

            <div className="mt-8 rounded-card border border-neutral-200 bg-white p-6">
              <h3 className="text-lg font-bold text-brand-green">
                {nummerGegenKummer.subHeadline}
              </h3>
              <blockquote className="mt-3 border-l-4 border-brand-yellow pl-4 text-text-dark italic">
                &bdquo;{nummerGegenKummer.quote}&ldquo;
              </blockquote>
              <a
                href={nummerGegenKummer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-text-dark underline decoration-brand-yellow decoration-2 underline-offset-4 hover:decoration-brand-green"
              >
                {nummerGegenKummer.urlLabel}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 8. Weitere Informationen ────────────────────────────────────────── */}
      <section className="py-14 md:py-20">
        <Container>
          <h2 className="text-center text-3xl font-extrabold text-text-dark md:text-4xl">
            {moreInfo.headline}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moreInfo.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-card border border-neutral-200 bg-white p-6"
              >
                <h3 className="font-bold text-brand-green">{card.title}</h3>
                <p className="mt-3 text-sm text-text-dark">{card.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 9. Final CTA ────────────────────────────────────────────────────── */}
      <FinalCTA />
    </>
  );
}
