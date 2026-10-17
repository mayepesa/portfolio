import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { siteUrl } from "@/config/site";
import { profile } from "@/content/profile";
import { hasLocale, locales } from "@/i18n/config";
import "../globals.css";

const outfit = localFont({
  src: "../../fonts/Outfit-Variable.woff2",
  variable: "--font-outfit",
  weight: "100 900",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../../fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-mono-face",
  weight: "100 800",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b1426",
  colorScheme: "dark",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const title = `${profile.name} · ${profile.role[lang]}`;
  const description = profile.intro[lang];

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title,
      description,
      url: `/${lang}`,
      type: "website",
      locale: lang === "es" ? "es_CO" : "en_US",
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
