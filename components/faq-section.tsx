"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Qu'est-ce qu'une société de nettoyage à Liège?",
    answer:
      "Une société de nettoyage à Liège est une entreprise qui propose des prestations de nettoyage pour particuliers et professionnels : ménage à domicile, nettoyage de logements Airbnb, bureaux, hôtels et commerces. Lena's Cleaning est une société de nettoyage Liège intervenant à Liège et alentours avec une équipe locale et un interlocuteur unique.",
  },
  {
    question: "Pourquoi choisir une société de nettoyage à Liège?",
    answer:
      "Choisir une société de nettoyage Liège comme Lena's Cleaning permet de bénéficier d'un service local, réactif (réponse sous 2h), avec des horaires flexibles et un devis gratuit. Nous intervenons pour la maison, l'Airbnb, les bureaux et les hôtels à Liège, Herstal, Seraing et environs.",
  },
  {
    question: "Comment contacter une société de nettoyage Liège?",
    answer:
      "Pour contacter notre société de nettoyage Liège, appelez le 0492 95 53 48 ou envoyez un email à cleaningserviceslena@gmail.com. Nous répondons sous 2h et proposons un devis gratuit sans engagement.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function FaqSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16" aria-labelledby="faq-heading">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <h2
            id="faq-heading"
            className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-balance break-words mb-6 sm:mb-8 text-center"
          >
            Société de nettoyage Liège: questions fréquentes
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
