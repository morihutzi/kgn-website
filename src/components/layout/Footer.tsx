import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { footerLinks, primaryNav, siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <Image
            src="/brand/logo-weiss.png"
            alt={siteConfig.name}
            width={200}
            height={27}
            className="h-8 w-auto"
          />
          <p className="text-lg font-semibold">{siteConfig.tagline}</p>
          <div className="flex gap-4 pt-2">
            {footerLinks.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Allgemein" className="space-y-3 text-sm">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white/60">
            Allgemein
          </h2>
          <ul className="space-y-2">
            {primaryNav.map((item) => (
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
              <Link
                href={siteConfig.portalLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white hover:underline"
              >
                Login
              </Link>
            </li>
            {footerLinks.general.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/80 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

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
          </ul>
        </nav>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-4 text-center text-xs text-white/60">
          Copyright © {year} {siteConfig.legalName} – All Rights Reserved
        </Container>
      </div>
    </footer>
  );
}
