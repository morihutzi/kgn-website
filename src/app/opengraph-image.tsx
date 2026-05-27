import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const runtime = "nodejs";
export const alt = "Kidgonet – Kinderschutz App für iOS & Android";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Kidgonet",
    subtitle: "Kinderschutz App für iOS & Android",
  });
}
