import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="relative bg-primary rounded-2xl sm:rounded-3xl md:rounded-[2rem] p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          {/* Main content */}
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-tight text-primary-foreground px-2 sm:px-0">
              Vous voulez rentrer dans une maison propre vendredi?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary-foreground/90 sm:text-primary-foreground/80 mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed px-2 sm:px-0">
              Appelez Lena: <a href="tel:+32492955348" className="underline font-medium hover:text-primary-foreground transition-colors">+32 492 95 53 48</a>. Réponse en 2h. On commence cette semaine.
            </p>
            <Link
              href="mailto:contact@lenas-cleaning.be"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-5 sm:px-12 sm:py-6 md:px-14 md:py-7 rounded-full text-lg sm:text-xl md:text-2xl font-medium hover:bg-white/90 transition-colors min-h-[56px] sm:min-h-[60px] md:min-h-[64px] touch-manipulation"
              aria-label="Envoyer un email pour demander un devis"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
