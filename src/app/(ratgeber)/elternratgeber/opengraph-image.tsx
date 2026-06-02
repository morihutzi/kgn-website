import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const runtime = "nodejs";
export const alt = "Elternratgeber – Tipps zu Medien & Kindern";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Elternratgeber",
    subtitle: "Tipps von Experten zu Mediennutzung, Bildschirmzeit & digitalem Familienalltag.",
  });
}
