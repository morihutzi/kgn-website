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
    <section className="bg-white pt-5 pb-2 md:pt-8 md:pb-3">
      <Container>
        <div className="@container/banner mx-auto w-full max-w-[720px]">
          <div className="relative aspect-[930/496] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/images/hero/vater-sohn.jpeg"
              alt="Vater und Sohn nutzen gemeinsam ein Smartphone"
              fill
              sizes="(min-width: 1024px) 930px, 100vw"
              priority
              className="object-cover"
            />

            {/* Headline block — Figma position (231,102) / size (604x205) on desktop; centered on mobile */}
            <div
              className="absolute text-center md:text-right"
              style={{
                left: "5%",
                right: "5%",
                top: "10%",
                width: "auto",
              }}
            >
              <h1
                className="font-extrabold text-[#4a4a49] md:ml-auto md:max-w-[604px]"
                style={{
                  fontSize: "min(48px, 5.16cqw)",
                  lineHeight: 1,
                }}
              >
                {hero.headline}
              </h1>
              <p
                className="mt-1 font-semibold text-[#4a4a49] md:ml-auto md:max-w-[604px]"
                style={{
                  fontSize: "min(26px, 2.80cqw)",
                  lineHeight: "1.54",
                }}
              >
                {hero.subheadline}
              </p>
            </div>

            {/* CTA area — Yellow pill on top, App Store badges below; centered mobile, right desktop */}
            <div
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center md:left-auto md:right-[8%] md:translate-x-0 md:items-end"
              style={{
                bottom: "8%",
                gap: "min(16px, 1.72cqw)",
              }}
            >
              <a
                href={siteConfig.portalWelcomeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[10px] bg-brand-yellow font-extrabold text-white shadow-sm hover:bg-[#e09e00]"
                style={{
                  fontSize: "min(14px, 1.5cqw)",
                  padding: "min(10px, 1.08cqw) min(28px, 3cqw)",
                  borderRadius: "min(10px, 1.08cqw)",
                }}
              >
                {hero.primaryCtaLabel}
              </a>

              <div
                className="flex items-center"
                style={{ gap: "min(8px, 0.86cqw)" }}
              >
                <a
                  href={siteConfig.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Im App Store laden"
                  className="block"
                >
                  <Image
                    src="/badges/app-store-de.svg"
                    alt="Im App Store laden"
                    width={120}
                    height={40}
                    style={{
                      height: "min(34px, 3.66cqw)",
                      width: "auto",
                    }}
                  />
                </a>
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
                    width={270}
                    height={80}
                    style={{
                      height: "min(34px, 3.66cqw)",
                      width: "auto",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
