import Image from "next/image";
import { ChevronRight, Plus } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

const NATIVE_WIDTH = 220;
const NATIVE_HEIGHT = 463;

/**
 * Connect-Devices-Mockup: Ein einzelnes Phone, das den ParentDashboard-View
 * aus der iOS Kidgonet App 1:1 nachbaut. Listet alle verbundenen Kinder
 * mit ihren Geräten und Restzeit-Status.
 *
 * Style basiert auf
 * iOS Kidgonet App/.../ParentDashboardView.swift (childCard +
 * dashboardSummaryRow). Verwendet die KidgonetTheme-Farben und die
 * echte Kidgonet-Smiley-Marke aus /brand/smiley.png.
 *
 * Visuell konsistent zum [[ChildviewMockup]] in Schritt 3 (gleicher
 * PhoneFrame). Statisch, keine Animation.
 */
export function ConnectDevicesMockup() {
  return (
    <PhoneFrame className="max-w-[220px]">
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-[#FCFAF7]" />

      <div className="relative z-10 flex h-full flex-col px-3 pt-3">
        <div className="flex items-center justify-between text-foreground/65">
          <span className="text-[9px] font-semibold leading-none tabular-nums">
            14:07
          </span>
        </div>

        <div className="mt-2.5 flex items-center gap-2">
          <Image
            src="/brand/smiley-square.png"
            alt=""
            width={48}
            height={48}
            className="size-6 shrink-0"
            priority={false}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-extrabold leading-none text-foreground">
              Guten Tag
            </span>
            <span className="mt-0.5 text-[6.5px] text-foreground/50">
              Donnerstag, 22. Mai
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1.5">
          <span className="text-[7px] font-semibold text-foreground/55">
            3 Kinder
          </span>
          <span className="text-[7px] font-bold text-foreground/25">·</span>
          <span className="block size-[3px] rounded-full bg-brand-green" />
          <span className="text-[7px] font-medium text-foreground/55">
            5 Geräte geschützt
          </span>
        </div>

        <div className="mt-2.5 flex flex-col gap-2">
          <ChildCard
            name="Anna"
            devices={["Annas iPhone", "Annas iPad"]}
            timeText="1h 23m übrig"
            timeVariant="default"
            progressFraction={0.45}
          />
          <ChildCard
            name="Franz"
            devices={["Franz' iPhone"]}
            timeText="42m übrig"
            timeVariant="warning"
            progressFraction={0.72}
          />
          <ChildCard
            name="Lena"
            devices={["Lenas iPhone", "Lenas Laptop"]}
            timeText="Unbegrenzt"
            timeVariant="unlimited"
          />
        </div>

        <div className="mt-3 flex items-center gap-1 text-brand-yellow">
          <Plus className="size-3" strokeWidth={2.5} aria-hidden />
          <span className="text-[8px] font-semibold">Kind hinzufügen</span>
        </div>
      </div>
    </PhoneFrame>
  );
}

type TimeVariant = "default" | "warning" | "unlimited";

type ChildCardProps = {
  name: string;
  devices: string[];
  timeText: string;
  timeVariant: TimeVariant;
  progressFraction?: number;
};

function ChildCard({
  name,
  devices,
  timeText,
  timeVariant,
  progressFraction = 0,
}: ChildCardProps) {
  const timeColor =
    timeVariant === "unlimited"
      ? "text-brand-green"
      : timeVariant === "warning"
        ? "text-[#FC5802]"
        : "text-brand-yellow";

  const barColor =
    timeVariant === "warning" ? "bg-[#FC5802]" : "bg-brand-yellow";

  return (
    <div className="rounded-[12px] border-[1.5px] border-brand-yellow/85 bg-white px-2.5 py-2 shadow-[0_1.5px_3px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-2">
        <PersonFillIcon className="size-3 shrink-0 text-brand-yellow" />

        <div className="flex flex-col leading-tight">
          <span className="text-[9.5px] font-bold leading-none text-foreground">
            {name}
          </span>
          <div className="mt-1 flex flex-col gap-px">
            {devices.map((device) => (
              <div key={device} className="flex items-center gap-1">
                <span className="block size-[3px] rounded-full bg-brand-green" />
                <span className="text-[6.5px] font-medium leading-tight text-foreground/85">
                  {device}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1" />

        <span
          className={`shrink-0 text-[8px] font-semibold leading-none tabular-nums ${timeColor}`}
        >
          {timeText}
        </span>

        <ChevronRight
          className="size-2.5 shrink-0 text-foreground/25"
          strokeWidth={2.5}
          aria-hidden
        />
      </div>

      {timeVariant !== "unlimited" && (
        <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-foreground/8">
          <div
            className={`h-full rounded-full ${barColor}`}
            style={{ width: `${Math.max(progressFraction * 100, 6)}%` }}
          />
        </div>
      )}
    </div>
  );
}

function PersonFillIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <circle cx="8" cy="5.5" r="2.8" />
      <path d="M 2.4 14 C 2.4 10.4 5 8.8 8 8.8 C 11 8.8 13.6 10.4 13.6 14 Z" />
    </svg>
  );
}

export const CONNECT_DEVICES_NATIVE_WIDTH = NATIVE_WIDTH;
export const CONNECT_DEVICES_NATIVE_HEIGHT = NATIVE_HEIGHT;
