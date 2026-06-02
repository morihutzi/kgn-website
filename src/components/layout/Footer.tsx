import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CookieSettingsButton } from "@/components/consent/CookieSettingsButton";
import { footerLinks, siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const sloganLines = siteConfig.tagline.split(". ");

  return (
    <footer className="border-t border-black/10 bg-surface-muted text-text-dark">
      <Container className="grid grid-cols-1 justify-items-center gap-y-7 py-9 text-center md:grid-cols-[1.7fr_1fr_0.8fr_1.1fr] md:justify-items-stretch md:gap-8 md:py-14 md:text-left">
        {/* Slogan */}
        <p className="text-center text-3xl font-extrabold leading-[1.1] text-brand-yellow md:col-span-1 md:text-left md:text-[40px]">
          {sloganLines.map((line, i) => (
            <span key={line} className="block">
              {line}
              {i < sloganLines.length - 1 ? "." : ""}
            </span>
          ))}
        </p>

        {/* Social Media — Mobile: titellose, zentrierte Icon-Reihe ganz unten;
            ab md: vertikale Liste mit Titel + Labels an Originalposition */}
        <nav
          aria-label="Social Media"
          className="order-last md:order-none md:col-span-1"
        >
          <h2 className="mb-4 hidden text-base font-medium text-text-dark/55 md:block">
            Social Media
          </h2>
          <ul className="flex flex-row justify-center gap-4 text-base md:flex-col md:justify-start md:gap-0 md:space-y-2">
            {footerLinks.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center gap-2 text-brand-yellow transition hover:underline"
                >
                  <span className="flex items-center justify-center rounded-lg border border-white bg-brand-yellow p-2 text-white md:rounded-none md:border-0 md:bg-transparent md:p-0 md:text-brand-yellow">
                    <SocialIcon
                      label={s.label}
                      className="h-5 w-5 md:h-4 md:w-4"
                    />
                  </span>
                  <span className="hidden md:inline">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* General + Legal — auf Mobile gestapelt in einer zentrierten Spalte
            (eine gemeinsame Mittelachse), ab md wieder eigene Grid-Spalten */}
        <div className="flex flex-col items-center gap-7 md:contents">
          {/* General */}
          <FooterColumn label="General">
          {footerLinks.general.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-brand-yellow transition hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        {/* Legal */}
        <FooterColumn label="Legal">
          {footerLinks.legal.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-brand-yellow transition hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </FooterColumn>
        </div>
      </Container>

      {/* Bottom-Zeile: Copyright + Cookie-Einstellungen */}
      <div className="border-t border-black/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-4 text-xs text-text-dark/55 sm:flex-row">
          <span>
            © {year} {siteConfig.legalName} – All Rights Reserved
          </span>
          <CookieSettingsButton className="text-text-dark/55 transition hover:text-text-dark hover:underline" />
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <nav aria-label={label} className="text-center md:text-left">
      <h2 className="mb-2 text-base font-medium text-text-dark/55 md:mb-4">
        {label}
      </h2>
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1.5 text-base md:block md:space-y-2">
        {children}
      </ul>
    </nav>
  );
}

function SocialIcon({
  label,
  className = "h-4 w-4",
}: {
  label: string;
  className?: string;
}) {
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
