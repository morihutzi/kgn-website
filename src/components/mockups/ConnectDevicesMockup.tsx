import { Smartphone, Tablet, Laptop } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

const NATIVE_WIDTH = 220;
const NATIVE_HEIGHT = 463;

/**
 * Connect-Devices-Mockup: Ein einzelnes Phone, das den Elternportal-Geräte-
 * View zeigt. Klare Liste aller verbundenen Kindergeräte mit Device-Icon,
 * Kind-Name und Device-Typ.
 *
 * Visuell konsistent zum [[ChildviewMockup]] in Schritt 3 (gleiche Phone-
 * Größe, gleicher PhoneFrame). Erzählt die Multi-Device-Story über den
 * Inhalt statt über ein Diagramm.
 *
 * Statisch, keine Animation. Wird per [[ConnectDevicesMockupScaled]] auf
 * eine Zielbreite skaliert.
 */
export function ConnectDevicesMockup() {
  return (
    <PhoneFrame className="max-w-[220px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[110px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(249,176,0,1) 0%, rgba(249,176,0,0) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between px-4 pt-3 text-white">
          <span className="text-[10px] font-semibold leading-none">14:07</span>
        </div>

        <div className="mx-3 mt-2 flex items-center justify-between rounded-md bg-brand-yellow px-2.5 py-1.5">
          <div className="text-[11px] font-extrabold leading-none">
            <span className="text-white">Eltern</span>
            <span className="ml-1 text-foreground">PORTAL</span>
          </div>
        </div>

        <div className="mx-3 mt-3 rounded-xl bg-white px-3 py-3 text-center shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
          <p className="text-[7px] font-bold uppercase tracking-[0.1em] text-foreground/55">
            Verbunden
          </p>
          <p className="mt-1 text-[18px] font-extrabold leading-none text-foreground">
            5 Geräte
          </p>
          <p className="mt-1 text-[9px] font-semibold text-brand-yellow">
            3 Kinder
          </p>
        </div>

        <div className="mx-3 mt-3 space-y-1.5">
          <DeviceRow Icon={Smartphone} name="Anna" device="Smartphone" />
          <DeviceRow Icon={Tablet} name="Franz" device="Tablet" />
          <DeviceRow Icon={Laptop} name="Lena" device="Laptop" />
        </div>

        <div className="flex-1" />
        <div className="h-4" />
      </div>
    </PhoneFrame>
  );
}

type DeviceIcon = typeof Smartphone;

function DeviceRow({
  Icon,
  name,
  device,
}: {
  Icon: DeviceIcon;
  name: string;
  device: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-white px-2.5 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="flex size-6 items-center justify-center rounded-md bg-brand-yellow/15">
        <Icon
          className="size-3.5 text-brand-yellow"
          strokeWidth={2.25}
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col leading-tight">
        <span className="text-[9px] font-extrabold text-foreground">
          {name}
        </span>
        <span className="text-[7px] text-foreground/60">{device}</span>
      </div>
      <div className="flex items-center gap-1 rounded-full bg-brand-green/15 px-1.5 py-0.5">
        <span className="block size-1 rounded-full bg-brand-green" />
        <span className="text-[6px] font-extrabold uppercase tracking-wider text-brand-green">
          aktiv
        </span>
      </div>
    </div>
  );
}

export const CONNECT_DEVICES_NATIVE_WIDTH = NATIVE_WIDTH;
export const CONNECT_DEVICES_NATIVE_HEIGHT = NATIVE_HEIGHT;
