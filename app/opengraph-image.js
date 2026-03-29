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
          background: "linear-gradient(145deg, #080c14 0%, #1a1f2e 50%, #121028 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: "#529cca",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          TaskGate
        </div>
        <div
          style={{
            fontSize: 62,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.05,
            maxWidth: 950,
          }}
        >
          Design your digital habits
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.72)",
            marginTop: 28,
            maxWidth: 820,
            lineHeight: 1.35,
          }}
        >
          Pause before you scroll—tasks, not guilt.
        </div>
      </div>
    ),
    { ...size }
  );
}
