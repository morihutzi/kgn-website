import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CookieSettingsButton } from "@/components/consent/CookieSettingsButton";
import {
  footerLinks,
  landingPages,
  primaryNav,
  siteConfig,
  type NavLink,
} from "@/content/site";

const findNav = (href: string): NavLink =>
  primaryNav.find((n) => n.href === href) ?? { label: href, href };

const produktLinks: NavLink[] = [
  findNav("/was-kann-die-app"),
  findNav("/preise"),
  findNav("/hilfe"),
  findNav("/elternratgeber"),
];

const unternehmenLinks: NavLink[] = [
  findNav("/ueber-uns"),
  ...footerLinks.general,
  {
    label: "Login",
    href: siteConfig.portalLoginUrl,
    external: true,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-6">
        <div className="space-y-4 md:col-span-2">
          <Image
            src="/brand/logo-weiss.png"
            alt={siteConfig.name}
            width={600}
            height={82}
            className="h-8 w-auto"
          />
          <p className="text-lg font-semibold">{siteConfig.tagline}</p>
          <div className="flex gap-3 pt-2">
            {footerLinks.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
              >
                <SocialIcon label={s.label} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav-Spalten — auf Mobile 2 Spalten (4 Bloecke), Desktop volle Breite */}
        <div className="grid grid-cols-2 gap-6 md:col-span-4 md:grid-cols-4 md:gap-10">
          <FooterColumn label="Produkt" items={produktLinks} />
          <FooterColumn label="Kindersicherung" items={landingPages} />
          <FooterColumn label="Unternehmen" items={unternehmenLinks} />
          {/* Rechtliches mit Cookie-Einstellungen-Button */}
          <nav aria-label="Rechtliches" className="space-y-3 text-sm">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white/60">
              Rechtliches
            </h2>
            <ul className="space-y-2">
              {footerLinks.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton className="text-left text-white/80 hover:text-white hover:underline" />
              </li>
            </ul>
          </nav>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-4 text-center text-xs text-white/60">
          Copyright © {year} {siteConfig.legalName} – All Rights Reserved
        </Container>
      </div>
    </footer>
  );
}

function SocialIcon({ label }: { label: string }) {
  const className = "h-4 w-4";
  switch (label) {
    case "Facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M13.5 21.5v-8h2.7l.4-3.1h-3.1V8.4c0-.9.25-1.5 1.55-1.5H16.7V4.2a22 22 0 0 0-2.4-.1c-2.4 0-4 1.45-4 4.1v2.3H7.5v3.1h2.8v8z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M4.98 3.5a2.5 2.5 0 1 1 .02 5 2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM10 9h3.8v1.65h.05c.53-1 1.83-2.05 3.77-2.05 4.04 0 4.78 2.66 4.78 6.12V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.12 1.43-2.12 2.9V21h-4z" />
        </svg>
      );
    default:
      return null;
  }
}

function FooterColumn({
  label,
  items,
}: {
  label: string;
  items: readonly NavLink[];
}) {
  return (
    <nav aria-label={label} className="space-y-3 text-sm">
      <h2 className="text-xs font-bold uppercase tracking-wider text-white/60">
        {label}
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-white/80 hover:text-white hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
