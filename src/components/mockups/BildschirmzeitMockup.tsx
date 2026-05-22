import { PhoneFrame } from "./PhoneFrame";
import {
  HourglassIcon,
  KidgoBrandMark,
  MockupStatusBar,
} from "./_shared";

/**
 * Bildschirmzeit-Screen aus der Kidgonet Jugendschutz App (Kindgerät).
 * Faithful nachgebaut nach UIOverviewViewController + UICircleTimeView aus
 * iOS-Native-master/KidgoNET. Farben aus AppColors (UIConstants.swift):
 * yellow #F9B000, green #95C11F, beige #EAE3D9, black #4A4A49.
 */
export function BildschirmzeitMockup() {
  return (
    <PhoneFrame className="max-w-[180px]">
      {/* Yellow header band */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-0 h-[64px] bg-[#F9B000]"
      />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <MockupStatusBar time="11:51" variant="light" />

        {/* Brand mark + 3-dots */}
        <div className="flex items-start justify-between px-3 pt-1">
          <KidgoBrandMark variant="white" className="h-3.5" />
          <div className="mt-0.5 flex flex-col items-center gap-[2px]">
            <span className="block size-[3px] rounded-full bg-white" />
            <span className="block size-[3px] rounded-full bg-white" />
            <span className="block size-[3px] rounded-full bg-white" />
          </div>
        </div>

        {/* Greeting card (overlaps yellow/white boundary) */}
        <div className="mx-2.5 mt-2 rounded-[6px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.10)]">
          <p className="px-3 pt-1.5 pb-1 text-center text-[9px] font-extrabold text-[#4A4A49]">
            Hallo Franziska
          </p>
          <div className="mx-2.5 h-px bg-[#EAE3D9]" />
          <div className="flex items-center gap-2 px-3 py-1.5">
            <span
              aria-hidden="true"
              className="flex size-4 flex-shrink-0 items-center justify-center rounded-full bg-[#EAE3D9]"
            >
              <HourglassIcon className="size-2.5 text-[#95C11F]" />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[7px] font-extrabold text-[#4A4A49]">
                Heute noch:
              </span>
              <span className="text-[7px] text-[#4A4A49]/70 tabular-nums">
                0 Std. 56 Min.
              </span>
            </div>
          </div>
        </div>

        {/* Big circle: yellow border + green fill with wave + dark text */}
        <div className="flex flex-1 items-center justify-center px-3">
          <div className="relative aspect-square w-[80%]">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <clipPath id="bildschirmzeit-clip">
                  <circle cx="50" cy="50" r="47" />
                </clipPath>
              </defs>
              {/* White background inside circle */}
              <circle cx="50" cy="50" r="47" fill="white" />
              {/* Green fill (74% of circle filled — matches "0:56 von 4 Std") */}
              <g clipPath="url(#bildschirmzeit-clip)">
                <rect x="0" y="30" width="100" height="70" fill="#95C11F" />
                {/* Wave silhouette on top of fill */}
                <path
                  d="M 0 30 C 16 22 32 38 50 30 C 68 22 84 38 100 30 L 100 35 L 0 35 Z"
                  fill="#7BA517"
                  opacity="0.5"
                />
              </g>
              {/* Yellow outer ring */}
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="none"
                stroke="#F9B000"
                strokeWidth="3"
              />
              {/* Centered text inside circle */}
              <text
                x="50"
                y="54"
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                fill="#4A4A49"
                className="font-sans tabular-nums"
              >
                0 Std. 56 Min.
              </text>
            </svg>
          </div>
        </div>

        {/* Android-style nav bar */}
        <div
          aria-hidden="true"
          className="mt-1 flex items-center justify-around border-t border-[#EAE3D9] px-4 py-1.5 text-[#4A4A49]/55"
        >
          <span className="text-[8px]">◀</span>
          <span className="block size-2.5 rounded-full border border-current" />
          <span className="block h-2 w-2 border border-current" />
        </div>
      </div>
    </PhoneFrame>
  );
}
