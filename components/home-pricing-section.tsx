import Link from "next/link"

export default function HomePricingSection() {
  return (
    <section id="tarifs" className="w-full py-8 sm:py-10 md:py-12 lg:py-16 bg-secondary/20">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
            Nos tarifs de nettoyage à Liège
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            En tant que société de nettoyage à Liège, nous proposons des formules claires pour le{" "}
            <strong>nettoyage maison à Liège</strong> : nettoyage ponctuel et abonnements mensuels BASIC et PREMIUM. Devis gratuit pour toute
            demande spécifique.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 max-w-4xl mx-auto overflow-x-auto rounded-xl border border-border bg-card/40">
          <table className="min-w-full text-left text-xs sm:text-sm text-muted-foreground">
            <thead className="bg-secondary/60 text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Formule</th>
                <th className="px-4 py-3 font-semibold">Détail</th>
                <th className="px-4 py-3 font-semibold">Tarif</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border/60">
                <td className="px-4 py-2.5 font-medium text-foreground">Nettoyage ponctuel (One time cleaning)</td>
                <td className="px-4 py-2.5">
                  1 salle de bain, 1 chambre, 1 cuisine, 1 pièce de vie – idéal pour un <strong>service nettoyage à Liège</strong> complet avant un
                  événement ou après un emménagement.
                </td>
                <td className="px-4 py-2.5 font-medium text-foreground">200&nbsp;€</td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-2.5 font-medium text-foreground">Pièce supplémentaire (option)</td>
                <td className="px-4 py-2.5">Chambre, salle de bain ou pièce de vie en plus du forfait ponctuel.</td>
                <td className="px-4 py-2.5 font-medium text-foreground">20&nbsp;€ / pièce</td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-2.5 font-medium text-foreground">Abonnement mensuel BASIC</td>
                <td className="px-4 py-2.5">
                  4 nettoyages classiques par mois (1 par semaine) : dépoussiérage, vitres intérieures,{" "}
                  <strong>nettoyage de cuisine</strong> (hors intérieur des placards et frigo), salle de bain, aspiration et lavage des sols.
                </td>
                <td className="px-4 py-2.5 font-medium text-foreground">499&nbsp;€ / mois</td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-2.5 font-medium text-foreground">Abonnement mensuel PREMIUM</td>
                <td className="px-4 py-2.5">
                  4 nettoyages en profondeur par mois (1 par semaine). Inclut BASIC + intérieur des placards et frigo, lessive, changement
                  des draps, plinthes, cadres de portes et fenêtres, vaisselle (option parfum d&apos;ambiance).
                </td>
                <td className="px-4 py-2.5 font-medium text-foreground">749&nbsp;€ / mois</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-3xl mx-auto mt-4 sm:mt-5 space-y-2 text-xs sm:text-sm text-muted-foreground text-center">
          <p>
            Minimum 3 heures pour le ménage. Déplacement gratuit dans Liège et 15 km autour. Les surfaces très grandes ou configurations
            particulières peuvent nécessiter une adaptation du forfait, toujours confirmée sur devis avant intervention.
          </p>
          <p>
            Le nettoyage ne comprend pas les caves/garages, greniers utilisés comme stockage ni les espaces extérieurs (toit, terrasse,
            jardin).
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center mt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-manipulation"
            >
              Demander un devis personnalisé
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

