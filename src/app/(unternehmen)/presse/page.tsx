import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";
import { PressCoverageCarousel } from "@/components/sections/PressCoverageCarousel";

export const metadata: Metadata = {
  title: "Presse – Pressematerial & Downloads | Kidgonet",
  description:
    "Pressemitteilungen, Fotos und Corporate Design von Kidgonet zum Download. Pressekontakt: info@kidgonet.de.",
  alternates: { canonical: "/presse" },
  openGraph: {
    title: "Presse – Pressematerial & Downloads",
    description:
      "Pressemitteilungen, Fotos und Logos von Kidgonet frei zum Download.",
    url: "https://www.kidgonet.de/presse",
  },
};

// ─── Eyebrow-Utility ──────────────────────────────────────────────────────────
const eyebrow = "text-[11px] font-extrabold uppercase tracking-[0.22em]";

// ─── Daten ────────────────────────────────────────────────────────────────────

const pressetext = {
  label: "Pressetext",
  subline: "Sicherer Rückhalt im Umgang mit digitalen Medien:",
  headline: "Manuel Neuer wird Partner von Kidgonet",
  buttonLabel: "Mehr lesen",
  buttonAriaLabel:
    "Pressemitteilung als PDF öffnen: Manuel Neuer wird Partner von Kidgonet",
  href: "/downloads/presse/Pressemitteilung_Kidgonet_ManuelNeuer.pdf",
  bgImage: "/images/team/manuel-neuer-mit-foundern.png",
};

type DownloadCardData = {
  label: string;
  title: string;
  buttons: { label: string; href: string; ariaLabel: string }[];
  bgImage: string;
};

const downloadCards: DownloadCardData[] = [
  {
    label: "DOWNLOAD",
    title: "Press Kit",
    buttons: [
      {
        label: "INFOS",
        href: "/downloads/presse/Press-Kit.pdf",
        ariaLabel: "Press Kit als PDF herunterladen",
      },
    ],
    bgImage: "/images/presse/digitalgipfel.jpg",
  },
  {
    label: "DOWNLOAD",
    title: "Fotos",
    buttons: [
      {
        label: "WEB",
        href: "/downloads/presse/Fotos_WEB.zip",
        ariaLabel: "Fotos in Web-Auflösung als ZIP herunterladen",
      },
      {
        label: "PRINT",
        href: "/downloads/presse/Fotos_PRINT.zip",
        ariaLabel: "Fotos in Druckauflösung als ZIP herunterladen",
      },
    ],
    bgImage: "/images/presse/blog-banner.jpg",
  },
  {
    label: "DOWNLOAD",
    title: "Brand",
    buttons: [
      {
        label: "LOGOS",
        href: "/downloads/presse/LOGOS.zip",
        ariaLabel: "Logo-Dateien als ZIP herunterladen",
      },
    ],
    bgImage: "/images/presse/moritz-jannis-profil.jpg",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

// ─── In den Medien (verifizierte Berichterstattung) ───────────────────────────

type PressItem = {
  outlet: string;
  title: string;
  href: string;
  date?: string;
};

const pressCoverage: PressItem[] = [
  {
    outlet: "Bayer. Staatsministerium für Digitales",
    title:
      "Digitalpreis B.DiGiTAL 2025: Minister Mehring ehrt Kidgonet-Gründer und Manuel Neuer",
    href: "https://www.stmd.bayern.de/bayerischer-digitalpreis-b-digital-2025-minister-mehring-ehrt-kidgonet-gruender-und-manuel-neuer-fuer-engagement-im-kinderschutz-und-digitaler-verantwortung",
    date: "2025",
  },
  {
    outlet: "Merkur",
    title:
      "Junge Holzkirchner kreieren Kinderschutz-App fürs Handy – sogar Manuel Neuer ist begeistert",
    href: "https://www.merkur.de/lokales/region-holzkirchen/holzkirchen-ort28831/junge-holzkirchner-kreieren-kinderschutz-app-fuers-handy-sogar-manuel-neuer-ist-begeistert-93874649.html",
  },
  {
    outlet: "Augsburger Allgemeine",
    title:
      "Neue Auszeichnung für Weltmeister-Torwart Manuel Neuer vom FC Bayern",
    href: "https://www.augsburger-allgemeine.de/bayern/neue-auszeichnung-fuer-weltmeister-torwart-manuel-neuer-vom-fc-bayern-112828238",
  },
  {
    outlet: "Mittelbayerische",
    title:
      "Wie junge Gründer Fußballweltmeister Manuel Neuer von ihrer App-Idee überzeugt haben",
    href: "https://www.mittelbayerische.de/nachrichten/regionale-wirtschaft/wie-junge-gruender-fussballweltmeister-manuel-neuer-von-ihrer-app-idee-ueberzeugt-haben-20357062",
  },
  {
    outlet: "Eltern.de",
    title: "Jetzt ist aber mal Schluss!",
    href: "https://www.eltern.de/schulkind/jetzt-ist-aber-mal-schluss-_12341902-12345616.html",
  },
  {
    outlet: "oberpfalz.de",
    title: "Manuel Neuer unterstützt Start-up aus Regensburg",
    href: "https://www.oberpfalz.de/manuel-neuer-start-up-regensburg/",
  },
  {
    outlet: "charivari",
    title:
      "Fußball-Profi Manuel Neuer ist Botschafter von Kinderschutz-App aus Regensburg",
    href: "https://www.charivari.com/fussball-profi-manuel-neuer-ist-botschafter-von-kinderschutz-app-aus-regensburg-1066994/",
    date: "18.12.2025",
  },
  {
    outlet: "gong fm",
    title:
      "Fußball-Profi Manuel Neuer ist Botschafter von Kinderschutz-App aus Regensburg",
    href: "https://www.gongfm.de/fussball-profi-manuel-neuer-ist-botschafter-von-kinderschutz-app-aus-regensburg-3705834/",
    date: "18.12.2025",
  },
  {
    outlet: "Elternguide.online",
    title: "Kidgonet: Was kann die Kinderschutz-App?",
    href: "https://www.elternguide.online/kidgonet/",
    date: "29.11.2024",
  },
];

function PressCoverageSection() {
  return (
    <section aria-label="In den Medien" className="bg-white py-4 pb-14">
      <Container>
        <div className="mx-auto max-w-5xl">
          <p className={`${eyebrow} text-center text-brand-yellow`}>
            In den Medien
          </p>
          <h2 className="mt-3 text-center text-2xl font-extrabold leading-tight text-text-dark md:text-3xl">
            Über Kidgonet wird berichtet
          </h2>
          <PressCoverageCarousel items={pressCoverage} />
        </div>
      </Container>
    </section>
  );
}

export default function PressePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Start", url: "https://www.kidgonet.de" },
          { name: "Presse", url: "https://www.kidgonet.de/presse" },
        ])}
      />
      <HeroSection />
      <PressetextCard />
      <DownloadCardsSection />
      <PressCoverageSection />
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-white pb-8 pt-14 md:pb-10 md:pt-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className={`${eyebrow} text-brand-yellow`}>Presse</p>
          <h1 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight text-text-dark md:text-5xl">
            Pressematerial
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-text-dark/70 md:text-base">
            Liebe Journalistinnen, liebe Journalisten, zur Unterstützung Ihrer
            Arbeit stehen hier verschiedene Materialien zum Download für Sie
            bereit. Bitte nutzen Sie als Urheberrechtshinweis ©Kidgonet.
            Für weitere Informationen wenden Sie sich an{" "}
            <a
              href="mailto:info@kidgonet.de"
              className="font-semibold text-brand-yellow hover:underline"
            >
              info@kidgonet.de
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}

