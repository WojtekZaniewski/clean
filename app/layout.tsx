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

// Preload LCP image (hero carousel first image)
const lcpImage = "/3.jpg"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Société de Nettoyage Liège | Lena's Cleaning",
  description:
    "Société de nettoyage à Liège. Maison, Airbnb, bureau. Équipe locale, réponse 2h, devis gratuit. ☎️ 0492 95 53 48",
  keywords: [
    "société de nettoyage liège",
    "entreprise de nettoyage liège",
    "nettoyage maison liège",
    "nettoyage airbnb liège",
    "service nettoyage liège",
    "nettoyage bureau liège",
  ],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Société de Nettoyage Liège | Lena's Cleaning Services",
    description:
      "Service de nettoyage professionnel à Liège. Maison, Airbnb, bureau. Équipe locale, devis gratuit.",
    url: siteUrl,
    siteName: "Lena's Cleaning Services",
    type: "website",
    locale: "fr_BE",
    images: [{ url: ogImage, width: 200, height: 60, alt: "Société de nettoyage Liège" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Société de Nettoyage Liège | Lena's Cleaning",
    description:
      "Service de nettoyage professionnel à Liège. Maison, Airbnb, bureau. Équipe locale, devis gratuit.",
    images: [ogImage],
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#2563eb",
}

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  additionalType: "https://schema.org/CleaningService",
  name: "Société de nettoyage Liège",
  alternateName: "Lena's Cleaning Services",
  description:
    "Société de nettoyage Liège. Maison, Airbnb, bureau, hôtel. Équipe locale, réponse en 2h.",
  image: ogImage,
  url: siteUrl,
  telephone: "+32492955348",
  email: "cleaningserviceslena@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Liège",
    addressRegion: "Wallonie",
    postalCode: "4000",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "50.6326",
    longitude: "5.5797",
  },
  areaServed: [
    { "@type": "City", name: "Liège" },
    { "@type": "City", name: "Herstal" },
    { "@type": "City", name: "Seraing" },
    { "@type": "City", name: "Ans" },
    { "@type": "City", name: "Grâce-Hollogne" },
    { "@type": "City", name: "Flémalle" },
    { "@type": "City", name: "Outremeuse" },
    { "@type": "City", name: "Guillemins" },
  ],
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/lenascleaning",
    "https://www.instagram.com/lenascleaning_liege",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "12",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de nettoyage",
    itemListElement: [
      { "@type": "ListItem", name: "Nettoyage maison" },
      { "@type": "ListItem", name: "Nettoyage Airbnb" },
      { "@type": "ListItem", name: "Nettoyage hôtels" },
      { "@type": "ListItem", name: "Nettoyage bureaux" },
    ],
  },
}

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nettoyage classique Liège",
  description: "Service de nettoyage pour maisons, appartements et bureaux à Liège.",
  provider: { "@type": "LocalBusiness", name: "Société de nettoyage Liège" },
  areaServed: { "@type": "City", name: "Liège" },
  serviceType: "Nettoyage résidentiel et commercial",
  url: `${siteUrl}/nettoyage-classique.html`,
}

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Société de nettoyage Liège", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/#services` },
    { "@type": "ListItem", position: 3, name: "Contact", item: `${siteUrl}/#contact` },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr-BE">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="content-language" content="fr-BE" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" as="image" href={lcpImage} />
        <link rel="alternate" href={siteUrl} hrefLang="fr-BE" />
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
          document.addEventListener('click', function(e) {
            var a = e.target && e.target.closest ? e.target.closest('a') : null;
            if (!a || !a.href) return;
            if (a.href.indexOf('tel:') === 0) {
              gtag('event', 'phone_click', { event_category: 'engagement', event_label: a.href.replace('tel:', '') });
            } else if (a.href.indexOf('mailto:') === 0) {
              gtag('event', 'email_click', { event_category: 'engagement', event_label: 'contact' });
            }
          });
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
