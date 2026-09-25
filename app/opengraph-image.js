import { ImageResponse } from "next/og";
import { site } from "../content/site";

export const alt = site.pageTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#1a1a1a",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#5c5c5c",
            textAlign: "center",
            maxWidth: 900,
            fontStyle: "italic",
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
