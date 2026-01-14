export default function sitemap() {
  const baseUrl = "https://taskgate.co";

  // Define all your public pages
  const routes = [
    "",
    "/about-us",
    "/contact-us",
    "/developers",
    "/download",
    "/features",
    "/partnership",
    "/premium",
    "/privacy-policy",
    "/terms-and-conditions",
    "/updates",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
