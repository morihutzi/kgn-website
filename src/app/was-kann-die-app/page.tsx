import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { featuresPage } from "@/content/features";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Was kann die App?",
  description:
    "Bildschirmzeit, altersgerechter Webfilter, Geräteortung und SOS-Button — alle Funktionen von Kidgonet im Überblick.",
};

function Check({ active }: { active: boolean }) {
  if (!active) {
    return (
      <svg
        aria-label="Nicht gefiltert"
        role="img"
        viewBox="0 0 24 24"
        className="mx-auto h-5 w-5 text-text-muted"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
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

export default function WasKannDieAppPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-yellow/15 via-white to-white py-16 md:py-24">
        <Container className="text-center">
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-text-dark md:text-5xl lg:text-6xl">
            {featuresPage.hero.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-text-dark/80 md:text-2xl">
            {featuresPage.hero.subheadline}
          </p>
          <Button
            href={siteConfig.portalWelcomeUrl}
            external
            size="lg"
            className="mt-8"
          >
            Jetzt 7 Tage gratis testen
          </Button>
        </Container>
      </section>

      <Section background="white">
        <h2 className="text-center text-3xl font-bold text-brand-green md:text-4xl">
          {featuresPage.overview.headline}
        </h2>
        <ul className="mx-auto mt-10 grid max-w-4xl gap-x-8 gap-y-5 md:grid-cols-2">
          {featuresPage.overview.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
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
              <span className="text-text-dark md:text-lg">{b}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section background="muted">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {featuresPage.featureBlocks.map((f) => (
            <article
              key={f.title}
              className="rounded-card bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-text-dark">{f.title}</h3>
              <p className="mt-3 text-text-dark/85">{f.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-center text-3xl font-bold text-text-dark md:text-4xl">
          {featuresPage.privacy.headline}
        </h2>
        <ul className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {featuresPage.privacy.items.map((p) => (
            <li
              key={p.title}
              className="rounded-card border border-black/10 bg-white p-6"
            >
              <h3 className="text-lg font-bold text-brand-green">{p.title}</h3>
              <p className="mt-2 text-text-dark/85">{p.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section background="muted">
        <h2 className="text-center text-3xl font-bold text-text-dark md:text-4xl">
          {featuresPage.filterTable.headline}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-text-dark/80">
          {featuresPage.filterTable.intro}
        </p>

        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {featuresPage.ageGroups.map((g) => (
            <div
              key={g.id}
              className="rounded-card border border-black/10 bg-white p-4 text-center"
            >
              <p className="text-sm font-bold text-brand-green">{g.label}</p>
              <p className="text-xs text-text-dark/70">{g.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl overflow-x-auto rounded-card border border-black/10 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-yellow/15">
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-text-dark"
                >
                  Kategorie
                </th>
                {featuresPage.ageGroups.map((g) => (
                  <th
                    key={g.id}
                    scope="col"
                    className="px-4 py-3 text-center font-semibold text-text-dark"
                  >
                    {g.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featuresPage.filterTable.categories.map((cat, idx) => (
                <tr
                  key={cat.name}
                  className={idx % 2 === 0 ? "bg-white" : "bg-surface-muted"}
                >
                  <th
                    scope="row"
                    className="px-4 py-2.5 text-left font-medium text-text-dark"
                  >
                    {cat.name}
                  </th>
                  <td className="px-4 py-2.5">
                    <Check active={cat["0-8"]} />
                  </td>
                  <td className="px-4 py-2.5">
                    <Check active={cat["9-12"]} />
                  </td>
                  <td className="px-4 py-2.5">
                    <Check active={cat["13-15"]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-text-dark md:text-4xl">
            {featuresPage.screenTime.headline}
          </h2>
          <p className="mt-4 text-text-dark/85">{featuresPage.screenTime.body}</p>
        </div>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 md:grid-cols-2">
          {featuresPage.screenTime.capabilities.map((cap) => (
            <li
              key={cap}
              className="flex items-start gap-3 rounded-card bg-surface-muted p-4"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow text-xs font-bold text-black"
              >
                ✓
              </span>
              <span className="text-text-dark">{cap}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section background="muted">
        <ul className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {featuresPage.controls.map((c) => (
            <li
              key={c.title}
              className="rounded-card bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-brand-green">{c.title}</h3>
              <p className="mt-3 text-text-dark/85">{c.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-text-dark md:text-4xl">
            {featuresPage.portal.headline}
          </h2>
          <p className="mt-4 text-text-dark/85">{featuresPage.portal.intro}</p>
        </div>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 md:grid-cols-2">
          {featuresPage.portal.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
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
              <span className="text-text-dark">{f}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section background="muted" width="narrow">
        <div className="rounded-card border border-brand-yellow/40 bg-white p-8 text-center">
          <h2 className="text-2xl font-bold text-brand-green md:text-3xl">
            {featuresPage.nummerGegenKummer.headline}
          </h2>
          <p className="mt-4 text-text-dark/85">
            {featuresPage.nummerGegenKummer.body}
          </p>
          <a
            href="https://www.nummergegenkummer.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-text-dark underline decoration-brand-yellow decoration-2 underline-offset-4 hover:decoration-brand-green"
          >
            Mehr über Nummer gegen Kummer e.V.
          </a>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
