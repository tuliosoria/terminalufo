import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/content/site";

export const dynamic = "force-static";

const routes = ["/", "/game", "/varginha", "/files", "/games", "/press"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified: new Date("2026-05-14"),
    changeFrequency: route === "/varginha" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8
  }));
}
