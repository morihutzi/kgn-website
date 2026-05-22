import { Check, X, Music, BookOpen, Gamepad2, Wifi, BatteryMedium } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

/**
 * Apps waehrend der Pause freigeben. Statisches Mockup:
 * Pausen-Status oben, Liste mit erlaubten/gesperrten Apps.
 */
export function AppPauseMockup() {
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
          <div className="flex items-center gap-1.5 px-2 py-1.5">
            <div className="flex size-4 items-center justify-center rounded bg-brand-yellow text-white">
              <span className="text-[7px] font-extrabold">P</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[7px] font-extrabold text-foreground">
                Pausen-Modus
              </span>
              <span className="text-[7px] text-foreground/60">
                Hausaufgaben
              </span>
            </div>
          </div>
        </div>

        <div className="mx-2 mt-2 flex-1 space-y-1.5">
          <AppRow
            allowed
            icon={<BookOpen className="size-2.5" strokeWidth={2.5} aria-hidden />}
            label="Anton App"
          />
          <AppRow
            allowed
            icon={<Music className="size-2.5" strokeWidth={2.5} aria-hidden />}
            label="Spotify"
          />
          <AppRow
            allowed={false}
            icon={
              <Gamepad2 className="size-2.5" strokeWidth={2.5} aria-hidden />
            }
            label="Games"
          />
          <AppRow
            allowed={false}
            icon={<span className="text-[7px] font-extrabold">T</span>}
            label="TikTok"
          />
        </div>

        <div className="h-3" />
      </div>
    </PhoneFrame>
  );
}

function AppRow({
  allowed,
  icon,
  label,
}: {
  allowed: boolean;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-md bg-white px-2 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-1.5">
        <div
          className={`flex size-4 items-center justify-center rounded ${
            allowed ? "bg-brand-green/20 text-brand-green" : "bg-neutral-200 text-foreground/40"
          }`}
        >
          {icon}
        </div>
        <span
          className={`text-[7px] font-semibold ${
            allowed ? "text-foreground" : "text-foreground/40"
          }`}
        >
          {label}
        </span>
      </div>
      {allowed ? (
        <div className="flex size-3 items-center justify-center rounded-full bg-brand-green text-white">
          <Check className="size-2" strokeWidth={3.5} aria-hidden />
        </div>
      ) : (
        <div className="flex size-3 items-center justify-center rounded-full bg-neutral-300 text-white">
          <X className="size-2" strokeWidth={3.5} aria-hidden />
        </div>
      )}
    </div>
  );
}
