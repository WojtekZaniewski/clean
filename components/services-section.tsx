import { Home, Building2, Briefcase, BedDouble } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Maison",
      description: "Cuisine qui sent le citron. Salle de bain sans traces. Lit refait. On passe 3 heures minimum, jamais en vitesse.",
    },
    {
      icon: BedDouble,
      title: "Airbnb",
      description: "Vos 5 étoiles sont sûres. On nettoie entre chaque guest. À l'heure. Pas d'excuses.",
    },
    {
      icon: Building2,
      title: "Hôtels",
      description: "14h. Chambres prêtes. On travaille avec 3 hôtels à Liège depuis 2 ans. Zéro retard.",
    },
    {
      icon: Briefcase,
      title: "Bureaux",
      description: "Vos clients arrivent, le bureau sent bon. Pas de miettes, pas de poussière. On vient tôt ou tard. Vous choisissez.",
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <span className="text-sm sm:text-base md:text-lg font-medium text-primary tracking-wider uppercase">Nos services</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4 sm:mt-5 md:mt-6 mb-4 sm:mb-5 md:mb-6 text-balance">
            On nettoie tout type d'espace
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Maison, Airbnb, hôtel ou bureau. Toujours le même soin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group h-full"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-accent rounded-xl flex items-center justify-center mb-5 sm:mb-6 md:mb-8 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
