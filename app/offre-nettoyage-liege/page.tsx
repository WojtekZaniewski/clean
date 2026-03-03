import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/offre-nettoyage-liege.html`

export const metadata: Metadata = {
  title: "Offre de Nettoyage Liège | Dès 1,50€/m² | Lena's Cleaning",
  description:
    "Découvrez nos offres de nettoyage à Liège : nettoyage classique dès 1,50€/m², nettoyage en profondeur, abonnements BASIC et PREMIUM. Devis gratuit. ☎ 0492 95 53 48",
  keywords: [
    "offre nettoyage liège",
    "offre de nettoyage liège",
    "service nettoyage liège",
    "service de nettoyage liège",
    "offre entreprise nettoyage liège",
    "société de nettoyage liège",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Offre de Nettoyage Liège | Dès 1,50€/m² | Lena's Cleaning",
    description:
      "Nos offres de nettoyage à Liège : classique, en profondeur, abonnements mensuels. Devis gratuit.",
    url: pageUrl,
    type: "website",
    locale: "fr_BE",
    images: [{ url: `${siteUrl}/3.jpg`, width: 1200, height: 800, alt: "Offre de nettoyage Liège - Lena's Cleaning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Offre de Nettoyage Liège | Lena's Cleaning",
    description:
      "Nos offres de nettoyage à Liège : classique dès 1,50€/m², abonnements mensuels. Devis gratuit.",
    images: [`${siteUrl}/3.jpg`],
  },
}

const jsonLdOffre = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Service de nettoyage à Liège",
      description:
        "Offres de nettoyage professionnel à Liège : nettoyage classique, nettoyage en profondeur, abonnements mensuels BASIC et PREMIUM pour maisons, bureaux et Airbnb.",
      provider: {
        "@type": ["LocalBusiness", "ProfessionalService"],
        name: "Lena's Cleaning Services",
        telephone: "+32492955348",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Liège",
          addressRegion: "Wallonie",
          postalCode: "4000",
          addressCountry: "BE",
        },
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Offres de nettoyage Liège",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Nettoyage classique",
            description: "Entretien régulier ou ponctuel : dépoussiérage, aspiration, lavage des sols, nettoyage cuisine et salle de bain.",
            price: "1.50",
            priceCurrency: "EUR",
            unitText: "par m²",
          },
          {
            "@type": "Offer",
            name: "Nettoyage en profondeur",
            description: "Nettoyage complet et minutieux : intérieur des placards, frigo, four, détartrage, plinthes, cadres de portes.",
            price: "2.50",
            priceCurrency: "EUR",
            unitText: "par m²",
          },
          {
            "@type": "Offer",
            name: "Abonnement mensuel BASIC",
            description: "4 nettoyages classiques par mois (1 par semaine).",
            price: "499",
            priceCurrency: "EUR",
            unitText: "par mois",
          },
          {
            "@type": "Offer",
            name: "Abonnement mensuel PREMIUM",
            description: "4 nettoyages en profondeur par mois (1 par semaine). Inclut BASIC + intérieur des placards, lessive, changement des draps.",
            price: "749",
            priceCurrency: "EUR",
            unitText: "par mois",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quelles offres de nettoyage proposez-vous à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous proposons 4 offres : le nettoyage classique à 1,50€/m², le nettoyage en profondeur à 2,50€/m², l'abonnement mensuel BASIC à 499€ (4 nettoyages classiques par mois) et l'abonnement PREMIUM à 749€ (4 nettoyages en profondeur par mois).",
          },
        },
        {
          "@type": "Question",
          name: "Quel est le prix d'un service de nettoyage à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre service de nettoyage à Liège commence à 1,50€/m² pour un nettoyage classique et 2,50€/m² pour un nettoyage en profondeur. Le minimum est de 3 heures par intervention. Déplacement gratuit dans un rayon de 15 km autour de Liège.",
          },
        },
        {
          "@type": "Question",
          name: "Proposez-vous des abonnements de nettoyage à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous proposons deux abonnements mensuels : BASIC à 499€/mois (4 nettoyages classiques par mois) et PREMIUM à 749€/mois (4 nettoyages en profondeur par mois incluant lessive, changement de draps et parfum d'ambiance).",
          },
        },
        {
          "@type": "Question",
          name: "Est-ce que le devis est gratuit ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, le devis est entièrement gratuit et sans engagement. Contactez-nous par téléphone au 0492 95 53 48 ou via notre formulaire en ligne. Réponse sous 2 heures.",
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
          name: "Offres de nettoyage Liège",
          item: pageUrl,
        },
      ],
    },
  ],
}

export default function OffreNettoyageLiegePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOffre) }}
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
                <li className="text-foreground font-medium">Offres de nettoyage Liège</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                Nos offres de nettoyage à Liège
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                Découvrez nos <strong>offres de nettoyage à Liège</strong> adaptées à chaque besoin : nettoyage ponctuel, entretien régulier ou abonnement mensuel.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                En tant que <strong>service de nettoyage à Liège</strong> de confiance, nous proposons des tarifs transparents et compétitifs. Pas de frais cachés, pas de mauvaises surprises. Le prix convenu est le prix payé.
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

        {/* Tarifs au m² */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-4xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Nos offres de nettoyage au mètre carré
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Notre <strong>service de nettoyage à Liège</strong> propose deux formules au mètre carré, idéales pour les interventions ponctuelles ou le nettoyage de grands espaces.
              </p>

              <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-primary">1,50€</span>
                    <span className="text-sm text-muted-foreground">/ m²</span>
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Nettoyage classique</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Entretien régulier ou ponctuel : dépoussiérage, aspiration, lavage des sols, nettoyage cuisine et salle de bain. Idéal pour un <strong>service de nettoyage</strong> rapide et efficace.
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    <li>&#10003; Dépoussiérage complet</li>
                    <li>&#10003; Aspiration et lavage des sols</li>
                    <li>&#10003; Nettoyage cuisine et salle de bain</li>
                    <li>&#10003; Vitres intérieures</li>
                  </ul>
                </div>

                <div className="bg-card border-2 border-primary/40 rounded-xl p-4 sm:p-5 md:p-6 relative">
                  <div className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Populaire
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-primary">2,50€</span>
                    <span className="text-sm text-muted-foreground">/ m²</span>
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Nettoyage en profondeur</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Nettoyage complet et minutieux. Parfait après un emménagement, des travaux ou un grand nettoyage de saison.
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    <li>&#10003; Tout le nettoyage classique</li>
                    <li>&#10003; Intérieur des placards et frigo</li>
                    <li>&#10003; Four et détartrage</li>
                    <li>&#10003; Plinthes et cadres de portes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Abonnements */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-4xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Nos offres d&apos;abonnement mensuel
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Pour un <strong>service de nettoyage à Liège</strong> régulier, nos abonnements mensuels vous garantissent un intérieur impeccable chaque semaine.
              </p>

              <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-primary">499€</span>
                    <span className="text-sm text-muted-foreground">/ mois</span>
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Abonnement BASIC</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    4 nettoyages classiques par mois (1 par semaine). L&apos;<strong>offre de nettoyage</strong> idéale pour un entretien régulier.
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    <li>&#10003; Dépoussiérage et aspiration</li>
                    <li>&#10003; Vitres intérieures</li>
                    <li>&#10003; Nettoyage cuisine (hors placards et frigo)</li>
                    <li>&#10003; Salle de bain complète</li>
                    <li>&#10003; Lavage des sols</li>
                  </ul>
                </div>

                <div className="bg-card border-2 border-primary/40 rounded-xl p-4 sm:p-5 md:p-6 relative">
                  <div className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Meilleure offre
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-primary">749€</span>
                    <span className="text-sm text-muted-foreground">/ mois</span>
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Abonnement PREMIUM</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    4 nettoyages en profondeur par mois. Notre <strong>offre de nettoyage à Liège</strong> la plus complète.
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    <li>&#10003; Tout le BASIC inclus</li>
                    <li>&#10003; Intérieur des placards et frigo</li>
                    <li>&#10003; Lessive et changement des draps</li>
                    <li>&#10003; Plinthes, cadres de portes et fenêtres</li>
                    <li>&#10003; Vaisselle + parfum d&apos;ambiance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Nos offres par type de service
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Chaque <strong>offre de nettoyage</strong> est adaptée au type d&apos;espace et à vos besoins spécifiques.
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5">Nettoyage de maisons et appartements</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Notre <strong>service de nettoyage</strong> résidentiel couvre l&apos;ensemble de votre habitation : cuisine, salle de bain, chambres, salon. Entretien régulier ou nettoyage en profondeur selon vos besoins.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5">Nettoyage Airbnb et locations courte durée</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Rotation rapide entre les guests, changement de linge, remise en état complète. Un <strong>service de nettoyage à Liège</strong> fiable pour vos 5 étoiles.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5">Nettoyage de bureaux et locaux professionnels</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Open spaces, salles de réunion, sanitaires, espaces communs. Notre <strong>offre de nettoyage</strong> professionnelle s&apos;adapte à vos horaires.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5">Nettoyage après travaux et déménagement</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Poussière de plâtre, résidus de peinture, état des lieux. Un <strong>service de nettoyage</strong> complet pour repartir sur des bases propres.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-4">
                <Link
                  href="/nettoyage-classique.html"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation"
                >
                  Voir le détail de nos prestations
                </Link>
                <Link
                  href="/entreprise-nettoyage-liege.html"
                  className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                >
                  Découvrir notre entreprise
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Conditions de nos offres de nettoyage
              </h2>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li>&#10003; Minimum 3 heures par intervention</li>
                <li>&#10003; Déplacement gratuit dans Liège et 15 km autour</li>
                <li>&#10003; Devis gratuit et sans engagement</li>
                <li>&#10003; Produits de nettoyage écologiques inclus</li>
                <li>&#10003; Assurance complète</li>
              </ul>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Le nettoyage ne comprend pas les caves/garages, greniers utilisés comme stockage ni les espaces extérieurs (toit, terrasse, jardin). Les surfaces très grandes ou configurations particulières peuvent nécessiter une adaptation du forfait, toujours confirmée sur devis.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Questions fréquentes sur nos offres
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-sm sm:text-base mb-1.5">Quelles offres de nettoyage proposez-vous à Liège ?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nous proposons 4 offres : le nettoyage classique à 1,50€/m², le nettoyage en profondeur à 2,50€/m², l&apos;abonnement mensuel BASIC à 499€ et l&apos;abonnement PREMIUM à 749€.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-sm sm:text-base mb-1.5">Quel est le prix d&apos;un service de nettoyage à Liège ?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Notre service de nettoyage commence à 1,50€/m² pour un nettoyage classique. Le minimum est de 3 heures par intervention. Déplacement gratuit dans un rayon de 15 km autour de Liège.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-sm sm:text-base mb-1.5">Proposez-vous des abonnements de nettoyage à Liège ?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Oui, deux abonnements mensuels : BASIC à 499€/mois (4 nettoyages classiques) et PREMIUM à 749€/mois (4 nettoyages en profondeur incluant lessive, changement de draps et parfum d&apos;ambiance).
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-sm sm:text-base mb-1.5">Est-ce que le devis est gratuit ?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Oui, le devis est entièrement gratuit et sans engagement. Contactez-nous au 0492 95 53 48 ou via notre formulaire. Réponse sous 2 heures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16 border-t border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl text-center space-y-3 sm:space-y-4 mx-auto">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Profitez de nos offres de nettoyage à Liège
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Appelez Lena au <a href="tel:+32492955348" className="underline hover:text-foreground">0492 95 53 48</a>. Réponse sous 2 heures. Devis gratuit, sans engagement.
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
