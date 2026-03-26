import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/nettoyage-herstal`

export const metadata: Metadata = {
  title: "Nettoyage Herstal | Société de Nettoyage Locale | Lena's Cleaning",
  description:
    "Société de nettoyage à Herstal. Maison, bureau, Airbnb. Équipe locale, réponse en 48h, devis gratuit. ☎ 0492 95 53 48",
  keywords: [
    "nettoyage herstal",
    "société de nettoyage herstal",
    "entreprise de nettoyage herstal",
    "ménage herstal",
    "nettoyage maison herstal",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Nettoyage Herstal | Société de Nettoyage Locale | Lena's Cleaning",
    description: "Société de nettoyage à Herstal. Maison, bureau, Airbnb. Équipe locale, réponse en 48h, devis gratuit.",
    url: pageUrl,
    type: "website",
    locale: "fr_BE",
    images: [{ url: `${siteUrl}/1.jpg`, width: 1200, height: 800, alt: "Nettoyage Herstal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage Herstal | Lena's Cleaning",
    description: "Société de nettoyage à Herstal. Maison, bureau, Airbnb. Devis gratuit.",
    images: [`${siteUrl}/1.jpg`],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Nettoyage à Herstal",
      description: "Service de nettoyage professionnel à Herstal. Maisons, appartements, bureaux, Airbnb. Équipe locale de Lena's Cleaning Services.",
      provider: { "@type": "LocalBusiness", name: "Lena's Cleaning Services", telephone: "+32492955348", url: siteUrl },
      areaServed: { "@type": "City", name: "Herstal", containedInPlace: { "@type": "City", name: "Liège" } },
      serviceType: "Nettoyage résidentiel et commercial",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Proposez-vous un service de nettoyage à Herstal ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, nous intervenons régulièrement à Herstal pour le nettoyage de maisons, appartements, bureaux et logements Airbnb. Herstal est une de nos zones d'intervention principales." },
        },
        {
          "@type": "Question",
          name: "Quel est le délai d'intervention pour un nettoyage à Herstal ?",
          acceptedAnswer: { "@type": "Answer", text: "Nous répondons en 48 heures à votre demande. Pour les urgences (déménagement, Airbnb), nous faisons notre possible pour intervenir plus rapidement selon notre planning." },
        },
        {
          "@type": "Question",
          name: "Le déplacement est-il gratuit pour Herstal ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, les frais de déplacement sont inclus dans notre tarif pour toutes les communes dans un rayon de 15 km autour de Liège, dont Herstal." },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Nettoyage Herstal", item: pageUrl },
      ],
    },
  ],
}

export default function NettoyageHerstalPage() {
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
                <li className="text-foreground font-medium">Nettoyage Herstal</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                Service de nettoyage à Herstal — équipe locale, résultat garanti
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                Lena&apos;s Cleaning Services intervient à Herstal pour particuliers et professionnels. Maison propre, bureau impeccable.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Vous habitez ou travaillez à <strong>Herstal</strong> et cherchez un <strong>service de nettoyage fiable et local</strong> ?
                Notre équipe intervient régulièrement dans toute la commune de Herstal, avec les mêmes standards qu&apos;à Liège centre :
                produits éco, équipe stable, devis transparent.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                <a href="tel:+32492955348" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation">
                  Appelez : 0492 95 53 48
                </a>
                <a href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20je%20suis%20%C3%A0%20Herstal%20et%20je%20souhaite%20un%20devis%20de%20nettoyage." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services à Herstal */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Nos services de nettoyage à Herstal
              </h2>
              <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground">
                {[
                  { title: "Nettoyage maison Herstal", desc: "Entretien régulier ou ponctuel de votre domicile.", link: "/nettoyage-classique" },
                  { title: "Nettoyage Airbnb Herstal", desc: "Rotation entre guests, linge changé, logement prêt.", link: "/nettoyage-airbnb-liege" },
                  { title: "Nettoyage bureaux Herstal", desc: "Entretien de vos locaux professionnels avant ou après les heures de travail.", link: "/nettoyage-bureaux-liege" },
                  { title: "Nettoyage après travaux Herstal", desc: "Remise en état après rénovation ou chantier.", link: "/nettoyage-apres-travaux-liege" },
                  { title: "Nettoyage déménagement Herstal", desc: "Nettoyage avant état des lieux de sortie ou d&apos;entrée.", link: "/nettoyage-demenagement-liege" },
                  { title: "Femme de ménage Herstal", desc: "Service régulier à domicile avec toujours la même personne.", link: "/femme-de-menage-liege" },
                ].map((s) => (
                  <Link key={s.title} href={s.link} className="bg-card border border-border rounded-xl p-4 hover:shadow-md hover:border-primary/20 transition-all block">
                    <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: s.desc }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi nous */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                Pourquoi choisir Lena&apos;s Cleaning pour votre nettoyage à Herstal ?
              </h2>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" /><span><strong>Proximité :</strong> Herstal est une de nos zones d&apos;intervention régulières. Pas de frais de déplacement, intervention rapide.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" /><span><strong>Réactivité :</strong> Réponse sous 48h à votre demande.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" /><span><strong>Confiance :</strong> Toujours la même équipe, produits éco, tarifs transparents.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" /><span><strong>Flexibilité :</strong> Disponible du lundi au dimanche selon vos horaires.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">Questions fréquentes</h2>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Proposez-vous un service de nettoyage à Herstal ?</h3>
                  <p>Oui, Herstal est une de nos zones d&apos;intervention principales. Nous y intervenons régulièrement pour des particuliers et des entreprises.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Quel est le délai d&apos;intervention à Herstal ?</h3>
                  <p>Réponse sous 48h. Pour les urgences, nous faisons notre possible pour intervenir plus rapidement.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Le déplacement est-il gratuit pour Herstal ?</h3>
                  <p>Oui, les frais de déplacement sont inclus dans notre tarif pour Herstal (dans notre rayon de 15 km autour de Liège).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 border-t border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl text-center space-y-3 sm:space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">Un devis pour Herstal ?</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Appelez Lena au <a href="tel:+32492955348" className="underline hover:text-foreground">0492 95 53 48</a>. Réponse sous 48h. Devis gratuit.
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center">
                <a href="tel:+32492955348" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation">Appeler maintenant</a>
                <a href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20je%20suis%20%C3%A0%20Herstal%20et%20je%20souhaite%20un%20devis." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-border px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation">WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}
