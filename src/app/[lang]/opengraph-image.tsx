import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { defaultLocale, hasLocale } from "@/i18n/config";
import { getHandle } from "@/lib/text";

export const alt = profile.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = { bg: "#0c0c16", ink: "#c9e8ff", muted: "#9a9cc4", highlight: "#b9f0d7" };

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : defaultLocale;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 96,
        background: colors.bg,
      }}
    >
      <div style={{ display: "flex", fontSize: 32, color: colors.highlight }}>
        {`${getHandle(profile.name)}@medellín:~$ whoami`}
      </div>
      <div style={{ display: "flex", marginTop: 24, fontSize: 112, color: colors.ink }}>
        {profile.name}
      </div>
      <div style={{ display: "flex", marginTop: 16, fontSize: 44, color: colors.muted }}>
        {profile.role[locale]}
      </div>
    </div>,
    size,
  );
}
