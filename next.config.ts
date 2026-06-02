import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Bild-Optimierung: AVIF bevorzugt (kleinere Files), WebP als Fallback.
  // 1 Jahr Cache-Lebensdauer fuer optimierte Bilder.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    // 90 zusaetzlich erlauben fuer Hero-Bilder (Default ist nur 75).
    qualities: [75, 90],
  },

  async headers() {
    return [
      // Security-Headers für alle Routen
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Statische Brand-Assets sind unveränderlich -> aggressives Caching
      {
        source: "/brand/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/badges/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source:
          "/installation-der-kidgonet-app-auf-android-geraeten-schnell-einfach",
        destination: "/hilfe/installation-android",
        permanent: true,
      },
      {
        source:
          "/installation-der-kidgonet-app-auf-android-geraeten-schnell-einfach/",
        destination: "/hilfe/installation-android",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
