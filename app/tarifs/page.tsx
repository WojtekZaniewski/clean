import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/tarifs`

export const metadata: Metadata = {
  title: "Tarifs Nettoyage Liège | Prix Transparents Dès 1,50€/m² | Lena's Cleaning",
  description:
    "Tarifs nettoyage à Liège transparents et sans surprise. Nettoyage classique dès 1,50€/m², nettoyage en profondeur 2,50€/m², abonnements mensuels. Devis gratuit. ☎ 0492 95 53 48",
  keywords: [
    "tarif nettoyage liège",
    "tarifs nettoyage liège",
    "prix nettoyage liège",
    "prix femme de ménage liège",
    "combien coûte nettoyage liège",
    "devis nettoyage liège",
    "prix nettoyage airbnb liège",
    "prix nettoyage bureaux liège",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Tarifs Nettoyage Liège | Dès 1,50€/m² | Lena's Cleaning",
    description:
      "Tarifs nettoyage à Liège : classique dès 1,50€/m², profondeur 2,50€/m², abonnements mensuels. Devis gratuit.",
    url: pageUrl,
    type: "website",
    locale: "fr_BE",
    images: [{ url: `${siteUrl}/3.webp`, width: 1200, height: 800, alt: "Tarifs nettoyage Liège" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs Nettoyage Liège | Lena's Cleaning",
    description: "Tarifs transparents dès 1,50€/m². Devis gratuit sous 48h.",
    images: [`${siteUrl}/3.webp`],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Tarifs nettoyage Liège",
      url: pageUrl,
      description:
        "Tarifs transparents pour le nettoyage à Liège : classique dès 1,50€/m², profondeur 2,50€/m², abonnements mensuels BASIC et PREMIUM.",
    },
    {
      "@type": "Service",
      name: "Nettoyage Liège",
      provider: { "@type": "LocalBusiness", name: "Lena's Cleaning Services" },
      areaServed: { "@type": "City", name: "Liège" },
      offers: [
        {
          "@type": "Offer",
          name: "Nettoyage classique",
          price: "1.50",
          priceCurrency: "EUR",
          priceSpecification: { "@type": "UnitPriceSpecification", price: "1.50", priceCurrency: "EUR", unitText: "m²" },
          description: "Nettoyage régulier toutes pièces, cuisine, salle de bain, sols",
        },
        {
          "@type": "Offer",
          name: "Nettoyage en profondeur",
          price: "2.50",
          priceCurrency: "EUR",
          priceSpecification: { "@type": "UnitPriceSpecification", price: "2.50", priceCurrency: "EUR", unitText: "m²" },
          description: "Nettoyage profond : intérieur placards, frigo, four, détartrage complet",
        },
        {
          "@type": "Offer",
          name: "Abonnement BASIC mensuel",
          price: "499",
          priceCurrency: "EUR",
          description: "4 nettoyages classiques par mois (1 par semaine)",
        },
        {
          "@type": "Offer",
          name: "Abonnement PREMIUM mensuel",
          price: "749",
          priceCurrency: "EUR",
          description: "4 nettoyages en profondeur par mois. Inclut BASIC + intérieur des placards, lessive, changement des draps, parfum d'ambiance",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte un nettoyage à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un nettoyage classique à Liège coûte 1,50€/m² chez Lena's Cleaning. Un nettoyage en profondeur coûte 2,50€/m². Pour un appartement de 60 m², comptez 90€ en nettoyage classique et 150€ en nettoyage en profondeur. Devis gratuit sous 48h.",
          },
        },
        {
          "@type": "Question",
          name: "Quel est le prix d'une femme de ménage à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le prix d'une femme de ménage à Liège varie selon la surface et la régularité. Chez Lena's Cleaning, nos abonnements mensuels sont à 499€ (BASIC, 4 nettoyages classiques/mois) et 749€ (PREMIUM, 4 nettoyages en profondeur/mois). Pour des prestations ponctuelles, nous facturons à 1,50€/m².",
          },
        },
        {
          "@type": "Question",
          name: "Faites-vous des devis gratuits ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, tous nos devis sont gratuits et sans engagement. Appelez le 0492 95 53 48 ou envoyez-nous un message WhatsApp. Nous répondons sous 48h avec un devis détaillé.",
          },
        },
        {
          "@type": "Question",
          name: "Y a-t-il des frais cachés ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non, aucun frais caché. Le tarif communiqué dans le devis est le tarif final. Produits de nettoyage inclus. Déplacement inclus dans Liège et sa proche banlieue.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Tarifs", item: pageUrl },
      ],
    },
  ],
}

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="w-full border-b border-border/40 bg-secondary/30">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-2 sm:py-3 text-xs sm:text-sm text-muted-foreground">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                <li><Link href="/" className="hover:text-foreground underline-offset-2 hover:underline">Accueil</Link></li>
                <li className="opacity-60">/</li>
                <li className="text-foreground font-medium">Tarifs</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                Tarifs nettoyage à Liège — prix transparents, pas de surprises
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                Vous payez le prix du devis. Rien de plus. Produits inclus. Déplacement inclus dans Liège.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Lena&apos;s Cleaning Services pratique des <strong>tarifs nettoyage à Liège</strong> clairs et calculés
                au m². Pas d&apos;abonnement obligatoire, pas de frais cachés. Vous voulez un devis ? Appelez, on répond en 48h.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
                <a
                  href="tel:+32492955348"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                >
                  Appelez : 0492 95 53 48
                </a>
                <a
                  href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20je%20souhaite%20un%20devis%20pour%20un%20nettoyage%20%C3%A0%20Li%C3%A8ge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Grille tarifaire principale */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Prix au m² — prestations ponctuelles
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Nos tarifs de nettoyage à Liège sont calculés au mètre carré pour une transparence totale.
                Le minimum par intervention est de 3 heures.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border bg-card/40">
                <table className="min-w-full text-left text-xs sm:text-sm text-muted-foreground">
                  <thead className="bg-secondary/60 text-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Formule</th>
                      <th className="px-4 py-3 font-semibold">Ce qui est inclus</th>
                      <th className="px-4 py-3 font-semibold">Tarif</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5 font-medium text-foreground">Nettoyage classique</td>
                      <td className="px-4 py-2.5">Toutes pièces, cuisine, salle de bain, sols, dépoussiérage</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">1,50&nbsp;€ / m²</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5 font-medium text-foreground">Nettoyage en profondeur</td>
                      <td className="px-4 py-2.5">Classique + intérieur placards, frigo, four, détartrage complet</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">2,50&nbsp;€ / m²</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5 font-medium text-foreground">Nettoyage Airbnb</td>
                      <td className="px-4 py-2.5">Rotation entre guests, changement de linge sur demande</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">1,50&nbsp;€ / m²</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5 font-medium text-foreground">Nettoyage après travaux</td>
                      <td className="px-4 py-2.5">Poussière de chantier, enduit, traces de peinture, débris fins</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">Sur devis</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5 font-medium text-foreground">État des lieux / fin de bail</td>
                      <td className="px-4 py-2.5">Nettoyage complet pour sortie de bail, détail à la chambre</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">Sur devis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Exemple concret : un appartement de 60 m² en nettoyage classique = <strong>90&nbsp;€</strong>. En nettoyage en profondeur = <strong>150&nbsp;€</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Abonnements */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Abonnements mensuels — ménage régulier à Liège
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Pour un ménage régulier à domicile ou au bureau, nos abonnements réduisent le tarif au m²
                et garantissent la même personne qui vient chez vous à chaque intervention.
              </p>
              <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card/40 p-5 sm:p-6">
                  <h3 className="font-serif text-lg sm:text-xl mb-2">Abonnement BASIC</h3>
                  <p className="text-2xl font-medium text-foreground mb-3">499&nbsp;€ / mois</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>4 nettoyages classiques par mois (1 par semaine)</li>
                    <li>Toutes pièces, cuisine, salle de bain, sols</li>
                    <li>Même personne à chaque fois</li>
                    <li>Produits inclus</li>
                    <li>Flexibilité de planning</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-card/40 p-5 sm:p-6">
                  <h3 className="font-serif text-lg sm:text-xl mb-2">Abonnement PREMIUM</h3>
                  <p className="text-2xl font-medium text-foreground mb-3">749&nbsp;€ / mois</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>4 nettoyages en profondeur par mois</li>
                    <li>Tout le BASIC inclus</li>
                    <li>Intérieur des placards, lessive, changement des draps</li>
                    <li>Parfum d&apos;ambiance</li>
                    <li>Priorité sur les créneaux</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Vous avez besoin de plus de passages ?{" "}
                <a href="tel:+32492955348" className="underline underline-offset-2 hover:text-foreground">
                  Contactez-nous
                </a>{" "}
                pour un plan sur mesure.
              </p>
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Ce que nos tarifs incluent toujours
              </h2>
              <ul className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground list-disc pl-5">
                <li>Produits de nettoyage professionnels</li>
                <li>Matériel (aspirateur, microfibres, etc.)</li>
                <li>Déplacement dans Liège et proche banlieue</li>
                <li>Assurance responsabilité civile</li>
                <li>Devis gratuit et sans engagement</li>
                <li>Même personne à chaque visite en abonnement</li>
              </ul>
              <h3 className="font-semibold text-foreground pt-2">Ce qui peut être en option</h3>
              <ul className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground list-disc pl-5">
                <li>Lavage du linge de lit (pour Airbnb)</li>
                <li>Repassage</li>
                <li>Nettoyage vitres extérieures</li>
                <li>Déplacement hors zone (sur devis)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ prix */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Questions fréquentes sur nos tarifs
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Combien coûte un nettoyage à Liège ?</h3>
                  <p>1,50€/m² en nettoyage classique, 2,50€/m² en profondeur. Pour 60 m² : 90€ (classique) ou 150€ (profondeur).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Quel est le prix d&apos;une femme de ménage à Liège ?</h3>
                  <p>Abonnement BASIC : 499€/mois (4 nettoyages classiques). PREMIUM : 749€/mois (4 nettoyages en profondeur, inclut lessive et changement des draps). Ponctuel : 1,50€/m².</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Y a-t-il un minimum par intervention ?</h3>
                  <p>Oui, 3 heures de prestation minimum. Cela garantit un travail complet et soigné.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Les produits sont-ils inclus ?</h3>
                  <p>Oui, tous les produits et le matériel sont inclus dans le tarif. Produits éco-responsables sur demande.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Faut-il payer d&apos;avance ?</h3>
                  <p>Non. Vous réglez après la prestation, une fois satisfait. Facture professionnelle fournie.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Puis-je annuler un rendez-vous ?</h3>
                  <p>Oui, jusqu&apos;à 24h avant l&apos;intervention, sans frais. Au-delà, 50% du tarif peut être facturé.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Liens internes */}
        <section className="w-full py-8 sm:py-10 md:py-12">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl">Tarifs par type de prestation</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base">
                <li><Link href="/nettoyage-classique" className="underline underline-offset-2 hover:text-foreground">Nettoyage classique →</Link></li>
                <li><Link href="/nettoyage-airbnb-liege" className="underline underline-offset-2 hover:text-foreground">Nettoyage Airbnb →</Link></li>
                <li><Link href="/nettoyage-bureaux-liege" className="underline underline-offset-2 hover:text-foreground">Nettoyage bureaux →</Link></li>
                <li><Link href="/femme-de-menage-liege" className="underline underline-offset-2 hover:text-foreground">Femme de ménage →</Link></li>
                <li><Link href="/nettoyage-apres-travaux-liege" className="underline underline-offset-2 hover:text-foreground">Nettoyage après travaux →</Link></li>
                <li><Link href="/nettoyage-demenagement-liege" className="underline underline-offset-2 hover:text-foreground">Nettoyage déménagement →</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 border-t border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Demandez votre devis gratuit
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Réponse sous 48h. Sans engagement. Pas de frais cachés.
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center">
                <a
                  href="tel:+32492955348"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation"
                >
                  Appeler : 0492 95 53 48
                </a>
                <a
                  href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20je%20souhaite%20un%20devis%20pour%20un%20nettoyage%20%C3%A0%20Li%C3%A8ge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                >
                  WhatsApp
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
