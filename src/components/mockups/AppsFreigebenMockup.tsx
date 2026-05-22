import {
  Check,
  ChevronDown,
  Home,
  MapPin,
  Menu,
  MoreVertical,
  Plus,
  Trash2,
} from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

type AppEntry = {
  id: string;
  name: string;
  cat: string;
  allowed: boolean;
  iconBg: string;
  iconText: string;
  initial: string;
};

const APPS: AppEntry[] = [
  {
    id: "pokemon",
    name: "Pokémon GO",
    cat: "Gar",
    allowed: false,
    iconBg: "#EE3F4F",
    iconText: "white",
    initial: "P",
  },
  {
    id: "spotify1",
    name: "Spotify: Musik",
    cat: "Gar",
    allowed: true,
    iconBg: "#1DB954",
    iconText: "white",
    initial: "S",
  },
  {
    id: "clash",
    name: "Clash of Clans",
    cat: "Gar",
    allowed: false,
    iconBg: "#F4B400",
    iconText: "white",
    initial: "C",
  },
  {
    id: "health",
    name: "Samsung Health",
    cat: "Hea",
    allowed: true,
    iconBg: "#F37C9B",
    iconText: "white",
    initial: "H",
  },
  {
    id: "smart",
    name: "SmartThings",
    cat: "Life",
    allowed: true,
    iconBg: "#178FE5",
    iconText: "white",
    initial: "T",
  },
  {
    id: "spotify2",
    name: "Spotify: Musik",
    cat: "Mu",
    allowed: true,
    iconBg: "#1DB954",
    iconText: "white",
    initial: "S",
  },
  {
    id: "youtube",
    name: "YouTube Music",
    cat: "Mu",
    allowed: true,
    iconBg: "#FF0000",
    iconText: "white",
    initial: "Y",
  },
];

/**
 * "Apps freigeben"-Screen aus dem Kidgonet-Elternportal. Faithful nachgebaut:
 * Geraete-Ueberblick mit Liste installierter Apps und Freigabe-Checkboxen.
 */
export function AppsFreigebenMockup() {
  return (
    <PhoneFrame className="max-w-[180px]">
      <div className="relative z-10 flex h-full min-h-0 flex-col bg-white text-[#4A4A49]">
        {/* Browser URL bar */}
        <div className="flex items-center gap-1 bg-[#F4EFE3] px-1.5 py-1">
          <Home className="size-2.5" strokeWidth={2.5} />
          <span className="flex-1 truncate rounded-full bg-white px-1.5 py-0.5 text-[6px]">
            portal.kidgonet.de
          </span>
          <Plus className="size-2.5" strokeWidth={2.5} />
          <span className="inline-flex size-3 items-center justify-center rounded border border-current text-[6px] font-bold">
            2
          </span>
          <MoreVertical className="size-2.5" strokeWidth={2.5} />
        </div>

        {/* Eltern PORTAL header */}
        <div className="flex items-center justify-between border-b border-[#EAE3D9] px-2.5 py-1.5">
          <span className="text-[8px]">
            Eltern <span className="font-extrabold">PORTAL</span>
          </span>
          <div className="flex items-center gap-1 text-[7px] text-[#F9B000]">
            <Menu className="size-2.5" strokeWidth={2.5} />
            <span className="font-bold">Menü</span>
          </div>
        </div>

        {/* Android device name */}
        <div className="border-b border-[#EAE3D9] px-2.5 py-1.5">
          <p className="flex items-center gap-1 text-[8px] font-extrabold">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-1.5 rounded-[1px] bg-[#F9B000]"
            />
            Android SM-A155F
          </p>
        </div>

        {/* Action icons row */}
        <div className="flex items-center gap-2 border-b border-[#EAE3D9] px-2.5 py-1 text-[#F9B000]">
          <MapPin className="size-2.5" strokeWidth={2.5} />
          <Menu className="size-2.5" strokeWidth={2.5} />
          <Trash2 className="ml-auto size-2.5" strokeWidth={2.5} />
        </div>

        {/* Zuletzt gesehen */}
        <div className="border-b border-[#EAE3D9] px-2.5 py-1">
          <p className="text-[6px] text-[#4A4A49]/70 tabular-nums">
            Zuletzt gesehen: 29.07. - 14:47
          </p>
          <span className="mt-0.5 inline-flex items-center gap-1 rounded bg-[#F9B000] px-1.5 py-0.5 text-[6px] font-bold text-white">
            <MapPin className="size-2" strokeWidth={3} />
            Standort abrufen
          </span>
        </div>

        {/* Aktiv toggle */}
        <div className="flex items-center gap-1.5 border-b border-[#EAE3D9] bg-[#FBF6EC] px-2.5 py-1">
          <span
            aria-hidden="true"
            className="inline-flex h-2.5 w-4 items-center rounded-full bg-[#95C11F] p-[1px]"
          >
            <span className="ml-auto block size-[7px] rounded-full bg-white" />
          </span>
          <span className="text-[6px] text-[#4A4A49]/75">
            Aktiv: Schutz vor Deinstallation
          </span>
        </div>

        {/* Letztes Update */}
        <div className="border-b border-[#EAE3D9] px-2.5 py-0.5">
          <p className="text-[6px] text-[#4A4A49]/60 tabular-nums">
            Letztes Update: 30/07/2024 07:00
          </p>
        </div>

        {/* Installierte Apps header */}
        <div className="flex items-center justify-between bg-[#F4EFE3] px-2.5 py-1">
          <span className="text-[7px] font-extrabold">Installierte Apps</span>
          <ChevronDown
            className="size-2.5 rotate-180"
            strokeWidth={2.5}
          />
        </div>

        {/* Apps table */}
        <ul className="flex-1 overflow-hidden">
          {APPS.map((app, idx) => (
            <li
              key={app.id}
              className={`flex items-center gap-1.5 px-2 py-[3px] ${
                idx % 2 === 0 ? "bg-white" : "bg-[#FBF6EC]"
              }`}
            >
              <span
                className={`inline-flex size-2.5 flex-shrink-0 items-center justify-center rounded-sm border ${
                  app.allowed
                    ? "border-[#F9B000] bg-[#F9B000]"
                    : "border-[#4A4A49]/40 bg-white"
                }`}
              >
                {app.allowed ? (
                  <Check
                    className="size-2 text-white"
                    strokeWidth={4}
                  />
                ) : null}
              </span>
              <span
                aria-hidden="true"
                className="flex size-2.5 flex-shrink-0 items-center justify-center rounded-sm text-[5px] font-extrabold"
                style={{ background: app.iconBg, color: app.iconText }}
              >
                {app.initial}
              </span>
              <span className="flex-1 truncate text-[5.5px]">{app.name}</span>
              <span className="text-[5.5px] text-[#4A4A49]/55">{app.cat}</span>
            </li>
          ))}
        </ul>
      </div>
    </PhoneFrame>
  );
}
