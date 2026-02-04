import Link from "next/link"
import { Home, Building2, Briefcase, BedDouble, Droplets } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Maison",
      description:
        "Cuisine qui sent le citron. Salle de bain sans traces. Lit refait. On passe 3 heures minimum, jamais en vitesse.",
    },
    {
      icon: BedDouble,
      title: "Airbnb",
      description: "Vos 5 étoiles sont sûres. On nettoie entre chaque guest. À l'heure. Pas d'excuses.",
    },
    {
      icon: Building2,
      title: "Hôtels",
      description:
        "Les chambres sont toujours prêtes à l'heure, quoi qu'il arrive. Ponctualité et précision sont les maîtres mots qui décrivent le mieux notre entreprise auprès de nos clients.",
    },
    {
      icon: Briefcase,
      title: "Bureaux",
      description:
        "Vos clients arrivent, le bureau sent bon. Pas de miettes, pas de poussière. On vient tôt ou tard. Vous choisissez.",
    },
    {
      icon: Droplets,
      title: "Nettoyage à sec",
      description:
        "Costumes, robes, rideaux, textiles délicats. On récupère chez vous, on nettoie à sec, on livre. Vos vêtements reviennent impeccables.",
      href: "/nettoyage-a-sec.html",
    },
  ]

  const firstRow = services.slice(0, 3)
  const secondRow = services.slice(3)

  return (
    <section id="services" className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full">
        <div className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-16">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary tracking-wider uppercase">Nos services</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl mt-2 sm:mt-3 md:mt-4 lg:mt-6 mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-balance break-words px-2 sm:px-0">
            On nettoie tout type d'espace
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-full sm:max-w-3xl mx-auto px-2 sm:px-4 lg:px-0 break-words">
            Maison, Airbnb, hôtel ou bureau. Toujours le même soin.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-full sm:max-w-3xl mx-auto px-2 sm:px-4 lg:px-0 break-words mt-2 sm:mt-3">
            En tant que société de nettoyage Liège, nous intervenons à Liège et alentours. Passage ponctuel ou contrat régulier, nous nous adaptons à vos besoins et à votre emploi du temps.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-full sm:max-w-3xl mx-auto px-2 sm:px-4 lg:px-0 break-words mt-2 sm:mt-3">
            En savoir plus sur nos services de{" "}
            <Link href="/nettoyage-classique.html" className="underline underline-offset-2 hover:text-foreground">
              nettoyage classique à Liège
            </Link>{" "}
            et de{" "}
            <Link href="/nettoyage-a-sec.html" className="underline underline-offset-2 hover:text-foreground">
              nettoyage à sec à Liège
            </Link>
            .
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {firstRow.map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-10 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 bg-accent rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-8 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 break-words">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed break-words">
                  {service.description}{" "}
                  {service.href && (
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-sm sm:text-base text-primary hover:underline underline-offset-2 ml-1"
                    >
                      En savoir plus →
                    </Link>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {secondRow.map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-10 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 bg-accent rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-8 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 break-words">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed break-words">
                  {service.description}{" "}
                  {service.href && (
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-sm sm:text-base text-primary hover:underline underline-offset-2 ml-1"
                    >
                      En savoir plus →
                    </Link>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
