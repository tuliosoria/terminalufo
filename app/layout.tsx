import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terminal UFO",
  description: "A Next.js Hello World app for Terminal UFO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
