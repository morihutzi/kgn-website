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
      {/* MOBILE Hero — photo banner with right-aligned overlay */}
      <section
        className="relative w-full overflow-hidden md:hidden"
        style={{ aspectRatio: "390 / 427", minHeight: "430px" }}
      >
        <Image
          src="/images/hero/banner.jpeg"
          alt="Vater und Sohn nutzen gemeinsam ein Smartphone"
          fill
          sizes="100vw"
          priority
          className="object-cover"
          style={{ objectPosition: "30% center" }}
        />

        <div className="relative z-10 flex flex-col items-end gap-[35px] py-[26px] pr-[35px]">
          <div className="flex w-full flex-col gap-5">
            <h1
              className="text-right font-extrabold text-[#4a4a49]"
              style={{ fontSize: "35px", lineHeight: "37px" }}
            >
              Deine Kinder<br /> surfen sicher –<br /> mit Kidgonet
            </h1>
            <h2
              className="text-right font-medium text-[#202020]"
              style={{ fontSize: "24px", lineHeight: "30px" }}
            >
              Nur 3 Klicks für mehr<br /> Sicherheit im Netz.
            </h2>
          </div>

          <div className="flex w-[160px] flex-col items-stretch gap-[15px]">
            <a
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Im App Store laden"
              className="block h-[42px] w-full"
            >
              <Image
                src="/badges/app-store-de.svg"
                alt="Im App Store laden"
                width={160}
                height={42}
                className="h-full w-full object-contain"
              />
            </a>
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bei Google Play laden"
              className="block h-[42px] w-full"
            >
              <Image
                src="/badges/google-play-de.png"
                alt="Bei Google Play laden"
                width={160}
                height={42}
                className="h-full w-full object-contain"
              />
            </a>
            <a
              href={siteConfig.portalWelcomeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[42px] w-full items-center justify-center rounded-[5px] bg-brand-yellow text-[15px] font-extrabold leading-[20px] text-white"
            >
              Jetzt gratis testen
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
