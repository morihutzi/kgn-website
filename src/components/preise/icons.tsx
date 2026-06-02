/**
 * Icons fuer die Preise-Journey.
 * `currentColor` wird vom Parent gesteuert; alle SVGs benutzen die gleiche Linienstaerke fuer Konsistenz.
 */

type IconProps = { className?: string };

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor" as const,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function CalendarCheckIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} strokeWidth={1.5} className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 3v4M16 3v4" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} strokeWidth={1.5} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} strokeWidth={1.5} className={className}>
      <path d="M3 7l9 6 9-6" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
    </svg>
  );
}

export function PersonIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} strokeWidth={1.6} className={className}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} strokeWidth={1.6} className={className}>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function FlagIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} strokeWidth={1.6} className={className}>
      <path d="M5 21V4" />
      <path d="M5 4h11l-2 3 2 3H5" />
    </svg>
  );
}
