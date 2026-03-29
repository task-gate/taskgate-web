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
          background: "linear-gradient(145deg, #080c14 0%, #121a2e 45%, #1a1430 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#529cca",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          TaskGate
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Features for intentional phone use
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            marginTop: 24,
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Friction, mini-tasks, and partner apps—without shame-based blocking.
        </div>
      </div>
    ),
    { ...size }
  );
}
