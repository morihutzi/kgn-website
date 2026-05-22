"use client";

import { useEffect, useState } from "react";
import { PhoneFrame } from "./PhoneFrame";

const COUNTDOWN_DURATION = 4000;
const BLOCKED_DURATION = 1800;
const CYCLE_DURATION = COUNTDOWN_DURATION + BLOCKED_DURATION;
const INITIAL_MINUTES = 60;

const COLOR_FULL = { r: 0.776, g: 0.773, b: 0 };
const COLOR_LOW = { r: 0.976, g: 0.69, b: 0 };

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function fillColorFor(fillFraction: number): string {
  const t = Math.max(0, Math.min(1, (fillFraction - 0.2) / 0.3));
  const r = Math.round(lerp(COLOR_LOW.r, COLOR_FULL.r, t) * 255);
  const g = Math.round(lerp(COLOR_LOW.g, COLOR_FULL.g, t) * 255);
  const b = Math.round(lerp(COLOR_LOW.b, COLOR_FULL.b, t) * 255);
  return `rgb(${r},${g},${b})`;
}

function buildWavePath(waterY: number, offset: number): string {
  if (waterY >= 100) return "";
  const amplitude = 3;
  const step = 2;
  const segments: string[] = [];
  segments.push(`M 0 100`);
  segments.push(`L 0 ${waterY}`);
  for (let x = 0; x <= 100 + step; x += step) {
    const phase = (x / 100 + offset) * 2 * Math.PI;
    const y = waterY + Math.sin(phase) * amplitude;
    segments.push(`L ${x.toFixed(1)} ${y.toFixed(2)}`);
  }
  segments.push(`L 100 100`);
  segments.push("Z");
  return segments.join(" ");
}

function readReduceMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function IconWifi({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  );
}

function IconBattery({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="6" width="16" height="12" rx="2" />
      <line x1="22" y1="11" x2="22" y2="13" />
      <line x1="6" y1="10" x2="6" y2="14" />
      <line x1="10" y1="10" x2="10" y2="14" />
    </svg>
  );
}

function IconHourglass({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 22h14" />
      <path d="M5 2h14" />
      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function KindermodusMockup({ className }: { className?: string }) {
  const [elapsed, setElapsed] = useState(0);
  const [waveOffset, setWaveOffset] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(readReduceMotion);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const start = Date.now();
    let frame = 0;
    const tick = () => {
      const now = Date.now() - start;
      setElapsed(now);
      setWaveOffset((now / 3000) % 1);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  const effectiveElapsed = reduceMotion ? COUNTDOWN_DURATION + 200 : elapsed;
  const phaseTime = effectiveElapsed % CYCLE_DURATION;
  const isBlocked = phaseTime >= COUNTDOWN_DURATION;
  const countdownProgress = Math.min(1, phaseTime / COUNTDOWN_DURATION);
  const remainingMinutes = isBlocked
    ? 0
    : Math.max(0, Math.round((1 - countdownProgress) * INITIAL_MINUTES));
  const fillFraction = isBlocked ? 0 : Math.max(0.02, 1 - countdownProgress);
  const fillColor = fillColorFor(fillFraction);
  const waterY = 100 * (1 - fillFraction);
  const wavePath = buildWavePath(waterY, waveOffset);
  const wavePathBg = buildWavePath(waterY, waveOffset + 0.3);

  const currentTime = "14:07";

  return (
    <PhoneFrame className={className}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[110px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(249,176,0,1) 0%, rgba(249,176,0,0) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <div className="flex items-center justify-between px-4 pt-3 text-white">
          <span className="text-[10px] font-semibold leading-none">
            {currentTime}
          </span>
          <div className="flex items-center gap-1">
            <IconWifi className="size-2.5" />
            <IconBattery className="size-3" />
          </div>
        </div>

        <div className="mx-3 mt-3 rounded-xl bg-white shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
          <div className="px-3 pb-1.5 pt-2.5 text-[11px] font-extrabold text-text-dark">
            Hallo Anna
          </div>
          <div className="mx-3 h-px bg-black/10" />
          <div className="flex items-center gap-2 px-3 py-2">
            <div
              className={`flex size-6 items-center justify-center rounded-md text-white transition-colors ${
                isBlocked ? "bg-brand-yellow" : "bg-brand-green"
              }`}
            >
              {isBlocked ? (
                <IconClock className="size-3" />
              ) : (
                <IconHourglass className="size-3" />
              )}
            </div>
            <div className="flex flex-1 flex-col leading-tight">
              <span className="text-[8px] font-extrabold text-text-dark">
                {isBlocked ? "Zeit vorbei" : "Heute noch:"}
              </span>
              <span className="text-[8px] text-text-dark/60">
                {isBlocked
                  ? "Aufgebraucht für heute"
                  : `${remainingMinutes} Min.`}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center px-4">
          <div className="relative aspect-square w-full max-w-[150px]">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <clipPath id="kindermodus-wave-circle-clip">
                  <circle cx="50" cy="50" r="48" />
                </clipPath>
                <clipPath id="kindermodus-wave-fill-clip">
                  <path d={wavePath} />
                </clipPath>
              </defs>

              <circle cx="50" cy="50" r="48" fill="white" />

              {!isBlocked ? (
                <>
                  <g clipPath="url(#kindermodus-wave-circle-clip)">
                    <path
                      d={wavePathBg}
                      fill={fillColor}
                      fillOpacity="0.4"
                    />
                    <path d={wavePath} fill={fillColor} />
                  </g>

                  <text
                    x="50"
                    y="58"
                    textAnchor="middle"
                    fill="#F9B000"
                    className="font-sans"
                  >
                    <tspan fontSize="28" fontWeight={800}>
                      {remainingMinutes}
                    </tspan>
                    <tspan fontSize="10" fontWeight={600} dx="1.5">
                      Min.
                    </tspan>
                  </text>

                  <text
                    x="50"
                    y="58"
                    textAnchor="middle"
                    fill="white"
                    clipPath="url(#kindermodus-wave-fill-clip)"
                    className="font-sans"
                  >
                    <tspan fontSize="28" fontWeight={800}>
                      {remainingMinutes}
                    </tspan>
                    <tspan fontSize="10" fontWeight={600} dx="1.5">
                      Min.
                    </tspan>
                  </text>
                </>
              ) : null}

              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#F9B000"
                strokeWidth="3"
              />
            </svg>

            {isBlocked ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-1 text-center">
                  <IconClock className="size-7 text-brand-yellow" />
                  <span className="text-[13px] font-extrabold text-text-dark">
                    Zeit vorbei
                  </span>
                  <span className="px-3 text-[9px] leading-tight text-text-dark/60">
                    Deine Zeit für heute
                    <br />
                    ist aufgebraucht
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="h-4" />
      </div>
    </PhoneFrame>
  );
}
