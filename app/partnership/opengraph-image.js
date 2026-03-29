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
          background: "linear-gradient(145deg, #080c14 0%, #152238 40%, #1a1030 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#5eb88a",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Partner program
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
          Reach users building better digital habits
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.74)",
            marginTop: 24,
            maxWidth: 840,
            lineHeight: 1.4,
          }}
        >
          Integrate your app as a mindful task—deep links in, completion
          callback back to TaskGate.
        </div>
      </div>
    ),
    { ...size }
  );
}
