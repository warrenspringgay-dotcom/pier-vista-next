import type { MetadataRoute } from "next";

const siteUrl = "https://www.fishandchipsredcar.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/fish-and-chips-redcar-seafront"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
