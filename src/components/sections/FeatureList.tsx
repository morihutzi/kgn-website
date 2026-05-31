import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MockupSlideshow } from "@/components/ui/MockupSlideshow";
import { problemSolution } from "@/content/home";

function CheckIcon() {
  // Green-filled checkbox with white border and white check inside
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[4px] border-2 border-white bg-brand-green"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-3 w-3 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      >
        <path
          d="M5 13l4 4L19 7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function FeatureList() {
  return (
    <>
      {/* MOBILE Yellow Block — phone overhangs upward into hero, titles right, bullets below */}
      <section className="relative bg-brand-yellow md:hidden">
        <div className="relative grid grid-cols-[40vw_1fr] items-end gap-3 px-3 pt-1 pb-2">
          {/* Phone — extends upward into the hero above; in der linken
              Spalte zentriert. */}
          <div className="-mt-[30vw] flex justify-center">
            <MockupSlideshow className="relative w-[34vw] max-w-[200px]" />
          </div>

          {/* Titles next to phone — mb hebt den (bottom-aligned) Titelblock
              höher neben das Phone. */}
          <div className="mb-[44px] pb-2">
            <p className="text-[22px] font-medium leading-[28px] text-white">
              {problemSolution.eyebrow}
            </p>
            <h2 className="text-[22px] font-extrabold leading-[28px] text-white">
              {problemSolution.headline}
            </h2>
          </div>
        </div>

        <ul className="grid px-5 pb-7 pt-3">
          {problemSolution.bullets.map((bullet) => (
            <li
              key={bullet.strong}
              className="flex min-h-[46px] items-center gap-3"
            >
              <CheckIcon />
              <span className="text-[15px] leading-snug text-white">
                <span className="font-extrabold">{bullet.strong}</span>
                {bullet.rest}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* DESKTOP Yellow Block — phone overhangs upward, bullets right */}
      <section className="hidden pt-2 pb-0 md:block md:pt-3 md:pb-0">
        <Container>
          <div className="mx-auto w-full max-w-[1080px]">
            <div className="relative rounded-[20px] bg-brand-yellow px-5 py-7 md:px-10 md:py-9">
              <MockupSlideshow className="pointer-events-none absolute left-[70px] top-[-180px] z-10 w-[200px] lg:left-[90px] lg:top-[-215px] lg:w-[240px]" />

              <div className="grid items-start gap-6 md:grid-cols-[260px_1fr] lg:grid-cols-[340px_1fr]">
                <div aria-hidden="true" />

                <div>
                  <p className="text-base font-semibold text-white md:text-lg">
                    {problemSolution.eyebrow}
                  </p>
                  <h2 className="mt-1 text-xl font-extrabold text-white md:text-[28px] md:leading-[1.15]">
                    {problemSolution.headline}
                  </h2>
                  <ul className="mt-5 grid">
                    {problemSolution.bullets.map((bullet) => (
                      <li
                        key={bullet.strong}
                        className="flex min-h-[44px] items-center gap-2.5"
                      >
                        <CheckIcon />
                        <span className="text-sm text-white md:text-[16px] md:leading-snug">
                          <span className="font-extrabold">{bullet.strong}</span>
                          {bullet.rest}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Logo unter dem Phone — vertikal auf Höhe des untersten
                  Bullets (Center ~58px über dem Kartenboden). */}
              <div className="absolute left-[70px] bottom-[42px] w-[200px] flex justify-center lg:left-[90px] lg:w-[240px]">
                <Image
                  src="/brand/logo-weiss.png"
                  alt="Kidgonet"
                  width={600}
                  height={82}
                  className="h-auto w-full max-w-[260px] opacity-95"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust logos strip — endless horizontal marquee on a soft band */}
      <section className="bg-surface-muted py-6 md:py-8">
        <div className="mx-auto w-full max-w-[1080px] px-4">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-text-muted md:mb-4">
            Bekannt aus
          </p>
          <div
            className="marquee-mask relative overflow-hidden"
            aria-label="Bekannt aus"
            role="region"
          >
            <ul className="marquee-track flex w-max items-center gap-x-12 md:gap-x-16">
              {[
                ...problemSolution.trustLogos,
                ...problemSolution.trustLogos,
              ].map((logo, idx) => (
                <li
                  key={`${logo.src}-${idx}`}
                  className="shrink-0"
                  aria-hidden={idx >= problemSolution.trustLogos.length}
                >
                  <Image
                    src={logo.src}
                    alt={
                      idx >= problemSolution.trustLogos.length ? "" : logo.alt
                    }
                    width={180}
                    height={50}
                    className="h-4 w-auto object-contain opacity-50 grayscale md:h-6"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
