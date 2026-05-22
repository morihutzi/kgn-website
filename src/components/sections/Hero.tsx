import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { hero } from "@/content/home";
import { siteConfig } from "@/content/site";

/**
 * Hero / Banner per Figma "Home - Desktop"
 *
 * Card 930x496, border-radius 20px, father-son photo.
 * Headline block at (231,102) w=604 right-aligned:
 *   Line 1: 48px/800 #4a4a49
 *   Line 2: 26px/600 #4a4a49 lh=40px
 * CTA row at (512,297) — Google Play badge 125x37 + yellow pill 164x36
 *   Pill: bg #f9b000, radius 10, text "Jetzt gratis testen!" 13/800 white
 *
 * All sizes use @container + cqw units to scale proportionally below 930px.
 */
export function Hero() {
  return (
    <section className="bg-white py-5 md:py-8">
      <Container>
        <div className="@container/banner mx-auto w-full max-w-[800px]">
          <div className="relative aspect-[930/496] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/images/hero/vater-sohn.jpeg"
              alt="Vater und Sohn nutzen gemeinsam ein Smartphone"
              fill
              sizes="(min-width: 1024px) 930px, 100vw"
              priority
              className="object-cover"
            />

            {/* Headline block — Figma position (231,102) / size (604x205) */}
            <div
              className="absolute text-right"
              style={{
                left: "24.84%",
                top: "20.56%",
                width: "64.95%",
              }}
            >
              <h1
                className="font-extrabold text-[#4a4a49]"
                style={{
                  fontSize: "min(48px, 5.16cqw)",
                  lineHeight: 1,
                }}
              >
                {hero.headline}
              </h1>
              <p
                className="mt-1 font-semibold text-[#4a4a49]"
                style={{
                  fontSize: "min(26px, 2.80cqw)",
                  lineHeight: "1.54",
                }}
              >
                {hero.subheadline}
              </p>
            </div>

            {/* CTA row — Figma position (512,297) — Google Play + yellow pill */}
            <div
              className="absolute flex items-center"
              style={{
                left: "55.05%",
                top: "59.88%",
                gap: "min(10px, 1.08cqw)",
              }}
            >
              <a
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bei Google Play laden"
                className="block"
              >
                <Image
                  src="/badges/google-play-de.png"
                  alt="Bei Google Play laden"
                  width={125}
                  height={37}
                  style={{
                    width: "min(125px, 13.44cqw)",
                    height: "auto",
                  }}
                />
              </a>
              <a
                href={siteConfig.portalWelcomeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[10px] bg-brand-yellow font-extrabold text-white shadow-sm hover:bg-[#e09e00]"
                style={{
                  fontSize: "min(13px, 1.40cqw)",
                  padding: "min(9px, 0.97cqw) min(20px, 2.15cqw)",
                  borderRadius: "min(10px, 1.08cqw)",
                }}
              >
                {hero.primaryCtaLabel}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
