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
    <section className="relative overflow-hidden min-h-screen lg:h-screen">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 md:py-20 lg:h-full lg:flex lg:items-start lg:pt-16 lg:pb-4">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-10 items-start w-full">
          {/* Left content - appears first on mobile for better priority */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1 flex flex-col lg:ml-16 xl:ml-20">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl leading-[1.2] sm:leading-[1.15] lg:leading-[1.1] break-words">
              Rentrez chez vous.
              <br />
              Tout brille.
              <br />
              Vous n'avez rien fait.
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-full lg:max-w-2xl leading-relaxed break-words">
              Plus de ménage le week-end. Plus de stress avant les invités. Juste une maison propre quand vous rentrez.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 w-full">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-primary/90 transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                aria-label="Obtenir un devis gratuit"
              >
                Obtenir un devis gratuit
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-border px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-secondary transition-colors min-h-[48px] w-full sm:w-auto touch-manipulation"
                aria-label="Découvrir nos services"
              >
                Découvrir nos services
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <span className="break-words">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual - appears second on mobile */}
          <div className="relative order-1 lg:order-2 mb-8 sm:mb-0 w-full aspect-square sm:aspect-[4/3] lg:h-full lg:min-h-full overflow-hidden flex items-center justify-center">
            <div 
              className="relative rounded-2xl sm:rounded-3xl md:rounded-[2rem] w-full h-full max-w-full max-h-full flex items-center justify-center bg-contain bg-no-repeat bg-center"
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
