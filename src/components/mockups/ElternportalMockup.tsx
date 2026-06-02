import { Menu, Plus } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";
import { BookIcon, MockupStatusBar, MoonIcon, PencilIcon } from "./_shared";

/**
 * Elternportal-Screen aus der Kidgonet Portal App. Faithful nachgebaut nach
 * Elternportal.png aus dem CI-Ordner — Kind-Overview mit Avatar, Standort,
 * Zeit-Stats und heutigen Internetsperren.
 */
export function ElternportalMockup() {
  return (
    <PhoneFrame className="max-w-[180px]">
      <div className="relative z-10 flex h-full min-h-0 flex-col bg-white">
        <MockupStatusBar time="11:24" variant="dark" />

        {/* Portal header */}
        <div className="mt-1 flex items-center gap-1.5 bg-[#F9B000] px-2.5 py-1.5 text-white">
          <Menu className="size-2.5" strokeWidth={2.5} />
          <span className="text-[9px] font-extrabold">Portal</span>
        </div>

        {/* Eltern PORTAL + Menü */}
        <div className="flex items-center justify-between border-b border-[#EAE3D9] px-2.5 py-1.5">
          <span className="text-[8px] text-[#4A4A49]">
            Eltern <span className="font-extrabold">PORTAL</span>
          </span>
          <div className="flex items-center gap-1 text-[7px] text-[#F9B000]">
            <Menu className="size-2.5" strokeWidth={2.5} />
            <span className="font-bold">Menü</span>
          </div>
        </div>

        {/* + Kind hinzufügen */}
        <div className="bg-[#FBF6EC] px-2.5 py-1">
          <span className="inline-flex items-center gap-1 rounded bg-[#F9B000] px-1.5 py-0.5 text-[7px] font-bold text-white">
            <Plus className="size-2" strokeWidth={3} /> Kind hinzufügen
          </span>
        </div>

        {/* Yellow band + avatar */}
        <div className="relative bg-[#F9B000] px-2.5 pt-2 pb-3">
          <ChildAvatar />
        </div>

        {/* White content (rounded top) */}
        <div className="-mt-1.5 flex-1 overflow-hidden rounded-t-[8px] bg-white px-2.5 pt-1.5 pb-2">
          <p className="text-center text-[8px] font-extrabold text-[#4A4A49]">
            Franz (10 Jahre)
          </p>
          <p className="mt-1 text-center text-[6px] font-bold text-[#F9B000]">
            Aktueller Standort:
          </p>
          <p className="mt-0.5 text-center text-[6px] text-[#4A4A49]/70">
            Onlineallee 7, 12345 Screentown
          </p>

          <div className="mt-1.5 grid grid-cols-2 gap-1.5">
            <div>
              <p className="text-[6px] font-bold text-[#4A4A49]">
                Verfügbare Zeit:
              </p>
              <p className="text-[6px] text-[#4A4A49]/70 tabular-nums">
                1:30 Std.
              </p>
            </div>
            <div>
              <p className="text-[6px] font-bold text-[#4A4A49]">
                Restzeit heute:
              </p>
              <p className="text-[6px] text-[#4A4A49]/70 tabular-nums">
                1:16 Std.
              </p>
            </div>
          </div>

          <p className="mt-1.5 text-[6px] font-bold text-[#4A4A49]">
            Auszeiten festlegen:
          </p>
          <ul className="mt-0.5 space-y-[1.5px]">
            <ScheduleRow
              icon={<MoonIcon className="size-2 text-[#F9B000]" />}
              time="22:00 - 06:00"
              label="Schlafen"
            />
            <ScheduleRow
              icon={<BookIcon className="size-2 text-[#F9B000]" />}
              time="08:00 - 14:55"
              label="Schule"
            />
            <ScheduleRow
              icon={<PencilIcon className="size-2 text-[#F9B000]" />}
              time="11:00 - 14:00"
              label="Hausaufgaben"
            />
          </ul>

          <div className="mt-1.5 flex items-center justify-between">
            <span className="text-[5.5px] text-[#4A4A49]/75">
              Unbegrenzt freigeben:
            </span>
            <span className="inline-block size-2 rounded-sm border border-[#F9B000]" />
          </div>
          <p className="mt-0.5 text-[5.5px] text-[#4A4A49]/75">
            Geschützte Geräte: 1 / 2{" "}
            <span className="font-bold text-[#F9B000]">[ändern]</span>
          </p>

          <div className="mt-1.5 flex items-center gap-1">
            <span className="flex-1 rounded bg-[#F9B000] px-1.5 py-1 text-center text-[6px] font-extrabold text-white">
              Alle Geräte sperren
            </span>
            <span className="rounded bg-[#0E7D72] px-1.5 py-1 text-[6px] font-extrabold text-white">
              ? Hilfe
            </span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function ChildAvatar() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="mx-auto size-9 rounded-full border-2 border-white bg-white"
      aria-hidden="true"
    >
      {/* Background */}
      <circle cx="20" cy="20" r="20" fill="#FCE9B0" />
      {/* Head */}
      <circle cx="20" cy="16" r="6.5" fill="#E8B070" />
      {/* Hair */}
      <path
        d="M 13 14 Q 13 8 20 8 Q 27 8 27 14 L 26 13 Q 20 10 14 13 Z"
        fill="#7B4A2A"
      />
      {/* Shoulders */}
      <path
        d="M 7 40 Q 7 28 14 26 L 26 26 Q 33 28 33 40 Z"
        fill="#4A8FB8"
      />
    </svg>
  );
}

function ScheduleRow({
  icon,
  time,
  label,
}: {
  icon: React.ReactNode;
  time: string;
  label: string;
}) {
  return (
    <li className="flex items-center gap-1 text-[5.5px] text-[#4A4A49]/75 leading-tight">
      <span className="flex size-2 flex-shrink-0 items-center justify-center">
        {icon}
      </span>
      <span className="tabular-nums">{time}</span>
      <span className="font-semibold text-[#4A4A49]">{label}</span>
      <span className="ml-auto text-[#F9B000]">aktiv</span>
    </li>
  );
}
