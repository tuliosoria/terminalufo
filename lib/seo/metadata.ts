import type { Metadata } from "next";
import { siteUrl } from "../content/site";

export function pageMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Terminal UFO",
      title,
      description,
      url,
      images: [{ url: "/og/default.svg", width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og/default.svg"]
    }
  };
}
