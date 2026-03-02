import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import SocieteNettoyageLiegeSection from "@/components/societe-nettoyage-liege-section"
import ServicesSection from "@/components/services-section"
import HomePricingSection from "@/components/home-pricing-section"
import WhyUsSection from "@/components/why-us-section"
import HomeZonesSection from "@/components/home-zones-section"
import TestimonialsSection from "@/components/testimonials-section"
import HowItWorksSection from "@/components/how-it-works-section"
import FaqSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'une société de nettoyage à Liège?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une société de nettoyage à Liège est une entreprise qui propose des prestations de nettoyage pour particuliers et professionnels : ménage à domicile, nettoyage de logements Airbnb, bureaux, hôtels et commerces. Lena's Cleaning est une société de nettoyage Liège intervenant à Liège et alentours avec une équipe locale et un interlocuteur unique.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi choisir une société de nettoyage à Liège?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choisir une société de nettoyage Liège comme Lena's Cleaning permet de bénéficier d'un service local, réactif (réponse sous 2h), avec des horaires flexibles et un devis gratuit. Nous intervenons pour la maison, l'Airbnb, les bureaux et les hôtels à Liège, Herstal, Seraing et environs.",
      },
    },
    {
      "@type": "Question",
      name: "Comment contacter une société de nettoyage Liège?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour contacter notre société de nettoyage Liège, appelez le 0492 95 53 48 ou envoyez un email à cleaningserviceslena@gmail.com. Nous répondons sous 2h et proposons un devis gratuit sans engagement.",
      },
    },
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <HeroSection />
      <SocieteNettoyageLiegeSection />
      <ServicesSection />
      <HomePricingSection />
      <WhyUsSection />
      <HomeZonesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FaqSection />
      <CTASection />
      <Footer />
    </main>
  )
}
