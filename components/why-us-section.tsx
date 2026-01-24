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
    <section id="pourquoi-nous" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-medium text-primary tracking-wider uppercase">Pourquoi nous choisir</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-6 leading-tight text-balance">
              Pourquoi on revient chaque semaine chez les mêmes clients depuis 3 ans
            </h2>
            
            <div className="space-y-5">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
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
