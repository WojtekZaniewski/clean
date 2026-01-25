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
    <section className="min-h-screen lg:h-screen flex items-center justify-center bg-secondary/30 w-full py-12 sm:py-16 md:py-20 lg:py-0">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary tracking-wider uppercase">Comment ça marche</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl mt-3 sm:mt-4 md:mt-5 lg:mt-6 mb-3 sm:mb-4 md:mb-5 lg:mb-6 break-words px-2 sm:px-0">
            Trois étapes. C'est tout.
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-full sm:max-w-3xl mx-auto px-2 sm:px-4 lg:px-0 break-words">
            Pas compliqué.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-full sm:max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-card border border-border rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-primary" aria-hidden="true" />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-medium text-primary">{step.number}</span>
                <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-3 md:mt-4 mb-2 sm:mb-3 md:mb-4 break-words">{step.title}</h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed break-words">{step.description}</p>
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
