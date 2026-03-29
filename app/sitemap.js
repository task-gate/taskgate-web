import { getResourceSlugs } from "@/lib/resourceArticles";

export default function sitemap() {
  const baseUrl = "https://taskgate.co";

  const resourceRoutes = getResourceSlugs().map((slug) => ({
    path: `/resources/${slug}`,
    lastMod: "2026-03-28",
  }));

  const routes = [
    { path: "", lastMod: "2026-03-28" },
    { path: "/about-us", lastMod: "2026-03-15" },
    { path: "/contact-us", lastMod: "2026-02-01" },
    { path: "/developers", lastMod: "2026-03-01" },
    { path: "/docs", lastMod: "2026-03-01" },
    { path: "/download", lastMod: "2026-03-28" },
    { path: "/features", lastMod: "2026-03-20" },
    { path: "/partnership", lastMod: "2026-03-10" },
    { path: "/premium", lastMod: "2026-03-20" },
    { path: "/privacy-policy", lastMod: "2026-01-01" },
    { path: "/resources", lastMod: "2026-03-28" },
    { path: "/terms-and-conditions", lastMod: "2026-01-01" },
    { path: "/updates", lastMod: "2026-03-01" },
    ...resourceRoutes,
  ];

  return routes.map(({ path, lastMod }) => ({
    url: `${baseUrl}${path}`,
    lastModified: lastMod,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.75,
  }));
}
