import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Je rentre du travail, c'est propre. Ça change ma semaine.",
      author: "Sophie M.",
      location: "Liège Centre",
    },
    {
      quote:
        "J'ai 4 Airbnb. Lena s'occupe de tout. Mes voyageurs sont contents. Moi aussi.",
      author: "Marc D.",
      location: "Guillemins",
    },
    {
      quote:
        "Trois enfants, un chien. Chaque vendredi, on retrouve une maison propre. Merci !",
      author: "Julie & Thomas",
      location: "Outremeuse",
    },
    {
      quote:
        "Le bureau est propre chaque matin. On n'y pense même plus.",
      author: "Pierre L.",
      location: "Médiacité",
    },
  ]

  return (
    <section id="temoignages" className="min-h-screen lg:h-screen flex items-center justify-center w-full py-12 sm:py-16 md:py-20 lg:py-0">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary tracking-wider uppercase">Témoignages</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl mt-3 sm:mt-4 md:mt-5 lg:mt-6 mb-3 sm:mb-4 md:mb-5 lg:mb-6 break-words px-2 sm:px-0">
            Ce que les gens disent
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-full sm:max-w-3xl mx-auto px-2 sm:px-4 lg:px-0 break-words">
            Des clients à Liège qui reviennent chaque semaine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-xl transition-shadow">
              <div className="flex gap-1 sm:gap-1.5 mb-3 sm:mb-4 md:mb-5 lg:mb-6" aria-label="5 étoiles">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 fill-primary text-primary flex-shrink-0" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-8 break-words">{testimonial.quote}</p>
              <div>
                <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xl break-words">{testimonial.author}</p>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
