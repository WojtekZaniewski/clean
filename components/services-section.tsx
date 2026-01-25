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
    <section id="services" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <span className="text-xs sm:text-sm font-medium text-primary tracking-wider uppercase">Nos services</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mt-3 sm:mt-4 mb-3 sm:mb-4 text-balance">
            On nettoie tout type d'espace
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4 sm:px-0">
            Maison, Airbnb, hôtel ou bureau. Toujours le même soin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
