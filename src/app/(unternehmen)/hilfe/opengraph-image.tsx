import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/og/template";

export const dynamic = "force-static";
export const alt = "Hilfe & FAQs – Kidgonet";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg({
    title: "Hilfe & Installation",
    subtitle: "Schritt-für-Schritt-Anleitungen für iOS und Android.",
  });
}
