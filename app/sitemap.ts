import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const baseUrl = "https://nettoyageliege.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: "2025-01-28",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: "2025-01-28",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#pourquoi-nous`,
      lastModified: "2025-01-28",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#temoignages`,
      lastModified: "2025-01-28",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: "2025-01-28",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}

