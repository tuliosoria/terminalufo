/** @type {import('next-sitemap').IConfig} */
const routes = ["/", "/game", "/varginha", "/files", "/games", "/press"];

module.exports = {
  siteUrl: "https://www.terminalufo.com",
  generateRobotsTxt: false,
  outDir: "out",
  exclude: ["/robots.txt", "/sitemap.xml", "/sitemap-0.xml"],
  additionalPaths: async (config) => routes.map((loc) => ({
    loc,
    changefreq: loc === "/varginha" ? "weekly" : "monthly",
    priority: loc === "/" ? 1 : 0.8,
    lastmod: "2026-05-14T00:00:00.000Z"
  }))
};
