import { FileText, Calendar, Sparkles } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Vous nous contactez",
      description: "Un message ou un appel. On répond vite.",
    },
    {
      number: "02",
      icon: Calendar,
      title: "On fixe un moment",
      description: "Vous choisissez le jour. On s'adapte à vous.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "C'est propre",
      description: "On vient, on nettoie, vous rentrez tranquille.",
    },
  ]

  return (
    <section className="h-screen flex items-center justify-center bg-secondary/30 w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <span className="text-sm sm:text-base md:text-lg font-medium text-primary tracking-wider uppercase">Comment ça marche</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4 sm:mt-5 md:mt-6 mb-4 sm:mb-5 md:mb-6">
            Trois étapes. C'est tout.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Pas compliqué.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center h-full">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 md:mb-8">
                  <step.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-primary" aria-hidden="true" />
                </div>
                <span className="text-sm sm:text-base font-medium text-primary">{step.number}</span>
                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mt-3 sm:mt-4 mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
