import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/entreprise-nettoyage-liege`

export const metadata: Metadata = {
  title: "Entreprise de Nettoyage Liège | Lena's Cleaning Services",
  description:
    "Entreprise de nettoyage à Liège. Société locale spécialisée dans le nettoyage de maisons, bureaux et Airbnb. Équipe fiable, produits éco, devis gratuit. ☎ 0492 95 53 48",
  keywords: [
    "entreprise de nettoyage liège",
    "société de nettoyage liège",
    "entreprise nettoyage liège",
    "société nettoyage liège",
    "societe de nettoyage liege",
    "entreprise de nettoyage",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Entreprise de Nettoyage Liège | Lena's Cleaning Services",
    description:
      "Entreprise de nettoyage professionnelle à Liège. Service local, équipe stable, produits écologiques. Devis gratuit.",
    url: pageUrl,
    type: "website",
    locale: "fr_BE",
    images: [{ url: `${siteUrl}/3.jpg`, width: 1200, height: 800, alt: "Entreprise de nettoyage Liège - Lena's Cleaning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entreprise de Nettoyage Liège | Lena's Cleaning",
    description:
      "Entreprise de nettoyage professionnelle à Liège. Service local, produits éco, devis gratuit.",
    images: [`${siteUrl}/3.jpg`],
  },
}

const jsonLdEntreprise = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      additionalType: "https://schema.org/CleaningService",
      name: "Lena's Cleaning Services",
      alternateName: "Entreprise de nettoyage Liège",
      description:
        "Entreprise de nettoyage à Liège spécialisée dans le nettoyage de maisons, appartements, bureaux et logements Airbnb. Équipe locale, produits écologiques, devis gratuit.",
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
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Pourquoi choisir Lena's Cleaning comme entreprise de nettoyage à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lena's Cleaning est une entreprise de nettoyage locale à Liège. Vous échangez directement avec Lena, vous connaissez votre équipe, et nous utilisons des produits écologiques. Réponse sous 48 heures et devis gratuit.",
          },
        },
        {
          "@type": "Question",
          name: "Quels services propose votre entreprise de nettoyage à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre entreprise de nettoyage propose le nettoyage de maisons, appartements, bureaux, logements Airbnb, le nettoyage après travaux et le nettoyage de déménagement dans toute la région de Liège.",
          },
        },
        {
          "@type": "Question",
          name: "Votre entreprise de nettoyage est-elle assurée ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre entreprise de nettoyage à Liège est entièrement assurée. En cas de casse ou de dommage accidentel lors d'une intervention, vous êtes couvert.",
          },
        },
        {
          "@type": "Question",
          name: "Dans quelles communes intervient votre entreprise de nettoyage ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre entreprise de nettoyage intervient à Liège Centre, Guillemins, Outremeuse, Herstal, Seraing, Ans, Grâce-Hollogne, Flémalle et dans les communes environnantes.",
          },
        },
        {
          "@type": "Question",
          name: "Comment obtenir un devis de votre entreprise de nettoyage ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Appelez le 0492 95 53 48 ou envoyez un email à cleaningserviceslena@gmail.com. Nous répondons sous 48 heures avec un devis gratuit et sans engagement.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Entreprise de nettoyage Liège",
          item: pageUrl,
        },
      ],
    },
  ],
}

export default function EntrepriseNettoyageLiegePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEntreprise) }}
        />

        {/* Breadcrumbs */}
        <section className="w-full border-b border-border/40 bg-secondary/30">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-2 sm:py-3 text-xs sm:text-sm text-muted-foreground">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                <li>
                  <Link href="/" className="hover:text-foreground underline-offset-2 hover:underline">
                    Accueil
                  </Link>
                </li>
                <li className="opacity-60">/</li>
                <li className="text-foreground font-medium">Entreprise de nettoyage Liège</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                Entreprise de nettoyage à Liège
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                Une <strong>entreprise de nettoyage à Liège</strong> qui met l&apos;humain au centre de ses services.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Lena&apos;s Cleaning Services est une <strong>société de nettoyage à Liège</strong> fondée par Lena, une professionnelle du nettoyage passionnée par son métier. Notre <strong>entreprise de nettoyage</strong> intervient dans toute la région liégeoise pour les particuliers et les professionnels.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="tel:+32492955348"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                >
                  Appelez : 0492 95 53 48
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Notre entreprise de nettoyage à Liège
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Lena&apos;s Cleaning est une <strong>entreprise de nettoyage à Liège</strong> créée avec une idée simple : offrir un service de nettoyage professionnel, humain et fiable. Pas de call center, pas de rotation permanente de personnel, pas de sous-traitance.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Ce qui distingue notre <strong>société de nettoyage à Liège</strong> des grandes enseignes ? Vous échangez directement avec Lena. Vous connaissez votre équipe. Nous construisons une relation de confiance sur le long terme, intervention après intervention.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                En tant qu&apos;<strong>entreprise de nettoyage</strong> locale, nous connaissons les besoins spécifiques des habitants de Liège et de sa région. Que vous habitiez un appartement au Carré, une maison à Ans ou que vous gériez des bureaux aux Guillemins, nous adaptons nos prestations à votre réalité.
              </p>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Les valeurs de notre société de nettoyage
              </h2>
              <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Proximité</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Notre <strong>entreprise de nettoyage</strong> est implantée à Liège. Nous connaissons chaque quartier et chaque commune. Pas de déplacement longue distance, juste une équipe locale qui intervient vite.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Fiabilité</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Ponctualité, régularité, même équipe à chaque passage. Nos clients reviennent parce qu&apos;ils savent exactement ce qu&apos;ils obtiennent à chaque intervention.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Écologie</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Produits de nettoyage écologiques et efficaces. Respectueux de votre santé, de vos animaux et de l&apos;environnement. Pas d&apos;odeurs chimiques agressives.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Transparence</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Devis détaillé et gratuit avant chaque intervention. Pas de frais cachés, pas de mauvaises surprises. Le prix convenu est le prix payé.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos services */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Les services de notre entreprise de nettoyage à Liège
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                En tant qu&apos;<strong>entreprise de nettoyage à Liège</strong>, nous proposons une gamme complète de services adaptés aux particuliers et aux professionnels :
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-muted-foreground">
                <li><strong>Nettoyage de maisons et appartements</strong> : entretien régulier ou ponctuel, nettoyage en profondeur</li>
                <li><strong>Nettoyage de bureaux et locaux professionnels</strong> : open spaces, salles de réunion, sanitaires</li>
                <li><strong>Nettoyage Airbnb et locations courte durée</strong> : rotation rapide entre les guests, changement de linge</li>
                <li><strong>Nettoyage après travaux</strong> : poussière de plâtre, résidus de peinture, remise en état complète</li>
                <li><strong>Nettoyage de déménagement</strong> : état des lieux d&apos;entrée ou de sortie</li>
              </ul>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-4">
                <Link
                  href="/nettoyage-classique"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation"
                >
                  Voir le détail de nos services
                </Link>
                <Link
                  href="/offre-nettoyage-liege"
                  className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                >
                  Voir nos offres et tarifs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Zones */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Zone d&apos;intervention de notre entreprise de nettoyage
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Notre <strong>société de nettoyage</strong> couvre toute la région liégeoise :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Liège centre et quartiers</p>
                  <ul className="list-disc pl-5">
                    <li>Féronstrée et Carré</li>
                    <li>Saint-Lambert et Cathédrale</li>
                    <li>Guillemins</li>
                    <li>Outremeuse</li>
                    <li>Longdoz, Amercoeur</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground">Communes périphériques</p>
                  <ul className="list-disc pl-5">
                    <li>Herstal</li>
                    <li>Seraing</li>
                    <li>Ans</li>
                    <li>Grâce-Hollogne</li>
                    <li>Flémalle</li>
                    <li>Chaudfontaine</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Questions fréquentes sur notre entreprise de nettoyage
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-sm sm:text-base mb-1.5">
                    Pourquoi choisir Lena&apos;s Cleaning comme entreprise de nettoyage à Liège ?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lena&apos;s Cleaning est une entreprise de nettoyage locale à Liège. Vous échangez directement avec Lena, vous connaissez votre équipe, et nous utilisons des produits écologiques. Réponse sous 48 heures et devis gratuit.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-sm sm:text-base mb-1.5">
                    Quels services propose votre entreprise de nettoyage à Liège ?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Notre entreprise de nettoyage propose le nettoyage de maisons, appartements, bureaux, logements Airbnb, le nettoyage après travaux et le nettoyage de déménagement dans toute la région de Liège.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-sm sm:text-base mb-1.5">
                    Votre entreprise de nettoyage est-elle assurée ?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Oui, notre entreprise de nettoyage à Liège est entièrement assurée. En cas de casse ou de dommage accidentel lors d&apos;une intervention, vous êtes couvert.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-sm sm:text-base mb-1.5">
                    Dans quelles communes intervient votre entreprise de nettoyage ?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Notre entreprise de nettoyage intervient à Liège Centre, Guillemins, Outremeuse, Herstal, Seraing, Ans, Grâce-Hollogne, Flémalle et dans les communes environnantes.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-sm sm:text-base mb-1.5">
                    Comment obtenir un devis de votre entreprise de nettoyage ?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Appelez le 0492 95 53 48 ou envoyez un email à cleaningserviceslena@gmail.com. Nous répondons sous 48 heures avec un devis gratuit et sans engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 border-t border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl text-center space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Contactez notre entreprise de nettoyage à Liège
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Appelez Lena au <a href="tel:+32492955348" className="underline hover:text-foreground">0492 95 53 48</a>. Réponse sous 48 heures. Devis gratuit, sans engagement.
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="mailto:cleaningserviceslena@gmail.com"
                  className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                >
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  )
}
