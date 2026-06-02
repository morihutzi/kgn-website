"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type JourneyStep = {
  title: string;
  description: string;
  /** Grosses Symbol oben auf der Karte */
  cardIcon: ReactNode;
  /** Label am Marker auf der Linie, z.B. "Heute" */
  markerLabel: string;
  /** Kleines Icon im Marker-Kreis */
  markerIcon: ReactNode;
};

type StepState = "upcoming" | "active" | "completed";

// Farb-Tokens — Yellow als Volltonen, neutrales Grau fuer inaktiv
const YELLOW_TRACK = "#F1E0B7"; // dezentes Track-Gelb
const GRAY_OFF = "#D9D2C6"; // neutrales Off-Grau fuer inaktive Marker

export function PricingJourney({ steps }: { steps: JourneyStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  // Mobile: Refs auf die Marker-Spalten-Divs fuer prazise Linienberechnung
  const markerMobileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progressPx, setProgressPx] = useState(0);
  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [states, setStates] = useState<StepState[]>(() =>
    steps.map(() => "upcoming"),
  );

  useEffect(() => {
    const update = () => {
      const c = containerRef.current;
      if (!c) return;
      const rect = c.getBoundingClientRect();
      const targetY = window.innerHeight * 0.55;
      const isMobile = window.innerWidth < 768;

      // Auf Mobile: Marker-Refs fuer exakte Linienposition nutzen
      const firstEl = isMobile
        ? markerMobileRefs.current[0]
        : stepRefs.current[0];
      const lastEl = isMobile
        ? markerMobileRefs.current[steps.length - 1]
        : stepRefs.current[steps.length - 1];
      if (!firstEl || !lastEl) return;

      const fr = firstEl.getBoundingClientRect();
      const lr = lastEl.getBoundingClientRect();
      const firstCenter = (fr.top + fr.bottom) / 2 - rect.top;
      const lastCenter = (lr.top + lr.bottom) / 2 - rect.top;
      const nextLineTop = firstCenter;
      const nextLineHeight = Math.max(0, lastCenter - firstCenter);
      setLineTop(nextLineTop);
      setLineHeight(nextLineHeight);

      // Fortschritt relativ zur Linie selbst (nicht zum Container)
      const fromLineTopToMid = targetY - rect.top - nextLineTop;
      setProgressPx(
        Math.max(0, Math.min(nextLineHeight, fromLineTopToMid)),
      );

      setStates(
        stepRefs.current.map((el): StepState => {
          if (!el) return "upcoming";
          const er = el.getBoundingClientRect();
          const center = (er.top + er.bottom) / 2;
          if (center < targetY - 60) return "completed";
          if (center > targetY + 220) return "upcoming";
          return "active";
        }),
      );
    };

    update();
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length]);

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-[28px] border-2 border-brand-yellow bg-white px-4 py-7 md:rounded-[36px] md:px-12 md:py-24"
        >
          {/* Fortschritts-Linie
              Mobile: left-9 = 36px = container-px-5(20px) + marker-half(16px)
              Desktop: zentriert */}
          <ProgressLine
            progressPx={progressPx}
            className="absolute left-8 md:hidden"
            style={{ top: `${lineTop}px`, height: `${lineHeight}px` }}
          />
          <ProgressLine
            progressPx={progressPx}
            className="absolute left-1/2 hidden -translate-x-1/2 md:block"
            style={{ top: `${lineTop}px`, height: `${lineHeight}px` }}
          />

          <div className="relative mx-auto w-full max-w-4xl">
            {/* Intro */}
            <div className="mb-5 text-center md:mb-16">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
                So läuft deine Testphase
              </p>
              <h2 className="mt-2 text-xl font-extrabold leading-tight text-text-dark md:text-3xl">
                In drei Schritten startklar
              </h2>
            </div>

            <ol className="relative space-y-6 md:space-y-24">
              {steps.map((step, idx) => {
                const state = states[idx] ?? "upcoming";
                const cardOnRight = idx % 2 === 1;

                return (
                  <li
                    key={idx}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    className="relative md:grid md:grid-cols-2 md:gap-0"
                  >
                    {/* ── MOBILE: Flexbox-Layout mit fixer Marker-Spalte ──
                        Kein absolute positioning — Marker sitzt im normalen Fluss.
                        Marker-Mitte: container-px(20) + col-width/2(16) = 36px = left-9 ✓ */}
                    <div className="flex gap-3 md:hidden">
                      {/* Linke Spalte: Marker im Dokumentenfluss */}
                      <div
                        ref={(el) => {
                          markerMobileRefs.current[idx] = el;
                        }}
                        className="flex w-8 shrink-0 justify-center pt-1"
                      >
                        <Marker state={state} icon={step.markerIcon} />
                      </div>

                      {/* Rechte Spalte: Label + Card */}
                      <div className="min-w-0 flex-1 pb-1">
                        <span
                          className={[
                            "mb-2 block text-[10px] font-extrabold uppercase tracking-[0.2em]",
                            state !== "upcoming"
                              ? "text-brand-yellow"
                              : "text-text-dark/40",
                          ].join(" ")}
                        >
                          {step.markerLabel}
                        </span>
                        <Card
                          icon={step.cardIcon}
                          title={step.title}
                          description={step.description}
                        />
                      </div>
                    </div>

                    {/* ── DESKTOP: Card (abwechselnde Seiten) ── */}
                    <div
                      className={[
                        "relative hidden md:block",
                        cardOnRight
                          ? "md:col-start-2 md:pl-10"
                          : "md:col-start-1 md:pr-10",
                      ].join(" ")}
                    >
                      <Card
                        icon={step.cardIcon}
                        title={step.title}
                        description={step.description}
                      />
                    </div>

                    {/* Desktop: Marker auf der Mittellinie */}
                    <Marker
                      state={state}
                      icon={step.markerIcon}
                      className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
                    />

                    {/* Desktop: Label-Chip */}
                    <span
                      className={[
                        "pointer-events-none absolute top-1/2 hidden -translate-y-1/2 items-center transition-colors duration-300 md:flex",
                        cardOnRight
                          ? "right-1/2 mr-8 flex-row-reverse"
                          : "left-1/2 ml-8",
                        state !== "upcoming"
                          ? "text-brand-yellow"
                          : "text-text-dark/35",
                      ].join(" ")}
                    >
                      <Triangle direction={cardOnRight ? "right" : "left"} />
                      <span className="whitespace-nowrap px-2 text-sm font-semibold tracking-wide">
                        {step.markerLabel}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────

function ProgressLine({
  progressPx,
  className,
  style,
}: {
  progressPx: number;
  className: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={["pointer-events-none w-[3px]", className].join(" ")}
      style={style}
    >
      <div className="relative h-full w-full">
        {/* Track */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: YELLOW_TRACK }}
        />
        {/* Fortschritt */}
        <div
          className="absolute left-0 right-0 top-0 rounded-full bg-brand-yellow"
          style={{ height: `${progressPx}px` }}
        />
        {/* End-Caps */}
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow ring-4 ring-white" />
        <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-yellow ring-4 ring-white" />
      </div>
    </div>
  );
}

function Card({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl bg-white px-5 py-6 text-center shadow-[0_8px_28px_rgba(0,0,0,0.07)] ring-1 ring-black/5 md:px-10 md:py-9">
      <div className="mx-auto flex h-10 w-10 items-center justify-center text-brand-yellow md:h-14 md:w-14">
        {icon}
      </div>
      <h3 className="mt-3 text-base font-extrabold leading-snug text-text-dark md:mt-5 md:text-2xl">
        {title}
      </h3>
      <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-text-dark/65 md:mt-3 md:text-[15px]">
        {description}
      </p>
    </article>
  );
}

function Marker({
  state,
  icon,
  className = "",
}: {
  state: StepState;
  icon: ReactNode;
  className?: string;
}) {
  const isOn = state !== "upcoming";
  return (
    <span
      className={[
        "z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-white transition-all duration-300 md:h-11 md:w-11 md:border-[3px]",
        isOn ? "border-brand-yellow text-brand-yellow" : "",
        state === "active" ? "shadow-md shadow-brand-yellow/30" : "",
        className,
      ].join(" ")}
      style={!isOn ? { borderColor: GRAY_OFF, color: GRAY_OFF } : undefined}
    >
      <span className="h-4 w-4 md:h-5 md:w-5">{icon}</span>
    </span>
  );
}

function Triangle({ direction }: { direction: "left" | "right" }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-2 w-2 bg-current"
      style={{
        clipPath:
          direction === "left"
            ? "polygon(100% 0, 0 50%, 100% 100%)"
            : "polygon(0 0, 100% 50%, 0 100%)",
      }}
    />
  );
}
