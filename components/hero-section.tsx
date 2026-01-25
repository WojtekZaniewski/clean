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
    <section className="relative overflow-hidden h-screen flex items-center justify-center">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center w-full h-full py-4 sm:py-6 md:py-8">
          {/* Left content - appears first on mobile for better priority */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 order-2 lg:order-1 flex flex-col justify-center h-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] sm:leading-[1.15]">
              Rentrez chez vous.<br />
              Tout brille.<br />
              Vous n'avez rien fait.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Plus de ménage le week-end. Plus de stress avant les invités. Juste une maison propre quand vous rentrez.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-primary/90 transition-colors min-h-[40px] sm:min-h-[44px] md:min-h-[48px] touch-manipulation"
                aria-label="Obtenir un devis gratuit"
              >
                Obtenir un devis gratuit
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-border px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-secondary transition-colors min-h-[40px] sm:min-h-[44px] md:min-h-[48px] touch-manipulation"
                aria-label="Découvrir nos services"
              >
                Découvrir nos services
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base text-muted-foreground">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual - appears second on mobile */}
          <div className="relative order-1 lg:order-2 mb-6 sm:mb-0 h-full flex items-center justify-center">
            <div 
              className="relative rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] w-full h-full max-h-full flex items-center justify-center bg-contain bg-no-repeat bg-center overflow-hidden"
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
