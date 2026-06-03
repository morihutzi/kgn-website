import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { primaryNav, siteConfig } from "@/content/site";
import { wasKannDieAppMega } from "@/content/megaMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          aria-label={`${siteConfig.name} – Startseite`}
          className="flex items-center"
        >
          <ExportedImage
            src="/brand/logo.png"
            alt={siteConfig.name}
            width={600}
            height={82}
            priority
            placeholder="empty"
            className="h-[18px] w-auto sm:h-5 md:h-6"
          />
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {primaryNav.map((item) => {
            if (item.href === "/was-kann-die-app") {
              return (
                <MegaMenu
                  key={item.href}
                  triggerLabel={item.label}
                  triggerHref={item.href}
                  triggerBadge={item.badge}
                  features={wasKannDieAppMega.features}
                  abos={wasKannDieAppMega.abos}
                />
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[16px] font-light text-text-dark transition-colors hover:text-brand-yellow"
              >
                {item.label}
                {item.badge && (
                  <span className="ml-1 rounded-full bg-brand-yellow px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
          <Link
            href={siteConfig.portalLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] font-light text-text-dark transition-colors hover:text-brand-yellow"
          >
            Login
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button href={siteConfig.portalWelcomeUrl} external size="md">
            Hol dir Kidgonet
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
