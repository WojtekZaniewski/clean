import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

const siteUrl = "https://nettoyageliege.com"
const ogImage = `${siteUrl}/logo.png`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lena's Cleaning Services - Nettoyage à Liège",
  description:
    "Nettoyage à Liège: maison, Airbnb, hôtels, bureaux. Équipe locale, réponse en 2h. Femme de ménage Liège et alentours. Devis gratuit: 0492 95 53 48.",
  keywords: [
    "nettoyage Liège",
    "femme de ménage Liège",
    "nettoyage Airbnb",
    "nettoyage bureau",
    "service ménage Liège",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Lena's Cleaning Services - Nettoyage à Liège",
    description: "Nettoyage à Liège: maison, Airbnb, hôtels, bureaux. Équipe locale, réponse en 2h. Devis gratuit.",
    url: siteUrl,
    siteName: "Lena's Cleaning Services",
    type: "website",
    locale: "fr_BE",
    images: [{ url: ogImage, width: 200, height: 60, alt: "Lena's Cleaning - Nettoyage Liège" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lena's Cleaning Services - Nettoyage à Liège",
    description: "Nettoyage à Liège: maison, Airbnb, hôtels, bureaux. Équipe locale, réponse en 2h.",
    images: [ogImage],
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#2563eb",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Lena's Cleaning Services",
  description:
    "Service de nettoyage à Liège. Maison, Airbnb, bureau, hôtel. Équipe locale, réponse en 2h.",
  url: siteUrl,
  telephone: "+32492955348",
  email: "cleaningserviceslena@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Liège",
    addressRegion: "Liège",
    addressCountry: "BE",
  },
  areaServed: "Liège et alentours",
  priceRange: "€€",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    "name": "Services de nettoyage",
    itemListElement: [
      { "@type": "ListItem", name: "Nettoyage maison" },
      { "@type": "ListItem", name: "Nettoyage Airbnb" },
      { "@type": "ListItem", name: "Nettoyage hôtels" },
      { "@type": "ListItem", name: "Nettoyage bureaux" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr-BE">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {/* Google tag (gtag.js) - wstrzyknięty do head przez Next.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X8ZSHKMDKN"
          strategy="beforeInteractive"
        />
        <Script id="gtag-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X8ZSHKMDKN');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
