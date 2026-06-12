import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const dynamic = "force-static";
export const alt = "Kidgonet Preise – Monatsabo €6,99, Jahresabo €49,99";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Monatsabo €6,99 · Jahresabo €49,99",
    subtitle: "7 Tage kostenlos testen · 30 Tage Geld zurück",
  });
}
