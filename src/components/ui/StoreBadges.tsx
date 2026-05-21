import Image from "next/image";
import { siteConfig } from "@/content/site";

type StoreBadgesProps = {
  className?: string;
  size?: "sm" | "md";
};

export function StoreBadges({ className = "", size = "md" }: StoreBadgesProps) {
  const height = size === "sm" ? 40 : 52;
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={siteConfig.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Im App Store laden"
        className="inline-block"
      >
        <Image
          src="/badges/app-store-de.svg"
          alt="Im App Store laden"
          width={height * 3}
          height={height}
          style={{ height, width: "auto" }}
        />
      </a>
      <a
        href={siteConfig.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bei Google Play"
        className="inline-block"
      >
        <Image
          src="/badges/google-play-de.png"
          alt="Bei Google Play"
          width={height * 3}
          height={height}
          style={{ height, width: "auto" }}
        />
      </a>
    </div>
  );
}
