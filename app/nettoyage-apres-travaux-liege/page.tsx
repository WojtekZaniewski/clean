import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/nettoyage-apres-travaux-liege`

export const metadata: Metadata = {
  title: "Nettoyage Après Travaux Liège | Chantier, Rénovation | Lena's Cleaning",
  description:
    "Nettoyage après travaux à Liège. Poussière de plâtre, résidus de peinture, vitres, sols. Remise en état complète. Devis gratuit. ☎ 0492 95 53 48",
  keywords: [
    "nettoyage après travaux liège",
    "nettoyage chantier liège",
    "nettoyage rénovation liège",
    "nettoyage fin de chantier liège",
    "nettoyage post travaux liège",
    "remise en état liège",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nettoyage Après Travaux Liège | Chantier, Rénovation | Lena's Cleaning",
    description:
      "Nettoyage après travaux à Liège. Poussière de plâtre, résidus de peinture, vitres, sols. Remise en état complète. Devis gratuit.",
    url: pageUrl,
    type: "website",
    locale: "fr_BE",
    images: [{ url: `${siteUrl}/10.jpg`, width: 1200, height: 800, alt: "Nettoyage après travaux Liège" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage Après Travaux Liège | Lena's Cleaning",
    description: "Nettoyage après travaux à Liège. Remise en état complète après rénovation ou chantier.",
    images: [`${siteUrl}/10.jpg`],
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
      name: "Nettoyage Après Travaux Liège",
      description: "Service de nettoyage après travaux, rénovation et chantier à Liège. Élimination poussière de plâtre, résidus de peinture, silicone. Remise en état complète.",
      provider: { "@type": "LocalBusiness", name: "Lena's Cleaning Services" },
      areaServed: { "@type": "City", name: "Liège" },
      serviceType: "Nettoyage après travaux et remise en état",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte un nettoyage après travaux à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le tarif dépend de la superficie et de la nature des travaux. En règle générale, le nettoyage après travaux est facturé à partir de 2,50€/m² pour un nettoyage en profondeur. Un devis gratuit et détaillé vous est fourni après description ou visite du chantier.",
          },
        },
        {
          "@type": "Question",
          name: "Quel délai pour intervenir après des travaux à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous pouvons généralement intervenir dans les 48 à 72 heures suivant votre demande. Pour les chantiers plus importants, nous planifions ensemble la date d'intervention selon vos contraintes.",
          },
        },
        {
          "@type": "Question",
          name: "Fournissez-vous le matériel pour le nettoyage après travaux ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous apportons tout le matériel adapté : aspirateurs industriels, produits anti-calcaire, dégraissants, nettoyants vitrages, etc. Vous n'avez rien à prévoir.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Nettoyage Après Travaux Liège", item: pageUrl },
      ],
    },
  ],
}

export default function NettoyageApresTravauxPage() {
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
                <li className="text-foreground font-medium">Nettoyage Après Travaux Liège</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                Nettoyage après travaux à Liège — votre chantier, remis à neuf
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                La rénovation est terminée. Place au nettoyage professionnel — poussière, résidus, traces éliminés.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Le <strong>nettoyage après travaux à Liège</strong> nécessite un matériel et une technique spécifiques.
                La poussière de plâtre, les résidus de peinture, le silicone et les traces de ciment ne s&apos;effacent pas avec un ménage classique.
                Notre équipe est équipée et formée pour remettre votre logement ou vos locaux en état rapidement.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                <a
                  href="tel:+32492955348"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                  aria-label="Appeler pour nettoyage après travaux Liège"
                >
                  Appelez : 0492 95 53 48
                </a>
                <a
                  href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20je%20cherche%20un%20nettoyage%20apr%C3%A8s%20travaux%20%C3%A0%20Li%C3%A8ge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                >
                  WhatsApp
                </a>
              </div>
              <ul className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Matériel professionnel adapté</li>
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Devis gratuit sur mesure</li>
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Intervention sous 48h</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Défis post-chantier */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Les défis du nettoyage post-chantier
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Après des travaux, la saleté n&apos;est pas du tout la même que dans un logement habité. La poussière de plâtre se dépose partout,
                pénètre dans les fissures, s&apos;installe sur les vitres, sous les radiateurs, derrière les meubles.
                Les résidus de peinture, de silicone ou de colle nécessitent des produits spécifiques et une technique adaptée.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Un ménage classique ne suffit pas. Il faut un aspirateur industriel, des produits dégraissants professionnels
                et plusieurs heures de travail rigoureux. C&apos;est notre spécialité.
              </p>
            </div>
          </div>
        </section>

        {/* Processus */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Notre processus de nettoyage après travaux
              </h2>
              <ol className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <li>
                  <strong>1. Aspiration industrielle</strong>
                  <br />
                  Élimination complète de la poussière de plâtre : sols, murs, plafonds, rebords, grilles de ventilation.
                </li>
                <li>
                  <strong>2. Nettoyage des vitres et menuiseries</strong>
                  <br />
                  Résidus de peinture, de silicone et d&apos;autocollants éliminés. Vitres intérieures et cadres de fenêtres impeccables.
                </li>
                <li>
                  <strong>3. Nettoyage des sols</strong>
                  <br />
                  Selon le revêtement (carrelage, parquet, béton ciré), nettoyage adapté et protection si nécessaire.
                </li>
                <li>
                  <strong>4. Cuisine et sanitaires</strong>
                  <br />
                  Dégraissage complet, détartrage, désinfection. Élimination des résidus de colle et de silicone.
                </li>
                <li>
                  <strong>5. Vérification et finitions</strong>
                  <br />
                  Inspection pièce par pièce. Votre logement est prêt à habiter ou à présenter.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Pour qui ? Particuliers, entreprises et promoteurs
              </h2>
              <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-3 text-sm sm:text-base text-muted-foreground">
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-foreground mb-1.5">Particuliers</h3>
                  <p>Rénovation de maison ou d&apos;appartement. Remise en état avant emménagement ou après chantier.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-foreground mb-1.5">Entreprises</h3>
                  <p>Réhabilitation de bureaux, aménagement de locaux commerciaux, rénovation d&apos;espaces professionnels.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-foreground mb-1.5">Promoteurs</h3>
                  <p>Nettoyage fin de chantier avant livraison. Remise en état pour visites d&apos;acheteurs ou locataires.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Questions fréquentes — nettoyage après travaux Liège
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Combien coûte un nettoyage après travaux à Liège ?</h3>
                  <p>À partir de 2,50€/m². Le tarif exact dépend de la superficie et de la nature des travaux. Devis gratuit sur description ou visite.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Quel délai pour intervenir après des travaux ?</h3>
                  <p>Généralement 48 à 72 heures après votre demande. Pour les grands chantiers, nous planifions ensemble.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Fournissez-vous le matériel ?</h3>
                  <p>Oui, aspirateurs industriels, dégraissants professionnels, nettoyants vitrages, etc. Vous n&apos;avez rien à prévoir.</p>
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
                Votre chantier terminé ? On s&apos;occupe du reste.
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Appelez Lena au{" "}
                <a href="tel:+32492955348" className="underline hover:text-foreground">0492 95 53 48</a>.
                Devis gratuit sur mesure. Intervention rapide à Liège et alentours.
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center">
                <a
                  href="tel:+32492955348"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation"
                >
                  Appeler maintenant
                </a>
                <a
                  href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20j%27ai%20besoin%20d%27un%20nettoyage%20apr%C3%A8s%20travaux%20%C3%A0%20Li%C3%A8ge."
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
