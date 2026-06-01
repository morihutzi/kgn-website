import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const runtime = "nodejs";
export const alt = "Sperrmodus – Internet und Handy sofort sperren";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Sperrmodus",
    subtitle: "Alle Geräte mit einem Klick offline schalten — für Hausaufgaben und Auszeiten.",
  });
}
