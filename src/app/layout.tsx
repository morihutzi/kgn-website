import type { Metadata } from "next";
import { Fraunces, Open_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kidgonet.de"),
  title: {
    default: "Kidgonet – Deine Kinder surfen sicher",
    template: "%s | Kidgonet",
  },
  description:
    "Mit Kidgonet legst Du Bildschirmzeiten fest, schützt vor unangemessenen Inhalten und behältst die Geräte Deiner Kinder im Blick. Go online. Aber sicher!",
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/brand/favicon-180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${openSans.variable} ${fraunces.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
