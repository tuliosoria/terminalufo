import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/content/site";
import { getContent } from "../lib/content/i18n";
import { defaultLocale, locales, localizedPath } from "../lib/i18n/config";

export const dynamic = "force-static";

const staticRoutes = ["/", "/game", "/varginha", "/files", "/games", "/press"];

export default function sitemap(): MetadataRoute.Sitemap {
  const fileIds = getContent(defaultLocale).fictionFiles.map((f) => f.id);
  const allRoutes = [...staticRoutes, ...fileIds.map((id) => `/files/${id}`)];

  const entries: MetadataRoute.Sitemap = [];
  for (const route of allRoutes) {
    for (const locale of locales) {
      const url = `${siteUrl}${localizedPath(locale, route).replace(/\/$/, "") || ""}`;
      entries.push({
        url: url || siteUrl,
        lastModified: new Date("2026-05-14"),
        changeFrequency: route === "/varginha" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : route.startsWith("/files/varginha-") ? 0.6 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              `${siteUrl}${localizedPath(l, route).replace(/\/$/, "") || ""}` || siteUrl
            ])
          )
        }
      });
    }
  }
  return entries;
}
