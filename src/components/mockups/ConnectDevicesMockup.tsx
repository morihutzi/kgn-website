import { Smartphone, Tablet, Laptop } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

const NATIVE_WIDTH = 220;
const NATIVE_HEIGHT = 463;

/**
 * Connect-Devices-Mockup: Visualisiert die "1 Elterngerät zu N Kindergeräten"-
 * Beziehung als clean Diagramm. Oben ein Eltern-Phone mit fokussiertem
 * "3 Kinder verbunden"-Stat, darunter drei verschiedene Device-Icons
 * (Smartphone / Tablet / Laptop) als Kindergeräte, verbunden durch
 * gestrichelte Linien.
 *
 * Statisch, keine Animation. Wird per [[ConnectDevicesMockupScaled]] auf
 * eine Zielbreite skaliert.
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
        style={{ width: 110, left: NATIVE_WIDTH / 2 - 55, top: 16 }}
      >
        <ParentPhone />
      </div>

      <svg
        viewBox={`0 0 ${NATIVE_WIDTH} ${NATIVE_HEIGHT}`}
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <line
          x1="92"
          y1="252"
          x2="42"
          y2="320"
          stroke="#F9B000"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          strokeLinecap="round"
        />
        <line
          x1="110"
          y1="252"
          x2="110"
          y2="320"
          stroke="#F9B000"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          strokeLinecap="round"
        />
        <line
          x1="128"
          y1="252"
          x2="178"
          y2="320"
          stroke="#F9B000"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-x-0 text-center" style={{ top: 292 }}>
        <span className="text-[7px] font-extrabold uppercase tracking-[0.14em] text-foreground/55">
          Kindergeräte
        </span>
      </div>

      <div
        className="absolute flex items-start justify-between"
        style={{ left: 14, right: 14, top: 320 }}
      >
        <DeviceCard Icon={Smartphone} name="Anna" />
        <DeviceCard Icon={Tablet} name="Franz" />
        <DeviceCard Icon={Laptop} name="Lena" />
      </div>
    </div>
  );
}

function ParentPhone() {
  return (
    <PhoneFrame className="max-w-[110px]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-0 h-[40px] bg-brand-yellow"
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between px-2 pt-1.5 text-white">
          <span className="text-[6px] font-semibold leading-none">14:07</span>
        </div>

        <div className="px-2 pt-1 text-center">
          <p className="text-[9px] font-extrabold leading-none">
            <span className="text-white">Eltern</span>{" "}
            <span className="text-foreground">PORTAL</span>
          </p>
        </div>

        <div className="mx-2 mt-4 rounded-lg bg-white px-2 py-3 text-center shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
          <p className="text-[6px] font-bold uppercase tracking-[0.1em] text-foreground/55">
            Verbunden
          </p>
          <p className="mt-1 text-[15px] font-extrabold leading-tight text-foreground">
            3 Kinder
          </p>
          <p className="mt-0.5 text-[7px] font-semibold text-brand-yellow">
            5 Geräte
          </p>
        </div>

        <div className="flex-1" />
      </div>
    </PhoneFrame>
  );
}

type DeviceIcon = typeof Smartphone;

function DeviceCard({ Icon, name }: { Icon: DeviceIcon; name: string }) {
  return (
    <div className="flex flex-col items-center gap-2" style={{ width: 56 }}>
      <div className="flex size-12 items-center justify-center rounded-2xl bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
        <Icon
          className="size-7 text-brand-yellow"
          strokeWidth={1.75}
          aria-hidden
        />
      </div>
      <span className="text-[8px] font-extrabold text-foreground">{name}</span>
    </div>
  );
}

export const CONNECT_DEVICES_NATIVE_WIDTH = NATIVE_WIDTH;
export const CONNECT_DEVICES_NATIVE_HEIGHT = NATIVE_HEIGHT;
