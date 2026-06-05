import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const dynamic = "force-static";
export const alt = "Kinderschutz-App aus Deutschland – Kidgonet";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Kinderschutz-App aus Deutschland",
    subtitle: "DSGVO-konform · Server in Deutschland",
  });
}
