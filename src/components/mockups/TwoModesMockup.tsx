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

const NATIVE_WIDTH = 220;
const PHONE_VISIBLE_HEIGHT = 250;
const CAPTION_HEIGHT = 18;
const GAP_BETWEEN = 32;
const NATIVE_HEIGHT =
  (CAPTION_HEIGHT + PHONE_VISIBLE_HEIGHT) * 2 + GAP_BETWEEN;

/**
 * Two-Modes-Mockup: Zwei Phones vertikal übereinander gestapelt, jeweils
 * unten zur Hälfte abgeschnitten. Über jedem Phone eine kleine Caption,
 * die das Gerät benennt. Visualisiert "Eine App, zwei Modi" als zwei
 * verschiedene Geräte: Elterngerät (Steuerung) und Kindgerät (Kindermodus).
 *
 * Statisch, keine Animation. Wird per [[TwoModesMockupScaled]] auf eine
 * Zielbreite skaliert.
 */
export function TwoModesMockup() {
  const dividerCenter =
    CAPTION_HEIGHT + PHONE_VISIBLE_HEIGHT + GAP_BETWEEN / 2;
  return (
    <div
      className="relative"
      style={{ width: NATIVE_WIDTH, height: NATIVE_HEIGHT }}
    >
      <DeviceBlock label="Elterngerät" top={0}>
        <ElternPhone />
      </DeviceBlock>

      <div
        className="absolute inset-x-0 flex items-center gap-2 px-4"
        style={{ top: dividerCenter - 6, height: 12 }}
        aria-hidden
      >
        <div className="h-px flex-1 bg-foreground/20" />
        <div className="size-1.5 rounded-full bg-foreground/35" />
        <div className="h-px flex-1 bg-foreground/20" />
      </div>

      <DeviceBlock
        label="Kindgerät"
        top={CAPTION_HEIGHT + PHONE_VISIBLE_HEIGHT + GAP_BETWEEN}
      >
        <KidPhone />
      </DeviceBlock>
    </div>
  );
}

function DeviceBlock({
  label,
  top,
  children,
}: {
  label: string;
  top: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute left-0 right-0 flex flex-col items-center"
      style={{ top }}
    >
      <span className="mb-1 text-[8px] font-extrabold uppercase tracking-[0.14em] text-foreground/55">
        {label}
      </span>
      <div
        className="relative"
        style={{
          width: NATIVE_WIDTH,
          height: PHONE_VISIBLE_HEIGHT,
          overflow: "hidden",
        }}
      >
        {children}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14"
          style={{
            background:
              "linear-gradient(to top, rgba(252,250,247,1) 0%, rgba(252,250,247,0) 100%)",
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-3 text-white">
      <span className="text-[10px] font-semibold leading-none">14:07</span>
      <div className="flex items-center gap-1">
        <Wifi className="size-2.5" strokeWidth={2.5} aria-hidden />
        <BatteryMedium className="size-3" strokeWidth={2.5} aria-hidden />
      </div>
    </div>
  );
}

function YellowGradient() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[130px]"
      style={{
        background:
          "linear-gradient(to bottom, rgba(249,176,0,1) 0%, rgba(249,176,0,0) 100%)",
      }}
      aria-hidden
    />
  );
}

function KidPhone() {
  return (
    <PhoneFrame className="max-w-[220px]">
      <YellowGradient />
      <div className="relative z-10 flex h-full flex-col">
        <StatusBar />

        <div className="mx-3 mt-3 rounded-xl bg-white shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
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

        <div className="mt-3 flex items-center justify-center">
          <div className="relative aspect-square w-[110px]">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="#C6C500"
                fillOpacity="0.18"
              />
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#F9B000"
                strokeWidth="3"
              />
              <text
                x="50"
                y="58"
                textAnchor="middle"
                fill="#F9B000"
                className="font-sans"
              >
                <tspan fontSize="26" fontWeight={800}>
                  45
                </tspan>
                <tspan fontSize="10" fontWeight={600} dx="1.5">
                  Min.
                </tspan>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function ElternPhone() {
  return (
    <PhoneFrame className="max-w-[220px]">
      <YellowGradient />
      <div className="relative z-10 flex h-full flex-col">
        <StatusBar />

        <div className="mx-3 mt-3 rounded-xl bg-white px-3 py-2 shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
          <div className="text-[7px] font-extrabold uppercase tracking-[0.1em] text-foreground/45">
            Eltern-Steuerung
          </div>
          <div className="mt-0.5 text-[11px] font-extrabold text-foreground">
            Annas Regeln
          </div>
        </div>

        <div className="mx-3 mt-3 rounded-xl bg-white shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
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

export const TWO_MODES_NATIVE_WIDTH = NATIVE_WIDTH;
export const TWO_MODES_NATIVE_HEIGHT = NATIVE_HEIGHT;
