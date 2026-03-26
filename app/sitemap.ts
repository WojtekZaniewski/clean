import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const baseUrl = "https://nettoyageliege.com"
const lastMod = "2026-03-26"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}`, lastModified: lastMod, changeFrequency: "weekly", priority: 1.0 },
    // Core pages
    { url: `${baseUrl}/nettoyage-classique`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/offre-nettoyage-liege`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/entreprise-nettoyage-liege`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    // Service pages
    { url: `${baseUrl}/nettoyage-airbnb-liege`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/nettoyage-bureaux-liege`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/femme-de-menage-liege`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/nettoyage-apres-travaux-liege`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.80 },
    { url: `${baseUrl}/nettoyage-demenagement-liege`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.80 },
    // Location pages
    { url: `${baseUrl}/nettoyage-herstal`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.70 },
    { url: `${baseUrl}/nettoyage-seraing`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.70 },
    { url: `${baseUrl}/nettoyage-ans`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.65 },
    { url: `${baseUrl}/nettoyage-grace-hollogne`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.65 },
    { url: `${baseUrl}/nettoyage-flemalle`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.60 },
  ]
}
