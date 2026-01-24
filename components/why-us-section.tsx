import { MapPin, Clock, Leaf, Sparkles, Heart } from "lucide-react"

export default function WhyUsSection() {
  const reasons = [
    {
      icon: MapPin,
      title: "On est d'ici",
      description: "On connaît Liège. Toujours la même équipe chez vous. Pas de sous-traitance.",
    },
    {
      icon: Clock,
      title: "On arrive à l'heure",
      description: "Vous savez quand on vient. On fait le travail. Quand on part, c'est propre.",
    },
    {
      icon: Leaf,
      title: "Produits sains",
      description: "Efficaces mais pas agressifs. Bon pour vous, bon pour la planète.",
    },
    {
      icon: Sparkles,
      title: "On ne laisse rien",
      description: "Les coins, les plinthes, les endroits oubliés. On nettoie tout.",
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
              Pourquoi les gens nous font confiance
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              On fait le travail bien. C'est simple.
            </p>
            
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
