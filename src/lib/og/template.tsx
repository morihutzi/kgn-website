import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

export async function renderOg({
  title,
  subtitle,
  tagline = "kidgonet.de",
}: {
  title: string;
  subtitle?: string;
  /** Untere Zeile, default "kidgonet.de" */
  tagline?: string;
}) {
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
            fontSize: 80,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            maxWidth: 820,
            display: "flex",
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              fontWeight: 500,
              lineHeight: 1.2,
              maxWidth: 820,
              opacity: 0.95,
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        )}
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
          {tagline}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
