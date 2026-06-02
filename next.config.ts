import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 100% statische Seite (kein Node-Server). Erzeugt den `out/`-Ordner.
  output: "export",

  // Bild-Optimierung via next-image-export-optimizer: erzeugt zur Build-Zeit
  // responsive Größen + WebP für jedes <ExportedImage>. Der Custom-Loader
  // ersetzt den (auf statischem Host nicht verfügbaren) Next-Optimizer.
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    // "public" statt "public/images", damit ALLE Bild-Ordner (images, hilfe,
    // brand, badges, …) optimiert werden.
    nextImageExportOptimizer_imageFolderPath: "public",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "80",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },

  // HINWEIS: headers() (CSP/Security-Header) und redirects() funktionieren bei
  // `output: "export"` NICHT mehr — Next ignoriert sie. Sie müssen auf den
  // Webserver wandern (Apache `.htaccess`). Das ist der nächste Schritt.
  // Zur Übernahme in die .htaccess:
  //   Security-Header: X-Content-Type-Options nosniff, X-Frame-Options SAMEORIGIN,
  //     Referrer-Policy strict-origin-when-cross-origin,
  //     Permissions-Policy camera=(), microphone=(), geolocation=()
  //   Cache: /brand/* und /badges/* -> max-age=31536000, immutable
  //   Redirects (301):
  //     /installation-der-kidgonet-app-auf-android-geraeten-schnell-einfach[/]
  //       -> /hilfe/installation-android
};

export default nextConfig;
