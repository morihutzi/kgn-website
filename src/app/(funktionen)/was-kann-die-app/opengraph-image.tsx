import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const dynamic = "force-static";
export const alt = "Was kann die Kidgonet App? Funktionen im Überblick";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Was kann die App?",
    subtitle: "Bildschirmzeit, Webfilter, App-Sperre und Standort — alles in einer App.",
  });
}
