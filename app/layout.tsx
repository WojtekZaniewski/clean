import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  metadataBase: new URL("https://nettoyageliege.com"),
  title: "Lena's Cleaning Services - Nettoyage professionnel à Liège",
  description:
    "Service de nettoyage professionnel à Liège. Maison, Airbnb, bureau, hôtel. Équipe locale, réponse en 2h. Appelez: 0492 95 53 48",
  keywords: [
    "nettoyage Liège",
    "femme de ménage Liège",
    "nettoyage Airbnb",
    "nettoyage bureau",
    "service ménage Liège",
  ],
  alternates: {
    canonical: "https://nettoyageliege.com",
  },
  openGraph: {
    title: "Lena's Cleaning Services - Nettoyage professionnel à Liège",
    description: "Service de nettoyage professionnel à Liège. Réponse en 2h. Équipe locale de confiance.",
    url: "https://nettoyageliege.com",
    type: "website",
    locale: "fr_BE",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#2563eb",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
