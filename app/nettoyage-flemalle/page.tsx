import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"
const pageUrl = `${siteUrl}/nettoyage-flemalle`

export const metadata: Metadata = {
  title: "Nettoyage Flémalle | Société de Nettoyage | Lena's Cleaning",
  description:
    "Nettoyage à Flémalle pour particuliers et entreprises. Produits écologiques, tarifs transparents. Devis gratuit. ☎ 0492 95 53 48",
  keywords: [
    "nettoyage flémalle",
    "société de nettoyage flémalle",
    "ménage flémalle",
    "nettoyage maison flémalle",
    "entreprise de nettoyage flémalle",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Nettoyage Flémalle | Société de Nettoyage | Lena's Cleaning",
    description: "Nettoyage à Flémalle pour particuliers et entreprises. Produits éco, tarifs transparents. Devis gratuit.",
    url: pageUrl,
    type: "website",
    locale: "fr_BE",
    images: [{ url: `${siteUrl}/9.jpg`, width: 1200, height: 800, alt: "Nettoyage Flémalle" }],
  },
  twitter: { card: "summary_large_image", title: "Nettoyage Flémalle | Lena's Cleaning", description: "Nettoyage à Flémalle. Service local, devis gratuit.", images: [`${siteUrl}/9.jpg`] },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Nettoyage à Flémalle",
      description: "Service de nettoyage professionnel à Flémalle. Maisons, appartements, bureaux. Lena's Cleaning Services.",
      provider: { "@type": "LocalBusiness", name: "Lena's Cleaning Services", telephone: "+32492955348", url: siteUrl },
      areaServed: { "@type": "City", name: "Flémalle", containedInPlace: { "@type": "City", name: "Liège" } },
      serviceType: "Nettoyage résidentiel et commercial",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Proposez-vous un service de nettoyage à Flémalle ?", acceptedAnswer: { "@type": "Answer", text: "Oui, nous intervenons à Flémalle pour le nettoyage de maisons, appartements et bureaux. Flémalle fait partie de nos zones d'intervention." } },
        { "@type": "Question", name: "Le déplacement est-il gratuit pour Flémalle ?", acceptedAnswer: { "@type": "Answer", text: "Oui, Flémalle est dans notre rayon de 15 km autour de Liège. Les frais de déplacement sont inclus dans notre tarif." } },
        { "@type": "Question", name: "Utilisez-vous des produits écologiques à Flémalle ?", acceptedAnswer: { "@type": "Answer", text: "Oui, nous utilisons uniquement des produits de nettoyage écologiques, efficaces et sans odeurs chimiques agressives." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Nettoyage Flémalle", item: pageUrl },
      ],
    },
  ],
}

export default function NettoyageFlémallePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <article className="w-full">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <section className="w-full border-b border-border/40 bg-secondary/30">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-2 sm:py-3 text-xs sm:text-sm text-muted-foreground">
            <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1 sm:gap-1.5"><li><Link href="/" className="hover:text-foreground underline-offset-2 hover:underline">Accueil</Link></li><li className="opacity-60">/</li><li className="text-foreground font-medium">Nettoyage Flémalle</li></ol></nav>
          </div>
        </section>
        <section className="w-full border-b border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance break-words mb-3 sm:mb-4">
                Service de nettoyage à Flémalle — local et disponible
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                Lena&apos;s Cleaning Services intervient à Flémalle avec les mêmes standards qu&apos;à Liège.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Notre <strong>service de nettoyage à Flémalle</strong> couvre maisons, appartements et bureaux.
                Produits écologiques, équipe stable, tarifs transparents. Devis gratuit en 48h.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                <a href="tel:+32492955348" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation">Appelez : 0492 95 53 48</a>
                <a href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20je%20suis%20%C3%A0%20Fl%C3%A9malle%20et%20je%20souhaite%20un%20devis." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-border px-6 py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-secondary transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation">WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">Nos services à Flémalle</h2>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {[
                  { title: "Nettoyage maison Flémalle", link: "/nettoyage-classique" },
                  { title: "Nettoyage Airbnb Flémalle", link: "/nettoyage-airbnb-liege" },
                  { title: "Nettoyage bureaux Flémalle", link: "/nettoyage-bureaux-liege" },
                  { title: "Femme de ménage Flémalle", link: "/femme-de-menage-liege" },
                  { title: "Nettoyage après travaux Flémalle", link: "/nettoyage-apres-travaux-liege" },
                  { title: "Nettoyage déménagement Flémalle", link: "/nettoyage-demenagement-liege" },
                ].map((s) => (
                  <Link key={s.title} href={s.link} className="bg-card border border-border rounded-xl p-4 hover:shadow-md hover:border-primary/20 transition-all block font-semibold text-foreground text-sm sm:text-base">{s.title} →</Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">Questions fréquentes</h2>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <div><h3 className="font-semibold text-foreground mb-1">Proposez-vous un service de nettoyage à Flémalle ?</h3><p>Oui, nous intervenons à Flémalle pour maisons, appartements et bureaux.</p></div>
                <div><h3 className="font-semibold text-foreground mb-1">Le déplacement est-il gratuit ?</h3><p>Oui, Flémalle est dans notre rayon de 15 km. Frais inclus dans le tarif.</p></div>
                <div><h3 className="font-semibold text-foreground mb-1">Utilisez-vous des produits écologiques ?</h3><p>Oui, uniquement des produits éco — efficaces et sans odeurs chimiques agressives.</p></div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 border-t border-border/40">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="max-w-3xl text-center space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">Un devis pour Flémalle ?</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Appelez Lena au <a href="tel:+32492955348" className="underline hover:text-foreground">0492 95 53 48</a>. Réponse sous 48h.</p>
              <div className="flex flex-wrap gap-2.5 justify-center">
                <a href="tel:+32492955348" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation">Appeler</a>
                <a href="https://wa.me/32492955348?text=Bonjour%20Lena%2C%20je%20suis%20%C3%A0%20Fl%C3%A9malle." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-border px-6 py-3.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation">WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}
