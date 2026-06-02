import { Wifi, BatteryMedium, Navigation, User } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

const NATIVE_WIDTH = 220;
const NATIVE_HEIGHT = 463;

/**
 * Standort-Mockup: deutet eine Karten-/Live-Standort-Ansicht an, wie sie der
 * Echtzeit-Standort im Kidgonet-Elternportal zeigt. Stilisierte Karte (keine
 * externen Tiles), Standort-Pin + Adresskarte. Konsistenter PhoneFrame wie
 * die übrigen Mockups.
 */
export function StandortMockup() {
  return (
    <PhoneFrame className="max-w-[220px]">
      {/* Stilisierte Karte als Vollflächen-Hintergrund */}
      <div aria-hidden="true" className="absolute inset-0">
        <svg
          viewBox="0 0 220 463"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <rect width="220" height="463" fill="#e9eae3" />
          {/* Grünflächen / Parks */}
          <rect x="6" y="48" width="80" height="96" rx="10" fill="#cfe6c4" />
          <rect x="150" y="246" width="84" height="78" rx="10" fill="#cfe6c4" />
          {/* Wasser unten rechts */}
          <path
            d="M150 463 L220 463 L220 352 C 198 378, 172 420, 150 463 Z"
            fill="#a9d4f0"
          />
          {/* Hauptstraße (dezent gelb) */}
          <line
            x1="-10"
            y1="262"
            x2="232"
            y2="118"
            stroke="#f6e2a8"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Straßen (weiß) */}
          <g stroke="#ffffff" strokeLinecap="round">
            <line x1="-10" y1="174" x2="232" y2="160" strokeWidth="13" />
            <line x1="-10" y1="322" x2="232" y2="334" strokeWidth="11" />
            <line x1="56" y1="-10" x2="64" y2="473" strokeWidth="12" />
            <line x1="158" y1="-10" x2="150" y2="473" strokeWidth="11" />
          </g>
          {/* Gebäudeblöcke */}
          <g fill="#dcdbd4">
            <rect x="98" y="58" width="44" height="34" rx="4" />
            <rect x="98" y="98" width="28" height="24" rx="4" />
            <rect x="12" y="188" width="34" height="42" rx="4" />
            <rect x="172" y="168" width="30" height="36" rx="4" />
            <rect x="78" y="352" width="42" height="32" rx="4" />
            <rect x="14" y="352" width="40" height="40" rx="4" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 flex h-full flex-col">
        {/* Statusleiste */}
        <div className="flex items-center justify-between px-4 pt-3 text-foreground/70">
          <span className="text-[9px] font-semibold leading-none tabular-nums">
            14:07
          </span>
          <div className="flex items-center gap-1">
            <Wifi className="size-2.5" strokeWidth={2.5} aria-hidden />
            <BatteryMedium className="size-3" strokeWidth={2.5} aria-hidden />
          </div>
        </div>

        {/* Live-Pill oben */}
        <div className="mx-3 mt-2 flex items-center gap-1.5 self-start rounded-full bg-white px-2.5 py-1 shadow-[0_2px_6px_rgba(0,0,0,0.12)]">
          <span className="block size-1.5 rounded-full bg-brand-green" />
          <span className="text-[8px] font-bold leading-none text-foreground">
            Annas iPhone · Live
          </span>
        </div>

        {/* Standort-Pin mittig */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Genauigkeits-Radius */}
          <div className="absolute size-[120px] rounded-full bg-brand-yellow/15 ring-1 ring-brand-yellow/25" />
          <div className="relative -mt-8 flex flex-col items-center drop-shadow-[0_3px_5px_rgba(0,0,0,0.25)]">
            {/* Pin-Spitze (hinter der Avatar-Blase) */}
            <div className="absolute bottom-0 size-3 rotate-45 rounded-[2px] bg-brand-yellow" />
            {/* Avatar-Blase mit Personen-Icon */}
            <div className="relative z-10 mb-2 flex size-10 items-center justify-center rounded-full border-[3px] border-brand-yellow bg-white">
              <User className="size-5 text-brand-yellow" strokeWidth={2.6} aria-hidden />
            </div>
          </div>
        </div>

        {/* Adresskarte unten */}
        <div className="mx-3 mb-6 rounded-2xl bg-white p-2.5 shadow-[0_4px_14px_rgba(0,0,0,0.16)]">
          <div className="flex items-center gap-2">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-white">
              <User className="size-3.5" strokeWidth={2.5} aria-hidden />
            </div>
            <div className="flex flex-1 flex-col leading-tight">
              <span className="text-[10px] font-extrabold leading-none text-foreground">
                Anna
              </span>
              <span className="mt-0.5 text-[7px] leading-tight text-foreground/60">
                Onlineallee 7, 12345 Screentown
              </span>
            </div>
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-white">
              <Navigation className="size-3" fill="currentColor" strokeWidth={0} aria-hidden />
            </div>
          </div>
          <div className="mt-1.5 flex items-center gap-1">
            <span className="block size-1.5 rounded-full bg-brand-green" />
            <span className="text-[7px] font-medium leading-none text-foreground/55">
              Aktueller Standort · vor 2 Min
            </span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

export const STANDORT_NATIVE_WIDTH = NATIVE_WIDTH;
export const STANDORT_NATIVE_HEIGHT = NATIVE_HEIGHT;
