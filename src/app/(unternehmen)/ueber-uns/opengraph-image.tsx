import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const dynamic = "force-static";
export const alt = "Über uns – Das Team hinter Kidgonet";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Über uns",
    subtitle: "Kinder sicher und begleitet in der digitalen Welt aufwachsen lassen.",
  });
}
