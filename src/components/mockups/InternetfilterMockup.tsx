import { PhoneFrame } from "./PhoneFrame";

/**
 * Internetfilter-Blockierseite. Wenn ein Kind eine gesperrte URL aufruft,
 * zeigt die Kidgonet-App diese "Diese Seite ist geblockt"-Seite.
 * Faithful nachgebaut nach Internetfilter.png aus dem CI-Ordner.
 */
export function InternetfilterMockup() {
  return (
    <PhoneFrame className="max-w-[180px]">
      <div className="relative z-10 flex h-full min-h-0 flex-col bg-white">
        {/* Status bar (subtle) */}
        <div className="flex items-center justify-between px-3 pt-1.5 text-[#4A4A49]">
          <span className="text-[7px] font-semibold">08:57</span>
          <span className="text-[7px]">📶 🔋</span>
        </div>

        {/* Browser URL bar */}
        <div className="mx-2 mt-1 flex items-center gap-1 rounded-full bg-[#F4EFE3] px-1.5 py-0.5">
          <span className="text-[6px] text-[#4A4A49]">⌂</span>
          <span className="flex-1 truncate rounded-full bg-[#FFD9DC] px-1.5 py-0.5 text-[6px] font-semibold text-[#C24450]">
            porn.com
          </span>
          <span className="text-[6px] text-[#4A4A49]">+</span>
          <span className="text-[6px] text-[#4A4A49]">2</span>
          <span className="text-[6px] text-[#4A4A49]">⋮</span>
        </div>

        {/* Large smiley */}
        <div className="mt-3 flex justify-center">
          <KidgoSmiley className="size-12" />
        </div>

        {/* KIDGONET title */}
        <p className="mt-1.5 text-center text-[10px] font-extrabold tracking-tight text-[#4A4A49]">
          KID<span className="text-[#F9B000]">GO</span>NET
        </p>

        {/* Beige status strip */}
        <div className="mt-1.5 bg-[#EAE3D9] py-0.5 text-center">
          <p className="text-[7px] font-bold text-[#4A4A49]">
            Diese Seite ist geblockt
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden px-2.5 pt-2 pb-2 text-[#4A4A49]">
          <p className="text-[6px]">
            <span className="font-extrabold">Hallo</span>, diese Seite ist im
            Moment gesperrt.
          </p>
          <p className="mt-1.5 text-[6px]">Gründe dafür können sein:</p>
          <ul className="mt-0.5 list-inside list-disc space-y-0 pl-1 text-[5.5px] leading-tight">
            <li>Die Seite ist für Dein Alter nicht geeignet</li>
            <li>Deine Onlinezeit ist abgelaufen</li>
            <li>Eine Auszeit ist aktiv</li>
            <li>Deine Eltern haben die Notbremse gezogen</li>
          </ul>

          <p className="mt-1.5 text-[6px] font-extrabold">Dein Kidgonet-Team</p>
          <p className="text-[6px]">
            Gerne online?{" "}
            <span className="font-extrabold italic text-[#F9B000]">
              Aber sicher!
            </span>
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}

function KidgoSmiley({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" fill="#F9B000" />
      {/* Left eye - wink */}
      <path
        d="M 16 28 Q 22 22 28 28"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right eye - dot */}
      <circle cx="42" cy="27" r="3" fill="white" />
      {/* Smile */}
      <path
        d="M 18 40 Q 32 52 46 40"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
