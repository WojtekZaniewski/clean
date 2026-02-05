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
  const [current, setCurrent] = useState(0)

  // Start from image 3, then 4–9, 11–13, then 1–2 (sans 10.jpg)
  const images = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 1, 2]

  // Track current slide
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    onSelect() // Set initial state

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  // Auto-play carousel
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [api])
  
  // Scroll to image 3 (index 0) on mount
  useEffect(() => {
    if (api) {
      api.scrollTo(0, false) // false = no animation on initial load
      setCurrent(0)
    }
  }, [api])
  const trustPoints = [
    "Service local Liège",
    "Assurance complète",
    "Horaires flexibles",
  ]

  return (
    <section className="relative overflow-hidden lg:h-screen">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 sm:py-8 md:py-12 lg:h-full lg:flex lg:items-start lg:pt-16 lg:pb-4">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start w-full">
          {/* Left content - appears first on mobile for better priority */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 order-2 lg:order-1 flex flex-col lg:ml-16 xl:ml-20">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.2] sm:leading-[1.15] lg:leading-[1.1] break-words">
              Société de nettoyage Liège
            </h1>
            <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground leading-tight break-words">
              Rentrez chez vous.
              <br />
              Tout brille.
              <br />
              Vous n'avez rien fait.
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-full lg:max-w-2xl leading-relaxed break-words">
              Lena&apos;s Cleaning est la société de nettoyage Liège qui prend en charge votre domicile, votre logement Airbnb, vos bureaux
              et, via notre service de <strong>nettoyage à sec à Liège</strong>, vos textiles délicats. Plus de ménage le week-end, plus de stress
              avant les invités: une maison propre quand vous rentrez.
            </p>

            <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4 w-full">
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

            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <span className="break-words">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual - appears second on mobile */}
          <div className="relative order-1 lg:order-2 mb-4 sm:mb-6 md:mb-8 lg:mb-0 w-full aspect-square sm:aspect-[4/3] lg:aspect-[4/3]">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                dragFree: false,
                containScroll: "trimSnaps",
              }}
              className="absolute inset-0 w-full h-full"
            >
              <CarouselContent className="h-full -ml-0">
                {images.map((num, index) => (
                  <CarouselItem key={num} className="pl-0 basis-full h-full">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={`/${num}.jpg`}
                        alt={`Société de nettoyage Liège, photo ${num}`}
                        fill
                        className="object-cover"
                        priority={num === 3}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:left-4 md:-left-12 z-10 bg-background/80 backdrop-blur-sm hover:bg-background" />
              <CarouselNext className="right-2 sm:right-4 md:-right-12 z-10 bg-background/80 backdrop-blur-sm hover:bg-background" />
              
              {/* Pagination dots - desktop only */}
              <div className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-10 gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      current === index
                        ? 'bg-primary w-6'
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Aller à la photo ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
