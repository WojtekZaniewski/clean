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
              Rentrez chez vous. Tout brille. Vous n'avez rien fait.
            </h1>

            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Plus de ménage le week-end. Plus de stress avant les invités. Juste une maison propre quand vous rentrez.
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
            <div 
              className="relative rounded-3xl p-8 aspect-square flex items-center justify-center bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/lenusia.png)'
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
