import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Kidgonet – Kinderschutz App für iOS & Android";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const smileyBytes = await readFile(
    join(process.cwd(), "public", "brand", "smiley-weiss.png"),
  );
  const smileyDataUrl = `data:image/png;base64,${smileyBytes.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#F9B000",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <img
          src={smileyDataUrl}
          width={280}
          height={280}
          style={{
            position: "absolute",
            right: 96,
            top: 175,
            opacity: 0.95,
          }}
          alt=""
        />
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            display: "flex",
          }}
        >
          Kidgonet
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 44,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 760,
            display: "flex",
          }}
        >
          Kinderschutz App für iOS & Android
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 30,
            fontWeight: 500,
            color: "#FFFFFF",
            opacity: 0.9,
            display: "flex",
          }}
        >
          Bildschirmzeit · Webfilter · Standort · App-Sperre
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          kidgonet.de
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
