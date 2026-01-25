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
    <section className="py-12 md:py-16 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <span className="text-xs sm:text-sm font-medium text-primary tracking-wider uppercase">Comment ça marche</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mt-3 sm:mt-4 mb-3 sm:mb-4">
            Trois étapes. C'est tout.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4 sm:px-0">
            Pas compliqué.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" aria-hidden="true" />
                </div>
                <span className="text-xs font-medium text-primary">{step.number}</span>
                <h3 className="font-semibold text-base sm:text-lg mt-2 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
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
