import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/nettoyage-classique.html`

export const metadata: Metadata = {
  title: "Société de Nettoyage Liège | Lena's Cleaning | Dès 25€/h",
  description:
    "Société de nettoyage à Liège. Maison, bureau, Airbnb, après travaux. Équipe locale, produits éco, devis gratuit en 2h. Appelez le 0492 95 53 48.",
  keywords: [
    "société de nettoyage liège",
    "entreprise de nettoyage liège",
    "nettoyage maison liège",
    "service nettoyage liège",
    "femme de ménage liège",
    "nettoyage bureau liège",
  ],
  alternates: {
    canonical: pageUrl,
  },
}

const jsonLdNettoyageClassique = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      additionalType: "CleaningService",
      name: "Lena's Cleaning Services",
      description:
        "Société de nettoyage professionnelle à Liège pour particuliers et professionnels. Nettoyage de maisons, appartements, bureaux, Airbnb et après travaux.",
      url: siteUrl,
      telephone: "+32492955348",
      email: "cleaningserviceslena@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Liège",
        addressCountry: "BE",
      },
      areaServed: [
        { "@type": "City", name: "Liège" },
        { "@type": "City", name: "Herstal" },
        { "@type": "City", name: "Seraing" },
        { "@type": "City", name: "Ans" },
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
      "@type": "Service",
      name: "Nettoyage Classique Liège",
      description:
        "Service de nettoyage professionnel pour maisons, appartements et bureaux à Liège : entretien régulier, ponctuel, après travaux et déménagement.",
      provider: {
        "@type": "LocalBusiness",
        name: "Lena's Cleaning Services",
      },
      areaServed: { "@type": "City", name: "Liège" },
      serviceType: "Nettoyage résidentiel et commercial",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte un service de nettoyage à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Nos tarifs de nettoyage à Liège commencent à partir de 25€/heure pour un ménage régulier et sont confirmés sur devis après une courte évaluation de vos besoins.",
          },
        },
        {
          "@type": "Question",
          name: "Quels types de nettoyage proposez-vous à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Nous proposons le nettoyage de maisons et appartements, le nettoyage de bureaux et locaux professionnels, le nettoyage Airbnb, le nettoyage après travaux, le nettoyage de déménagement et l'entretien pour maisons de repos.",
          },
        },
        {
          "@type": "Question",
          name: "Intervenez-vous dans toute la région de Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Oui, nous intervenons à Liège Centre, Guillemins, Outremeuse, Herstal, Seraing, Ans, Grâce-Hollogne, Flémalle et dans les communes environnantes.",
          },
        },
        {
          "@type": "Question",
          name: "Utilisez-vous des produits écologiques ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Oui, nous privilégions des produits de nettoyage écologiques et efficaces, sans odeurs chimiques agressives, sûrs pour votre famille et vos animaux.",
          },
        },
        {
          "@type": "Question",
          name: "Comment obtenir un devis de nettoyage ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Appelez-nous au 0492 95 53 48 ou envoyez-nous un email. Nous répondons sous 2 heures avec un devis gratuit et sans engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Proposez-vous un service de nettoyage régulier ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Oui, nous proposons des contrats de nettoyage régulier (hebdomadaire, bi-hebdomadaire ou mensuel) avec tarif préférentiel et toujours la même équipe.",
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
          name: "Nettoyage Classique",
          item: pageUrl,
        },
      ],
    },
  ],
}

export default function NettoyageClassiquePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="w-full">
        {/* JSON-LD for this page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNettoyageClassique) }}
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
                <li className="text-foreground font-medium">Nettoyage classique</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                Société de nettoyage à Liège
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                Votre maison propre. Votre bureau impeccable. Sans lever le petit doigt.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Lena&apos;s Cleaning Services est une <strong>société de nettoyage à Liège</strong> qui s&apos;occupe du{" "}
                <strong>nettoyage de maisons, d&apos;appartements, de bureaux et de logements Airbnb</strong>. Équipe locale,
                produits éco, résultat garanti.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                  aria-label="Demander un devis gratuit pour un service de nettoyage à Liège"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="tel:+32492955348"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                  aria-label="Appeler pour un service de nettoyage à Liège"
                >
                  Appelez : 0492 95 53 48
                </a>
              </div>
              <ul className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  Réponse en 2h
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  Devis gratuit et sans engagement
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  Même équipe à chaque passage
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Intro – société / entreprise de nettoyage Liège */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Votre entreprise de nettoyage à Liège
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Lena&apos;s Cleaning Services est votre <strong>entreprise de nettoyage à Liège</strong> de confiance. Nous offrons des services de
                nettoyage professionnels aux particuliers et aux entreprises dans toute la région liégeoise.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Que vous ayez besoin d&apos;un <strong>nettoyage maison à Liège</strong>, d&apos;un{" "}
                <strong>service de nettoyage de bureaux</strong> ou d&apos;un entretien régulier pour vos locaux professionnels, notre équipe
                s&apos;adapte à vos besoins et à vos horaires.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Ce qui nous distingue des grandes entreprises de nettoyage ? Un contact humain. Vous échangez directement avec Lena, vous connaissez
                votre équipe, et nous construisons une relation de confiance sur le long terme. Pas de call center, pas de rotation permanente de
                personnel, pas de mauvaises surprises.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Notre <strong>service de nettoyage à Liège</strong> convient parfaitement aux :
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-muted-foreground">
                <li>Particuliers actifs qui manquent de temps pour le ménage</li>
                <li>Familles avec enfants qui veulent un foyer sain et propre</li>
                <li>Propriétaires Airbnb qui doivent assurer un nettoyage impeccable entre chaque guest</li>
                <li>Entreprises et PME qui souhaitent des bureaux toujours propres et présentables</li>
                <li>Maisons de repos et établissements de santé avec exigences d&apos;hygiène strictes</li>
                <li>Personnes en situation de déménagement (entrée ou sortie)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-4xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Nos services de nettoyage à Liège
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5">Nettoyage de maison et appartement</h3>
                  <p>
                    Votre foyer mérite une propreté irréprochable. Notre <strong>service de nettoyage maison à Liège</strong> couvre :
                  </p>
                  <ul className="list-disc pl-5 mt-1.5 space-y-1">
                    <li>Pièces de vie : dépoussiérage, aspiration et lavage des sols, nettoyage des surfaces</li>
                    <li>Cuisine : nettoyage des plans de travail, appareils électroménagers (extérieur), éviers, plaques, four</li>
                    <li>Salle de bain : désinfection, détartrage, nettoyage des sanitaires et miroirs sans traces</li>
                    <li>Chambres : changement des draps (sur demande), dépoussiérage, aspiration</li>
                    <li>Vitres : nettoyage intérieur des fenêtres et miroirs</li>
                  </ul>
                  <p className="mt-1.5">
                    Nous proposons des formules régulières (hebdomadaire, bi-hebdomadaire, mensuelle) ou ponctuelles selon vos besoins.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5">Nettoyage de bureaux et locaux professionnels</h3>
                  <p>
                    Un environnement de travail propre améliore la productivité et l&apos;image de votre entreprise. Notre{" "}
                    <strong>service de nettoyage bureau à Liège</strong> couvre :
                  </p>
                  <ul className="list-disc pl-5 mt-1.5 space-y-1">
                    <li>Bureaux individuels et open spaces</li>
                    <li>Salles de réunion et espaces d&apos;accueil</li>
                    <li>Sanitaires et cuisines d&apos;entreprise</li>
                    <li>Commerces et boutiques</li>
                  </ul>
                  <p className="mt-1.5">
                    Nous intervenons tôt le matin, en journée ou en soirée, pour ne jamais perturber votre activité.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5">Nettoyage Airbnb et locations courte durée</h3>
                  <p>
                    Vos 5 étoiles dépendent de la propreté. Notre service de nettoyage Airbnb à Liège assure :
                  </p>
                  <ul className="list-disc pl-5 mt-1.5 space-y-1">
                    <li>Rotation rapide entre les guests</li>
                    <li>Nettoyage complet du logement</li>
                    <li>Changement et lavage du linge de lit</li>
                    <li>Réassort des consommables (sur demande)</li>
                    <li>Photos de contrôle qualité (sur demande)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5">Nettoyage après travaux</h3>
                  <p>
                    Poussière de plâtre, résidus de peinture, traces de ciment… Après des travaux de rénovation, le nettoyage est un vrai défi. Nous
                    disposons du matériel adapté pour remettre votre logement ou vos bureaux en état.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5">Nettoyage de déménagement</h3>
                  <p>
                    Que vous quittiez un logement ou que vous emménagiez, nous assurons le <strong>nettoyage complet avant état des lieux</strong> ou
                    avant votre installation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5">
                    Nettoyage pour maisons de repos et établissements de santé
                  </h3>
                  <p>
                    L&apos;hygiène est primordiale dans les environnements de soins. Nous intervenons dans le respect des protocoles sanitaires pour les
                    espaces communs, chambres des résidents, sanitaires et cuisines collectives.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground">
                  Pour vos vêtements délicats (costumes, robes, rideaux), découvrez aussi notre service dédié de{" "}
                  <Link href="/nettoyage-a-sec.html" className="underline underline-offset-2 hover:text-foreground">
                    nettoyage à sec à Liège
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs – sur devis */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Nos tarifs de nettoyage à Liège
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Nous croyons à une totale transparence sur nos prix. Dans le même temps, chaque logement et chaque bureau est différent. C&apos;est
                pourquoi nos <strong>tarifs de nettoyage à Liège</strong> sont établis sur devis, après une évaluation rapide de vos besoins.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                À titre indicatif, nos prestations commencent généralement à partir de <strong>25€/h</strong> pour un ménage régulier, mais le montant
                final est confirmé avec vous avant toute intervention.
              </p>

              <div className="overflow-x-auto rounded-xl border border-border bg-card/40">
                <table className="min-w-full text-left text-xs sm:text-sm text-muted-foreground">
                  <thead className="bg-secondary/60 text-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Service</th>
                      <th className="px-4 py-3 font-semibold">Tarif indicatif</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5">Ménage régulier (hebdo/bi-hebdo)</td>
                      <td className="px-4 py-2.5">Sur devis (à partir de 25€/h)</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5">Ménage ponctuel</td>
                      <td className="px-4 py-2.5">Sur devis</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5">Nettoyage de bureaux</td>
                      <td className="px-4 py-2.5">Sur devis</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5">Nettoyage Airbnb</td>
                      <td className="px-4 py-2.5">Sur devis</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5">Nettoyage après travaux</td>
                      <td className="px-4 py-2.5">Sur devis</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5">Nettoyage déménagement</td>
                      <td className="px-4 py-2.5">Sur devis</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border border-dashed border-border rounded-xl p-4 sm:p-5 bg-secondary/40">
                <p className="text-sm sm:text-base text-foreground font-medium mb-1.5">
                  Tarifs sur devis – transparents et sans engagement
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Envoyez-nous une description de votre logement ou de vos bureaux (ou des photos), et nous vous renvoyons un devis détaillé pour votre
                  service de nettoyage à Liège.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Comment fonctionne notre service de nettoyage classique
              </h2>
              <ol className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <li>
                  <strong>1. Vous nous contactez</strong>
                  <br />
                  Un appel, un message ou un email suffit. Nous répondons en 2 heures maximum, même le weekend.
                </li>
                <li>
                  <strong>2. Nous évaluons vos besoins</strong>
                  <br />
                  Ensemble, nous définissons la prestation : type de nettoyage, fréquence, surfaces à traiter, consignes particulières.
                </li>
                <li>
                  <strong>3. Vous recevez un devis clair</strong>
                  <br />
                  Prix fixe, sans surprise. Vous savez exactement ce que vous payez avant de commencer.
                </li>
                <li>
                  <strong>4. L&apos;équipe intervient</strong>
                  <br />
                  Toujours la même personne ou équipe pour votre confort. Professionnelle, ponctuelle, efficace.
                </li>
                <li>
                  <strong>5. Vous profitez du résultat</strong>
                  <br />
                  Votre espace est propre, frais, agréable. Vous n&apos;avez rien eu à faire.
                </li>
              </ol>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Pour en savoir plus sur le nettoyage en général, vous pouvez consulter{" "}
                <a
                  href="https://fr.wikipedia.org/wiki/Nettoyage"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  l&apos;article Wikipédia dédié au nettoyage
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Pourquoi choisir Lena&apos;s Cleaning pour votre nettoyage à Liège
              </h2>
              <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Équipe locale et stable</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Pas de sous-traitance, pas de rotation permanente. Vous connaissez votre équipe et elle connaît vos préférences.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Réponse rapide</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Nous répondons en 2 heures à votre demande de <strong>service nettoyage à Liège</strong>. Besoin d&apos;une intervention urgente ?
                    Nous nous organisons.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Produits écologiques</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Efficaces mais respectueux de votre santé et de l&apos;environnement. Pas d&apos;odeurs chimiques agressives après notre passage.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Tarifs transparents</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Prix clairs, devis détaillé avant intervention. Pas de frais cachés, pas de mauvaise surprise sur la facture.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Flexibilité horaire</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Tôt le matin, en journée, en soirée, en semaine ou le samedi : nous adaptons nos interventions à votre emploi du temps.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Garantie satisfaction</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Si quelque chose ne vous convient pas, nous revenons corriger sans frais supplémentaire. Votre satisfaction est notre priorité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zones de service */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Nos zones d&apos;intervention à Liège
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Notre <strong>société de nettoyage à Liège</strong> intervient dans toute la région liégeoise :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Liège centre et quartiers</p>
                  <ul className="list-disc pl-5">
                    <li>Féronstrée et Carré</li>
                    <li>Saint-Lambert et Cathédrale</li>
                    <li>Guillemins (près de la gare)</li>
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
                    <li>Beyne-Heusay</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Vous êtes situé ailleurs dans la province de Liège ? Contactez-nous, nous évaluerons la faisabilité.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Questions fréquentes sur le nettoyage à Liège
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">
                    Combien coûte un service de nettoyage à Liège ?
                  </h3>
                  <p>
                    Nos tarifs commencent en général à partir de 25€/h pour un ménage régulier et sont ajustés en fonction de la taille du logement,
                    de la fréquence et du type de prestation. Tout est confirmé sur devis avant le début du service.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">
                    Quels types de nettoyage proposez-vous ?
                  </h3>
                  <p>
                    Nous couvrons le nettoyage de maisons et appartements, de bureaux, de locaux professionnels, de logements Airbnb, ainsi que le
                    nettoyage après travaux et de déménagement.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">
                    Intervenez-vous dans toute la région de Liège ?
                  </h3>
                  <p>
                    Oui, nous couvrons Liège Centre, Guillemins, Outremeuse, Herstal, Seraing, Ans et les communes environnantes dans un rayon
                    d&apos;environ 15 km.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">
                    Utilisez-vous des produits écologiques ?
                  </h3>
                  <p>
                    Oui, nous privilégions des produits de nettoyage respectueux de l&apos;environnement et de votre santé, tout en restant très
                    efficaces contre la saleté et les bactéries.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">
                    Proposez-vous un service de nettoyage régulier ?
                  </h3>
                  <p>
                    Oui, nous proposons des formules hebdomadaires, bi-hebdomadaires ou mensuelles avec tarif préférentiel et toujours la même équipe
                    de nettoyage.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">Êtes-vous assuré ?</h3>
                  <p>
                    Oui, notre entreprise de nettoyage est entièrement assurée. En cas de casse ou de dommage accidentel, vous êtes couvert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Ce que nos clients à Liège disent de nous
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  &quot;Je travaille beaucoup et je n&apos;avais plus le temps de m&apos;occuper du ménage. Lena vient chaque semaine et ma maison est
                  toujours impeccable. Un vrai soulagement !&quot; — <strong>Sophie M.</strong>, Liège Centre
                </p>
                <p>
                  &quot;Pour notre cabinet médical, l&apos;hygiène est primordiale. Lena&apos;s Cleaning comprend nos exigences et les respecte à
                  chaque passage. Très professionnel.&quot; — <strong>Dr. Pierre L.</strong>, Guillemins
                </p>
                <p>
                  &quot;Je gère plusieurs appartements Airbnb à Liège. Leur service est rapide, fiable, et mes guests sont toujours satisfaits. Je
                  recommande à 100%.&quot; — <strong>Julie D.</strong>, propriétaire Airbnb, Outremeuse
                </p>
                <p>
                  &quot;Après nos travaux de rénovation, on ne savait pas par où commencer. L&apos;équipe a tout nettoyé en une journée. Impressionnant
                  !&quot; — <strong>Marc et Anne</strong>, Ans
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 border-t border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl text-center space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Besoin d&apos;un service de nettoyage à Liège ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Appelez Lena au <a href="tel:+32492955348" className="underline hover:text-foreground">0492 95 53 48</a>. Réponse sous 2 heures. Devis
                gratuit, sans engagement.
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

