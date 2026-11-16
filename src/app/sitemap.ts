import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}/${locale}`]));

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    alternates: { languages },
  }));
}
