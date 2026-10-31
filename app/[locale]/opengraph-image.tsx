import { t } from '@/lib/i18n/t';
import { ImageResponse } from "next/og";
import { site } from "@/config/site";

// Language-neutral: this export is static, so it cannot follow the page locale.
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social card: charcoal, big tagline, roundabout mark. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: site.colours.charcoal,
          color: site.colours.cream,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="11" fill="none" stroke={site.colours.cream} strokeWidth="3.4" />
            <path d="M20 31v8M10.5 14.5 3.6 10.5M31 20h8" stroke={site.colours.cream} strokeWidth="3.4" />
            <circle cx="20" cy="20" r="4.2" fill={site.colours.cream} />
            <circle cx="27.8" cy="12.2" r="2.8" fill={site.colours.sunflower} />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 900, letterSpacing: -1 }}>{t("ROND·POINT")}</div>
        </div>
        <div style={{ fontSize: 110, fontWeight: 900, lineHeight: 0.9, letterSpacing: -3, textTransform: "uppercase" }}>
          {t("Take the long way round.")}</div>
        <div style={{ fontSize: 28, color: site.colours.sunflower }}>{t("Tailor-made road trips through France")}</div>
      </div>
    ),
    size,
  );
}
