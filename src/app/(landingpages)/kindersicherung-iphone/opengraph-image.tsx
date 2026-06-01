import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const runtime = "nodejs";
export const alt = "Kindersicherung iPhone – Bildschirmzeit & Webfilter";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Kindersicherung iPhone",
    subtitle: "Bildschirmzeit, Webfilter & App-Sperre auf dem iPhone deines Kindes.",
  });
}
