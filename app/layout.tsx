import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "../components/nav/SiteNav";
import { StaticOverlay } from "../components/ui/StaticOverlay";
import { pageMetadata } from "../lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terminal UFO — Classified. Leaked. Real.",
  description:
    "The official home of Terminal Varginha. Play the game. Read the real files. The 1996 Varginha UFO incident was covered up. We found the documents."
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StaticOverlay />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
