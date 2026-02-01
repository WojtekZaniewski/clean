import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Briefcase, Store, Home, User, Clock, Sparkles } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const siteUrl = "https://nettoyageliege.com"

export const metadata: Metadata = {
  title: "Nettoyage classique Liège | Société de nettoyage Liège",
  description:
    "Nettoyage classique à Liège: bureaux, commerces, restauration, particuliers. Sols, espaces communs, fenêtres. Équipe locale, devis gratuit. 0492 95 53 48.",
  alternates: { canonical: `${siteUrl}/nettoyage-classique` },
}

export default function NettoyageClassiquePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="w-full">
        {/* Hero */}
        <section className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
          <span className="text-xs sm:text-sm font-medium text-primary tracking-wider uppercase">
            Service de nettoyage Liège
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 mb-4 sm:mb-6 text-balance break-words">
            Nettoyage classique
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Un lieu de travail propre et bien entretenu améliore l’image de votre entreprise, le confort de vos équipes et de vos visiteurs. 
            Chez Lena's Cleaning, nous prenons en charge le nettoyage classique à Liège et alentours: sols, espaces communs, fenêtres et portes, bureaux et meubles, et bien plus encore.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mt-3 sm:mt-4 leading-relaxed">
            Nous intervenons aussi bien pour les entreprises que pour les particuliers. Passage ponctuel ou contrat régulier, nous nous adaptons à vos besoins.
          </p>
        </section>

        {/* Bureaux */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-balance break-words">
                  Nettoyage de bureaux et d’entreprises
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-4">
              Nous mettons tout en œuvre pour maintenir un environnement ordonné et agréable dans vos locaux. Du dépoussiérage des postes de travail au nettoyage des appuis de fenêtre, en passant par les traces de café sur les tables: rien n’est oublié.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Nous nous adaptons à vos horaires et à l’ambiance de votre entreprise. Vous choisissez le créneau qui vous convient, et nous assurons la régularité et la discrétion.
            </p>
          </div>
        </section>

        {/* Restauration et commerces */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-xl flex items-center justify-center">
                <Store className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-balance break-words">
                  Nettoyage dans la restauration et les commerces
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-4">
              Magasins, restaurants et cafés ont souvent besoin d’un nettoyage approfondi sans avoir à le gérer en interne. Nous intervenons à Liège et alentours pour des prestations régulières ou ponctuelles.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Que ce soit après la fermeture, en début de journée ou selon un planning défini ensemble, nous assurons un cadre propre et professionnel pour vos clients et votre personnel.
            </p>
          </div>
        </section>

        {/* Particuliers */}
        <section className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-balance break-words">
                  Nettoyage classique pour les particuliers
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Vous souhaitez déléguer le ménage de votre maison ou de votre appartement? Notre service de nettoyage classique s’adresse aussi aux particuliers à Liège et environs. Nous définissons ensemble la fréquence et le périmètre des passages.
            </p>
          </div>
        </section>

        {/* Pourquoi nous */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <span className="text-xs sm:text-sm font-medium text-primary tracking-wider uppercase">
              Pourquoi nous choisir
            </span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 mb-6 sm:mb-8 text-balance break-words">
              Un interlocuteur, une équipe, une qualité
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-border bg-card">
                <User className="w-8 h-8 sm:w-10 sm:h-10 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Interlocuteur unique</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Vous échangez avec la même personne. Vos besoins sont bien compris et le suivi reste simple et efficace.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-border bg-card">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Relation durable</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Nous privilégions la régularité et la confiance. Nombre de nos clients travaillent avec nous sur le long terme.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-border bg-card sm:col-span-2 lg:col-span-1">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Qualité constante</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Un travail soigné à chaque passage. Nous utilisons des produits adaptés et des méthodes éprouvées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="relative bg-primary rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-3 sm:mb-4">
                  Souhaitez-vous un devis gratuit?
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 mb-4 sm:mb-6">
                  Appelez Lena: <a href="tel:+32492955348" className="underline font-medium hover:text-primary-foreground">+32 492 95 53 48</a>. Réponse sous 2h.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-white/90 transition-colors min-h-[48px] touch-manipulation"
                  aria-label="Demander un devis"
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" />
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
