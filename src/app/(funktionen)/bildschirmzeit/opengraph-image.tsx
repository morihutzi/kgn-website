import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const runtime = "nodejs";
export const alt = "Bildschirmzeit begrenzen – Kidgonet";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Bildschirmzeit begrenzen",
    subtitle: "Tageslimits, Auszeiten und Sofort-Sperre — für iOS & Android.",
  });
}
