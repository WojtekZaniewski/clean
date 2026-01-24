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
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-balance">
              Rentrez chez vous.
              <br />
              <span className="text-primary">Respirez.</span>
              <br />
              Tout est impeccable.
            </h1>

            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              On nettoie votre maison, Airbnb ou bureau. Vous rentrez, tout est propre.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Obtenir un devis gratuit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
              >
                Découvrir nos services
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-accent/50 to-secondary rounded-3xl p-8 aspect-square flex items-center justify-center">
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 bg-card rounded-xl p-4 shadow-lg border border-border/50">
                <p className="text-xs text-muted-foreground mb-1">Prochain nettoyage</p>
                <p className="font-medium">Demain, 9h00</p>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-card rounded-xl p-4 shadow-lg border border-border/50">
                <p className="text-xs text-muted-foreground mb-1">Satisfaction client</p>
                <p className="font-medium text-primary">100% positifs</p>
              </div>

              {/* Central illustration */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src="/lenusia.png"
                    alt="Lensusia"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-serif text-lg text-foreground/80">Un espace qui respire</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
