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
 * iOS Kidgonet App/App/app/app/Features/Core/AppShell/ParentDashboardView.swift
 * (childCard + dashboardSummaryRow). Verwendet die KidgonetTheme-Farben
 * (primary #F9B000, darkText #4A4A49, backgroundWarm #FCFAF7,
 * checkmark #C6C500) und Radius 20pt sowie Shadow black/0.09 radius 16.
 *
 * Visuell konsistent zum [[ChildviewMockup]] in Schritt 3 (gleicher
 * PhoneFrame). Statisch, keine Animation.
 */
export function ConnectDevicesMockup() {
  return (
    <PhoneFrame className="max-w-[220px]">
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-[#FCFAF7]" />

      <div className="relative z-10 flex h-full flex-col px-3 pt-3">
        <div className="flex items-center justify-between text-foreground/70">
          <span className="text-[9px] font-semibold leading-none">14:07</span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <KidgonetSmiley className="size-5" />
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] font-extrabold text-foreground leading-none">
              Guten Tag
            </span>
            <span className="mt-0.5 text-[6.5px] text-foreground/50">
              Donnerstag, 22. Mai
            </span>
          </div>
        </div>

        <div className="mt-2.5 flex items-center gap-1.5">
          <span className="text-[7px] font-semibold text-foreground/50">
            3 Kinder
          </span>
          <span className="text-[7px] font-bold text-foreground/25">·</span>
          <span className="block size-[3px] rounded-full bg-[#C6C500]" />
          <span className="text-[7px] font-medium text-foreground/50">
            5 Geräte geschützt
          </span>
        </div>

        <div className="mt-2 flex flex-col gap-1.5">
          <ChildCard
            name="Anna"
            devices={[
              { name: "Annas iPhone", protected: true },
              { name: "Annas iPad", protected: true },
            ]}
            timeRemainingText="1h 23m übrig"
            progressFraction={0.45}
          />
          <ChildCard
            name="Franz"
            devices={[{ name: "Franz' iPhone", protected: true }]}
            timeRemainingText="42m übrig"
            progressFraction={0.7}
            warning
          />
          <ChildCard
            name="Lena"
            devices={[
              { name: "Lenas iPhone", protected: true },
              { name: "Lenas Laptop", protected: true },
            ]}
            timeRemainingText="Unbegrenzt"
            unlimited
          />
        </div>

        <button
          type="button"
          className="mt-2 flex items-center gap-1 text-brand-yellow"
          aria-hidden
          tabIndex={-1}
        >
          <Plus className="size-2.5" strokeWidth={2.5} />
          <span className="text-[8px] font-semibold">Kind hinzufügen</span>
        </button>
      </div>
    </PhoneFrame>
  );
}

type Device = { name: string; protected: boolean };

type ChildCardProps = {
  name: string;
  devices: Device[];
  timeRemainingText: string;
  progressFraction?: number;
  warning?: boolean;
  unlimited?: boolean;
};

function ChildCard({
  name,
  devices,
  timeRemainingText,
  progressFraction = 0,
  warning = false,
  unlimited = false,
}: ChildCardProps) {
  const timeColor = unlimited
    ? "text-[#95C11E]"
    : warning
      ? "text-[#FC5802]"
      : "text-brand-yellow";
  const barColor = warning ? "bg-[#FC5802]" : "bg-brand-yellow";

  return (
    <div className="rounded-[10px] border-2 border-brand-yellow/85 bg-white/85 px-2 pb-1.5 pt-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
      <div className="flex items-start gap-1.5">
        <PersonFillIcon className="mt-0.5 size-2.5 text-brand-yellow" />

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-[9px] font-semibold leading-tight text-foreground">
            {name}
          </span>
          <div className="mt-0.5 flex flex-col gap-px">
            {devices.map((device) => (
              <div key={device.name} className="flex items-center gap-1">
                <span
                  className={`block size-[3px] rounded-full ${
                    device.protected ? "bg-[#C6C500]" : "bg-[#FC5802]"
                  }`}
                />
                <span className="text-[6.5px] font-medium text-foreground">
                  {device.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <span className={`shrink-0 text-[7.5px] font-medium tabular-nums ${timeColor}`}>
          {timeRemainingText}
        </span>

        <ChevronRight
          className="mt-0.5 size-2.5 text-foreground/30"
          strokeWidth={2.5}
          aria-hidden
        />
      </div>

      {!unlimited && (
        <div className="mt-1.5 h-[3px] w-full overflow-hidden rounded-full bg-foreground/10">
          <div
            className={`h-full rounded-full ${barColor}`}
            style={{ width: `${Math.max(progressFraction * 100, 4)}%` }}
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
      <circle cx="8" cy="5.5" r="3" />
      <path d="M 2 14 Q 2 9 8 9 Q 14 9 14 14 Z" />
    </svg>
  );
}

function KidgonetSmiley({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#F9B000" />
      <path
        d="M 6 11 Q 7.5 9 9 11"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="15" cy="10.5" r="1" fill="white" />
      <path
        d="M 6.5 15 Q 12 19 17.5 15"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export const CONNECT_DEVICES_NATIVE_WIDTH = NATIVE_WIDTH;
export const CONNECT_DEVICES_NATIVE_HEIGHT = NATIVE_HEIGHT;
