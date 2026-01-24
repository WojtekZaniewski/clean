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
    <section id="temoignages" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-primary tracking-wider uppercase">Témoignages</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-4">
            Ce que les gens disent
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Des clients à Liège qui reviennent chaque semaine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-medium text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
