import ExportedImage from "next-image-export-optimizer";
import { Container } from "@/components/layout/Container";
import { hero } from "@/content/home";
import { siteConfig } from "@/content/site";

type HeroProps = {
  /** H1-Ueberschreibung; default ist die Homepage-Headline. Wichtig fuer SEO-Landing-Pages. */
  headline?: React.ReactNode;
  /** H2-Subheadline-Ueberschreibung; default ist die Homepage-Subline. */
  subheadline?: React.ReactNode;
};

/**
 * Hero / Banner — two distinct layouts:
 *   - Mobile (< md): yellow band with photo card, centered text, prominent CTA
 *   - Desktop (>= md): photo card with right-aligned text overlay + bottom-right CTA
 *
 * Headline / Subheadline koennen pro Page ueberschrieben werden — entscheidend
 * fuer SEO-Landing-Pages, damit jede ein eigenes Keyword im H1 hat.
 */
export function Hero({ headline, subheadline }: HeroProps = {}) {
  const h1: React.ReactNode =
    headline ?? (
      <>
        Digitale Sicherheit<br /> beginnt mit<br /> Kidgonet
      </>
    );
  const h2: React.ReactNode =
    subheadline ?? (
      <>
        Klare Regeln für Handy,<br /> Apps und Onlinezeit.
      </>
    );

  return (
    <>
      {/* MOBILE Hero — photo banner with right-aligned overlay */}
      <section
        className="relative w-full overflow-hidden md:hidden"
        style={{ aspectRatio: "390 / 427", minHeight: "430px" }}
      >
        <ExportedImage
          src="/images/hero/banner.jpeg"
          alt="Vater und Sohn nutzen gemeinsam ein Smartphone"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          priority
          className="object-cover"
          style={{ objectPosition: "40% 22%" }}
        />

        <div className="absolute inset-0 z-10 flex flex-col items-end pb-0 pl-[20px] pr-[35px] pt-[40px]">
          <div className="flex w-full flex-col gap-5">
            <h1
              className="text-right font-extrabold text-[#4a4a49]"
              style={{ fontSize: "31px", lineHeight: "34px" }}
            >
              {h1}
            </h1>
            <p
              className="text-right font-medium text-[#202020]"
              style={{ fontSize: "24px", lineHeight: "30px" }}
            >
              {h2}
            </p>
          </div>

          <div className="mt-[25px] flex flex-col items-end gap-[12px]">
            {/* Store-Badges untereinander, rechtsbündig */}
            <a
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Im App Store laden"
            >
              <ExportedImage
                src="/badges/app-store-de.svg"
                alt="Im App Store laden"
                width={160}
                height={42}
                style={{ width: "130px", height: "auto" }}
                className="block object-contain"
              />
            </a>
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bei Google Play laden"
            >
              <ExportedImage
                src="/badges/google-play-de.png"
                alt="Bei Google Play laden"
                width={160}
                height={42}
                style={{ width: "130px", height: "auto" }}
                className="block object-contain"
              />
            </a>
          </div>

          {/* Digitalpreis-Badge — vertikal mittig zwischen Google-Play-Badge
              und unterem (orangem) Rand. */}
          <div className="flex w-full flex-1 flex-col items-end justify-center">
            <div className="liquid-glass-in relative w-[46vw] max-w-[190px] overflow-hidden rounded-xl border border-white/60 bg-white/35 px-2.5 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur-md">
              {/* Smiley-Klacks */}
              <ExportedImage
                src="/images/icons/smiley-orange.png"
                alt=""
                aria-hidden="true"
                width={70}
                height={64}
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none object-contain opacity-25"
                style={{ filter: "blur(9px)" }}
              />
              {/* Text links, Logo rechts — nebeneinander, vertikal mittig. */}
              <div className="relative flex items-center gap-2">
                <p className="flex-1 text-left text-[10px] font-semibold leading-[1.25] text-[#4a4a49]/85">
                  Gewinner&nbsp;des{" "}
                  <strong className="font-extrabold text-[#F9B000]">Bayerischen Digitalpreis</strong>
                </p>
                <ExportedImage
                  src="/images/award/digitalpreis-bayern-2025-schwarz.png"
                  alt="Bayerischer Digitalpreis 2025"
                  width={120}
                  height={36}
                  style={{ height: "28px", width: "auto" }}
                  className="block shrink-0 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP Hero — photo card with overlay */}
      <section className="hidden bg-white pt-5 pb-2 md:block md:pt-8 md:pb-3">
        <Container>
          <div className="@container/banner mx-auto w-full max-w-[1080px]">
            <div className="relative aspect-[930/496] w-full overflow-hidden rounded-[20px]">
              {/* Kein priority: das Desktop-Hero ist auf Mobile display:none.
                  priority würde es per <link rel=preload> trotzdem auf dem Handy
                  laden und mit dem echten (mobilen) LCP-Bild um die 4G-Bandbreite
                  konkurrieren. Im Desktop-Viewport ist es sichtbar und laedt als
                  in-viewport-Bild sofort. */}
              <ExportedImage
                src="/images/hero/vater-sohn-sichere-mediennutzung-kidgonet-smartphone.jpeg"
                alt="Vater und Sohn nutzen gemeinsam ein Smartphone"
                fill
                sizes="(min-width: 1120px) 1080px, 100vw"
                className="scale-105 object-cover blur-[2px]"
              />

              {/* Headline block — Figma position (231,102) / size (604x205) */}
              <div
                className="absolute text-right"
                style={{ left: "24.84%", top: "20.56%", width: "64.95%" }}
              >
                {/* Visuell wie ein H1, semantisch als <p> — die H1 lebt im
                    Mobile-Hero (immer im DOM), damit es nur eine echte H1 gibt. */}
                <p
                  className="font-extrabold text-[#4a4a49]"
                  style={{ fontSize: "min(48px, 5.16cqw)", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {headline ?? hero.headline}
                </p>
                <p
                  className="mt-1 font-semibold text-[#4a4a49]"
                  style={{ fontSize: "min(26px, 2.80cqw)", lineHeight: "1.54" }}
                >
                  {subheadline ?? hero.subheadline}
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
                    <ExportedImage
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
                    <ExportedImage
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

                {/* Digitalpreis — direkt unter Store-Badges */}
                <div
                  className="liquid-glass-in relative self-end overflow-hidden rounded-2xl border border-white/60 bg-white/35 shadow-sm ring-1 ring-black/5 backdrop-blur-md"
                  style={{ padding: "min(12px, 1.29cqw) min(16px, 1.72cqw)", marginTop: "min(8px, 0.86cqw)" }}
                >
                  {/* Smiley-Klacks im Hintergrund */}
                  <ExportedImage
                    src="/images/icons/smiley-orange.png"
                    alt=""
                    aria-hidden="true"
                    width={70}
                    height={64}
                    className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none object-contain opacity-25"
                    style={{ filter: "blur(16px)", height: "min(110px, 11.83cqw)", width: "auto" }}
                  />
                  <p
                    className="relative mb-2 text-right font-semibold text-[#4a4a49]/85"
                    style={{ fontSize: "min(12px, 1.29cqw)" }}
                  >
                    Gewinner&nbsp;des{" "}
                    <strong className="font-extrabold text-[#F9B000]">Bayerischen Digitalpreis</strong>
                  </p>
                  <ExportedImage
                    src="/images/award/digitalpreis-bayern-2025-schwarz.png"
                    alt="Bayerischer Digitalpreis 2025"
                    width={140}
                    height={42}
                    style={{ height: "min(38px, 4.09cqw)", width: "auto" }}
                    className="relative ml-auto block object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

        </Container>
      </section>
    </>
  );
}
