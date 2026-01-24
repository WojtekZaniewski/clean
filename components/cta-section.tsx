import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-primary rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          {/* Main content */}
          <div className="text-center max-w-2xl mx-auto relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-primary-foreground">
              Vous voulez rentrer dans une maison propre vendredi?
            </h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Appelez Lena: +32 492 95 53 48. Réponse en 2h. On commence cette semaine.
            </p>
            <Link
              href="mailto:contact@lenas-cleaning.be"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
