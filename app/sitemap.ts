import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const baseUrl = "https://nettoyageliege.com"
const lastMod = "2025-01-30"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified: lastMod, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/nettoyage-classique.html`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/#services`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/#pourquoi-nous`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/#temoignages`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/#contact`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
  ]
}

