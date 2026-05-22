import { Hourglass, Wifi, BatteryMedium } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

/**
 * Sekundengenaue Zeiterfassung. Statisches Mockup:
 * Greeting-Card oben, grosse Restzeit-Anzeige mit Progress-Bar unten.
 */
export function TimeTrackingMockup() {
  return (
    <PhoneFrame className="max-w-[160px]">
      {/* Top gradient */}
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

        <div className="mx-2 mt-2 rounded-md bg-white shadow-[0_2px_3px_rgba(0,0,0,0.06)]">
          <div className="px-2 pt-2 pb-1 text-[8px] font-extrabold text-foreground">
            Hallo Anna
          </div>
          <div className="mx-2 h-px bg-border" />
          <div className="flex items-center gap-1.5 px-2 py-1.5">
            <div className="flex size-4 items-center justify-center rounded bg-brand-green text-white">
              <Hourglass className="size-2" strokeWidth={2.5} aria-hidden />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[7px] font-extrabold text-foreground">
                Heute noch
              </span>
              <span className="text-[7px] text-foreground/60">2:30 Std.</span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-3">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground/50">
              Aufgebraucht
            </p>
            <p className="mt-0.5 text-[28px] font-extrabold leading-none text-brand-yellow">
              1:43
            </p>
            <p className="text-[8px] font-semibold text-foreground/60">
              von 4 Stunden
            </p>
          </div>
          <div className="mt-3 w-full">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
              <div className="h-full w-[43%] rounded-full bg-brand-yellow" />
            </div>
          </div>
        </div>

        <div className="h-3" />
      </div>
    </PhoneFrame>
  );
}
