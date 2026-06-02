import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const dynamic = "force-static";
export const alt = "Internetfilter für Kinder – Webfilter App";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Internetfilter für Kinder",
    subtitle: "Altersgerechter Webfilter — automatisch & browserunabhängig.",
  });
}
