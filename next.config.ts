import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
