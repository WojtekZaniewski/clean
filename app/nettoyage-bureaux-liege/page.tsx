import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/nettoyage-bureaux-liege`

export const metadata: Metadata = {
  title: "Nettoyage Bureaux Liège | Locaux Professionnels | Lena's Cleaning",
  description:
    "Nettoyage de bureaux à Liège. Open spaces, sanitaires, salles de réunion. Avant ou après les heures de travail. Devis gratuit. ☎ 0492 95 53 48",
  keywords: [
    "nettoyage bureaux liège",
    "nettoyage locaux professionnels liège",
    "entretien bureaux liège",
    "nettoyage commercial liège",
    "nettoyage entreprise liège",
    "société de nettoyage bureaux liège",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nettoyage Bureaux Liège | Locaux Professionnels | Lena's Cleaning",
    description:
      "Nettoyage de bureaux à Liège. Open spaces, sanitaires, salles de réunion. Avant ou après les heures de travail. Devis gratuit.",
    url: pageUrl,
    type: "website",
    locale: "fr_BE",
    images: [{ url: `${siteUrl}/4.jpg`, width: 1200, height: 800, alt: "Nettoyage bureaux Liège" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage Bureaux Liège | Lena's Cleaning",
    description: "Nettoyage de bureaux à Liège. Open spaces, sanitaires, salles de réunion. Devis gratuit.",
    images: [`${siteUrl}/4.jpg`],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      additionalType: "CleaningService",
      name: "Lena's Cleaning Services",
      url: siteUrl,
      telephone: "+32492955348",
      email: "cleaningserviceslena@gmail.com",
      address: { "@type": "PostalAddress", addressLocality: "Liège", addressCountry: "BE" },
      areaServed: [
        { "@type": "City", name: "Liège" },
        { "@type": "City", name: "Herstal" },
        { "@type": "City", name: "Seraing" },
        { "@type": "City", name: "Ans" },
        { "@type": "City", name: "Grâce-Hollogne" },
        { "@type": "City", name: "Flémalle" },
        { "@type": "City", name: "Outremeuse" },
        { "@type": "City", name: "Guillemins" },
        { "@type": "City", name: "Chaudfontaine" },
        { "@type": "City", name: "Beyne-Heusay" },
      ],
      priceRange: "€€",
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "20:00" },
      ],
    },
    {
      "@type": "Service",
      name: "Nettoyage Bureaux Liège",
      description: "Service de nettoyage professionnel pour bureaux, open spaces, locaux commerciaux et industriels à Liège. Intervention avant ou après les heures de travail.",
      provider: { "@type": "LocalBusiness", name: "Lena's Cleaning Services" },
      areaServed: { "@type": "City", name: "Liège" },
      serviceType: "Nettoyage bureaux et locaux professionnels",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quand intervenez-vous dans les bureaux à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous intervenons avant l'ouverture (dès 7h), pendant les heures de bureau si besoin, ou en soirée après la fermeture. Nous nous adaptons entièrement à votre planning pour ne jamais perturber votre activité.",
          },
        },
        {
          "@type": "Question",
          name: "Avez-vous les assurances nécessaires pour nettoyer des bureaux professionnels ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, Lena's Cleaning Services est entièrement assurée pour les interventions en milieu professionnel. En cas de dommage accidentel sur votre mobilier ou équipement, vous êtes couvert.",
          },
        },
        {
          "@type": "Question",
          name: "Proposez-vous un contrat d'entretien régulier pour les bureaux à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous proposons des contrats d'entretien hebdomadaires, bi-hebdomadaires ou mensuels. Les abonnements offrent un tarif préférentiel et toujours la même équipe pour votre bureau.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Nettoyage Bureaux Liège", item: pageUrl },
      ],
    },
  ],
}

export default function NettoyageBureauxPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumbs */}
        <section className="w-full border-b border-border/40 bg-secondary/30">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-2 sm:py-3 text-xs sm:text-sm text-muted-foreground">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                <li><Link href="/" className="hover:text-foreground underline-offset-2 hover:underline">Accueil</Link></li>
                <li className="opacity-60">/</li>
                <li className="text-foreground font-medium">Nettoyage Bureaux Liège</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                Nettoyage de bureaux à Liège — locaux propres, équipe concentrée
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                Un bureau propre, c&apos;est une équipe plus productive et une image professionnelle irréprochable.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Lena&apos;s Cleaning Services assure le <strong>nettoyage de bureaux à Liège</strong> pour PME, indépendants, cabinets médicaux et grandes entreprises.
                Nous intervenons avant ou après vos heures de travail — zéro perturbation de votre activité.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                <a
                  href="tel:+32492955348"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                  aria-label="Appeler pour nettoyage bureaux Liège"
                >
                  Appelez : 0492 95 53 48
                </a>
                <a
                  href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20je%20souhaite%20un%20devis%20pour%20le%20nettoyage%20de%20mes%20bureaux%20%C3%A0%20Li%C3%A8ge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                >
                  WhatsApp
                </a>
              </div>
              <ul className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Intervention avant/après les heures de bureau</li>
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Contrat d&apos;entretien disponible</li>
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Réponse en 48h</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Pourquoi un bureau propre change tout
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                La propreté de votre espace de travail influence directement la productivité de vos collaborateurs, l&apos;image que vous renvoyez à vos clients
                et le bien-être général de votre équipe. Des études montrent qu&apos;un environnement de travail propre réduit les arrêts maladie et augmente
                la concentration.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Notre <strong>service de nettoyage de bureaux à Liège</strong> s&apos;adapte à tous les secteurs :
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-muted-foreground">
                <li>PME et start-ups</li>
                <li>Cabinets médicaux, dentaires et paramédicaux</li>
                <li>Cabinets d&apos;avocats et études notariales</li>
                <li>Agences immobilières et financières</li>
                <li>Commerces et boutiques</li>
                <li>Entrepôts et locaux industriels légers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ce qu'on nettoie */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Ce que nous nettoyons dans vos bureaux
              </h2>
              <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Open spaces et bureaux individuels</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Dépoussiérage des surfaces et écrans</li>
                    <li>Aspiration et lavage des sols</li>
                    <li>Nettoyage des cloisons et mobilier</li>
                    <li>Vidage et nettoyage des corbeilles</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Sanitaires</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Désinfection complète des WC</li>
                    <li>Nettoyage des lavabos et robinetterie</li>
                    <li>Réassort consommables (option)</li>
                    <li>Miroirs sans traces</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Salles de réunion</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Tables et chaises</li>
                    <li>Tableau blanc et équipements</li>
                    <li>Sols et vitres intérieures</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Cuisine / espace pause</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Plans de travail et évier</li>
                    <li>Micro-ondes, frigo (extérieur)</li>
                    <li>Machine à café</li>
                    <li>Sols et surfaces</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Tarifs nettoyage bureaux à Liège
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border bg-card/40">
                <table className="min-w-full text-left text-xs sm:text-sm text-muted-foreground">
                  <thead className="bg-secondary/60 text-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Formule</th>
                      <th className="px-4 py-3 font-semibold">Détail</th>
                      <th className="px-4 py-3 font-semibold">Tarif</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5 font-medium text-foreground">Nettoyage bureaux classique</td>
                      <td className="px-4 py-2.5">Entretien régulier : sols, surfaces, sanitaires, cuisine</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">1,50&nbsp;€ / m²</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5 font-medium text-foreground">Abonnement mensuel BASIC</td>
                      <td className="px-4 py-2.5">4 nettoyages classiques par mois</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">499&nbsp;€ / mois</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5 font-medium text-foreground">Abonnement mensuel PREMIUM</td>
                      <td className="px-4 py-2.5">4 nettoyages en profondeur par mois</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">749&nbsp;€ / mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Devis gratuit selon la superficie et la fréquence souhaitée.{" "}
                <Link href="/offre-nettoyage-liege" className="underline underline-offset-2 hover:text-foreground">
                  Voir toutes nos offres
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Questions fréquentes — nettoyage bureaux Liège
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Quand intervenez-vous dans les bureaux ?</h3>
                  <p>Dès 7h le matin, en journée ou en soirée. Nous nous adaptons à vos horaires pour ne pas perturber votre activité.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Avez-vous les assurances nécessaires ?</h3>
                  <p>Oui, notre société est entièrement assurée pour les interventions en milieu professionnel. En cas de dommage accidentel, vous êtes couvert.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Proposez-vous un contrat d&apos;entretien régulier ?</h3>
                  <p>Oui, nous proposons des contrats hebdomadaires, bi-hebdomadaires ou mensuels avec tarif préférentiel et même équipe à chaque passage.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Fournissez-vous le matériel et les produits ?</h3>
                  <p>Oui, nous apportons tout le matériel et les produits de nettoyage. Vous n&apos;avez rien à prévoir. Nous utilisons des produits écologiques efficaces.</p>
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
                Un devis pour le nettoyage de vos bureaux à Liège ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Appelez Lena au{" "}
                <a href="tel:+32492955348" className="underline hover:text-foreground">0492 95 53 48</a>.
                Réponse sous 48h. Devis gratuit, sans engagement.
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center">
                <a
                  href="tel:+32492955348"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation"
                >
                  Appeler maintenant
                </a>
                <a
                  href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20je%20souhaite%20un%20devis%20pour%20le%20nettoyage%20de%20mes%20bureaux."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                >
                  WhatsApp
                </a>
                <Link
                  href="/offre-nettoyage-liege"
                  className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                >
                  Voir les offres d&apos;abonnement →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  )
}
