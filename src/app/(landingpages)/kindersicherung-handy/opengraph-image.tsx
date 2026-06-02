import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const dynamic = "force-static";
export const alt = "Kindersicherung Handy – App für iOS & Android";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Kindersicherung Handy",
    subtitle: "Eine App für iOS & Android — alles in einer Hand.",
  });
}
