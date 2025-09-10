/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://fondation-mwape.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/_next/*", "/api/*"],
};
