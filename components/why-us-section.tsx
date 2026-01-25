import { MapPin, Clock, Leaf, Sparkles, Heart } from "lucide-react"

export default function WhyUsSection() {
  const reasons = [
    {
      icon: MapPin,
      title: "On est d'ici",
      description: "Lena et son équipe. Pas de sous-traitance. On se connaît par nos prénoms après 2 visites.",
    },
    {
      icon: Clock,
      title: "On arrive à l'heure",
      description: "10h = 10h. Pas 10h15. On prévient 30 min avant si imprévu. Ça n'arrive jamais.",
    },
    {
      icon: Leaf,
      title: "Produits sains",
      description: "Produits qui nettoient vraiment. Sans odeur chimique qui reste 3 jours. Bon pour vos enfants et vos animaux.",
    },
    {
      icon: Sparkles,
      title: "On ne laisse rien",
      description: "Les coins, les plinthes, derrière le frigo. Les endroits où personne ne regarde mais vous savez qu'ils sont sales.",
    },
    {
      icon: Heart,
      title: "Facile à joindre",
      description: "Vous parlez à Lena. Pas à un robot. Une vraie personne qui vous connaît.",
    },
  ]

  return (
    <section id="pourquoi-nous" className="h-screen flex items-center justify-center bg-secondary/30 w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center h-full">
          <div>
            <span className="text-sm sm:text-base md:text-lg font-medium text-primary tracking-wider uppercase">Pourquoi nous choisir</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4 sm:mt-5 md:mt-6 mb-8 sm:mb-10 md:mb-12 leading-tight text-balance">
              Pourquoi on revient chaque semaine chez les mêmes clients depuis 3 ans
            </h2>
            
            <div className="space-y-6 sm:space-y-7 md:space-y-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4 sm:gap-5 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent rounded-lg flex items-center justify-center">
                    <reason.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl">{reason.title}</h3>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            
          </div>
        </div>
      </div>
    </section>
  )
}
