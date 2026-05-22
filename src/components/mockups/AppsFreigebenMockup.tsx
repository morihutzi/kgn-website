import { PhoneFrame } from "./PhoneFrame";

/**
 * "Apps freigeben" aus dem Kidgonet-Elternportal. Faithful nachgebaut:
 * Geräte-Übersicht mit Liste installierter Apps und Freigabe-Checkboxen.
 */
export function AppsFreigebenMockup() {
  const apps: { id: string; name: string; cat: string; allowed: boolean }[] = [
    { id: "pokemon", name: "Pokémon GO", cat: "Gar...", allowed: false },
    {
      id: "spotify1",
      name: "Spotify: Musik und Podcasts",
      cat: "Gar...",
      allowed: true,
    },
    { id: "clash", name: "Clash of Clans", cat: "Gar...", allowed: false },
    { id: "health", name: "Samsung Health", cat: "Hea...", allowed: true },
    { id: "smart", name: "SmartThings", cat: "Life...", allowed: true },
    {
      id: "spotify2",
      name: "Spotify: Musik und Podcasts",
      cat: "Mu...",
      allowed: true,
    },
    { id: "youtube", name: "YouTube Music", cat: "Mu...", allowed: true },
  ];

  return (
    <PhoneFrame className="max-w-[180px]">
      <div className="relative z-10 flex h-full min-h-0 flex-col bg-white">
        {/* Browser URL bar */}
        <div className="flex items-center gap-1 border-b border-[#EAE3D9] bg-[#F4EFE3] px-2 py-1.5 text-[#4A4A49]">
          <span className="text-[7px]">⌂</span>
          <span className="flex-1 truncate rounded-full bg-white px-1.5 py-0.5 text-[6px]">
            portal.kidgonet.de
          </span>
          <span className="text-[7px]">+</span>
          <span className="text-[7px]">2</span>
          <span className="text-[7px]">⋮</span>
        </div>

        {/* Eltern PORTAL header */}
        <div className="flex items-center justify-between border-b border-[#EAE3D9] px-2.5 py-1.5">
          <span className="text-[8px] text-[#4A4A49]">
            Eltern <span className="font-extrabold">PORTAL</span>
          </span>
          <div className="flex items-center gap-1 text-[7px] text-[#F9B000]">
            <span>☰</span>
            <span className="font-bold">Menü</span>
          </div>
        </div>

        {/* Android device name */}
        <div className="border-b border-[#EAE3D9] px-2.5 py-1.5">
          <p className="text-[8px] font-extrabold text-[#4A4A49]">
            <span className="text-[#F9B000]">▤</span> Android SM-A155F
          </p>
        </div>

        {/* Action icons row */}
        <div className="flex items-center gap-2 border-b border-[#EAE3D9] px-2.5 py-1 text-[#F9B000]">
          <span className="text-[7px]">📍</span>
          <span className="text-[7px]">☰</span>
          <span className="ml-auto text-[7px]">🗑</span>
        </div>

        {/* Zuletzt gesehen */}
        <div className="border-b border-[#EAE3D9] px-2.5 py-1">
          <p className="text-[6px] text-[#4A4A49]/70">
            Zuletzt gesehen: 29.07. - 14:47
          </p>
          <div className="mt-0.5 inline-block rounded bg-[#F9B000] px-1.5 py-0.5 text-[6px] font-bold text-white">
            Standort abrufen
          </div>
        </div>

        {/* Aktiv toggle */}
        <div className="flex items-center gap-1.5 border-b border-[#EAE3D9] bg-[#FBF6EC] px-2.5 py-1">
          <span className="inline-flex h-2 w-4 items-center rounded-full bg-[#95C11F] p-0.5">
            <span className="ml-auto block size-1 rounded-full bg-white" />
          </span>
          <span className="text-[6px] text-[#4A4A49]/70">
            Aktiv: Schutz vor Deinstallation
          </span>
        </div>

        {/* Letztes Update */}
        <div className="border-b border-[#EAE3D9] px-2.5 py-0.5">
          <p className="text-[6px] text-[#4A4A49]/60">
            Letztes Update: 30/07/2024 07:00
          </p>
        </div>

        {/* Installierte Apps header */}
        <div className="flex items-center justify-between bg-[#F4EFE3] px-2.5 py-1">
          <span className="text-[7px] font-extrabold text-[#4A4A49]">
            Installierte Apps
          </span>
          <span className="text-[7px] text-[#4A4A49]">▲</span>
        </div>

        {/* Apps table */}
        <ul className="flex-1 overflow-hidden">
          {apps.slice(0, 7).map((app, idx) => (
            <li
              key={app.id}
              className={`flex items-center gap-1.5 px-2 py-1 ${
                idx % 2 === 0 ? "bg-white" : "bg-[#FBF6EC]"
              }`}
            >
              <span
                className={`inline-flex size-2.5 flex-shrink-0 items-center justify-center rounded-sm border ${
                  app.allowed
                    ? "border-[#F9B000] bg-[#F9B000] text-white"
                    : "border-[#4A4A49]/40 bg-white"
                }`}
              >
                {app.allowed ? <span className="text-[5px]">✓</span> : null}
              </span>
              <span className="block size-2 flex-shrink-0 rounded bg-[#EAE3D9]" />
              <span className="flex-1 truncate text-[5.5px] text-[#4A4A49]">
                {app.name}
              </span>
              <span className="text-[5.5px] text-[#4A4A49]/60">{app.cat}</span>
            </li>
          ))}
        </ul>
      </div>
    </PhoneFrame>
  );
}
