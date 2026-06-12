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

  // Scroll-Fortschritt nur fuer die vertikale Mobile-Timeline;
  // Desktop zeigt alle drei Schritte nebeneinander und ist statisch.
  useEffect(() => {
    const update = () => {
      const c = containerRef.current;
      if (!c) return;
      const rect = c.getBoundingClientRect();
      const targetY = window.innerHeight * 0.55;

      const firstEl = markerMobileRefs.current[0];
      const lastEl = markerMobileRefs.current[steps.length - 1];
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
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-[28px] border-2 border-brand-yellow bg-white px-4 py-7 md:rounded-[36px] md:px-10 md:py-12"
        >
          {/* Fortschritts-Linie (nur Mobile)
              left-8 = 32px = container-px-4(16px) + marker-half(16px) */}
          <ProgressLine
            progressPx={progressPx}
            className="absolute left-8 md:hidden"
            style={{ top: `${lineTop}px`, height: `${lineHeight}px` }}
          />

          <div className="relative mx-auto w-full max-w-4xl">
            {/* Intro */}
            <div className="mb-5 text-center md:mb-10">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
                So läuft deine Testphase
              </p>
              <h2 className="mt-2 text-xl font-extrabold leading-tight text-text-dark md:text-3xl">
                In drei Schritten startklar
              </h2>
            </div>

            {/* ── MOBILE: vertikale Timeline mit Scroll-Fortschritt ── */}
            <ol className="relative space-y-6 md:hidden">
              {steps.map((step, idx) => {
                const state = states[idx] ?? "upcoming";

                return (
                  <li
                    key={idx}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    className="flex gap-3"
                  >
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
                  </li>
                );
              })}
            </ol>

            {/* ── DESKTOP: kompakte horizontale Reihe ──
                Marker sitzen auf einer durchgehenden Linie, Cards darunter. */}
            <ol
              className="hidden md:grid"
              style={{
                gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
              }}
            >
              {steps.map((step, idx) => (
                <li
                  key={idx}
                  className="relative flex flex-col items-center px-4 text-center"
                >
                  {/* Liniensegmente links/rechts vom Marker — auf Marker-Hoehe (h-11/2) */}
                  {idx > 0 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 right-1/2 top-[22px] h-[3px] -translate-y-1/2 bg-brand-yellow"
                    />
                  )}
                  {idx < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 right-0 top-[22px] h-[3px] -translate-y-1/2 bg-brand-yellow"
                    />
                  )}

                  <Marker state="completed" icon={step.markerIcon} />
                  <span className="mt-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-yellow">
                    {step.markerLabel}
                  </span>
                  <div className="mt-3 w-full flex-1">
                    <Card
                      icon={step.cardIcon}
                      title={step.title}
                      description={step.description}
                    />
                  </div>
                </li>
              ))}
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
    <article className="h-full rounded-2xl bg-white px-5 py-6 text-center shadow-[0_8px_28px_rgba(0,0,0,0.07)] ring-1 ring-black/5 md:px-6 md:py-7">
      <div className="mx-auto flex h-10 w-10 items-center justify-center text-brand-yellow md:h-11 md:w-11">
        {icon}
      </div>
      <h3 className="mt-3 text-base font-extrabold leading-snug text-text-dark md:mt-4 md:text-lg">
        {title}
      </h3>
      <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-text-dark/65 md:text-sm">
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
