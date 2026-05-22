import { ShieldCheck, Lock, Wifi, BatteryMedium } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

/**
 * Browserunabhaengiger Internetfilter. Statisches Mockup:
 * URL-Bar oben, grosse "Blockiert"-Anzeige mit Schild-Icon mittig.
 */
export function WebFilterMockup() {
  return (
    <PhoneFrame className="max-w-[160px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[80px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(249,176,0,1) 0%, rgba(249,176,0,0) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <div className="flex items-center justify-between px-3 pt-2 text-white">
          <span className="text-[8px] font-semibold leading-none">14:07</span>
          <div className="flex items-center gap-0.5">
            <Wifi className="size-2" strokeWidth={2.5} aria-hidden />
            <BatteryMedium className="size-2.5" strokeWidth={2.5} aria-hidden />
          </div>
        </div>

        <div className="mx-2 mt-2 flex items-center gap-1 rounded-md bg-white px-2 py-1 shadow-[0_2px_3px_rgba(0,0,0,0.06)]">
          <Lock
            className="size-2 flex-shrink-0 text-foreground/50"
            strokeWidth={2.5}
            aria-hidden
          />
          <span className="truncate text-[7px] font-semibold text-foreground/70">
            beispiel-seite.de
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-3 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-brand-yellow text-white">
            <ShieldCheck className="size-7" strokeWidth={2} aria-hidden />
          </div>
          <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.1em] text-brand-yellow">
            Blockiert
          </p>
          <p className="mt-1.5 text-[7px] leading-snug text-foreground/65">
            Diese Seite ist nicht für dein Alter geeignet.
          </p>
        </div>

        <div className="mx-2 mb-4 rounded-md bg-brand-green/15 px-2 py-1.5 text-center">
          <span className="text-[7px] font-extrabold uppercase tracking-wider text-brand-green">
            Filter aktiv
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}
