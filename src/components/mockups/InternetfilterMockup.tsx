import Image from "next/image";
import { Home, MoreVertical, Plus } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";
import { MockupStatusBar } from "./_shared";

/**
 * Internetfilter-Blockierseite. Wenn ein Kind eine gesperrte URL aufruft,
 * zeigt die Kidgonet-App diese "Diese Seite ist geblockt"-Seite.
 * Faithful nachgebaut nach Internetfilter.png aus dem CI-Ordner.
 */
export function InternetfilterMockup() {
  return (
    <PhoneFrame className="max-w-[180px]">
      <div className="relative z-10 flex h-full min-h-0 flex-col bg-white">
        <MockupStatusBar time="08:57" variant="dark" />

        {/* Browser URL bar */}
        <div className="mx-1.5 mt-1 flex items-center gap-1 rounded-full bg-[#F4EFE3] px-1.5 py-0.5">
          <Home
            className="size-[8px] text-[#4A4A49]"
            strokeWidth={2.5}
          />
          <span className="flex-1 truncate rounded-full bg-white px-2 py-[1px] text-[6px] font-semibold text-[#4A4A49]">
            blocked-page.de
          </span>
          <Plus className="size-[8px] text-[#4A4A49]" strokeWidth={2.5} />
          <span className="inline-flex size-3 items-center justify-center rounded border border-[#4A4A49] text-[6px] font-bold text-[#4A4A49]">
            2
          </span>
          <MoreVertical
            className="size-[8px] text-[#4A4A49]"
            strokeWidth={2.5}
          />
        </div>

        {/* Large brand smiley */}
        <div className="mt-3 flex justify-center">
          <Image
            src="/brand/smiley.png"
            alt="Kidgonet Smiley"
            width={1059}
            height={945}
            sizes="56px"
            className="h-12 w-auto"
          />
        </div>

        {/* KIDGONET title */}
        <p className="mt-2 text-center text-[11px] font-extrabold tracking-tight text-[#4A4A49]">
          KID<span className="text-[#F9B000]">GO</span>NET
        </p>

        {/* Beige status strip */}
        <div className="mt-2 bg-[#EAE3D9] py-1 text-center">
          <p className="text-[7px] font-extrabold text-[#4A4A49]">
            Diese Seite ist geblockt
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden px-2.5 pt-2 pb-2 text-[#4A4A49]">
          <p className="text-[6.5px] leading-tight">
            <span className="font-extrabold">Hallo</span>, diese Seite ist im
            Moment gesperrt.
          </p>
          <p className="mt-1.5 text-[6.5px] leading-tight">
            Gründe dafür können sein:
          </p>
          <ul className="mt-0.5 space-y-[1px] pl-2 text-[5.5px] leading-tight">
            <li className="flex items-start gap-1">
              <span className="mt-[2px] block size-[3px] flex-shrink-0 rounded-full bg-[#4A4A49]" />
              <span>Die Seite ist für Dein Alter nicht geeignet</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="mt-[2px] block size-[3px] flex-shrink-0 rounded-full bg-[#4A4A49]" />
              <span>Deine Onlinezeit ist abgelaufen</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="mt-[2px] block size-[3px] flex-shrink-0 rounded-full bg-[#4A4A49]" />
              <span>Eine Auszeit ist aktiv</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="mt-[2px] block size-[3px] flex-shrink-0 rounded-full bg-[#4A4A49]" />
              <span>Deine Eltern haben die Notbremse gezogen</span>
            </li>
          </ul>

          <p className="mt-1.5 text-[6.5px] font-extrabold">
            Dein Kidgonet-Team
          </p>
          <p className="text-[6.5px]">
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
