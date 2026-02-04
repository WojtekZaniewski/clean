export default function HomeZonesSection() {
  return (
    <section id="zones" className="w-full bg-secondary/30 py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
            Notre société de nettoyage intervient à Liège et alentours
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Nous intervenons dans tout Liège et les communes environnantes pour vos besoins en nettoyage classique et{" "}
            <strong>nettoyage à sec à Liège</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-sm sm:text-base text-muted-foreground text-left sm:text-left md:text-left lg:text-left">
            <div>
              <p className="font-medium text-foreground">Liège Centre</p>
              <p>Féronstrée, Carré, Saint-Lambert, Cathédrale</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Guillemins</p>
              <p>Quartier de la gare, idéal pour les professionnels</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Outremeuse</p>
              <p>Service rapide dans tout le quartier</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Herstal &amp; Seraing</p>
              <p>Couverture complète pour maisons et bureaux</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Ans &amp; Grâce-Hollogne</p>
              <p>Interventions régulières ou ponctuelles</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Flémalle &amp; Chaudfontaine</p>
              <p>Sur demande, selon vos projets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

