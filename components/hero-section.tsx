'use client'

import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [api, setApi] = useState<any>(null)

  // Auto-play carousel
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [api])

  // Start from image 3, then continue with 4-13, then 1-2
  const images = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2]
  
  // Scroll to image 3 (index 0) on mount
  useEffect(() => {
    if (api) {
      api.scrollTo(0, false) // false = no animation on initial load
    }
  }, [api])
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
          <div className="relative order-1 lg:order-2 mb-8 sm:mb-0 w-full aspect-square sm:aspect-[4/3] lg:h-full lg:min-h-full overflow-hidden">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                dragFree: false,
                containScroll: "trimSnaps",
              }}
              className="w-full h-full"
            >
              <CarouselContent className="h-full -ml-0">
                {images.map((num) => (
                  <CarouselItem key={num} className="pl-0 basis-full h-full">
                    <div className="relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                      <Image
                        src={`/${num}.jpg`}
                        alt={`Lena's Cleaning - Image ${num}`}
                        fill
                        className="object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
                        priority={num === 3}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:left-4 md:-left-12 z-10 bg-background/80 backdrop-blur-sm hover:bg-background" />
              <CarouselNext className="right-2 sm:right-4 md:-right-12 z-10 bg-background/80 backdrop-blur-sm hover:bg-background" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
