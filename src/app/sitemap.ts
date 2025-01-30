import { MetadataRoute } from "next";

export default function generateSitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://naxiums.com";

  const routes = [
    "",
    "/about-us",
    "/our-services",
    "/portfolio",
    "/contact-us",
    "/blogs",
    "/faq",
    "/blogs/cybersecurity-in-the-remote-work-era",
    "/blogs/data-governance",
    "/blogs/demystifying-AI",
    "/blogs/digital-transformation",
    "/blogs/power-of-devops",
    "/blogs/future-of-work",
    "/blogs/navigating-the-cloud",
    "/blogs/exploring-edge-computing",
    "/blogs/blockchain-beyond-bitcoin",
  ];

  const lastModified = new Date().toISOString();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changefreq: "weekly",
    priority: route === "" ? 1.0 : 0.5,
  }));
}
