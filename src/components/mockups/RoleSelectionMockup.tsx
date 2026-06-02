import { ChevronLeft, ChevronRight } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

const NATIVE_WIDTH = 220;
const NATIVE_HEIGHT = 463;

/**
 * Role-Selection-Mockup: Ein einzelnes Phone, das den Onboarding-Screen
 * "Wer nutzt dieses Gerät?" aus der iOS Kidgonet App 1:1 nachbaut. Der Nutzer
 * wählt zwischen Eltern- und Kindmodus — die visuelle Entsprechung zu
 * "Eine App, zwei Modi" (Schritt 1).
 *
 * Style basiert auf
 * iOS Kidgonet App/.../Features/Core/Onboarding/RoleSelectionScreenView.swift
 * (roleCard + Header). Verwendet die KidgonetTheme-Farben:
 *   - Primary/Yellow #F9B000 (brand-yellow), Dark-Text #4A4A49 (foreground),
 *     Surface weiß, Background warm #FCFAF7.
 *
 * Visuell konsistent zum [[ConnectDevicesMockup]] und [[ChildviewMockup]]
 * (gleicher PhoneFrame, gleiche Native-Maße). Statisch, keine Animation.
 */
export function RoleSelectionMockup() {
  return (
    <PhoneFrame className="max-w-[220px]">
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-[#FCFAF7]" />

      <div className="relative z-10 flex h-full flex-col px-3 pb-5 pt-3">
        {/* Statuszeile */}
        <div className="flex items-center justify-between text-foreground/65">
          <span className="text-[9px] font-semibold leading-none tabular-nums">
            14:07
          </span>
        </div>

        {/* Navigationsleiste — "Deine Rolle" zentriert, Back-Chevron links */}
        <div className="relative mt-2 flex h-5 items-center justify-center">
          <ChevronLeft
            className="absolute left-0 size-3.5 text-foreground"
            strokeWidth={2.75}
            aria-hidden
          />
          <span className="text-[10px] font-bold text-foreground">
            Deine Rolle
          </span>
        </div>

        {/* Inhalt vertikal zentriert */}
        <div className="flex flex-1 flex-col justify-center gap-4">
          <div className="flex flex-col items-center gap-1.5 px-1 text-center">
            <span className="text-[15px] font-extrabold leading-tight text-foreground">
              Wer nutzt dieses Gerät?
            </span>
            <span className="text-[8.5px] font-medium leading-snug text-foreground/55">
              Die Auswahl bestimmt, welcher Modus
              <br />
              eingerichtet wird.
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <RoleCard
              icon={<PersonCircleIcon className="size-6 text-white" />}
              title="Elternteil"
              subtitle="Einrichtung & Verwaltung"
              isPrimary
            />
            <RoleCard
              icon={<ChildFigureIcon className="size-6 text-brand-yellow" />}
              title="Kind"
              subtitle="Gerät wird geschützt"
            />
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

type RoleCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  isPrimary?: boolean;
};

function RoleCard({ icon, title, subtitle, isPrimary = false }: RoleCardProps) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-[14px] px-3 py-2.5 shadow-[0_2px_6px_rgba(74,74,73,0.09)] ${
        isPrimary ? "bg-brand-yellow" : "bg-white"
      }`}
    >
      <div className="flex size-7 shrink-0 items-center justify-center">
        {icon}
      </div>

      <div className="flex flex-col leading-tight">
        <span
          className={`text-[11px] font-bold leading-none ${
            isPrimary ? "text-white" : "text-foreground"
          }`}
        >
          {title}
        </span>
        <span
          className={`mt-1 text-[8px] font-medium leading-none ${
            isPrimary ? "text-white/80" : "text-foreground/55"
          }`}
        >
          {subtitle}
        </span>
      </div>

      <div className="flex-1" />

      <ChevronRight
        className={`size-3 shrink-0 ${
          isPrimary ? "text-white/70" : "text-foreground/30"
        }`}
        strokeWidth={2.75}
        aria-hidden
      />
    </div>
  );
}

/** Gefülltes Personen-im-Kreis-Glyph (entspricht SF Symbol "person.circle.fill"). */
function PersonCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm0 4.6a2.85 2.85 0 1 1 0 5.7 2.85 2.85 0 0 1 0-5.7Zm0 13.5a7.7 7.7 0 0 1-5.2-2c.03-1.7 3.46-2.65 5.2-2.65 1.73 0 5.17.95 5.2 2.65a7.7 7.7 0 0 1-5.2 2Z"
      />
    </svg>
  );
}

/** Stehende Kind-Silhouette (entspricht SF Symbol "figure.child"). */
function ChildFigureIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <circle cx="12" cy="4.4" r="2.7" />
      <path d="M12 8.2c-2.05 0-3.5 1.2-3.92 3.05l-.72 3.2c-.2.86 1.06 1.18 1.28.33l.86-3.3v1.45l-.95 6.6c-.14.98 1.36 1.2 1.56.22l1.04-5.3h.86l1.04 5.3c.2.98 1.7.76 1.56-.22l-.95-6.6V11.5l.86 3.3c.22.85 1.48.53 1.28-.33l-.72-3.2C15.5 9.4 14.05 8.2 12 8.2Z" />
    </svg>
  );
}

export const ROLE_SELECTION_NATIVE_WIDTH = NATIVE_WIDTH;
export const ROLE_SELECTION_NATIVE_HEIGHT = NATIVE_HEIGHT;
