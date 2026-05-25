import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { ChildviewMockupScaled } from "@/components/mockups/ChildviewMockupScaled";
import { siteConfig } from "@/content/site";

export function FinalCTA() {
  return (
    <section className="overflow-hidden bg-brand-yellow py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 px-4 md:grid-cols-[1fr_auto]">

        {/* Left: copy + CTA */}
        <div>
          {/* Headline */}
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-white md:text-4xl">
            Kinder sicher ins Internet –<br className="hidden md:block" /> starte noch heute.
          </h2>

          {/* Benefits */}
          <ul className="mt-5 grid gap-2">
            {[
              "Bildschirmzeit begrenzen, Webfilter einrichten, Standort verfolgen",
              "Für iOS und Android – ein Elternportal für alle Geräte",
              "Server in Deutschland, DSGVO-konform, keine Datenweitergabe",
            ].map((text) => (
              <li key={text} className="flex items-start gap-2.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-white stroke-[2.5]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm leading-snug text-white/90">{text}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-7">
            <Button
              href={siteConfig.portalWelcomeUrl}
              external
              variant="white"
              size="lg"
            >
              7 Tage kostenlos testen
            </Button>
          </div>

          {/* Friction reducer */}
          <p className="mt-3 text-xs font-medium text-white/75">
            Keine Kreditkarte · Keine Vertragsbindung · Jederzeit kündbar
          </p>

          {/* Store badges */}
          <StoreBadges className="mt-6" size="sm" />
        </div>

        {/* Right: mockup */}
        <div className="hidden justify-center md:flex">
          <ChildviewMockupScaled width={180} />
        </div>
      </div>
    </section>
  );
}
