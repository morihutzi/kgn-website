import { LaptopMedienfuehrerscheinMockup } from "@/components/mockups/LaptopMedienfuehrerscheinMockup";
import { StepsMobileNav } from "@/components/sections/StepsMobileNav";
import { medienfuehrerschein as mf } from "@/content/home";
import { siteConfig } from "@/content/site";

const CHAPTERS_LIST_ID = "medienfuehrerschein-chapters";

/**
 * Medienführerschein-Section — Intro + akkurates Laptop-Dashboard-Mockup,
 * darunter die 5 Kapitel als Karten-Grid, abschließend ein weicher CTA.
 *
 * Bewusst als ergänzendes Programm positioniert, mit Sekundär-CTA, damit die
 * App und ihr "Jetzt gratis testen" der einzige harte CTA der Seite bleiben.
 */
export function Medienfuehrerschein() {
  return (
    <section className="w-full bg-white px-4 py-12 md:py-16">
      <div className="mx-auto max-w-[1080px] overflow-hidden rounded-[28px] border-2 border-brand-yellow bg-white px-5 py-8 shadow-[0_24px_60px_-24px_rgba(74,74,73,0.22)] md:px-12 md:py-12">
        {/* Produkt-Badge: positioniert den Medienführerschein als eigenständiges
            Programm, nicht als Feature der App. */}
        <div className="mb-6 flex justify-center md:justify-start">
          <span className="inline-flex items-center rounded-full bg-brand-yellow px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white">
            Jetzt neu: Kidgonet Medienführerschein
          </span>
        </div>

        {/* Intro + Laptop-Dashboard */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-dark/45">
              {mf.eyebrow}
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-brand-yellow md:text-[28px] md:leading-[1.15]">
              {mf.headline}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-dark/80 md:text-base">
              {mf.subline}
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-[82%] max-w-[340px] md:w-full">
              <LaptopMedienfuehrerscheinMockup />
            </div>
          </div>
        </div>

        {/* Kapitel-Vorstellung */}
        <div className="mt-12">
          <p className="text-center text-sm font-semibold text-text-dark/70 md:text-base">
            {mf.chaptersIntro}
          </p>
          <ul
            id={CHAPTERS_LIST_ID}
            className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-6 md:gap-5 md:overflow-visible md:pb-0"
          >
            {mf.chapters.map((chapter, i) => {
              const number = String(i + 1).padStart(2, "0");
              return (
                <li
                  key={chapter.title}
                  className={`relative flex w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-[20px] border-[3px] border-[#F0F0F0] bg-white p-6 transition-colors hover:border-[#F9B000]/40 md:min-h-[220px] md:w-auto md:shrink ${
                    i < 3 ? "md:col-span-2" : "md:col-span-3"
                  }`}
                >
                  {/* Ganze Kachel verlinkt auf die Medienführerschein-Seite */}
                  <a
                    href={siteConfig.medienfuehrerscheinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${chapter.title} – zum Medienführerschein`}
                    className="absolute inset-0 z-20"
                  />
                  {/* Wasserzeichen-Nummer */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-10 select-none font-extrabold leading-none tracking-tighter text-[#F9B000]/[0.07]"
                    style={{ fontSize: 200 }}
                  >
                    {number}
                  </span>

                  <div className="relative">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#4A4A49]/55">
                      Kapitel · {number}
                    </span>

                    <h3 className="mb-2 mt-3 text-[22px] font-extrabold leading-[1.15] tracking-tight text-[#4A4A49]">
                      {chapter.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[#4A4A49]/70">
                      {chapter.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Carousel-Navigation (Pfeile + Dots), nur mobil */}
          <StepsMobileNav
            containerSelector={`#${CHAPTERS_LIST_ID}`}
            count={mf.chapters.length}
          />
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={siteConfig.medienfuehrerscheinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[10px] bg-brand-yellow px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-[#e29500]"
          >
            {mf.ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
