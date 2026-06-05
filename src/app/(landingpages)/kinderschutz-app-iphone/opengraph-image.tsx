import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const dynamic = "force-static";
export const alt = "Kinderschutz App fürs iPhone – Kidgonet";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Kinderschutz App fürs iPhone",
    subtitle: "Schutz, den dein Kind nicht aushebelt · DSGVO-konform",
  });
}
