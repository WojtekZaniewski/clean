import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/nettoyage-airbnb-liege`

export const metadata: Metadata = {
  title: "Nettoyage Airbnb Liège | Entre Chaque Guest | Lena's Cleaning",
  description:
    "Nettoyage Airbnb à Liège entre chaque réservation. Rotation rapide, changement de linge, photos de contrôle. Réponse en 48h. Devis gratuit. ☎ 0492 95 53 48",
  keywords: [
    "nettoyage airbnb liège",
    "ménage airbnb liège",
    "nettoyage location courte durée liège",
    "entretien airbnb liège",
    "nettoyage entre guests liège",
    "service nettoyage airbnb liège",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nettoyage Airbnb Liège | Entre Chaque Guest | Lena's Cleaning",
    description:
      "Nettoyage Airbnb à Liège entre chaque réservation. Rotation rapide, changement de linge, photos de contrôle. Devis gratuit.",
    url: pageUrl,
    type: "website",
    locale: "fr_BE",
    images: [{ url: `${siteUrl}/7.jpg`, width: 1200, height: 800, alt: "Nettoyage Airbnb Liège" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage Airbnb Liège | Lena's Cleaning",
    description: "Nettoyage Airbnb à Liège entre chaque réservation. Rotation rapide, changement de linge. Devis gratuit.",
    images: [`${siteUrl}/7.jpg`],
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
      name: "Nettoyage Airbnb Liège",
      description: "Service de nettoyage pour logements Airbnb et locations courte durée à Liège. Rotation rapide entre guests, changement de linge, photos de contrôle qualité.",
      provider: { "@type": "LocalBusiness", name: "Lena's Cleaning Services" },
      areaServed: { "@type": "City", name: "Liège" },
      serviceType: "Nettoyage Airbnb et location courte durée",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien de temps pour nettoyer un Airbnb à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Selon la taille du logement, un nettoyage Airbnb prend entre 1h30 et 3h. Pour un studio, comptez environ 1h30. Pour un appartement 2-3 chambres, 2h30 à 3h. Nous nous adaptons à votre fenêtre de temps entre check-out et check-in.",
          },
        },
        {
          "@type": "Question",
          name: "Faites-vous le changement de linge entre les réservations Airbnb ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous pouvons gérer le changement complet du linge de lit et de bain entre chaque réservation. Nous retirons le linge sale, l'emportons pour lavage (sur demande) et installons le linge propre prêt pour vos prochains guests.",
          },
        },
        {
          "@type": "Question",
          name: "Pouvez-vous gérer le nettoyage de plusieurs logements Airbnb à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous travaillons avec plusieurs propriétaires multi-logements à Liège. Nous coordonnons les interventions selon vos calendriers de réservation Airbnb pour garantir que chaque logement est prêt à temps.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Nettoyage Airbnb Liège", item: pageUrl },
      ],
    },
  ],
}

export default function NettoyageAirbnbPage() {
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
                <li className="text-foreground font-medium">Nettoyage Airbnb Liège</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                Nettoyage Airbnb à Liège — prêt pour votre prochain guest
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                Vos 5 étoiles dépendent de la propreté. On s&apos;en occupe — à l&apos;heure, à chaque fois.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Lena&apos;s Cleaning Services assure le <strong>nettoyage Airbnb à Liège</strong> entre chaque réservation.
                Rotation rapide, linge changé, logement prêt. Vous gérez les réservations, on gère la propreté.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                <a
                  href="tel:+32492955348"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                  aria-label="Appeler pour nettoyage Airbnb Liège"
                >
                  Appelez : 0492 95 53 48
                </a>
                <a
                  href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20je%20souhaite%20un%20devis%20pour%20le%20nettoyage%20de%20mon%20Airbnb%20%C3%A0%20Li%C3%A8ge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                  aria-label="WhatsApp pour nettoyage Airbnb Liège"
                >
                  WhatsApp
                </a>
              </div>
              <ul className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Rotation rapide entre guests</li>
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Changement de linge inclus sur demande</li>
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Réponse en 48h</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pourquoi Airbnb est différent */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Pourquoi le nettoyage Airbnb est différent du ménage classique
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Un logement Airbnb subit une rotation intensive. Chaque nouveau guest juge la propreté en quelques secondes et laisse un avis public.
                Un seul commentaire négatif sur l&apos;hygiène peut faire chuter votre note et vos réservations.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                La contrainte principale : la fenêtre de temps entre le check-out et le check-in. Souvent quelques heures, parfois moins.
                Il faut être rapide, rigoureux, et ne rien oublier. C&apos;est exactement pour ça qu&apos;on existe.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-muted-foreground">
                <li>Propreté visible et senti frais à l&apos;arrivée du guest</li>
                <li>Respect des contraintes horaires de check-in et check-out</li>
                <li>Gestion du linge de lit et de bain à chaque rotation</li>
                <li>Réassort des consommables (papier toilette, savon, etc.) sur demande</li>
                <li>Photos de contrôle qualité avant le check-in sur demande</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Notre checklist nettoyage Airbnb à chaque rotation
              </h2>
              <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Salon et chambres</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Dépoussiérage complet</li>
                    <li>Aspiration et lavage des sols</li>
                    <li>Changement du linge de lit</li>
                    <li>Nettoyage des surfaces et miroirs</li>
                    <li>Vidage des corbeilles</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Cuisine</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Nettoyage des plans de travail</li>
                    <li>Four, plaques, micro-ondes</li>
                    <li>Frigo (extérieur et vérification)</li>
                    <li>Évier et robinetterie</li>
                    <li>Vaisselle sale (option)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Salle de bain</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Désinfection des sanitaires</li>
                    <li>Détartrage robinets et douche</li>
                    <li>Remplacement des serviettes</li>
                    <li>Réassort savon et papier (option)</li>
                    <li>Miroir sans traces</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Finitions</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Vérification générale pièce par pièce</li>
                    <li>Photos de contrôle (option)</li>
                    <li>Rapport si objet oublié par le guest</li>
                    <li>Aération du logement</li>
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
                Tarifs nettoyage Airbnb à Liège
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Le nettoyage Airbnb est facturé au mètre carré du logement, avec un minimum de 3 heures par intervention.
                Pour les propriétaires multi-logements ou les contrats réguliers, nous proposons des tarifs préférentiels.
              </p>
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
                      <td className="px-4 py-2.5 font-medium text-foreground">Nettoyage Airbnb classique</td>
                      <td className="px-4 py-2.5">Nettoyage complet entre chaque guest : toutes pièces, cuisine, salle de bain, sols</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">1,50&nbsp;€ / m²</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5 font-medium text-foreground">Nettoyage Airbnb en profondeur</td>
                      <td className="px-4 py-2.5">Nettoyage profond : intérieur placards, frigo, oven, détartrage complet</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">2,50&nbsp;€ / m²</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Devis gratuit et personnalisé.{" "}
                <Link href="/offre-nettoyage-liege" className="underline underline-offset-2 hover:text-foreground">
                  Voir toutes nos offres de nettoyage à Liège
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Zones */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Zones actives pour le nettoyage Airbnb à Liège
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Nous intervenons dans tous les quartiers de Liège où les locations courte durée sont actives :
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-sm sm:text-base text-muted-foreground list-disc pl-5">
                <li>Outremeuse</li>
                <li>Guillemins</li>
                <li>Liège Centre</li>
                <li>Féronstrée et Carré</li>
                <li>Saint-Lambert</li>
                <li>Longdoz</li>
                <li>Herstal</li>
                <li>Seraing</li>
                <li>Ans</li>
              </ul>
              <p className="text-sm sm:text-base text-muted-foreground">
                Votre Airbnb est ailleurs dans la région liégeoise ?{" "}
                <a href="tel:+32492955348" className="underline underline-offset-2 hover:text-foreground">
                  Contactez-nous
                </a>{" "}
                pour vérifier la couverture.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Questions fréquentes — nettoyage Airbnb Liège
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Combien de temps pour nettoyer un Airbnb à Liège ?</h3>
                  <p>Selon la taille, entre 1h30 (studio) et 3h (3 chambres). Nous nous adaptons à votre fenêtre entre check-out et check-in.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Faites-vous le changement de linge entre les réservations ?</h3>
                  <p>Oui, nous gérons le retrait du linge sale, le lavage (sur demande) et la remise en place du linge propre avant l&apos;arrivée du prochain guest.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Pouvez-vous gérer plusieurs logements Airbnb à Liège ?</h3>
                  <p>Oui, nous coordonnons les interventions selon vos calendriers. Plusieurs propriétaires multi-logements nous font déjà confiance à Liège.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Intervenez-vous le week-end pour les rotations Airbnb ?</h3>
                  <p>Oui, nous travaillons du lundi au dimanche (10h-20h le dimanche). Les week-ends sont souvent les jours les plus chargés pour les Airbnb — nous sommes disponibles.</p>
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
                Prêt à externaliser le nettoyage de votre Airbnb à Liège ?
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
                  href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20je%20souhaite%20un%20devis%20pour%20mon%20Airbnb%20%C3%A0%20Li%C3%A8ge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                >
                  WhatsApp
                </a>
                <Link
                  href="/nettoyage-demenagement-liege"
                  className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                >
                  Nettoyage déménagement →
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
