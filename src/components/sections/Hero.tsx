import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { hero } from "@/content/home";
import { siteConfig } from "@/content/site";

/**
 * Hero / Banner — two distinct layouts:
 *   - Mobile (< md): yellow band with photo card, centered text, prominent CTA
 *   - Desktop (>= md): photo card with right-aligned text overlay + bottom-right CTA
 */
export function Hero() {
  return (
    <>
      {/* MOBILE Hero — yellow band */}
      <section className="bg-brand-yellow px-4 py-6 md:hidden">
        <div className="mx-auto max-w-[400px]">
          <div className="grid grid-cols-[1fr_115px] items-center gap-3">
            <div className="text-white">
              <h1 className="text-[22px] font-extrabold leading-[1.1] text-white">
                {hero.headline}
              </h1>
              <p className="mt-2 text-sm font-semibold text-white">
                {hero.subheadline}
              </p>
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-[12px]">
              <Image
                src="/images/hero/vater-sohn.jpeg"
                alt="Vater und Sohn nutzen gemeinsam ein Smartphone"
                fill
                sizes="120px"
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-center">
            <a
              href={siteConfig.portalWelcomeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[10px] bg-white px-6 py-2.5 text-[14px] font-extrabold text-text-dark shadow-sm"
            >
              {hero.primaryCtaLabel}
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2.5">
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
                style={{ height: "32px", width: "auto" }}
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
                style={{ height: "32px", width: "auto" }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* DESKTOP Hero — photo card with overlay */}
      <section className="hidden bg-white pt-5 pb-2 md:block md:pt-8 md:pb-3">
        <Container>
          <div className="@container/banner mx-auto w-full max-w-[720px]">
            <div className="relative aspect-[930/496] w-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/hero/vater-sohn.jpeg"
                alt="Vater und Sohn nutzen gemeinsam ein Smartphone"
                fill
                sizes="(min-width: 1024px) 720px, 100vw"
                priority
                className="object-cover"
              />

              {/* Headline block — Figma position (231,102) / size (604x205) */}
              <div
                className="absolute text-right"
                style={{ left: "24.84%", top: "20.56%", width: "64.95%" }}
              >
                <h1
                  className="font-extrabold text-[#4a4a49]"
                  style={{ fontSize: "min(48px, 5.16cqw)", lineHeight: 1 }}
                >
                  {hero.headline}
                </h1>
                <p
                  className="mt-1 font-semibold text-[#4a4a49]"
                  style={{ fontSize: "min(26px, 2.80cqw)", lineHeight: "1.54" }}
                >
                  {hero.subheadline}
                </p>
              </div>

              {/* CTA area — bottom-right */}
              <div
                className="absolute flex flex-col items-end"
                style={{
                  right: "8%",
                  top: "55%",
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
    </>
  );
}
