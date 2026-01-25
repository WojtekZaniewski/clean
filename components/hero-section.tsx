import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  const trustPoints = [
    "Service local à Liège",
    "Assurance complète",
    "Horaires flexibles",
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-10 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left content - appears first on mobile for better priority */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] sm:leading-[1.15] text-balance">
              Rentrez chez vous. Tout brille. Vous n'avez rien fait.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-md leading-relaxed">
              Plus de ménage le week-end. Plus de stress avant les invités. Juste une maison propre quand vous rentrez.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 sm:px-9 sm:py-4.5 rounded-full text-lg sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation"
                aria-label="Obtenir un devis gratuit"
              >
                Obtenir un devis gratuit
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-border px-7 py-4 sm:px-9 sm:py-4.5 rounded-full text-lg sm:text-base font-medium hover:bg-secondary transition-colors min-h-[44px] touch-manipulation"
                aria-label="Découvrir nos services"
              >
                Découvrir nos services
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual - appears second on mobile */}
          <div className="relative order-1 lg:order-2 mb-6 sm:mb-0">
            <div 
              className="relative rounded-2xl sm:rounded-3xl aspect-square w-full max-w-md mx-auto sm:max-w-none flex items-center justify-center bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/lenusia.png)'
              }}
              role="img"
              aria-label="Image de Lena's Cleaning - Service de nettoyage professionnel"
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
