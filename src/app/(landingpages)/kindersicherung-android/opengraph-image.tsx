import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const dynamic = "force-static";
export const alt = "Kindersicherung Android – App für sichere Smartphone-Nutzung";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Kindersicherung Android",
    subtitle: "Bildschirmzeit, Webfilter & App-Sperre für jedes Android-Handy.",
  });
}