// ─── Pressetext-Card ──────────────────────────────────────────────────────────

function PressetextCard() {
  return (
    <section aria-label="Pressemitteilung" className="bg-white py-4">
      <Container>
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={pressetext.bgImage}
            alt=""
            fill
            className="object-cover object-top blur-[2px] scale-105"
            sizes="(min-width: 1200px) 1200px, 100vw"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative py-12 md:py-16">
            <div className="mx-auto max-w-2xl px-6 text-center">
              <p className={`${eyebrow} text-white/70`}>{pressetext.label}</p>
              <p className="mt-3 text-sm font-semibold leading-snug text-white/90">
                {pressetext.subline}
              </p>
              <h2 className="mt-2 text-balance text-2xl font-extrabold leading-tight text-white md:text-4xl">
                {pressetext.headline}
              </h2>
              <div className="mt-6">
                <a
                  href={pressetext.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={pressetext.buttonAriaLabel}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-2.5 text-sm font-extrabold text-white transition hover:bg-white hover:text-text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/55"
                >
                  {pressetext.buttonLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── Download-Cards ───────────────────────────────────────────────────────────

function DownloadCardsSection() {
  return (
    <section aria-label="Pressematerial zum Download" className="bg-white py-4">
      <Container>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {downloadCards.map((card) => (
            <DownloadCard key={card.title} card={card} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

function DownloadCard({ card }: { card: DownloadCardData }) {
  return (
    <li className="relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <Image
          src={card.bgImage}
          alt=""
          fill
          className="object-cover object-center blur-[2px] scale-105"
          sizes="(min-width: 640px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative flex min-h-[260px] flex-col items-center px-5 pb-8 pt-7 text-center">
        {/* Smiley-Icon */}
        <Image
          src="/brand/smiley-weiss.png"
          alt=""
          width={48}
          height={48}
          className="shrink-0"
        />

        {/* Label + Titel */}
        <div className="mt-3">
          <p className={`${eyebrow} text-white/70`}>{card.label}</p>
          <h3 className="mt-1 text-lg font-extrabold text-white">
            {card.title}
          </h3>
        </div>

        {/* Buttons */}
        <div className="mt-auto flex flex-wrap justify-center gap-2 pt-4">
          {card.buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              download
              aria-label={btn.ariaLabel}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-4 py-1.5 text-xs font-extrabold text-white transition hover:bg-white hover:text-text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/55"
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
}
