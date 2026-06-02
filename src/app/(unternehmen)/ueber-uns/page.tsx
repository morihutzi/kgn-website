import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Über uns – Das Team hinter Kidgonet",
  description:
    "Unsere Mission bei Kidgonet ist es, Kinder sicher und begleitet in der digitalen Welt aufwachsen zu lassen. Go online. Aber sicher!",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: "Über uns – Das Team hinter Kidgonet",
    description:
      "Von Eltern für Eltern: Kidgonet schützt Kinder sicher und begleitet im digitalen Alltag.",
    url: "https://www.kidgonet.de/ueber-uns",
  },
};

const values = [
  {
    title: "Mit Kindern für Kinder entwickelt",
    description:
      "Kidgonet wurde nicht nur für Kinder, sondern auch mit Kindern zusammen entwickelt. Und dabei haben wir unter Berücksichtigung der Anliegen von den Kindern ein perfektes Produkt für Eltern.",
  },
  {
    title: "Die Privatsphäre hat höchste Priorität",
    description:
      "Sicherheit ist uns genauso wichtig wie die Privatsphäre der Kinder. Persönliche Daten werden weder gespeichert noch weitergeleitet – auch nicht an Eltern. Kidgonet ist keine App, um Kinder auszuspionieren. Denn auch online haben Kinder ein Recht auf Privatsphäre.",
  },
  {
    title: "Medienkompetenz stärken",
    description:
      "Kinder brauchen mehr als Schutz – sie brauchen Orientierung. Mit Kidgonet lernen Kinder, digitale Medien bewusst und verantwortungsvoll zu nutzen.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ManuelNeuerSection />
      <ValuesSection />
      <FinalCTA />
    </>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-yellow">
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
        <div className="py-10 md:py-14">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/80">
            Über uns
          </p>
          <h1 className="mt-2 max-w-3xl text-balance text-2xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
            Kinder sollten nicht nur im Alltag geschützt werden, sondern auch
            online.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/95 md:text-base">
            Sie müssen im Internet genauso sicher unterwegs sein wie auf dem
            Weg zur Schule.
          </p>
        </div>
      </Container>
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

// ─── Mission ─────────────────────────────────────────────────────────

function MissionSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Foto der Gründer */}
          <div className="relative mx-auto aspect-[5/4] w-full max-w-md overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] md:max-w-none">
            <Image
              src="/images/team/moritz-jannis-hutzler.png"
              alt="Moritz Hutzler und Jannis Hutzler — Co-Founder von Kidgonet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
              Unsere Mission
            </p>
            <h2 className="mt-3 text-balance text-2xl font-extrabold leading-snug text-text-dark md:text-3xl">
              Unsere Mission bei Kidgonet ist es, Kinder sicher und begleitet
              in der digitalen Welt aufwachsen zu lassen.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-dark/75 md:text-lg">
              <p>
                In einer Zeit, in der das Internet voller Chancen, aber auch
                Gefahren steckt, bieten wir Eltern die Werkzeuge, um ihre
                Kinder effektiv vor ungeeigneten Inhalten und Risiken zu
                schützen – ohne dabei die Privatsphäre der Kinder zu
                verletzen.
              </p>
              <p>
                Unser Leitsatz „Go Online – aber sicher!" treibt uns an,
                ständig neue, innovative Lösungen zu entwickeln. Dabei
                arbeiten wir eng mit Experten, Pädagogen und Behörden wie dem
                LKA München zusammen, um den Jugendschutz auf ein neues Level
                zu heben.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── Manuel Neuer / Das sind wir ─────────────────────────────────────

function ManuelNeuerSection() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      {/* Voll-bleed Teenager-Banner als oberer Abschluss */}
      <div className="relative h-[220px] w-full overflow-hidden md:h-[320px] lg:h-[380px]">
        <Image
          src="/images/banners/cta-teens.jpeg"
          alt="Kidgonet – Schutz und Begleitung im digitalen Alltag von Teenagern"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <Container className="relative -mt-16 md:-mt-24">
        <div className="grid items-center gap-10 rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:grid-cols-2 md:gap-16 md:p-12">
          {/* Text */}
          <div className="md:order-2">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
              Das sind wir
            </p>
            <h2 className="mt-3 text-balance text-2xl font-extrabold leading-snug text-text-dark md:text-3xl">
              Wir glauben an Schutz ohne Überwachung, an Freiheit mit
              Verantwortung und an die Bedeutung von Medienkompetenz.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-dark/75 md:text-lg">
              <p>
                Wir setzen uns ein, Kindern einen sicheren und
                verantwortungsbewussten Umgang mit digitalen Medien zu
                ermöglichen. Mit unserer App begleiten wir Eltern und Kinder
                auf ihrem Weg durch die digitale Welt – sicher, respektvoll
                und altersgerecht.
              </p>
              <p>
                Mit Fußballprofi und Weltmeister Manuel Neuer als Partner an
                unserer Seite setzen wir ein starkes Zeichen: Für eine
                Kindheit, die sowohl online als auch offline von Sicherheit,
                Freiräumen und Respekt geprägt ist.
              </p>
            </div>
          </div>

          {/* Foto Manuel Neuer + Gründer */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl md:order-1 md:max-w-none">
            <Image
              src="/images/team/manuel-neuer-mit-foundern.png"
              alt="Manuel Neuer mit Moritz und Jannis Hutzler, den Co-Foundern von Kidgonet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── Werte ───────────────────────────────────────────────────────────

function ValuesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
            Unsere Werte
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-text-dark md:text-4xl">
            Wofür wir stehen
          </h2>
        </div>

        <ol className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {values.map((value, idx) => (
            <li
              key={value.title}
              className="flex flex-col rounded-2xl border border-[#E8DFD0] bg-white p-7 md:p-8"
            >
              <span className="font-mono text-sm font-extrabold tracking-wider text-brand-yellow">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-extrabold leading-snug text-text-dark md:text-xl">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-dark/70 md:text-[15px]">
                {value.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
