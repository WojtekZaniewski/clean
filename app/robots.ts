import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const baseUrl = "https://nettoyageliege.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/"],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/sitemap-images.xml`],
  }
}
