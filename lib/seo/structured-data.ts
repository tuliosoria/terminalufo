import { siteUrl } from "../content/site";

export function videoGameSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Terminal Varginha",
    url: `${siteUrl}/game`,
    applicationCategory: "Game",
    genre: ["Hacker terminal", "Narrative", "Mystery"],
    description:
      "A hacker terminal game about classified files, unreliable systems, and the 1996 Varginha UFO incident."
  };
}

export function articleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Varginha UFO Incident",
    url: `${siteUrl}/varginha`,
    author: { "@type": "Organization", name: "Terminal UFO" },
    publisher: { "@type": "Organization", name: "Terminal UFO" }
  };
}
