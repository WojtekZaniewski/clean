import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/femme-de-menage-liege`

export const metadata: Metadata = {
  title: "Femme de Ménage Liège | Service à Domicile | Lena's Cleaning",
  description:
    "Femme de ménage à Liège pour maison et appartement. Service régulier ou ponctuel. Équipe de confiance, produits éco. Devis gratuit. ☎ 0492 95 53 48",
  keywords: [
    "femme de ménage liège",
    "aide ménagère liège",
    "service ménage liège",
    "ménage à domicile liège",
    "femme de ménage à domicile liège",
    "aide à domicile liège",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Femme de Ménage Liège | Service à Domicile | Lena's Cleaning",
    description:
      "Femme de ménage à Liège pour maison et appartement. Service régulier ou ponctuel. Équipe de confiance, produits éco.",
    url: pageUrl,
    type: "website",
    locale: "fr_BE",
    images: [{ url: `${siteUrl}/5.jpg`, width: 1200, height: 800, alt: "Femme de ménage Liège" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Femme de Ménage Liège | Lena's Cleaning",
    description: "Femme de ménage à Liège pour maison et appartement. Service régulier, équipe de confiance.",
    images: [`${siteUrl}/5.jpg`],
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
      name: "Femme de Ménage Liège",
      description: "Service d'aide ménagère à domicile à Liège pour maisons et appartements. Même personne à chaque passage, produits écologiques, tarifs transparents.",
      provider: { "@type": "LocalBusiness", name: "Lena's Cleaning Services" },
      areaServed: { "@type": "City", name: "Liège" },
      serviceType: "Aide ménagère et ménage à domicile",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Est-ce la même personne à chaque passage pour le ménage à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, c'est un de nos principes fondamentaux. Vous connaissez votre aide ménagère, elle connaît vos préférences, votre organisation, vos habitudes. Pas de rotation permanente, pas de mauvaise surprise.",
          },
        },
        {
          "@type": "Question",
          name: "Puis-je garder les mêmes horaires à chaque passage ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous construisons avec vous un planning fixe selon vos disponibilités. Si vous travaillez et n'êtes pas présent pendant le ménage, nous pouvons convenir d'une procédure d'accès adaptée.",
          },
        },
        {
          "@type": "Question",
          name: "Que faire si je ne suis pas satisfait du ménage ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Signalez-le nous dans les 24h et nous revenons corriger gratuitement. Votre satisfaction est notre priorité. Un retour direct avec Lena est toujours possible.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Femme de Ménage Liège", item: pageUrl },
      ],
    },
  ],
}

export default function FemmeDeMenuagePage() {
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
                <li className="text-foreground font-medium">Femme de Ménage Liège</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                Femme de ménage à Liège — même personne, chaque semaine
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                Un service personnalisé, pas une grande entreprise anonyme. Vous échangez directement avec Lena.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Notre <strong>service de femme de ménage à Liège</strong> repose sur la confiance et la régularité.
                Vous avez toujours la même personne, aux mêmes horaires, avec les mêmes exigences que vous avez partagées.
                C&apos;est exactement comme avoir quelqu&apos;un de confiance chez soi — sans la complexité administrative.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                <a
                  href="tel:+32492955348"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                  aria-label="Appeler pour femme de ménage Liège"
                >
                  Appelez : 0492 95 53 48
                </a>
                <a
                  href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20je%20cherche%20une%20femme%20de%20m%C3%A9nage%20%C3%A0%20Li%C3%A8ge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                >
                  WhatsApp
                </a>
              </div>
              <ul className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Même personne à chaque passage</li>
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Horaires fixes selon vos disponibilités</li>
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Contact direct avec Lena</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service personnalisé */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Un service d&apos;aide ménagère de confiance à Liège
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                La différence entre une grande société de nettoyage et notre service, c&apos;est la relation humaine.
                Avec nous, vous n&apos;avez pas affaire à un call center ou à un planning informatique.
                Vous connaissez votre aide ménagère, vous lui faites confiance, et elle comprend exactement ce que vous attendez.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Notre <strong>aide ménagère à Liège</strong> convient parfaitement aux :
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-muted-foreground">
                <li>Actifs qui manquent de temps pour entretenir leur logement</li>
                <li>Familles avec jeunes enfants</li>
                <li>Personnes âgées souhaitant maintenir un domicile propre</li>
                <li>Couples qui souhaitent externaliser les corvées ménagères</li>
                <li>Personnes en situation de handicap ou de mobilité réduite</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Ce que fait votre aide ménagère à chaque passage
              </h2>
              <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Pièces de vie</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Dépoussiérage meubles et surfaces</li>
                    <li>Aspiration et lavage des sols</li>
                    <li>Nettoyage vitres intérieures</li>
                    <li>Rangement selon vos consignes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Cuisine</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Plans de travail et évier</li>
                    <li>Plaques et four (extérieur)</li>
                    <li>Électroménager (extérieur)</li>
                    <li>Sols</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Salle de bain</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Désinfection WC et lavabo</li>
                    <li>Douche / baignoire détartrée</li>
                    <li>Miroir sans traces</li>
                    <li>Sols</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Chambres</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Changement draps (sur demande)</li>
                    <li>Dépoussiérage et aspiration</li>
                    <li>Rangement selon vos préférences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Ce que disent nos clients à Liège
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  &quot;Je travaille beaucoup et je n&apos;avais plus le temps de m&apos;occuper du ménage. Lena vient chaque semaine et ma maison est
                  toujours impeccable. Un vrai soulagement !&quot; — <strong>Sophie M.</strong>, Liège Centre
                </p>
                <p>
                  &quot;Cela fait 2 ans qu&apos;on a la même personne. Elle connaît notre maison mieux que nous ! Sérieux, ponctuels, et les enfants
                  adorent retrouver la maison propre.&quot; — <strong>Famille K.</strong>, Ans
                </p>
                <p>
                  &quot;Après une période difficile, j&apos;avais du mal à entretenir mon appartement. Lena&apos;s Cleaning a été discret, professionnel et
                  vraiment humain. Merci.&quot; — <strong>Marianne D.</strong>, Guillemins
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Tarifs aide ménagère à Liège
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Le service est facturé au mètre carré du logement, avec un minimum de 3 heures par intervention.
                Les clients réguliers bénéficient d&apos;une priorité de planning et de tarifs préférentiels.
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
                      <td className="px-4 py-2.5 font-medium text-foreground">Ménage classique</td>
                      <td className="px-4 py-2.5">Entretien régulier : dépoussiérage, sols, cuisine, salle de bain</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">1,50&nbsp;€ / m²</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5 font-medium text-foreground">Ménage en profondeur</td>
                      <td className="px-4 py-2.5">Nettoyage complet : intérieur placards, frigo, four, détartrage</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">2,50&nbsp;€ / m²</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5 font-medium text-foreground">Abonnement BASIC</td>
                      <td className="px-4 py-2.5">4 passages classiques par mois (hebdomadaire)</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">499&nbsp;€ / mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                <Link href="/offre-nettoyage-liege" className="underline underline-offset-2 hover:text-foreground">
                  Voir toutes nos offres et abonnements
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Questions fréquentes — femme de ménage Liège
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Est-ce la même personne à chaque passage ?</h3>
                  <p>Oui, c&apos;est notre engagement. Vous avez toujours la même aide ménagère, qui connaît vos habitudes et vos préférences.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Puis-je garder les mêmes horaires ?</h3>
                  <p>Oui, nous établissons un planning fixe avec vous. En cas d&apos;imprévu, nous vous prévenons au plus tôt et trouvons une alternative.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Que faire si je ne suis pas satisfait ?</h3>
                  <p>Signalez-le dans les 24h. Nous revenons corriger gratuitement. Un contact direct avec Lena est toujours possible.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Dois-je être présent pendant le ménage ?</h3>
                  <p>Non, beaucoup de nos clients nous confient les clés ou un code d&apos;accès. Nous travaillons avec discrétion et respect de votre intimité.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 border-t border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Trouvez votre aide ménagère de confiance à Liège
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
                  href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20je%20cherche%20une%20femme%20de%20m%C3%A9nage%20%C3%A0%20Li%C3%A8ge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                >
                  WhatsApp
                </a>
                <Link
                  href="/nettoyage-classique"
                  className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                >
                  Voir le nettoyage classique →
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
