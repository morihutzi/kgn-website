import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PhoneSlideshow } from "@/components/ui/PhoneSlideshow";
import { hero, problemSolution } from "@/content/home";

function CheckIcon() {
  // Green-filled checkbox with white border and white check inside
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 inline-flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[4px] border-2 border-white bg-brand-green"
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
        <div className="relative grid grid-cols-[40vw_1fr] items-end gap-3 px-3 pt-3 pb-2">
          {/* Phone — extends upward into the hero above */}
          <div className="-mt-[28vw] flex justify-center">
            <PhoneSlideshow
              slides={hero.icons}
              className="w-[28vw] max-w-[180px]"
            />
          </div>

          {/* Titles next to phone */}
          <div className="pb-2">
            <p className="text-[22px] font-medium leading-[28px] text-white">
              {problemSolution.eyebrow}
            </p>
            <h2 className="text-[22px] font-extrabold leading-[28px] text-white">
              {problemSolution.headline}
            </h2>
          </div>
        </div>

        <ul className="grid gap-3 px-5 pb-7 pt-3">
          {problemSolution.bullets.map((bullet) => (
            <li key={bullet.strong} className="flex items-start gap-3">
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
          <div className="mx-auto w-full max-w-[720px]">
            <div className="relative rounded-[20px] bg-brand-yellow px-5 py-7 md:px-10 md:py-9">
              <PhoneSlideshow
                slides={hero.icons}
                className="pointer-events-none absolute left-4 top-[-130px] z-10 w-[150px] lg:left-10 lg:top-[-160px] lg:w-[180px]"
              />

              <div className="grid items-start gap-6 md:grid-cols-[190px_1fr] lg:grid-cols-[220px_1fr]">
                <div aria-hidden="true" />

                <div>
                  <p className="text-base font-semibold text-white md:text-lg">
                    {problemSolution.eyebrow}
                  </p>
                  <h2 className="mt-1 text-xl font-extrabold text-white md:text-[28px] md:leading-[1.15]">
                    {problemSolution.headline}
                  </h2>
                  <ul className="mt-4 grid gap-1.5">
                    {problemSolution.bullets.map((bullet) => (
                      <li key={bullet.strong} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-xs text-white md:text-[13px] md:leading-snug">
                          <span className="font-extrabold">{bullet.strong}</span>
                          {bullet.rest}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Logo positioned under phone on desktop */}
              <div className="absolute left-4 top-[220px] w-[150px] flex justify-center lg:left-10 lg:top-[255px] lg:w-[180px]">
                <Image
                  src="/brand/logo-weiss.png"
                  alt="Kidgonet"
                  width={600}
                  height={82}
                  className="h-auto w-full max-w-[200px] opacity-95"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust logos strip — endless horizontal marquee on a soft band */}
      <section className="bg-surface-muted py-6 md:py-8">
        <div className="mx-auto w-full max-w-[720px] px-4">
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
