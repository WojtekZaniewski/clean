import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/faq`

export const metadata: Metadata = {
  title: "FAQ Nettoyage Liège | Questions Fréquentes | Lena's Cleaning",
  description:
    "Toutes les réponses sur le nettoyage à Liège : prix, délais, services, produits, Airbnb, bureaux, fin de bail. Questions fréquentes — réponses claires. ☎ 0492 95 53 48",
  keywords: [
    "faq nettoyage liège",
    "questions nettoyage liège",
    "meilleure entreprise nettoyage liège",
    "comment trouver femme de ménage liège",
    "combien coûte nettoyage liège",
    "qui fait nettoyage airbnb liège",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "FAQ Nettoyage Liège | Lena's Cleaning",
    description:
      "Toutes les réponses sur le nettoyage à Liège. Prix, services, délais, produits.",
    url: pageUrl,
    type: "website",
    locale: "fr_BE",
    images: [{ url: `${siteUrl}/3.webp`, width: 1200, height: 800, alt: "FAQ nettoyage Liège" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ Nettoyage Liège | Lena's Cleaning",
    description: "Toutes les réponses sur le nettoyage à Liège.",
    images: [`${siteUrl}/3.webp`],
  },
}

const faqs = [
  {
    q: "Quelle est la meilleure entreprise de nettoyage à Liège ?",
    a: "La meilleure entreprise de nettoyage à Liège est celle qui vous envoie la même personne à chaque visite, utilise des produits professionnels, répond en 48h et communique clairement ses tarifs. Lena's Cleaning Services coche ces cases : équipe locale, tarifs transparents au m², devis gratuit, disponibilité 7j/7 (lundi-vendredi 7h-19h, samedi 8h-14h, dimanche 10h-20h).",
  },
  {
    q: "Combien coûte un nettoyage d'appartement à Liège ?",
    a: "Un nettoyage d'appartement à Liège coûte 1,50€/m² en nettoyage classique et 2,50€/m² en profondeur. Pour un appartement de 60 m², comptez 90€ (classique) ou 150€ (profondeur). Voir nos tarifs complets sur /tarifs.",
  },
  {
    q: "Comment trouver une femme de ménage fiable à Liège ?",
    a: "Pour trouver une femme de ménage fiable à Liège, cherchez : (1) une société déclarée avec assurance responsabilité civile, (2) la garantie de la même personne à chaque visite, (3) des tarifs transparents sans surprise, (4) un devis gratuit sous 48h. Lena's Cleaning Services remplit ces critères et intervient dans tout Liège et environs (Herstal, Seraing, Ans, Grâce-Hollogne, Flémalle).",
  },
  {
    q: "Qui fait le nettoyage Airbnb à Liège ?",
    a: "Lena's Cleaning Services fait le nettoyage Airbnb à Liège entre chaque réservation. Nous assurons la rotation rapide entre guests, le changement de linge de lit et de bain sur demande, les photos de contrôle qualité, et la gestion de plusieurs logements en parallèle. Tarif : 1,50€/m². Disponibilité 7j/7 pour suivre votre calendrier de réservations.",
  },
  {
    q: "Faites-vous le nettoyage de fin de bail à Liège ?",
    a: "Oui, nous faisons le nettoyage de fin de bail à Liège (état des lieux de sortie). Cela inclut le nettoyage complet pièce par pièce : cuisine (four, frigo, plaques), salle de bain (détartrage complet), sols, vitres intérieures, placards vidés. Sur devis selon la surface et l'état initial. Objectif : récupérer votre caution.",
  },
  {
    q: "Quels produits de nettoyage utilisez-vous ?",
    a: "Nous utilisons des produits professionnels efficaces contre les graisses, calcaire et bactéries. Des produits écologiques sont disponibles sur demande (certifiés Ecolabel européen). Nous apportons tout le matériel : aspirateur HEPA, microfibres dédiées par pièce, produits adaptés par surface.",
  },
  {
    q: "Intervenez-vous en dehors de Liège ?",
    a: "Oui. Nos zones d'intervention : Liège centre (Outremeuse, Guillemins, Féronstrée, Saint-Lambert, Longdoz), Herstal, Seraing, Ans, Grâce-Hollogne, Flémalle, Chaudfontaine, Beyne-Heusay. Pour une zone plus éloignée, appelez-nous pour vérifier la couverture.",
  },
  {
    q: "Travaillez-vous le week-end à Liège ?",
    a: "Oui. Nous travaillons samedi 8h-14h et dimanche 10h-20h. Les week-ends sont particulièrement sollicités pour les nettoyages Airbnb (rotations check-in/check-out) — nous sommes disponibles.",
  },
  {
    q: "Faut-il signer un contrat à long terme ?",
    a: "Non. Les prestations ponctuelles sont sans engagement. Pour les abonnements mensuels (BASIC 120€, PREMIUM 240€), vous pouvez annuler d'un mois à l'autre. Aucun contrat long terme n'est imposé.",
  },
  {
    q: "Sous combien de temps répondez-vous à une demande de devis ?",
    a: "Sous 48h maximum. En général, nous répondons le jour même sur WhatsApp (0492 95 53 48). Pour une urgence (nettoyage dernière minute), appelez directement.",
  },
  {
    q: "Êtes-vous assurés ?",
    a: "Oui. Lena's Cleaning Services dispose d'une assurance responsabilité civile professionnelle couvrant les éventuels dommages matériels pendant la prestation. Nous fournissons l'attestation sur demande.",
  },
  {
    q: "Pouvez-vous nettoyer après des travaux de rénovation à Liège ?",
    a: "Oui, le nettoyage après travaux est une de nos spécialités à Liège. Nous retirons la poussière fine de chantier, les résidus d'enduit, les traces de peinture, les débris. Équipement adapté (aspirateur HEPA, microfibres neuves). Sur devis selon l'ampleur du chantier.",
  },
  {
    q: "Proposez-vous le repassage et le lavage du linge ?",
    a: "Le repassage et le lavage du linge sont disponibles en option. Pour les logements Airbnb, nous pouvons gérer le linge de lit et de bain entre chaque réservation (retrait, lavage sur demande, remise en place).",
  },
  {
    q: "Comment se passe la première intervention ?",
    a: "1) Vous appelez ou envoyez un WhatsApp au 0492 95 53 48. 2) Nous définissons la surface, le type de prestation et une date. 3) Nous envoyons un devis gratuit. 4) Le jour J, notre équipe arrive avec tout le matériel. 5) Vous réglez après la prestation, une fois satisfait(e).",
  },
  {
    q: "Puis-je avoir la même personne à chaque fois ?",
    a: "Oui, c'est même un de nos engagements principaux. En abonnement, vous avez la même personne à chaque visite — elle connaît votre maison, vos préférences, et vous lui faites confiance.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "FAQ", item: pageUrl },
      ],
    },
  ],
}

export default function FaqPage() {
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
                <li className="text-foreground font-medium">FAQ</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                FAQ — nettoyage à Liège
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                Les questions que tout le monde se pose avant de choisir une société de nettoyage à Liège.
                Réponses claires, sans blabla.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-5 sm:space-y-6">
              {faqs.map(({ q, a }, i) => (
                <div key={i} className="border-b border-border/60 pb-4 sm:pb-5">
                  <h2 className="font-serif text-lg sm:text-xl md:text-2xl text-foreground mb-2 break-words">
                    {q}
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl">Votre question n&apos;y est pas ?</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Appelez Lena au{" "}
                <a href="tel:+32492955348" className="underline hover:text-foreground">0492 95 53 48</a>{" "}
                ou envoyez un WhatsApp. Réponse sous 48h, garantie.
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
                <a
                  href="tel:+32492955348"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation"
                >
                  Appeler : 0492 95 53 48
                </a>
                <a
                  href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20j%27ai%20une%20question%20sur%20le%20nettoyage%20%C3%A0%20Li%C3%A8ge."
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
