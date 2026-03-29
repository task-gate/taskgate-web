import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0a0a0c 0%, #1a2030 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#8ab4f8",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          About TaskGate
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Technology that serves you—not your feed
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.72)",
            marginTop: 24,
            maxWidth: 820,
            lineHeight: 1.45,
          }}
        >
          We help you build intentional digital habits with pauses, not guilt.
        </div>
      </div>
    ),
    { ...size }
  );
}
