import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const runtime = "nodejs";
export const alt = "Kidgonet Preise – ab €2,99 pro Monat";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Preise ab €2,99 / Monat",
    subtitle: "7 Tage kostenlos testen · 30 Tage Geld zurück",
  });
}
