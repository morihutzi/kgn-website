import Image from "next/image";
import {
  getKategorieBySlug,
  type ElternratgeberKategorieSlug,
} from "@/content/elternratgeber/kategorien";

/**
 * 3-Stop-Gradient — alle Varianten laufen über Kidgonet-Grün (#C6C500).
 * Richtung 150° = leicht diagonal (oben-links hell, unten-rechts dunkel).
 */
const gradients: Record<string, string> = {
  yellow: "linear-gradient(150deg, #F9B000 0%, #F9B000 60%, #C6C500 100%)",
  green:  "linear-gradient(150deg, #F9B000 0%, #F9B000 55%, #C6C500 100%)",
  dark:   "linear-gradient(150deg, #F9B000 0%, #F9B000 60%, #C6C500 100%)",
};

/** Feines Film-Grain (baseFrequency 0.72) */
const GRAIN_FINE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")";

/** Grobes Körnung (baseFrequency 0.42) — zweite Texturschicht für Tiefe */
const GRAIN_COARSE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='c'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.42' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23c)'/%3E%3C/svg%3E\")";

/**
 * Branded Fallback-Thumbnail für Artikel ohne Cover-Bild.
 * Der Parent-Container muss `relative` + Aspect-Ratio besitzen.
 */
export function ArticleCoverFallback({
  kategorie,
  title,
}: {
  kategorie: ElternratgeberKategorieSlug;
  title?: string;
}) {
  const k = getKategorieBySlug(kategorie);
  const gradient = k
    ? (gradients[k.brandFarbe] ?? gradients.yellow)
    : gradients.yellow;

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: gradient }}
    >
      {/* ── Schicht 1a: Feines Film-Grain ──────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55] mix-blend-soft-light"
        style={{ backgroundImage: GRAIN_FINE, backgroundSize: "128px 128px" }}
      />

      {/* ── Schicht 1b: Grobes Grain für Tiefe ─────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.30] mix-blend-overlay"
        style={{ backgroundImage: GRAIN_COARSE, backgroundSize: "200px 200px" }}
      />

      {/* ── Schicht 2: Dot-Grid ─────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.30]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* ── Schicht 3: Diagonale Linien (45°) ──────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 16px)",
        }}
      />

      {/* ── Schicht 5: Radiales Licht-Glow oben rechts ─────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 opacity-[0.22]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)",
        }}
      />

      {/* ── Schicht 6: Schrägstreifen-Akzent ───────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-0 h-full w-24 origin-top-right -skew-x-12 bg-white/[0.07]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-2 top-0 h-full w-8 origin-top-right -skew-x-12 bg-white/[0.10]"
      />

      {/* ── Schicht 5: Großer Smiley ────────────────────────────────── */}
      <Image
        src="/brand/smiley-weiss.png"
        alt=""
        aria-hidden
        width={300}
        height={300}
        className="pointer-events-none absolute -bottom-14 -right-14 select-none opacity-[0.22] rotate-[-14deg]"
      />

      {/* ── Content ─────────────────────────────────────────────────── */}

      {/* Logo oben links */}
      <div className="relative z-10 p-4 pb-0">
        <Image
          src="/brand/logo-weiss.png"
          alt="Kidgonet"
          width={82}
          height={22}
          className="opacity-90 drop-shadow-sm"
        />
      </div>

      {/* Titel + Trennlinie + Kategorie-Pill unten */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
        {/* Akzentlinie */}
        <div className="mb-2.5 h-[2px] w-8 rounded-full bg-white/70" />

        {title && (
          <p
            className="line-clamp-3 text-[13px] font-extrabold leading-snug text-white"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.35)" }}
          >
            {title}
          </p>
        )}

        {k && (
          <span className="mt-2.5 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-2.5 py-[3px] text-[9px] font-extrabold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
            {k.name}
          </span>
        )}
      </div>
    </div>
  );
}
