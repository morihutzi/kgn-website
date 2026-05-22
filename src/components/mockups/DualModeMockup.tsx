"use client";

import {
  Wifi,
  BatteryMedium,
  Hourglass,
  Clock,
  Shield,
  Pause,
} from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

/**
 * Dual-Mode-Mockup: Visualisiert "Eine App, zwei Modi" — ein Phone, das oben
 * die Kind-Ansicht (Greeting + Bildschirmzeit-Anzeige) und unten die Eltern-
 * Steuerung (Settings-Liste mit Bildschirmzeit/Webfilter/Pausen) zeigt.
 *
 * Statisch, keine Animation. Wird typischerweise per
 * [[DualModeMockupScaled]] auf eine sichtbare Zielbreite skaliert.
 */
export function DualModeMockup() {
  return (
    <PhoneFrame className="max-w-[220px]">
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
          <span className="text-[10px] font-semibold leading-none">14:07</span>
          <div className="flex items-center gap-1">
            <Wifi className="size-2.5" strokeWidth={2.5} aria-hidden />
            <BatteryMedium className="size-3" strokeWidth={2.5} aria-hidden />
          </div>
        </div>

        <div className="mx-3 mt-3">
          <p className="mb-1 px-1 text-[7px] font-extrabold uppercase tracking-[0.08em] text-white">
            Kindermodus
          </p>
          <div className="rounded-xl bg-white shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
            <div className="px-3 pb-1.5 pt-2.5 text-[11px] font-extrabold text-foreground">
              Hallo Anna
            </div>
            <div className="mx-3 h-px bg-border" />
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="flex size-6 items-center justify-center rounded-md bg-[#C6C500] text-white">
                <Hourglass className="size-3" strokeWidth={2.5} aria-hidden />
              </div>
              <div className="flex flex-1 flex-col leading-tight">
                <span className="text-[8px] font-extrabold text-foreground">
                  Heute noch:
                </span>
                <span className="text-[8px] text-foreground/60">45 Min.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-3 my-3 flex items-center gap-2">
          <div className="h-px flex-1 bg-foreground/15" />
          <span className="text-[7px] font-extrabold uppercase tracking-[0.08em] text-foreground/45">
            Eltern-Modus
          </span>
          <div className="h-px flex-1 bg-foreground/15" />
        </div>

        <div className="mx-3 rounded-xl bg-white shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
          <SettingRow
            icon={<Clock className="size-3" strokeWidth={2.5} aria-hidden />}
            label="Bildschirmzeit"
            value="60 Min."
            active
          />
          <div className="mx-3 h-px bg-border" />
          <SettingRow
            icon={<Shield className="size-3" strokeWidth={2.5} aria-hidden />}
            label="Webfilter"
            value="Aktiv"
            active
          />
          <div className="mx-3 h-px bg-border" />
          <SettingRow
            icon={<Pause className="size-3" strokeWidth={2.5} aria-hidden />}
            label="Pausen"
            value="Mo–Fr"
          />
        </div>

        <div className="h-4" />
      </div>
    </PhoneFrame>
  );
}

type SettingRowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  active?: boolean;
};

function SettingRow({ icon, label, value, active = false }: SettingRowProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2">
      <div
        className={`flex size-6 items-center justify-center rounded-md text-white ${
          active ? "bg-primary" : "bg-foreground/35"
        }`}
      >
        {icon}
      </div>
      <div className="flex flex-1 flex-col leading-tight">
        <span className="text-[8px] font-extrabold text-foreground">
          {label}
        </span>
        <span className="text-[8px] text-foreground/60">{value}</span>
      </div>
      <div
        className={`relative h-3 w-5 rounded-full transition-colors ${
          active ? "bg-primary" : "bg-foreground/20"
        }`}
      >
        <span
          className={`absolute top-[2px] size-2 rounded-full bg-white shadow-sm transition-transform ${
            active ? "translate-x-[10px]" : "translate-x-[2px]"
          }`}
        />
      </div>
    </div>
  );
}
