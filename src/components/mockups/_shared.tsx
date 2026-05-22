import { Wifi, Signal, BatteryMedium } from "lucide-react";

/**
 * Shared Status-Bar fuer alle Phone-Mockups. Zeit + Signal/Wifi/Battery,
 * farb-konfigurierbar (white auf gelbem Header, dark auf weisser Page).
 */
export function MockupStatusBar({
  time = "11:51",
  variant = "light",
}: {
  time?: string;
  variant?: "light" | "dark";
}) {
  const color = variant === "light" ? "text-white" : "text-[#4A4A49]";
  return (
    <div
      className={`flex items-center justify-between px-3 pt-2 ${color}`}
      aria-hidden="true"
    >
      <span className="text-[8px] font-semibold leading-none tabular-nums">
        {time}
      </span>
      <div className="flex items-center gap-1">
        <Signal className="size-[7px]" strokeWidth={2.5} />
        <Wifi className="size-[7px]" strokeWidth={2.5} />
        <BatteryMedium className="size-[8px]" strokeWidth={2.5} />
      </div>
    </div>
  );
}

/**
 * Sanduhr im flachen iOS-Stil — wie in der Greeting-Card.
 */
export function HourglassIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 2h8M4 14h8" />
      <path d="M5 2v2c0 1.5 1 2.5 3 4 2-1.5 3-2.5 3-4V2" />
      <path d="M5 14v-2c0-1.5 1-2.5 3-4 2 1.5 3 2.5 3 4v2" />
    </svg>
  );
}

/**
 * Mond-Icon fuer "Schlafen"-Schedule.
 */
export function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 9.8a5.5 5.5 0 1 1-7.3-7.3 5.5 5.5 0 0 0 7.3 7.3z" />
    </svg>
  );
}

/**
 * Buch-Icon fuer "Schule"-Schedule.
 */
export function BookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 3v10a1 1 0 0 0 1 1h9V2H4a1 1 0 0 0-1 1z" />
      <path d="M13 14V2" />
    </svg>
  );
}

/**
 * Stift-Icon fuer "Hausaufgaben"-Schedule.
 */
export function PencilIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11.5 2.5l2 2L5 13H3v-2l8.5-8.5z" />
      <path d="M10 4l2 2" />
    </svg>
  );
}
