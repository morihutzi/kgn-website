import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { ChildviewMockupScaled } from "@/components/mockups/ChildviewMockupScaled";
import { siteConfig, trialCopy } from "@/content/site";

export function FinalCTA() {
  return (
    <section className="overflow-hidden bg-brand-yellow py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-[1080px] items-center gap-10 px-6 sm:px-8 md:grid-cols-[1fr_auto] md:px-4">

        {/* Left: copy + CTA */}
        <div>
          {/* Headline */}
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-white md:text-4xl">
            Kinder sicher ins Internet –<br className="hidden md:block" /> starte noch heute.
          </h2>

          {/* Benefits */}
          <ul className="mt-6 grid gap-3 md:mt-5 md:gap-2">
            {[
              "Bildschirmzeit begrenzen, Webfilter einrichten, Standort verfolgen",
              "Für iOS und Android – ein Elternportal für alle Geräte",
              "Server in Deutschland, DSGVO-konform, keine Datenweitergabe",
            ].map((text) => (
              <li key={text} className="flex items-start gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-white stroke-[3]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-bold leading-relaxed text-white md:leading-snug">{text}</span>
              </li>
            ))}
          </ul>

          {/* CTA — nur Desktop, auf Mobile fuehren die Store-Badges zur Installation */}
          <div className="mt-7 hidden md:block">
            <Button
              href={siteConfig.portalWelcomeUrl}
              external
              variant="white"
              size="lg"
            >
              {trialCopy.cta}
            </Button>
          </div>

          {/* Friction reducer — nur Desktop */}
          <p className="mt-3 hidden text-xs font-bold text-white md:block">
            Keine Vertragsbindung · Jederzeit kündbar
          </p>

          {/* Store badges */}
          <StoreBadges className="mt-8 md:mt-6" size="sm" />
        </div>

        {/* Right: mockup */}
        <div className="hidden justify-center md:flex">
          <ChildviewMockupScaled width={180} />
        </div>
      </div>
    </section>
  );
}
