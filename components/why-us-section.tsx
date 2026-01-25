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
    <section id="pourquoi-nous" className="min-h-screen lg:h-screen flex items-center justify-center bg-secondary/30 w-full py-12 sm:py-16 md:py-20 lg:py-0 overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-12 items-start lg:items-center w-full">
          <div className="flex flex-col justify-center w-full">
            <span className="text-xs sm:text-sm font-medium text-primary tracking-wider uppercase">Pourquoi nous choisir</span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-2 sm:mt-3 mb-4 sm:mb-5 md:mb-6 leading-tight text-balance break-words">
              Pourquoi on revient chaque semaine chez les mêmes clients depuis 3 ans
            </h2>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-accent rounded-lg flex items-center justify-center">
                    <reason.icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium mb-1 sm:mb-1.5 text-sm sm:text-base md:text-lg lg:text-xl break-words">{reason.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed break-words">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full aspect-square sm:aspect-[4/3] lg:h-full lg:min-h-full overflow-hidden flex items-center justify-center mt-8 lg:mt-0">
            <div 
              className="relative rounded-2xl sm:rounded-3xl w-full h-full flex items-center justify-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: 'url(/lenusia.png)',
                backgroundPosition: 'center center'
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
