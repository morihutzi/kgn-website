import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const dynamic = "force-static";
export const alt = "Bildschirmzeit App für Kinder – iOS & Android";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Bildschirmzeit App",
    subtitle: "Tageslimits, Auszeiten und geräteübergreifende Begrenzung.",
  });
}
