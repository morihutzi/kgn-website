import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { primaryNav, siteConfig } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          aria-label={`${siteConfig.name} – Startseite`}
          className="flex items-center"
        >
          <Image
            src="/brand/logo.png"
            alt={siteConfig.name}
            width={200}
            height={27}
            priority
            className="h-7 w-auto md:h-9"
          />
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-text-dark transition-colors hover:text-brand-yellow"
            >
              {item.label}
              {item.badge && (
                <span className="ml-1 rounded-full bg-brand-yellow px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
          <Link
            href={siteConfig.portalLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-text-dark transition-colors hover:text-brand-yellow"
          >
            Login
          </Link>
        </nav>

        <Button href={siteConfig.portalRegisterUrl} external size="md">
          Hol dir Kidgonet
        </Button>
      </Container>
    </header>
  );
}
