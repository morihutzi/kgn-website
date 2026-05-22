import Image from "next/image";
import { PhoneSlideshow } from "@/components/ui/PhoneSlideshow";
import { hero, problemSolution } from "@/content/home";
import { siteConfig } from "@/content/site";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-1 h-5 w-5 flex-shrink-0 text-white"
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
  );
}

export function HeroAndIntro() {
  return (
    <section className="px-4 pt-4 md:pt-6">
      <div className="relative mx-auto w-full max-w-[930px]">
        {/* Banner photo card 930x496 */}
        <div className="relative aspect-[930/496] w-full overflow-hidden rounded-[20px]">
          <Image
            src="/images/hero/vater-sohn.jpeg"
            alt="Vater und Sohn nutzen gemeinsam ein Smartphone"
            fill
            sizes="(min-width: 1024px) 930px, 100vw"
            priority
            className="object-cover"
          />

          {/* Headline overlay top-right */}
          <div className="absolute inset-0 flex flex-col items-end justify-start px-6 pt-[20%] text-right md:px-10 md:pt-[20%] lg:px-12">
            <h1 className="max-w-[604px] text-2xl font-extrabold leading-[1] text-text-dark md:text-4xl lg:text-[48px] lg:leading-[48px]">
              {hero.headline}
            </h1>
            <p className="mt-3 max-w-[604px] text-sm font-semibold text-text-dark md:text-lg lg:text-[26px] lg:leading-[40px]">
              {hero.subheadline}
            </p>
          </div>

          {/* CTA row at bottom-left of photo: Google Play badge + yellow pill button */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3 md:bottom-6 md:left-6 lg:bottom-8 lg:left-[80px]">
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bei Google Play laden"
              className="inline-block"
            >
              <Image
                src="/badges/google-play-de.png"
                alt="Bei Google Play laden"
                width={125}
                height={37}
                className="h-9 w-auto"
              />
            </a>
            <a
              href={siteConfig.portalWelcomeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[10px] bg-brand-yellow px-4 py-2 text-[13px] font-extrabold text-white shadow-sm hover:bg-[#e09e00]"
            >
              {hero.primaryCtaLabel}
            </a>
          </div>
        </div>

        {/* Yellow "Hier ist die Lösung" block 930x476 */}
        <div className="relative mt-4 rounded-[20px] bg-brand-yellow px-6 pb-12 pt-8 md:mt-5 md:px-12 md:pb-14 md:pt-10">
          {/* Headline left-aligned but with right column space for the phone */}
          <div className="ml-0 md:ml-[200px]">
            <h2 className="text-xl font-semibold leading-tight text-white md:text-[33px] md:leading-[44px]">
              {problemSolution.eyebrow}
              <br />
              <span className="font-extrabold">{problemSolution.headline}</span>
            </h2>

            <ul className="mt-5 grid gap-2 md:mt-6 md:gap-y-2">
              {problemSolution.bullets.map((bullet) => (
                <li key={bullet.text} className="flex items-start gap-3">
                  <CheckIcon />
                  <span
                    className={`text-sm md:text-base ${
                      bullet.highlighted ? "font-extrabold" : "font-semibold"
                    } text-white`}
                  >
                    {bullet.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kidgonet logo (white) at bottom center */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 md:bottom-7">
            <Image
              src="/brand/logo-weiss.png"
              alt="Kidgonet"
              width={203}
              height={28}
              className="h-6 w-auto md:h-7"
            />
          </div>
        </div>

        {/* Phone slideshow overlay — positioned exactly per Figma:
            phone x=95px from card left, y starts 451px from photo top (= 45px from photo bottom)
            phone size 203x451 */}
        <PhoneSlideshow
          slides={hero.icons}
          className="pointer-events-none absolute hidden md:block z-10
                     md:left-[95px]
                     md:top-[calc((100vw-32px)*(451/930))]
                     lg:top-[451px]
                     md:w-[180px] lg:w-[203px]"
        />
      </div>
    </section>
  );
}
