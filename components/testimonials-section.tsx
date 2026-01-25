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
    <section id="temoignages" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <span className="text-sm sm:text-base font-medium text-primary tracking-wider uppercase">Témoignages</span>
          <h2 className="font-serif text-[1.75rem] sm:text-[2.2rem] md:text-[3.3rem] mt-3 sm:mt-4 mb-3 sm:mb-4">
            Ce que les gens disent
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto px-4 sm:px-0">
            Des clients à Liège qui reviennent chaque semaine.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-3 sm:mb-4" aria-label="5 étoiles">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-medium text-base sm:text-lg">{testimonial.author}</p>
                <p className="text-sm sm:text-base text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
