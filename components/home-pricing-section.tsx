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
            Prix clairs, pas de surprise. Devis gratuit pour toute demande spécifique.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 max-w-4xl mx-auto overflow-x-auto rounded-xl border border-border bg-card/40">
          <table className="min-w-full text-left text-xs sm:text-sm text-muted-foreground">
            <thead className="bg-secondary/60 text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Service</th>
                <th className="px-4 py-3 font-semibold">Tarif (sur devis)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border/60">
                <td className="px-4 py-2.5">Ménage régulier</td>
                <td className="px-4 py-2.5">Sur devis après visite ou échange</td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-2.5">Ménage ponctuel</td>
                <td className="px-4 py-2.5">Sur devis selon la prestation</td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-2.5">Nettoyage de bureaux</td>
                <td className="px-4 py-2.5">Sur devis selon surface et fréquence</td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-2.5">Nettoyage Airbnb (studio)</td>
                <td className="px-4 py-2.5">Sur devis par type de logement</td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-2.5">Nettoyage Airbnb (T2+)</td>
                <td className="px-4 py-2.5">Sur devis par type de logement</td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-2.5">Nettoyage à sec (chemise)</td>
                <td className="px-4 py-2.5">Sur devis selon volume</td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="px-4 py-2.5">Nettoyage à sec (costume)</td>
                <td className="px-4 py-2.5">Sur devis selon volume</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-3xl mx-auto mt-4 sm:mt-5 space-y-2 text-xs sm:text-sm text-muted-foreground text-center">
          <p>
            Minimum 3 heures pour le ménage. Déplacement gratuit dans Liège et 15 km autour. Les prix exacts sont confirmés sur devis avant
            intervention.
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

