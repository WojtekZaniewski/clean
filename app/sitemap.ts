import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const baseUrl = "https://nettoyageliege.com"
const lastMod = "2026-03-02"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified: lastMod, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/nettoyage-classique.html`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/entreprise-nettoyage-liege.html`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/offre-nettoyage-liege.html`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
  ]
}

