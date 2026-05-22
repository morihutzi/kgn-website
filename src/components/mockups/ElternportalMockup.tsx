import { PhoneFrame } from "./PhoneFrame";

/**
 * Elternportal-Screen aus der Kidgonet Portal App.
 * Faithful nachgebaut: Kind-Overview mit Avatar, Standort, Zeit-Stats und
 * heutigen Internetsperren.
 */
export function ElternportalMockup() {
  return (
    <PhoneFrame className="max-w-[180px]">
      <div className="relative z-10 flex h-full min-h-0 flex-col bg-white">
        {/* Status bar */}
        <div className="flex items-center justify-between px-3 pt-2 text-[#4A4A49]">
          <span className="text-[7px] font-semibold leading-none">11:24</span>
          <span className="text-[7px]">📶 🔋</span>
        </div>

        {/* Yellow header */}
        <div className="mt-1 flex items-center gap-1.5 bg-[#F9B000] px-2.5 py-1.5 text-white">
          <span className="text-[9px] font-extrabold">☰</span>
          <span className="text-[9px] font-extrabold">Portal</span>
        </div>

        {/* Eltern PORTAL + Menü */}
        <div className="flex items-center justify-between border-b border-[#EAE3D9] px-2.5 py-1.5">
          <span className="text-[8px] text-[#4A4A49]">
            Eltern <span className="font-extrabold">PORTAL</span>
          </span>
          <div className="flex items-center gap-1 text-[7px] text-[#F9B000]">
            <span>☰</span>
            <span className="font-bold">Menü</span>
          </div>
        </div>

        {/* + Kind hinzufügen */}
        <div className="border-b border-[#EAE3D9] bg-[#FBF6EC] px-2.5 py-1">
          <div className="inline-flex items-center gap-1 rounded bg-[#F9B000] px-1.5 py-0.5 text-[7px] font-bold text-white">
            <span>+</span>
            <span>Kind hinzufügen</span>
          </div>
        </div>

        {/* Yellow band with kid info */}
        <div className="relative bg-[#F9B000] px-2.5 pt-1.5 pb-3">
          <div className="mx-auto h-7 w-7 rounded-full border-2 border-white bg-[#EAE3D9]" />
        </div>

        {/* White content area */}
        <div className="-mt-1.5 flex-1 rounded-t-[8px] bg-white px-2.5 pt-1.5 pb-2">
          <p className="text-center text-[8px] font-extrabold text-[#4A4A49]">
            Franz (10 Jahre)
          </p>
          <p className="mt-1 text-center text-[6px] font-bold text-[#F9B000]">
            Aktueller Standort:
          </p>
          <p className="mt-0.5 text-center text-[6px] text-[#4A4A49]/70">
            Onlineallee 7, 12345 Screentown
          </p>

          <div className="mt-1.5 grid grid-cols-2 gap-1">
            <div>
              <p className="text-[6px] font-bold text-[#4A4A49]">
                Verfügbare Zeit:
              </p>
              <p className="text-[6px] text-[#4A4A49]/70">1:30 Std.</p>
            </div>
            <div>
              <p className="text-[6px] font-bold text-[#4A4A49]">
                Restzeit heute:
              </p>
              <p className="text-[6px] text-[#4A4A49]/70">1:16 Std.</p>
            </div>
          </div>

          <p className="mt-1.5 text-[6px] font-bold text-[#4A4A49]">
            Heutige Internetsperren:
          </p>
          <ul className="mt-0.5 space-y-0">
            <li className="text-[5.5px] text-[#4A4A49]/75">
              22:00 - 06:00 Schlafen
              <span className="text-[#F9B000]"> ♪ [heute aktiv]</span>
            </li>
            <li className="text-[5.5px] text-[#4A4A49]/75">
              08:00 - 14:55 Schule
              <span className="text-[#F9B000]"> ♪ [heute aktiv]</span>
            </li>
            <li className="text-[5.5px] text-[#4A4A49]/75">
              11:00 - 14:00 Hausaufgaben
              <span className="text-[#F9B000]"> ♪ [heute aktiv]</span>
            </li>
          </ul>

          <div className="mt-1.5 flex items-center justify-between">
            <span className="text-[5.5px] text-[#4A4A49]/75">
              Bildschirmzeit unbegrenzt:
            </span>
            <span className="inline-block size-2 rounded-sm border border-[#F9B000]" />
          </div>
          <p className="mt-0.5 text-[5.5px] text-[#4A4A49]/75">
            Geschützte Geräte: 1 / 2{" "}
            <span className="text-[#F9B000]">[ändern]</span>
          </p>

          <div className="mt-1 flex items-center justify-between gap-1">
            <span className="flex-1 rounded bg-[#F9B000] px-1 py-0.5 text-center text-[5.5px] font-bold text-white">
              Alle Geräte sperren
            </span>
            <span className="rounded bg-[#0E7D72] px-1.5 py-0.5 text-[5.5px] font-bold text-white">
              ? Hilfe
            </span>
          </div>
        </div>

        <div className="h-3" />
      </div>
    </PhoneFrame>
  );
}
