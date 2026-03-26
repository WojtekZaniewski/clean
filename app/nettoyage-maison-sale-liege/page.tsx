import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/nettoyage-maison-sale-liege`

export const metadata: Metadata = {
  title: "Nettoyage Maison Sale Liège | Remise en État | Lena's Cleaning",
  description:
    "Maison très sale à Liège ? Nettoyage en profondeur pour logements négligés, après succession ou déménagement. Résultat garanti. Devis gratuit. 0492 95 53 48",
  keywords: [
    "nettoyage maison sale liège",
    "nettoyage maison très sale liège",
    "remise en état logement liège",
    "nettoyage en profondeur liège",
    "nettoyage logement négligé liège",
    "nettoyage après succession liège",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Nettoyage Maison Sale Liège | Remise en État | Lena's Cleaning",
    description: "Maison très sale à Liège ? Remise en état complète. Équipe locale, résultat garanti, devis gratuit.",
    url: pageUrl,
    type: "website",
    locale: "fr_BE",
    images: [{ url: `${siteUrl}/4.jpg`, width: 1200, height: 800, alt: "Nettoyage maison sale Liège" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage Maison Sale Liège | Lena's Cleaning",
    description: "Maison très sale à Liège ? Remise en état complète. Devis gratuit.",
    images: [`${siteUrl}/4.jpg`],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Nettoyage maison sale à Liège",
      description: "Service de nettoyage en profondeur pour maisons très sales à Liège. Logements négligés, remises en état après succession, après déménagement ou après travaux.",
      provider: { "@type": "LocalBusiness", name: "Lena's Cleaning Services", telephone: "+32492955348", url: siteUrl },
      areaServed: { "@type": "City", name: "Liège" },
      serviceType: "Nettoyage en profondeur et remise en état",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Nettoyez-vous les maisons très sales ou abandonnées à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous intervenons pour le nettoyage de maisons très sales à Liège : logements abandonnés, négligés depuis longtemps, remises en état après succession ou après déménagement. Appelez le 0492 95 53 48 pour un devis personnalisé.",
          },
        },
        {
          "@type": "Question",
          name: "Combien coûte le nettoyage d'une maison sale à Liège ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le nettoyage en profondeur d'une maison sale à Liège est facturé à 2,50 €/m². Pour une maison de 100 m², comptez environ 250 €. Pour les remises en état importantes (succession, logement abandonné), nous établissons un devis sur mesure après visite. Le devis est gratuit.",
          },
        },
        {
          "@type": "Question",
          name: "Faut-il être présent pendant le nettoyage d'une maison sale ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non, vous n'avez pas besoin d'être présent. Nous pouvons intervenir avec un jeu de clés. Nous vous envoyons un compte-rendu avec photos une fois le nettoyage terminé.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Nettoyage maison sale Liège", item: pageUrl },
      ],
    },
  ],
}

export default function NettoyageMaisonSaleLiegePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <article className="w-full">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Breadcrumbs */}
        <section className="w-full border-b border-border/40 bg-secondary/30">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-2 sm:py-3 text-xs sm:text-sm text-muted-foreground">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                <li><Link href="/" className="hover:text-foreground underline-offset-2 hover:underline">Accueil</Link></li>
                <li className="opacity-60">/</li>
                <li className="text-foreground font-medium">Nettoyage maison sale Liège</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                Nettoyage maison sale à Liège — remise en état complète
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                Votre logement est dans un état difficile. Nous intervenons sans jugement, avec efficacité.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Lena&apos;s Cleaning Services prend en charge le <strong>nettoyage de maisons très sales à Liège</strong> :
                logements négligés, remises en état après succession, appartements abandonnés ou logements après déménagement.
                Nous intervenons là où un nettoyage classique ne suffit pas.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                <a href="tel:+32492955348" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation">
                  Appelez : 0492 95 53 48
                </a>
                <a href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20j%27ai%20une%20maison%20tr%C3%A8s%20sale%20%C3%A0%20Li%C3%A8ge%20et%20je%20souhaite%20un%20devis." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-border px-6 py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation">
                  WhatsApp
                </a>
              </div>
              <ul className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Logements négligés</li>
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Remise en état après succession</li>
                <li className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />Devis gratuit en 48h</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ce qu'on entend par maison sale */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Dans quels cas intervenons-nous ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Un <strong>nettoyage maison sale à Liège</strong> est différent d&apos;un entretien courant.
                Il faut du temps, du matériel adapté et de l&apos;expérience pour obtenir un résultat propre sur un logement fortement encrassé.
              </p>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {[
                  { title: "Logement négligé", desc: "Accumulation de saleté sur plusieurs semaines ou mois. Sols incrustés, cuisine grasse, salle de bain calcifiée." },
                  { title: "Après succession", desc: "Logement d'un proche décédé à remettre en état avant vente ou relocation. Intervention discrète et respectueuse." },
                  { title: "Après déménagement", desc: "Logement laissé dans un état dégradé par les anciens occupants. Remise en état pour état des lieux d'entrée." },
                  { title: "Logement abandonné", desc: "Bien resté inoccupé pendant une longue période. Nettoyage complet avant remise en location ou vente." },
                ].map((item) => (
                  <div key={item.title} className="bg-card border border-border rounded-xl p-4">
                    <h3 className="font-semibold text-foreground mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Notre processus */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Notre processus de remise en état
              </h2>
              <ol className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">1</span>
                  <div><strong className="text-foreground">Évaluation gratuite.</strong> Vous nous décrivez la situation (photos bienvenues). Nous établissons un devis précis en 48h, sans engagement.</div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">2</span>
                  <div><strong className="text-foreground">Débarras et tri.</strong> On commence par évacuer ce qui doit l&apos;être et trier ce qui peut être conservé (sur vos instructions).</div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">3</span>
                  <div><strong className="text-foreground">Nettoyage en profondeur pièce par pièce.</strong> Sols, murs, plafonds, cuisine complète (intérieur des appareils), salle de bain, désinfection générale.</div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">4</span>
                  <div><strong className="text-foreground">Finitions et compte-rendu.</strong> Vérification générale, photos avant/après. Vous recevez un rapport complet de l&apos;intervention.</div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Tarifs nettoyage maison sale à Liège
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
                      <td className="px-4 py-2.5 font-medium text-foreground">Nettoyage en profondeur</td>
                      <td className="px-4 py-2.5">Maison encrassée, cuisine et salle de bain intégrales, sols et surfaces</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">2,50 €/m²</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-2.5 font-medium text-foreground">Remise en état complète</td>
                      <td className="px-4 py-2.5">Logement abandonné, succession, plusieurs pièces fortement dégradées</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">Devis sur mesure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Devis gratuit après description ou photos du logement.{" "}
                <Link href="/offre-nettoyage-liege" className="underline underline-offset-2 hover:text-foreground">
                  Voir toutes nos offres
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">Questions fréquentes</h2>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Nettoyez-vous les maisons très sales ou abandonnées à Liège ?</h3>
                  <p>Oui, nous intervenons pour toutes les situations difficiles : logements abandonnés, négligés, après succession ou après déménagement. Nous ne jugeons pas — nous nettoyons.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Combien coûte le nettoyage d&apos;une maison sale à Liège ?</h3>
                  <p>Le nettoyage en profondeur est facturé 2,50 €/m². Pour les remises en état importantes, nous établissons un devis sur mesure après évaluation. Le devis est toujours gratuit.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Faut-il être présent pendant le nettoyage ?</h3>
                  <p>Non. Nous pouvons intervenir avec un jeu de clés. Vous recevez des photos avant/après à la fin de l&apos;intervention.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 border-t border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Devis gratuit pour votre maison à Liège ?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Appelez Lena au <a href="tel:+32492955348" className="underline hover:text-foreground">0492 95 53 48</a>. Réponse sous 48h.
              </p>
              <div className="flex flex-wrap gap-2.5 justify-center">
                <a href="tel:+32492955348" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation">Appeler</a>
                <a href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20j%27ai%20une%20maison%20tr%C3%A8s%20sale%20%C3%A0%20Li%C3%A8ge." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-border px-6 py-3.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation">WhatsApp</a>
                <Link href="/nettoyage-classique" className="inline-flex items-center justify-center border border-border px-6 py-3.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation">
                  Nettoyage classique →
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
