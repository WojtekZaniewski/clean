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
    <section id="pourquoi-nous" className="py-12 md:py-16 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm sm:text-base font-medium text-primary tracking-wider uppercase">Pourquoi nous choisir</span>
            <h2 className="font-serif text-[1.75rem] sm:text-[2.2rem] md:text-[3.3rem] mt-3 sm:mt-4 mb-5 sm:mb-6 md:mb-8 leading-tight text-balance">
              Pourquoi on revient chaque semaine chez les mêmes clients depuis 3 ans
            </h2>
            
            <div className="space-y-4 sm:space-y-5">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-accent rounded-lg flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium mb-1 text-lg sm:text-xl">{reason.title}</h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{reason.description}</p>
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
