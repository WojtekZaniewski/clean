import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/nettoyage-demenagement-liege`

export const metadata: Metadata = {
  title: "Nettoyage Déménagement Liège | État des Lieux | Lena's Cleaning",
  description:
    "Nettoyage de déménagement à Liège. Avant état des lieux de sortie ou d'entrée. Résultat garanti. Devis gratuit. ☎ 0492 95 53 48",
  keywords: [
    "nettoyage déménagement liège",
    "nettoyage état des lieux liège",
    "nettoyage fin de bail liège",
    "ménage déménagement liège",
    "nettoyage avant état des lieux liège",
    "remise en état appartement liège",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nettoyage Déménagement Liège | État des Lieux | Lena's Cleaning",
    description:
      "Nettoyage de déménagement à Liège. Avant état des lieux de sortie ou d'entrée. Résultat garanti. Devis gratuit.",
    url: pageUrl,
    type: "website",
    locale: "fr_BE",
    images: [{ url: `${siteUrl}/1.jpg`, width: 1200, height: 800, alt: "Nettoyage déménagement Liège" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage Déménagement Liège | Lena's Cleaning",
    description: "Nettoyage de déménagement à Liège. État des lieux impeccable. Résultat garanti.",
    images: [`${siteUrl}/1.jpg`],
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
      name: "Nettoyage Déménagement Liège",
      description: "Service de nettoyage déménagement à Liège pour état des lieux de sortie et d'entrée. Nettoyage complet appartements et maisons. Résultat garanti.",
      provider: { "@type": "LocalBusiness", name: "Lena's Cleaning Services" },
      areaServed: { "@type": "City", name: "Liège" },
      serviceType: "Nettoyage déménagement et état des lieux",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Pouvez-vous intervenir le jour même du déménagement à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Selon notre planning, nous pouvons parfois intervenir le jour même. Contactez-nous le plus tôt possible pour garantir la disponibilité. En général, nous intervenons dans les 24 à 48h suivant votre demande.",
          },
        },
        {
          "@type": "Question",
          name: "Le nettoyage est-il garanti pour l'état des lieux ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, si votre propriétaire ou agence constate un point non satisfaisant directement lié à notre nettoyage, nous revenons corriger sans frais supplémentaires.",
          },
        },
        {
          "@type": "Question",
          name: "Travaillez-vous le week-end pour les nettoyages de déménagement ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous travaillons du lundi au dimanche. Les déménagements ont souvent lieu le week-end et nous adaptons nos disponibilités en conséquence.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Nettoyage Déménagement Liège", item: pageUrl },
      ],
    },
  ],
}

export default function NettoyageDemenagementPage() {
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
                <li className="text-foreground font-medium">Nettoyage Déménagement Liège</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                Nettoyage déménagement à Liège — état des lieux impeccable
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                Récupérez votre caution. Entrez dans un logement propre. On s&apos;occupe du nettoyage.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Le <strong>nettoyage de déménagement à Liège</strong> est notre spécialité. Que vous partiez ou que vous arriviez,
                nous assurons un nettoyage complet et rigoureux pour que l&apos;état des lieux se passe sans accroc.
                Pas de retenue sur caution pour cause de propreté insuffisante.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                <a
                  href="tel:+32492955348"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                  aria-label="Appeler pour nettoyage déménagement Liège"
                >
                  Appelez : 0492 95 53 48
                </a>
                <a
                  href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20j%27ai%20besoin%20d%27un%20nettoyage%20de%20d%C3%A9m%C3%A9nagement%20%C3%A0%20Li%C3%A8ge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                >
                  WhatsApp
                </a>
              </div>
              <ul className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Résultat garanti pour l&apos;état des lieux</li>
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Disponible week-end</li>
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Intervention sous 48h</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enjeux */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Les enjeux d&apos;un état des lieux réussi
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                L&apos;état des lieux de sortie est souvent source de tension entre locataires et propriétaires.
                La moindre imperfection — une cuisine graisseuse, une salle de bain calcaire, des traces sur les murs — peut justifier
                une retenue sur caution. Dans un contexte où le loyer moyen liégeois représente plusieurs mois de budget,
                récupérer intégralement sa caution est essentiel.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Notre service de <strong>nettoyage avant état des lieux à Liège</strong> vous donne toutes les chances de repartir
                avec votre caution complète — sans stress, sans dispute, sans mauvaise surprise.
              </p>
            </div>
          </div>
        </section>

        {/* Sortie vs Entrée */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Nettoyage de sortie ou nettoyage d&apos;entrée : deux situations différentes
              </h2>
              <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground">
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-foreground mb-1.5">Nettoyage de sortie</h3>
                  <p className="mb-2">Vous quittez votre logement et devez rendre les clés. Objectif : satisfaire le propriétaire ou l&apos;agence lors de l&apos;état des lieux.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Nettoyage complet du logement vide</li>
                    <li>Cuisine et salle de bain en profondeur</li>
                    <li>Placards et tiroirs intérieurs</li>
                    <li>Vitres intérieures et extérieures (RDC)</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-semibold text-foreground mb-1.5">Nettoyage d&apos;entrée</h3>
                  <p className="mb-2">Vous emménagez et voulez un logement vraiment propre avant de vous installer, même si l&apos;état des lieux entrant le dit &quot;propre&quot;.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Désinfection complète</li>
                    <li>Nettoyage intérieur des placards</li>
                    <li>Cuisine et salle de bain</li>
                    <li>Sols et vitres</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Notre checklist nettoyage déménagement
              </h2>
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground">
                {[
                  { room: "Cuisine", items: ["Intérieur et extérieur des placards", "Réfrigérateur (intérieur et extérieur)", "Four, plaques, micro-ondes", "Hotte et filtre", "Évier et robinetterie", "Plan de travail, carrelage"] },
                  { room: "Salle de bain / WC", items: ["Douche / baignoire détartrée", "WC désinfecté", "Lavabo et robinetterie", "Miroir sans traces", "Carrelage et joints", "Sols"] },
                  { room: "Pièces de vie / Chambres", items: ["Intérieur des placards et armoires", "Dépoussiérage complet", "Aspiration et lavage des sols", "Vitres intérieures", "Plinthes et cadres de portes"] },
                  { room: "Finitions", items: ["Traces sur murs (légères)", "Interrupteurs et prises", "Radiateurs", "Cave / débarras (option)", "Vérification générale"] },
                ].map((section) => (
                  <div key={section.room}>
                    <h3 className="font-semibold text-foreground mb-1.5">{section.room}</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Questions fréquentes — nettoyage déménagement Liège
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Pouvez-vous intervenir le jour même du déménagement ?</h3>
                  <p>Selon les disponibilités, oui. Contactez-nous dès que possible. En général, intervention possible sous 24 à 48h.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Le nettoyage est-il garanti pour l&apos;état des lieux ?</h3>
                  <p>Oui. Si un point directement lié à notre nettoyage est signalé lors de l&apos;état des lieux, nous revenons corriger sans frais supplémentaires.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Travaillez-vous le week-end ?</h3>
                  <p>Oui, nous travaillons du lundi au dimanche. Les déménagements ont souvent lieu le week-end — nous sommes disponibles.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">Quel tarif pour un nettoyage de déménagement à Liège ?</h3>
                  <p>Nettoyage classique à 1,50€/m² et nettoyage en profondeur à 2,50€/m². Devis gratuit selon la surface et l&apos;état du logement.</p>
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
                Préparez votre état des lieux sereinement
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
                  href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20j%27ai%20besoin%20d%27un%20nettoyage%20avant%20%C3%A9tat%20des%20lieux%20%C3%A0%20Li%C3%A8ge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                >
                  WhatsApp
                </a>
                <Link
                  href="/nettoyage-airbnb-liege"
                  className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                >
                  Nettoyage Airbnb →
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
