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
    <section id="temoignages" className="h-screen flex items-center justify-center w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <span className="text-sm sm:text-base md:text-lg font-medium text-primary tracking-wider uppercase">Témoignages</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4 sm:mt-5 md:mt-6 mb-4 sm:mb-5 md:mb-6">
            Ce que les gens disent
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Des clients à Liège qui reviennent chaque semaine.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:shadow-xl transition-shadow h-full">
              <div className="flex gap-1 sm:gap-1.5 mb-4 sm:mb-5 md:mb-6" aria-label="5 étoiles">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-5 sm:mb-6 md:mb-8">{testimonial.quote}</p>
              <div>
                <p className="font-medium text-base sm:text-lg md:text-xl">{testimonial.author}</p>
                <p className="text-sm sm:text-base text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
