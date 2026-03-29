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
          background: "linear-gradient(145deg, #000000 0%, #0f172a 50%, #1e1b4b 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: "#34d399",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Download
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            maxWidth: 920,
          }}
        >
          TaskGate for iOS & Android
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.72)",
            marginTop: 24,
            maxWidth: 840,
            lineHeight: 1.4,
          }}
        >
          Scan, install, and start building intentional habits.
        </div>
      </div>
    ),
    { ...size }
  );
}
