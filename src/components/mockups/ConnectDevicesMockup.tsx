import { PhoneFrame } from "./PhoneFrame";

const NATIVE_WIDTH = 220;
const NATIVE_HEIGHT = 463; // matches single PhoneFrame at 220 wide

/**
 * Connect-Devices-Mockup: Visualisiert die "1 Elterngerät zu N Kindergeräten"-
 * Beziehung als Diagramm. Oben ein größeres Elterngerät, darunter drei kleine
 * Kindergeräte, verbunden durch gestrichelte Linien.
 *
 * Statisch, keine Animation. Wird per [[ConnectDevicesMockupScaled]] auf eine
 * Zielbreite skaliert.
 */
export function ConnectDevicesMockup() {
  return (
    <div
      className="relative"
      style={{ width: NATIVE_WIDTH, height: NATIVE_HEIGHT }}
    >
      <div className="absolute inset-x-0 top-0 text-center">
        <span className="text-[7px] font-extrabold uppercase tracking-[0.14em] text-foreground/55">
          Elterngerät
        </span>
      </div>

      <div
        className="absolute"
        style={{ width: 100, left: NATIVE_WIDTH / 2 - 50, top: 16 }}
      >
        <ParentMiniPhone />
      </div>

      <svg
        viewBox={`0 0 ${NATIVE_WIDTH} ${NATIVE_HEIGHT}`}
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <path
          d="M 95 232 Q 70 270 38 308"
          stroke="#F9B000"
          strokeWidth="2"
          strokeDasharray="3 4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 110 232 L 110 308"
          stroke="#F9B000"
          strokeWidth="2"
          strokeDasharray="3 4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 125 232 Q 150 270 182 308"
          stroke="#F9B000"
          strokeWidth="2"
          strokeDasharray="3 4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="absolute inset-x-0 text-center" style={{ top: 280 }}>
        <span className="text-[7px] font-extrabold uppercase tracking-[0.14em] text-foreground/55">
          Kindergeräte
        </span>
      </div>

      <div
        className="absolute flex items-start justify-between"
        style={{ left: 14, right: 14, top: 308 }}
      >
        <KidMiniPhone name="Anna" />
        <KidMiniPhone name="Franz" />
        <KidMiniPhone name="Lena" />
      </div>
    </div>
  );
}

function ParentMiniPhone() {
  return (
    <PhoneFrame className="max-w-[100px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[60px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(249,176,0,1) 0%, rgba(249,176,0,0) 100%)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between px-2 pt-1.5 text-white">
          <span className="text-[6px] font-semibold leading-none">14:07</span>
        </div>

        <div className="mx-2 mt-1.5 flex items-center justify-between rounded-md bg-brand-yellow px-1.5 py-1">
          <span className="text-[7px] font-extrabold leading-none">
            <span className="text-white">Eltern</span>
            <span className="ml-0.5 text-foreground">PORTAL</span>
          </span>
        </div>

        <div className="mx-2 mt-2 rounded-md bg-white px-2 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <p className="text-[6px] text-foreground/55">Verbunden:</p>
          <p className="text-[9px] font-extrabold leading-tight text-foreground">
            3 Kinder
          </p>
          <p className="text-[5.5px] text-foreground/55">5 Geräte</p>
        </div>

        <div className="mx-2 mt-2 space-y-1">
          <MiniRow name="Anna" />
          <MiniRow name="Franz" />
          <MiniRow name="Lena" />
        </div>
      </div>
    </PhoneFrame>
  );
}

function MiniRow({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-1 rounded-sm bg-white px-1 py-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <span className="flex size-2.5 items-center justify-center rounded-full bg-brand-yellow/30">
        <span className="block size-1 rounded-full bg-brand-yellow" />
      </span>
      <span className="text-[5.5px] font-bold text-foreground">{name}</span>
      <span className="ml-auto text-[5px] text-brand-green">aktiv</span>
    </div>
  );
}

function KidMiniPhone({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center" style={{ width: 54 }}>
      <PhoneFrame className="max-w-[54px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[40px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(249,176,0,1) 0%, rgba(249,176,0,0) 100%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col items-center pt-3">
          <div className="flex size-5 items-center justify-center rounded-full bg-white shadow-sm">
            <KidgoWink />
          </div>
          <p className="mt-1 text-[5.5px] font-extrabold text-foreground">
            Hallo
          </p>
          <p className="text-[5.5px] font-extrabold text-foreground">{name}</p>
          <div className="mt-1.5 flex items-center gap-0.5 rounded-full bg-brand-green/15 px-1 py-0.5">
            <span className="block size-1 rounded-full bg-brand-green" />
            <span className="text-[4.5px] font-extrabold uppercase tracking-wider text-brand-green">
              aktiv
            </span>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

function KidgoWink() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="size-3.5"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7" fill="#F9B000" />
      {/* Closed wink eye (left) */}
      <path
        d="M 4 7 Q 5 5.5 6 7"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Open eye (right) */}
      <circle cx="10.5" cy="6.5" r="0.8" fill="white" />
      {/* Smile */}
      <path
        d="M 4.5 10 Q 8 13 11.5 10"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export const CONNECT_DEVICES_NATIVE_WIDTH = NATIVE_WIDTH;
export const CONNECT_DEVICES_NATIVE_HEIGHT = NATIVE_HEIGHT;
