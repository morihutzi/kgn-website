import {
  ChevronLeft,
  ChevronRight,
  Flag,
  Footprints,
  Lock,
  RotateCw,
  Sparkles,
  Trophy,
} from "lucide-react";

type Chapter = { n: string; title: string; premium: boolean };

// Originalgetreue Kapitel des Premium-Dashboards.
const CHAPTERS: Chapter[] = [
  { n: "01", title: "Bildschirmzeit & Medienbalance", premium: false },
  { n: "02", title: "Gefahren & Miteinander im Netz", premium: false },
  { n: "03", title: "Privatsphäre & Sicherheit", premium: true },
  { n: "04", title: "KI verstehen & klug nutzen", premium: true },
  { n: "05", title: "KI mit Köpfchen", premium: true },
];

const PROGRESS = 40;

/**
 * LaptopMedienfuehrerscheinMockup: Laptop-Frame mit einer originalgetreuen
 * Nachbildung des Premium-Dashboards ("Dein Medienführerschein") — Lernreise-
 * Hero mit ProgressRing & Meilensteinen und das Kapitel-Grid mit Premium-Badges.
 */
export function LaptopMedienfuehrerscheinMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      {/* Screen with bezel — festes Laptop-Querformat (16:10), Inhalt wird
          unten abgeschnitten wie in einem echten, scrollbaren Fenster. */}
      <div className="rounded-t-[10px] bg-[#1a1a19] p-1.5 shadow-[0_24px_50px_-20px_rgba(74,74,73,0.25)]">
        <div className="flex aspect-[16/10] flex-col overflow-hidden rounded-[6px] bg-white">
          {/* Browser chrome */}
          <div className="flex shrink-0 items-center gap-1.5 border-b border-neutral-200 bg-[#F4EFE3] px-2 py-1.5">
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
              kidgonet.de/medienfuehrerschein
            </span>
          </div>

          {/* App-Viewport — schneidet den Inhalt unten ab (wie gescrollt) */}
          <div className="flex-1 overflow-hidden">
            <div className="space-y-2.5 px-2.5 pb-3 pt-3">
            {/* Lernreise-Hero */}
            <div className="rounded-[14px] border-[1.5px] border-[#EDE6D6] bg-[#F4F0EB] p-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-px w-3 bg-[#4A4A49]/30" aria-hidden />
                  <span className="text-[6px] font-extrabold uppercase tracking-[0.2em] text-[#4A4A49]/70">
                    Deine Lernreise
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-[#EDE6D6] bg-white/70 px-1.5 py-0.5 text-[6px] font-extrabold uppercase tracking-[0.12em] text-[#4A4A49]/70">
                  <Sparkles className="size-2 text-[#F9B000]" />
                  1/5 Kapitel
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between gap-2">
                <div>
                  <p className="text-[12px] font-extrabold leading-tight text-[#4A4A49]">
                    Hallo Mia,
                    <span className="block text-[#4A4A49]/70">weiter so.</span>
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Milestone icon={Footprints} label="Start" reached />
                    <Milestone icon={Flag} label="Halbzeit" />
                    <Milestone icon={Trophy} label="Profi" />
                  </div>
                </div>
                <ProgressRing value={PROGRESS} />
              </div>
            </div>

            {/* Kapitel */}
            <div>
              <p className="mb-1.5 text-[6px] font-extrabold uppercase tracking-[0.2em] text-[#4A4A49]/55">
                Lektionen
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {CHAPTERS.map((ch) => (
                  <ChapterCard key={ch.n} chapter={ch} />
                ))}
              </div>
            </div>
          </div>
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

function Milestone({
  icon: Icon,
  label,
  reached = false,
}: {
  icon: typeof Flag;
  label: string;
  reached?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded-full border px-1.5 py-[1px] text-[6px] font-extrabold uppercase tracking-[0.1em] ${
        reached
          ? "border-[#C6C500] bg-[#C6C500] text-white"
          : "border-[#EDE6D6] bg-white/60 text-[#4A4A49]/45"
      }`}
    >
      <Icon className="size-2" strokeWidth={2.5} />
      {label}
    </span>
  );
}

function ProgressRing({ value }: { value: number }) {
  const size = 46;
  const stroke = 5;
  return (
    <div
      className="relative flex flex-shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="mf-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9B000" />
            <stop offset="100%" stopColor="#C6C500" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size - stroke) / 2}
          stroke="#EDE6D6"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size - stroke) / 2}
          stroke="url(#mf-ring)"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          pathLength={100}
          strokeDasharray={`${value} 100`}
        />
      </svg>
      <span className="absolute text-[10px] font-extrabold text-[#4A4A49]">
        {value}%
      </span>
    </div>
  );
}

function ChapterCard({ chapter }: { chapter: Chapter }) {
  const { n, title, premium } = chapter;
  return (
    <div
      className="relative overflow-hidden rounded-[8px] border-[1.5px] border-[#F0F0F0] bg-white px-1.5 py-1.5 shadow-sm"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-1 -top-2 select-none text-[26px] font-extrabold leading-none tracking-tighter text-[#F9B000]/[0.08]"
      >
        {n}
      </span>
      {premium && (
        <span className="absolute right-1 top-1 inline-flex items-center gap-0.5 rounded-[3px] border border-[#F9B000] bg-white px-1 py-[0.5px] text-[5px] font-extrabold uppercase tracking-[0.1em] text-[#F9B000]">
          <Lock className="size-1.5" strokeWidth={3} />
          Premium
        </span>
      )}
      <p className="relative mt-3 text-[7px] font-bold leading-tight text-[#4A4A49]">
        {title}
      </p>
    </div>
  );
}
