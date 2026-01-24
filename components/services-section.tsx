import { Home, Building2, Briefcase, BedDouble } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Maison",
      description: "On nettoie tout. Cuisine, salle de bain, chambres. Vous rentrez, c'est propre.",
    },
    {
      icon: BedDouble,
      title: "Airbnb",
      description: "Vos voyageurs arrivent dans un logement impeccable. On gère tout entre deux réservations.",
    },
    {
      icon: Building2,
      title: "Hôtels",
      description: "Chambres prêtes à temps. Chaque jour. Vos clients reviennent.",
    },
    {
      icon: Briefcase,
      title: "Bureaux",
      description: "Un bureau propre, c'est une équipe qui travaille mieux. On passe quand ça vous arrange.",
    },
  ]

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-primary tracking-wider uppercase">Nos services</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-4 text-balance">
            On nettoie tout type d'espace
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Maison, Airbnb, hôtel ou bureau. Toujours le même soin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
