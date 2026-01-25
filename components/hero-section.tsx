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
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center h-full">
          {/* Left content - appears first on mobile for better priority */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 order-2 lg:order-1">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.15] sm:leading-[1.1] text-balance">
              Rentrez chez vous. Tout brille. Vous n'avez rien fait.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Plus de ménage le week-end. Plus de stress avant les invités. Juste une maison propre quand vous rentrez.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-full text-base sm:text-lg md:text-xl font-medium hover:bg-primary/90 transition-colors min-h-[52px] sm:min-h-[56px] md:min-h-[60px] touch-manipulation"
                aria-label="Obtenir un devis gratuit"
              >
                Obtenir un devis gratuit
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-border px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-full text-base sm:text-lg md:text-xl font-medium hover:bg-secondary transition-colors min-h-[52px] sm:min-h-[56px] md:min-h-[60px] touch-manipulation"
                aria-label="Découvrir nos services"
              >
                Découvrir nos services
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-5 md:gap-6 pt-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual - appears second on mobile */}
          <div className="relative order-1 lg:order-2 mb-8 sm:mb-0 h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-full">
            <div 
              className="relative rounded-2xl sm:rounded-3xl w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
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
