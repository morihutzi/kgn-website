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
 * Kidgonet "GO" Brand-Mark — das gelbe Wink-Smiley aus der Marke. Kann in
 * Weiss (auf gelbem Header) oder Gelb-Farbe ausgegeben werden.
 */
export function KidgoBrandMark({
  variant = "white",
  className = "",
}: {
  variant?: "white" | "yellow";
  className?: string;
}) {
  const fg = variant === "white" ? "#ffffff" : "#F9B000";
  const accent = variant === "white" ? "#F9B000" : "#ffffff";
  return (
    <svg
      viewBox="0 0 40 16"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* "G" */}
      <text
        x="0"
        y="13"
        fontSize="14"
        fontWeight="900"
        fill={fg}
        className="font-sans"
        letterSpacing="-0.5"
      >
        G
      </text>
      {/* "O" als runde Smiley-Form */}
      <g transform="translate(11, 0)">
        <circle cx="7" cy="8" r="6.5" fill={fg} />
        {/* Wink-Auge links: kleiner Bogen */}
        <path
          d="M 4 6.5 Q 5.2 5.2 6.4 6.5"
          stroke={accent}
          strokeWidth="1.1"
          strokeLinecap="round"
          fill="none"
        />
        {/* Auge rechts: Punkt */}
        <circle cx="9.2" cy="6.2" r="0.85" fill={accent} />
        {/* Lachen */}
        <path
          d="M 4.2 9.5 Q 7 11.6 9.8 9.5"
          stroke={accent}
          strokeWidth="1.1"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

/**
 * Grosse Variante des Smileys fuer Block-Page o.ae.
 */
export function KidgoSmileyLarge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" fill="#F9B000" />
      {/* Wink-Auge links */}
      <path
        d="M 16 28 Q 22 22 28 28"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Auge rechts */}
      <circle cx="42" cy="27" r="3.2" fill="white" />
      {/* Lachen */}
      <path
        d="M 18 40 Q 32 52 46 40"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
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
