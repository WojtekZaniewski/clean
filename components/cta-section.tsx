import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          {/* Main content */}
          <div className="text-center max-w-2xl mx-auto relative z-10">
            <h2 className="font-serif text-[1.75rem] sm:text-[2.2rem] md:text-[3.3rem] lg:text-[4.4rem] mb-3 sm:mb-4 md:mb-6 leading-tight text-primary-foreground px-2 sm:px-0">
              Vous voulez rentrer dans une maison propre vendredi?
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/90 sm:text-primary-foreground/80 mb-5 sm:mb-6 md:mb-8 leading-relaxed px-2 sm:px-0">
              Appelez Lena: <a href="tel:+32492955348" className="underline font-medium hover:text-primary-foreground transition-colors">+32 492 95 53 48</a>. Réponse en 2h. On commence cette semaine.
            </p>
            <Link
              href="mailto:contact@lenas-cleaning.be"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-7 sm:px-9 py-4 sm:py-4.5 rounded-full text-lg sm:text-base font-medium hover:bg-white/90 transition-colors min-h-[44px] touch-manipulation"
              aria-label="Envoyer un email pour demander un devis"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
