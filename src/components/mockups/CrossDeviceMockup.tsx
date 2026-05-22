import { Smartphone, Tablet, Wifi, BatteryMedium } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

/**
 * Geraeteuebergreifend. Statisches Mockup:
 * Liste mit Smartphone + Tablet und addierter Gesamtzeit.
 */
export function CrossDeviceMockup() {
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

        <div className="mx-2 mt-2 rounded-md bg-white shadow-[0_2px_3px_rgba(0,0,0,0.06)]">
          <div className="px-2 pt-2 pb-1 text-[8px] font-extrabold text-foreground">
            Annas Geräte
          </div>
          <div className="mx-2 h-px bg-border" />
          <div className="space-y-1.5 px-2 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="flex size-4 items-center justify-center rounded bg-brand-yellow/20">
                  <Smartphone
                    className="size-2 text-brand-yellow"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </div>
                <span className="text-[7px] font-semibold text-foreground">
                  iPhone
                </span>
              </div>
              <span className="text-[7px] font-extrabold text-foreground">
                1:12
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="flex size-4 items-center justify-center rounded bg-brand-yellow/20">
                  <Tablet
                    className="size-2 text-brand-yellow"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </div>
                <span className="text-[7px] font-semibold text-foreground">
                  iPad
                </span>
              </div>
              <span className="text-[7px] font-extrabold text-foreground">
                0:31
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-3">
          <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-foreground/55">
            Gesamt heute
          </p>
          <p className="mt-1 text-[24px] font-extrabold leading-none text-brand-yellow">
            1:43
          </p>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-brand-green/15 px-2 py-0.5">
            <span className="block size-1.5 rounded-full bg-brand-green" />
            <span className="text-[7px] font-extrabold uppercase tracking-wider text-brand-green">
              Synchron
            </span>
          </div>
        </div>

        <div className="h-3" />
      </div>
    </PhoneFrame>
  );
}
