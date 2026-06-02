import { Check, Menu } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";
import { MockupStatusBar } from "./_shared";

type AppEntry = {
  id: string;
  name: string;
  cat: string;
  allowed: boolean;
  icon: React.ReactNode;
};

const APPS: AppEntry[] = [
  {
    id: "spotify",
    name: "Spotify",
    cat: "Musik",
    allowed: true,
    icon: <SpotifyIcon />,
  },
  {
    id: "anton",
    name: "Anton Lernen",
    cat: "Lernen",
    allowed: true,
    icon: <AntonIcon />,
  },
  {
    id: "youtube",
    name: "YouTube",
    cat: "Video",
    allowed: false,
    icon: <YouTubeIcon />,
  },
  {
    id: "pokemon",
    name: "Pokémon GO",
    cat: "Spiel",
    allowed: false,
    icon: <PokemonIcon />,
  },
  {
    id: "tiktok",
    name: "TikTok",
    cat: "Social",
    allowed: false,
    icon: <TiktokIcon />,
  },
];

/**
 * "Apps freigeben"-Screen aus dem Kidgonet-Elternportal — minimalisierte
 * Variante: Fokus auf die Kern-Funktion (Freigabe-Checkboxen), echte
 * Brand-Icons fuer die Apps statt Letter-Badges.
 */
export function AppsFreigebenMockup() {
  return (
    <PhoneFrame className="max-w-[180px]">
      <div className="relative z-10 flex h-full min-h-0 flex-col bg-white text-[#4A4A49]">
        <MockupStatusBar time="14:07" variant="dark" />

        {/* Eltern PORTAL header (yellow band) */}
        <div className="mt-1 flex items-center justify-between bg-[#F9B000] px-3 py-1.5 text-white">
          <div className="flex items-center gap-1.5">
            <Menu className="size-3" strokeWidth={2.5} />
            <span className="text-[9px] font-extrabold">Apps freigeben</span>
          </div>
        </div>

        {/* Subheader */}
        <div className="border-b border-[#EAE3D9] bg-[#FBF6EC] px-3 py-1.5">
          <p className="text-[7px] font-bold text-[#4A4A49]">
            Während der Pause erlaubt
          </p>
          <p className="text-[6px] text-[#4A4A49]/70">
            Tippe das Häkchen, um eine App freizugeben
          </p>
        </div>

        {/* Apps list */}
        <ul className="flex-1 overflow-hidden">
          {APPS.map((app, idx) => (
            <li
              key={app.id}
              className={`flex items-center gap-2 px-3 py-2 ${
                idx % 2 === 0 ? "bg-white" : "bg-[#FBF6EC]"
              }`}
            >
              <span
                className={`inline-flex size-3.5 flex-shrink-0 items-center justify-center rounded-full border ${
                  app.allowed
                    ? "border-[#F9B000] bg-[#F9B000]"
                    : "border-[#4A4A49]/30 bg-white"
                }`}
                aria-label={app.allowed ? "Erlaubt" : "Gesperrt"}
              >
                {app.allowed ? (
                  <Check className="size-2.5 text-white" strokeWidth={4} />
                ) : null}
              </span>
              <span
                aria-hidden="true"
                className="flex size-5 flex-shrink-0 items-center justify-center overflow-hidden rounded-[6px]"
              >
                {app.icon}
              </span>
              <span className="flex-1 truncate text-[7px] font-semibold">
                {app.name}
              </span>
              <span className="text-[6px] text-[#4A4A49]/55">{app.cat}</span>
            </li>
          ))}
        </ul>
      </div>
    </PhoneFrame>
  );
}

// ── Brand-style App-Icons (vereinfachte aber wiedererkennbare SVGs) ─────

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1DB954" />
      <path
        d="M6 9.5c3.5-1.2 8.5-1 12 1"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M6.8 13c3-1 7-0.8 10 1"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M7.6 16c2.5-0.8 5.6-0.6 8 0.8"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" aria-hidden="true">
      <rect x="1.5" y="5" width="21" height="14" rx="3.5" fill="#FF0000" />
      <path d="M10 9l5.5 3-5.5 3z" fill="white" />
    </svg>
  );
}

function PokemonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="white" stroke="#222" strokeWidth="1" />
      <path d="M1 12a11 11 0 0 1 22 0z" fill="#EE3F4F" />
      <rect x="1" y="11" width="22" height="2" fill="#222" />
      <circle cx="12" cy="12" r="3" fill="white" stroke="#222" strokeWidth="1.4" />
    </svg>
  );
}

function AntonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#1D8EFF" />
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="14"
        fontWeight="900"
        fill="white"
        className="font-sans"
      >
        A
      </text>
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#000" />
      <path
        d="M14 5.5v8.5a3 3 0 1 1-3-3"
        stroke="#FF0050"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15 5.5v8.5a3 3 0 1 1-3-3"
        stroke="#25F4EE"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        transform="translate(-1 0.5)"
      />
      <path
        d="M14.5 5.5v8.5a3 3 0 1 1-3-3"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14.5 5.5c0.8 1.5 2.2 2 3.5 2"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
