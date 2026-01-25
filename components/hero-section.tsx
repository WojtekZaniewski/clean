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
    <section className="relative overflow-hidden h-screen flex items-start justify-center">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-4 sm:pt-6 md:pt-8 pb-2 sm:pb-3 md:pb-4">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center h-full">
          {/* Left content - appears first on mobile for better priority */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] sm:leading-[1.1] text-balance">
              Rentrez chez vous. Tout brille. Vous n'avez rien fait.
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Plus de ménage le week-end. Plus de stress avant les invités. Juste une maison propre quand vous rentrez.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-primary/90 transition-colors min-h-[44px] sm:min-h-[48px] md:min-h-[52px] touch-manipulation"
                aria-label="Obtenir un devis gratuit"
              >
                Obtenir un devis gratuit
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-border px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-secondary transition-colors min-h-[44px] sm:min-h-[48px] md:min-h-[52px] touch-manipulation"
                aria-label="Découvrir nos services"
              >
                Découvrir nos services
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual - appears second on mobile */}
          <div className="relative order-1 lg:order-2 mb-8 sm:mb-0 h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-full overflow-hidden">
            <div 
              className="relative rounded-2xl sm:rounded-3xl w-full h-full flex items-center justify-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: 'url(/lenusia.png)',
                backgroundPosition: 'top center',
                objectFit: 'cover'
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
