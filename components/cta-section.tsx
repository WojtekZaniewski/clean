import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section id="contact" className="lg:h-screen flex items-center justify-center w-full py-6 sm:py-8 md:py-12 lg:py-0">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full">
        <div className="relative bg-primary rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2rem] p-5 sm:p-6 md:p-8 lg:p-16 xl:p-20 overflow-hidden lg:h-full lg:flex lg:items-center lg:justify-center">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          {/* Main content */}
          <div className="text-center max-w-full sm:max-w-4xl mx-auto relative z-10 w-full py-2 sm:py-3 md:py-4 lg:py-0">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl mb-2 sm:mb-3 md:mb-4 lg:mb-8 leading-tight text-primary-foreground px-2 sm:px-4 lg:px-0 break-words">
              Vous voulez rentrer et que tout soit propre?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-primary-foreground/90 sm:text-primary-foreground/80 mb-2 sm:mb-3 leading-relaxed px-2 sm:px-4 lg:px-0 break-words">
              Appelez Lena: <a href="tel:+32492955348" className="underline font-medium hover:text-primary-foreground transition-colors break-all">+32 492 95 53 48</a>. Réponse en 2h.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-primary-foreground/80 mb-3 sm:mb-4 md:mb-5 lg:mb-10 leading-relaxed px-2 sm:px-4 lg:px-0 break-words">
              Devis gratuit et sans engagement. On discute de vos besoins, on vous propose un tarif clair, et vous décidez.
            </p>
            <Link
              href="mailto:cleaningserviceslena@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-14 lg:py-7 rounded-full text-sm sm:text-base md:text-lg lg:text-2xl font-medium hover:bg-white/90 transition-colors min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[64px] w-full sm:w-auto touch-manipulation"
              aria-label="Envoyer un email pour demander un devis"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
