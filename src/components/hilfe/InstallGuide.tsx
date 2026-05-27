import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";

export type Shot = { src: string; caption: string };

// ── Breadcrumb (subtle inline label only) ──────────────────────────

export function Breadcrumb({ current }: { current: string }) {
  // Suppress display — the rest of the site uses JSON-LD breadcrumbs only.
  void current;
  return null;
}

// ── Hero ─────────────────────────────────────────────────────────────

export function Hero({
  eyebrow,
  title,
  italic,
  titleRest,
  description,
  pills,
}: {
  eyebrow: string;
  /** Headline parts: rendered as "{title} {italic} {titleRest}" with italic emphasis. */
  title: string;
  italic?: string;
  titleRest?: string;
  description: React.ReactNode;
  pills?: string[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-yellow">
      {/* Weißes Punktraster */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <Container className="relative">
        <div className="py-16 md:py-24">
          {/* Eyebrow */}
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/80">
            {eyebrow}
          </p>

          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
            {title}
            {italic && (
              <>
                {" "}
                <span className="font-normal italic">
                  {italic}
                </span>
              </>
            )}
            {titleRest && <> {titleRest}</>}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/95 md:text-lg">
            {description}
          </p>
          {pills && pills.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2.5">
              {pills.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm md:text-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          )}
        </div>
      </Container>

      {/* Diagonaler Schnitt unten */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-5 bg-white/30"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-3 bg-white/50"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}

// ── Prep Grid ────────────────────────────────────────────────────────

export function PrepGrid({
  prepTitle,
  prepItems,
  roleTitle,
  roleText,
}: {
  prepTitle: string;
  prepItems: string[];
  roleTitle: string;
  roleText: React.ReactNode;
}) {
  return (
    <section className="border-b border-[#EFE9DF] bg-[#FCFAF7] py-14 md:py-20">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-10 md:grid-cols-2">
          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-text-dark/60">
              {prepTitle}
            </h3>
            <ul className="mt-5 space-y-3.5">
              {prepItems.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-sm leading-relaxed text-text-dark md:text-base"
                >
                  <span className="mt-[7px] size-2 shrink-0 rotate-45 bg-brand-yellow" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-text-dark/60">
              {roleTitle}
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-text-dark md:text-base">
              {roleText}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── Section Marker (replaces the alternating section headers) ───────

export function SectionMarker({
  range,
  title,
  lede,
}: {
  /** e.g. "Schritte 01 – 04" */
  range: string;
  title: string;
  lede?: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto max-w-5xl border-t border-[#E8DFD0] pt-12 md:pt-16">
      <div className="flex items-baseline gap-5 md:gap-8">
        <span className="font-mono text-xs tracking-[0.18em] text-brand-yellow md:text-sm">
          {range}
        </span>
        <span className="h-px flex-1 bg-[#E8DFD0]" />
      </div>
      <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight text-[#2a1f00] md:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-dark/80 md:text-base">
          {lede}
        </p>
      )}
    </div>
  );
}

// ── Device Banner ────────────────────────────────────────────────────

export function DeviceBanner({ text = "Alle Schritte am Kind-Gerät." }) {
  return (
    <div className="mx-auto mt-8 flex max-w-5xl items-center gap-3 rounded-full bg-brand-yellow px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-md shadow-brand-yellow/25 md:max-w-fit md:text-sm">
      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-extrabold text-brand-yellow">
        K
      </span>
      {text}
    </div>
  );
}

// ── Step (editorial drop-cap number) ────────────────────────────────

export function Step({
  num,
  title,
  what,
  why,
  note,
  shots,
}: {
  num: number;
  title: string;
  what: React.ReactNode;
  why: React.ReactNode;
  note?: React.ReactNode;
  shots?: Shot[];
}) {
  const paddedNum = String(num).padStart(2, "0");

  return (
    <article className="relative mx-auto max-w-5xl border-b border-[#E8DFD0] py-10 last:border-b-0 md:py-14">
      <div className="grid gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-10">
        {/* Big drop-cap number */}
        <div className="md:pt-1">
          <div className="font-mono text-[88px] font-extrabold leading-none tracking-tighter text-brand-yellow/25 md:text-[120px]">
            {paddedNum}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-extrabold leading-tight text-[#2a1f00] md:text-2xl">
            {title}
          </h3>

          <dl className="mt-5 space-y-4">
            <Row label="Was" text={what} />
            <Row label="Warum" text={why} soft />
          </dl>

          {note && (
            <div className="mt-5 rounded-r-lg border-l-[3px] border-l-brand-yellow bg-white px-4 py-3 text-xs leading-relaxed text-text-dark shadow-sm md:text-sm">
              {note}
            </div>
          )}

          {shots && shots.length > 0 && <PhoneStrip shots={shots} />}
        </div>
      </div>
    </article>
  );
}

function Row({
  label,
  text,
  soft = false,
}: {
  label: string;
  text: React.ReactNode;
  soft?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-[80px_minmax(0,1fr)] md:gap-x-6">
      <dt className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-yellow">
        {label}
      </dt>
      <dd
        className={`text-sm leading-relaxed md:text-base ${
          soft ? "text-text-dark/70" : "text-text-dark"
        }`}
      >
        {text}
      </dd>
    </div>
  );
}

// ── PhoneStrip ──────────────────────────────────────────────────────

export function PhoneStrip({ shots }: { shots: Shot[] }) {
  return (
    <div className="mt-8 flex flex-col items-center gap-5 md:flex-row md:flex-wrap md:items-start md:justify-start md:gap-6">
      {shots.map((shot, idx) => (
        <div key={shot.src} className="contents md:flex md:items-start">
          <figure className="flex max-w-[200px] flex-col items-center gap-3 md:max-w-[160px]">
            <div className="rounded-[26px] bg-[#0E0E10] p-[5px] shadow-[0_14px_28px_-12px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
              <div className="overflow-hidden rounded-[22px]">
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  width={300}
                  height={650}
                  className="block h-auto w-full"
                  sizes="(max-width: 768px) 200px, 160px"
                />
              </div>
            </div>
            <figcaption className="text-center">
              <span className="block font-mono text-[10px] font-bold tracking-wider text-brand-yellow">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="mt-0.5 block text-xs italic text-text-dark/70 md:text-[13px]">
                {shot.caption.replace(/^Step\s*\d+\s*[·]\s*/i, "")}
              </span>
            </figcaption>
          </figure>
          {idx < shots.length - 1 && (
            <span
              aria-hidden="true"
              className="text-2xl font-light text-text-dark/20 md:mt-16 md:-mx-1.5"
            >
              <span className="md:hidden">↓</span>
              <span className="hidden md:inline">→</span>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Inline Warning Card ─────────────────────────────────────────────

export function WarningCard({
  title,
  intro,
  bullets,
  outro,
  linkLabel,
  linkHref,
}: {
  title: string;
  intro?: React.ReactNode;
  bullets?: string[];
  outro?: React.ReactNode;
  linkLabel?: string;
  linkHref?: string;
}) {
  return (
    <aside className="mx-auto my-12 max-w-5xl rounded-2xl border border-[#E8DFD0] border-l-[5px] border-l-brand-yellow bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-lg font-extrabold text-text-dark md:text-xl">
        {title}
      </h3>
      {intro && (
        <p className="mt-3 text-sm leading-relaxed text-text-dark md:text-base">
          {intro}
        </p>
      )}
      {bullets && bullets.length > 0 && (
        <ul className="mt-4 space-y-1.5 ml-5 list-disc text-sm text-text-dark md:text-base">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {outro && (
        <p className="mt-4 text-sm leading-relaxed text-text-dark md:text-base">
          {outro}
        </p>
      )}
      {linkHref && linkLabel && (
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-yellow underline underline-offset-[3px] hover:text-[#e0a000]"
        >
          {linkLabel} <span aria-hidden="true">→</span>
        </a>
      )}
    </aside>
  );
}

// ── Connect Options ─────────────────────────────────────────────────

export function ConnectOptions({
  heading,
  options,
}: {
  heading: string;
  options: { name: string; desc: string }[];
}) {
  return (
    <section className="border-t border-[#E8DFD0] bg-[#FCFAF7] py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs tracking-[0.18em] text-brand-yellow md:text-sm">
            Pairing
          </p>
          <h2 className="mt-3 text-balance text-2xl font-extrabold leading-tight text-[#2a1f00] md:text-3xl">
            {heading}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {options.map((opt, idx) => (
              <div
                key={opt.name}
                className="relative rounded-2xl border border-[#E8DFD0] bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-yellow hover:shadow-md md:p-7"
              >
                <span className="font-mono text-xs font-bold tracking-wider text-brand-yellow">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-extrabold text-text-dark md:text-lg">
                  {opt.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dark/65 md:text-[15px]">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── Closing CTA ─────────────────────────────────────────────────────

export function ClosingCTA({
  title,
  description,
  ctaLabel = "Zum Eltern-Portal",
  ctaHref = siteConfig.portalWelcomeUrl,
  finalShot,
}: {
  title: string;
  description: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  finalShot?: { src: string; alt: string };
}) {
  return (
    <section className="bg-[#FCFAF7] py-14 md:py-20">
      <Container>
        <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-2xl border-[1.5px] border-[#F4D88A] bg-gradient-to-br from-[#FFF4D2] to-[#FFE9A3] p-8 md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <div className="inline-flex size-14 items-center justify-center rounded-full bg-brand-yellow text-white shadow-lg shadow-brand-yellow/30">
              <svg
                viewBox="0 0 24 24"
                className="size-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight text-[#2a1f00] md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#3a2a00] md:text-lg">
              {description}
            </p>
            <a
              href={ctaHref}
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-brand-yellow/30 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-yellow/40 md:text-base"
            >
              {ctaLabel}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          {finalShot && (
            <div className="mx-auto rounded-[26px] bg-[#0E0E10] p-[5px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)] md:mx-0">
              <div className="overflow-hidden rounded-[22px]">
                <Image
                  src={finalShot.src}
                  alt={finalShot.alt}
                  width={400}
                  height={870}
                  className="block h-auto w-[190px]"
                  sizes="190px"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

// ── Main wrapper ────────────────────────────────────────────────────

export function GuideBody({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative bg-[#FCFAF7] py-14 md:py-20">
      <Container>{children}</Container>
    </section>
  );
}
