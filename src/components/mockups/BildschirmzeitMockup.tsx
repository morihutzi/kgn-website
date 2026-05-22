import { PhoneFrame } from "./PhoneFrame";

/**
 * Bildschirmzeit-Screen aus der Kidgonet Jugendschutz App (Kindgerät).
 * Faithful nachgebaut nach UIOverviewViewController + UICircleTimeView
 * aus iOS-Native-master/KidgoNET. Farben aus AppColors (UIConstants.swift):
 * yellow #F9B000, green #95C11F, beige #EAE3D9, black #4A4A49.
 */
export function BildschirmzeitMockup() {
  return (
    <PhoneFrame className="max-w-[180px]">
      {/* Yellow header band */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-0 h-[68px] bg-[#F9B000]"
      />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        {/* Status bar */}
        <div className="flex items-center justify-between px-3 pt-2 text-white">
          <span className="text-[8px] font-semibold leading-none">11:51</span>
          <div className="flex items-center gap-0.5">
            <span className="text-[7px]">📶</span>
            <span className="text-[7px]">🔋</span>
          </div>
        </div>

        {/* GO logo + dots */}
        <div className="flex items-start justify-between px-2.5 pt-1">
          <KidgoLogoMark className="h-3 text-white" />
          <div className="flex flex-col gap-0.5 pt-1">
            <span className="block size-0.5 rounded-full bg-white" />
            <span className="block size-0.5 rounded-full bg-white" />
            <span className="block size-0.5 rounded-full bg-white" />
          </div>
        </div>

        {/* Greeting card (overlaps yellow/white boundary) */}
        <div className="mx-2.5 mt-2 rounded-md bg-white shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
          <p className="px-2.5 pt-2 pb-1 text-center text-[9px] font-extrabold text-[#4A4A49]">
            Hallo Franziska
          </p>
          <div className="mx-2.5 h-px bg-[#EAE3D9]" />
          <div className="flex items-center gap-1.5 px-2.5 py-1.5">
            <HourglassBadge />
            <div className="flex flex-col leading-tight">
              <span className="text-[7px] font-extrabold text-[#4A4A49]">
                Heute noch:
              </span>
              <span className="text-[7px] text-[#4A4A49]/70">
                0 Stunden 56 Minuten
              </span>
            </div>
          </div>
        </div>

        {/* Big circle */}
        <div className="flex flex-1 items-center justify-center px-3">
          <div className="relative aspect-square w-[78%]">
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
              {/* Green fill (74% — matches ~0h56m remaining) */}
              <g clipPath="url(#bildschirmzeit-clip)">
                <rect x="0" y="26" width="100" height="74" fill="#95C11F" />
                {/* Darker green wave on top of fill (slight shape) */}
                <path
                  d="M 0 26 Q 25 18 50 26 T 100 26 L 100 30 L 0 30 Z"
                  fill="#7BA517"
                  opacity="0.6"
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
              {/* Text in center */}
              <text
                x="50"
                y="56"
                textAnchor="middle"
                fontSize="9"
                fontWeight="600"
                fill="#4A4A49"
                className="font-sans"
              >
                0 Stunden 56 Minuten
              </text>
            </svg>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="h-3" />
      </div>
    </PhoneFrame>
  );
}

function KidgoLogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 font-extrabold tracking-tighter ${className}`}
      style={{ fontSize: "10px" }}
    >
      GO
      <span aria-hidden="true">😊</span>
    </span>
  );
}

function HourglassBadge() {
  return (
    <span
      aria-hidden="true"
      className="flex size-4 flex-shrink-0 items-center justify-center rounded-full bg-[#EAE3D9]"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-2.5 text-[#95C11F]"
        fill="currentColor"
      >
        <path d="M6 2h12v3l-4 5 4 5v3H6v-3l4-5-4-5V2z M8 4l4 5 4-5H8z" />
      </svg>
    </span>
  );
}
