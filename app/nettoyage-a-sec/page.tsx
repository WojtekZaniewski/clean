import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/nettoyage-a-sec.html`

export const metadata: Metadata = {
  title: "Nettoyage à Sec Liège | Lena's Cleaning Services | Tarifs sur devis",
  description:
    "Service de nettoyage à sec à Liège. Vêtements délicats, costumes, robes, rideaux. Prise et dépôt à domicile. Réponse en 2h au 0492 95 53 48.",
  keywords: [
    "nettoyage à sec liège",
    "pressing liège",
    "teinturerie liège",
    "nettoyage costume liège",
    "nettoyage robe liège",
    "blanchisserie liège",
  ],
  alternates: {
    canonical: pageUrl,
  },
}

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nettoyage à Sec Liège",
  description:
    "Service professionnel de nettoyage à sec pour vêtements délicats, costumes, robes et rideaux à Liège.",
  provider: {
    "@type": "LocalBusiness",
    name: "Lena's Cleaning Services",
    telephone: "+32492955348",
    email: "cleaningserviceslena@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Liège",
      addressCountry: "BE",
    },
    priceRange: "€€",
  },
  areaServed: {
    "@type": "City",
    name: "Liège",
  },
  serviceType: "Nettoyage à sec",
  url: pageUrl,
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte le nettoyage à sec à Liège ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Les tarifs de nettoyage à sec chez Lena's Cleaning à Liège sont établis sur devis, en fonction du type de vêtement, du tissu et de la quantité. Devis gratuit disponible par téléphone ou email.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous la prise et le dépôt à domicile ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Oui, nous proposons un service de prise et dépôt à domicile dans tout Liège et les communes environnantes (Herstal, Seraing, Outremeuse, Guillemins).",
      },
    },
    {
      "@type": "Question",
      name: "Quels types de vêtements acceptez-vous en nettoyage à sec ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Nous acceptons tous types de textiles : costumes, robes de soirée, robes de mariée, manteaux, vestes en cuir, rideaux, couettes, tapis, et tout vêtement délicat nécessitant un soin particulier.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le délai pour le nettoyage à sec ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le délai standard est de 48 à 72 heures ouvrées. Un service express en 24 heures est disponible pour les urgences, sur demande.",
      },
    },
    {
      "@type": "Question",
      name: "Le nettoyage à sec est-il écologique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Nous utilisons des produits de nettoyage à sec modernes et respectueux de l'environnement, sans solvants agressifs, pour protéger vos vêtements et la planète.",
      },
    },
  ],
}

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
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
      name: "Nettoyage à Sec",
      item: pageUrl,
    },
  ],
}

export default function NettoyageASecPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="w-full">
        {/* Structured data for this page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />

        {/* Breadcrumbs */}
        <section className="w-full border-b border-border/40 bg-secondary/30">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-2 sm:py-3 text-xs sm:text-sm text-muted-foreground">
            <nav aria-label="Fil d'Ariane">
              <ol className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                <li>
                  <Link href="/" className="hover:text-foreground underline-offset-2 hover:underline">
                    Accueil
                  </Link>
                </li>
                <li className="opacity-60">/</li>
                <li className="text-foreground font-medium">Nettoyage à Sec</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                Nettoyage à sec à Liège
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                Vos vêtements délicats méritent un soin expert. On récupère, on nettoie, on livre. Vous n&apos;avez rien à faire.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                  aria-label="Demander un devis gratuit pour un nettoyage à sec à Liège"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="tel:+32492955348"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                  aria-label="Appeler pour un nettoyage à sec à Liège"
                >
                  Appelez : 0492 95 53 48
                </a>
              </div>
              <ul className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  Prise et dépôt à domicile
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  Service express 24h disponible
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  Produits écologiques
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Intro / Keyword-dense section */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Votre service de nettoyage à sec à Liège
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Lena&apos;s Cleaning Services propose un service de <strong>nettoyage à sec à Liège</strong> pour tous vos vêtements délicats : costumes,
                robes, manteaux, linge de maison et textiles professionnels. Que vous ayez un costume à rafraîchir avant une réunion importante,
                une robe de soirée à préparer pour un événement ou des rideaux à nettoyer en profondeur, notre équipe s&apos;occupe de tout.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Contrairement aux blanchisseries traditionnelles, nous venons chercher vos vêtements directement chez vous ou à votre bureau à Liège.
                Plus besoin de vous déplacer les bras chargés de vêtements : nous gérons tout de A à Z, du retrait à la livraison.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Notre service de nettoyage à sec convient parfaitement aux professionnels pressés (costumes, chemises, cravates), aux particuliers
                avec des pièces délicates (robes, manteaux, cuir), aux propriétaires Airbnb (draps, couettes, rideaux entre guests) ainsi qu&apos;aux
                hôtels et restaurants de la région liégeoise.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                En savoir plus sur nos autres services de{" "}
                <Link href="/#services" className="underline underline-offset-2 hover:text-foreground">
                  nettoyage à Liège
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 sm:mb-6 md:mb-8 break-words">
              Ce qu&apos;on nettoie à sec
            </h2>
            <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Vêtements de travail</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Costumes, tailleurs, chemises, cravates, blazers. Toujours impeccables pour vos rendez-vous professionnels, sans déplacer au pressing.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Vêtements délicats</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Robes de soirée, robes de mariée, soie, cachemire, lin. Chaque tissu est traité selon ses spécificités de nettoyage à sec.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Cuir et daim</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Vestes en cuir, manteaux, sacs. Un traitement spécialisé qui préserve la matière tout en la nettoyant en profondeur.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Linge de maison</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Rideaux, voilages, couettes, couvertures, nappes. Redonnez de l&apos;éclat à votre intérieur avec un nettoyage à sec adapté.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Tapis et moquettes</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Nettoyage en profondeur de vos tapis, même les grands formats, pour éliminer tâches et odeurs.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Linge professionnel</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Uniformes, vêtements de travail, nappes de restaurant. Service régulier pour les professionnels de Liège.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing – sur devis */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Tarifs de nettoyage à sec à Liège
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Chaque vêtement est différent : tissu, coupe, finitions, état initial. C&apos;est pour cela que nos{" "}
                <strong>tarifs de nettoyage à sec</strong> sont établis sur devis, après une évaluation rapide de vos pièces. Vous obtenez ainsi un prix
                juste, adapté à votre situation, sans surprise.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                À titre indicatif, nous proposons des gammes de prix pour les chemises, pantalons, costumes, robes, manteaux, cuir, rideaux, couettes et
                tapis, mais le montant final est toujours confirmé avec vous avant toute intervention.
              </p>
              <div className="border border-dashed border-border rounded-xl p-4 sm:p-5 bg-secondary/40">
                <p className="text-sm sm:text-base text-foreground font-medium mb-1.5">
                  Tarifs sur devis – transparents et sans engagement
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Envoyez-nous une liste de vos vêtements (ou des photos) et nous vous renvoyons un devis détaillé pour votre nettoyage à sec à Liège.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation"
                >
                  Demander une estimation
                </Link>
                <a
                  href="mailto:cleaningserviceslena@gmail.com"
                  className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                >
                  Envoyer une liste par email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">Comment ça marche</h2>
              <ol className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                <li>
                  <strong>1. Vous nous contactez</strong>
                  <br />
                  Un appel, un message ou un email. On répond en 2 heures maximum pour votre demande de nettoyage à sec à Liège.
                </li>
                <li>
                  <strong>2. On vient chercher vos vêtements</strong>
                  <br />
                  À votre domicile ou bureau à Liège. Vous choisissez le créneau qui vous arrange.
                </li>
                <li>
                  <strong>3. Nettoyage professionnel</strong>
                  <br />
                  Chaque pièce est inspectée, traitée selon son tissu, puis soigneusement nettoyée à sec dans le respect des fibres.
                </li>
                <li>
                  <strong>4. Livraison chez vous</strong>
                  <br />
                  Vos vêtements reviennent propres, repassés, sur cintre, prêts à porter.
                </li>
              </ol>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Pour en savoir plus sur le nettoyage à sec en général, vous pouvez consulter{" "}
                <a
                  href="https://fr.wikipedia.org/wiki/Nettoyage_%C3%A0_sec"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  l&apos;article Wikipédia sur le nettoyage à sec
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Pourquoi choisir Lena&apos;s Cleaning pour votre nettoyage à sec à Liège
              </h2>
              <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Prise et dépôt à domicile</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    On vient chez vous. Plus besoin de faire la queue au pressing ou de traverser la ville avec vos vêtements.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Réponse rapide</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    On répond à votre demande en 2 heures maximum. Service express 24 heures disponible pour les urgences.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Produits écologiques</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Nettoyage à sec moderne avec des solvants de nouvelle génération, plus respectueux de l&apos;environnement et de vos textiles.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Équipe locale</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Basés à Liège, nous connaissons la ville et ses quartiers. Pas de sous-traitance : vous parlez toujours à la même équipe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service areas */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Zones de service pour le nettoyage à sec
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Nous intervenons dans tout Liège et les communes environnantes pour la prise et le dépôt de vos vêtements en nettoyage à sec :
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                <li>Liège Centre (Féronstrée, Carré, Saint-Lambert)</li>
                <li>Guillemins (proche de la gare, idéal pour les professionnels)</li>
                <li>Outremeuse</li>
                <li>Herstal</li>
                <li>Seraing</li>
                <li>Ans, Grâce-Hollogne, Flémalle (sur demande)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ section – matches FAQ schema */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Questions fréquentes sur le nettoyage à sec à Liège
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">
                    Combien coûte le nettoyage à sec à Liège ?
                  </h3>
                  <p>
                    Les tarifs dépendent du type de vêtement, du tissu et de la quantité. Nous travaillons sur devis : vous nous envoyez la liste
                    de vos pièces, nous vous renvoyons un prix détaillé avant toute intervention.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">
                    Proposez-vous la prise et le dépôt à domicile ?
                  </h3>
                  <p>
                    Oui, c&apos;est une partie importante de notre service de nettoyage à sec à Liège : nous venons chercher et livrer vos vêtements
                    directement chez vous ou à votre bureau.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">
                    Quels types de vêtements acceptez-vous ?
                  </h3>
                  <p>
                    Costumes, robes (y compris robes de mariée), manteaux, vestes en cuir, tapis, rideaux, couettes, linge professionnel… Si vous avez
                    un doute, contactez-nous et nous vous dirons si le nettoyage à sec est adapté.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">
                    Quel est le délai pour le nettoyage à sec ?
                  </h3>
                  <p>
                    Le délai standard est de 48 à 72 heures. Pour les urgences, nous proposons un service express sous 24 heures, selon la charge du jour.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">
                    Le nettoyage à sec est-il écologique ?
                  </h3>
                  <p>
                    Nous utilisons des solvants modernes, plus respectueux de l&apos;environnement que les produits traditionnels, tout en garantissant un
                    nettoyage efficace de vos textiles délicats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (simple text) */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Avis de nos clients à Liège
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  &quot;Je fais nettoyer tous mes costumes chez Lena&apos;s. Le service de récupération à domicile me fait gagner un temps fou. Et mes
                  costumes sont toujours impeccables.&quot; — <strong>Thomas R.</strong>, avocat, Liège Centre
                </p>
                <p>
                  &quot;Ils ont sauvé ma robe de mariée tachée ! Un travail remarquable. Je recommande à 100%.&quot; —{" "}
                  <strong>Marie L.</strong>, Outremeuse
                </p>
                <p>
                  &quot;Pour notre restaurant, ils récupèrent les nappes chaque semaine. Fiable, ponctuel, qualité constante.&quot; —{" "}
                  <strong>Restaurant Le Coin</strong>, Guillemins
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 border-t border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl text-center space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Besoin d&apos;un nettoyage à sec à Liège ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Appelez Lena au <a href="tel:+32492955348" className="underline hover:text-foreground">0492 95 53 48</a>. Réponse en 2 heures. Devis gratuit,
                sans engagement.
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation"
                >
                  Demander un devis
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

