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
          background: "linear-gradient(145deg, #0c1018 0%, #1e1a30 50%, #0d1828 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#7c9cff",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          TaskGate Premium
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Analytics, scheduling & more
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.72)",
            marginTop: 24,
            maxWidth: 820,
            lineHeight: 1.4,
          }}
        >
          Deeper insights, partner integrations, and custom tasks when you are
          ready to go further.
        </div>
      </div>
    ),
    { ...size }
  );
}
