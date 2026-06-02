import ExportedImage from "next-image-export-optimizer";
import { ChevronLeft, ChevronRight, Menu, Plus, RotateCw } from "lucide-react";

type Kid = {
  id: string;
  name: string;
  devices: string[];
  status: string;
  progress: number;
  color: "yellow" | "orange" | "green";
};

const KIDS: Kid[] = [
  {
    id: "anna",
    name: "Anna",
    devices: ["Annas iPhone", "Annas iPad"],
    status: "1h 23m übrig",
    progress: 55,
    color: "yellow",
  },
  {
    id: "franz",
    name: "Franz",
    devices: ["Franz iPhone"],
    status: "42m übrig",
    progress: 28,
    color: "orange",
  },
];

const COLOR: Record<Kid["color"], string> = {
  yellow: "#F9B000",
  orange: "#FC5802",
  green: "#95C11F",
};

/**
 * LaptopElternportalMockup: Laptop-Frame mit Browser-Chrome und dem
 * Kidgonet-Elternportal-Dashboard im Inneren. Zeigt drei Kids
 * (Anna / Franz / Lena) als horizontale Karten, parallel zum
 * ConnectDevicesMockup auf dem Phone.
 */
export function LaptopElternportalMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      {/* Screen with bezel */}
      <div className="rounded-t-[10px] bg-[#1a1a19] p-1.5 shadow-[0_24px_50px_-20px_rgba(74,74,73,0.25)]">
        <div className="overflow-hidden rounded-[6px] bg-white">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 border-b border-neutral-200 bg-[#F4EFE3] px-2 py-1.5">
            <div className="flex gap-[3px]">
              <span className="block size-1.5 rounded-full bg-[#FC5802]/70" />
              <span className="block size-1.5 rounded-full bg-[#F9B000]" />
              <span className="block size-1.5 rounded-full bg-[#95C11F]" />
            </div>
            <div className="ml-1 flex items-center gap-1 text-foreground/50">
              <ChevronLeft className="size-2" strokeWidth={2.5} />
              <ChevronRight className="size-2" strokeWidth={2.5} />
              <RotateCw className="size-2" strokeWidth={2.5} />
            </div>
            <span className="ml-1 flex-1 truncate rounded-full bg-white px-2 py-0.5 text-[7px] text-foreground/75">
              portal.kidgonet.de
            </span>
          </div>

          {/* Yellow Eltern-Portal header */}
          <div className="flex items-center justify-between bg-[#F9B000] px-3 py-1.5 text-white">
            <div className="flex items-center gap-1.5">
              <ExportedImage
                src="/brand/smiley-weiss.png"
                alt=""
                aria-hidden="true"
                width={1048}
                height={1048}
                sizes="14px"
                className="size-3.5"
              />
              <span className="text-[9px] font-extrabold">
                Eltern PORTAL
              </span>
            </div>
            <div className="flex items-center gap-1 text-[8px] font-bold">
              <Menu className="size-2.5" strokeWidth={2.5} />
              <span>Menü</span>
            </div>
          </div>

          {/* + Kind hinzufügen + summary row */}
          <div className="flex items-center justify-between bg-[#FBF6EC] px-3 py-1.5">
            <span className="inline-flex items-center gap-1 rounded bg-[#F9B000] px-1.5 py-0.5 text-[7px] font-bold text-white">
              <Plus className="size-2" strokeWidth={3} />
              Kind hinzufügen
            </span>
            <span className="text-[7px] text-foreground/65">
              <span className="font-extrabold text-foreground">2 Kinder</span>{" "}
              · <span className="font-extrabold text-foreground">3 Geräte</span>{" "}
              geschützt
            </span>
          </div>

          {/* Kid cards stacked vertically (full-width rows) */}
          <div className="flex flex-col gap-1.5 p-2">
            {KIDS.map((kid) => (
              <KidCard key={kid.id} kid={kid} />
            ))}
          </div>
        </div>
      </div>

      {/* Laptop base */}
      <div
        aria-hidden="true"
        className="relative mx-auto h-[5px] w-[110%] -translate-x-[4.5%] rounded-b-[6px] bg-gradient-to-b from-[#2a2a29] to-[#1a1a19] shadow-[0_4px_8px_-2px_rgba(0,0,0,0.25)]"
      >
        <div className="absolute left-1/2 top-0 h-[3px] w-10 -translate-x-1/2 rounded-b-md bg-[#0e0e0d]" />
      </div>
    </div>
  );
}

function KidCard({ kid }: { kid: Kid }) {
  const color = COLOR[kid.color];
  return (
    <div
      className="rounded-[6px] border bg-white px-2 py-1.5"
      style={{ borderColor: color }}
    >
      {/* Top row: name + chevron */}
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-extrabold text-foreground">
          {kid.name}
        </span>
        <ChevronRight
          className="size-2.5 text-foreground/40"
          strokeWidth={2.5}
        />
      </div>

      {/* Devices + status row */}
      <div className="mt-1 flex items-center justify-between gap-2">
        <ul className="flex flex-col gap-[1px]">
          {kid.devices.map((d) => (
            <li
              key={d}
              className="flex items-center gap-1 text-[6px] text-foreground/65 leading-tight"
            >
              <span
                aria-hidden="true"
                className="block size-[3px] flex-shrink-0 rounded-full"
                style={{ background: color }}
              />
              {d}
            </li>
          ))}
        </ul>
        <p
          className="text-[7px] font-extrabold tabular-nums"
          style={{ color }}
        >
          {kid.status}
        </p>
      </div>

      {/* Progress bar */}
      <div
        aria-hidden="true"
        className="mt-1 h-[3px] w-full overflow-hidden rounded-full bg-neutral-200"
      >
        <div
          className="h-full rounded-full"
          style={{ width: `${kid.progress}%`, background: color }}
        />
      </div>
    </div>
  );
}
