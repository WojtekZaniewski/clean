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
      name: "Qu'est-ce qu'une société de nettoyage à Liège ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une société de nettoyage à Liège est une entreprise locale qui assure le nettoyage de maisons, appartements, bureaux et logements Airbnb pour les particuliers et professionnels. Lena's Cleaning Services est une société de nettoyage à Liège avec une équipe locale, un interlocuteur unique (Lena) et des produits écologiques. Nous intervenons à Liège et dans toutes les communes environnantes.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre une société et une entreprise de nettoyage à Liège ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les termes 'société de nettoyage' et 'entreprise de nettoyage' à Liège désignent la même chose : une structure professionnelle qui propose des services de nettoyage. Lena's Cleaning est à la fois une société et une entreprise de nettoyage à Liège, spécialisée dans le nettoyage résidentiel et commercial.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte le nettoyage d'une maison à Liège ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le nettoyage classique d'une maison à Liège est facturé 1,50 €/m². Un nettoyage en profondeur revient à 2,50 €/m². Pour un appartement de 80 m², comptez environ 120 € en nettoyage classique. Nous proposons aussi des abonnements mensuels (BASIC à 499 €/mois, PREMIUM à 749 €/mois). Devis gratuit en 48h.",
      },
    },
    {
      "@type": "Question",
      name: "Nettoyez-vous les maisons très sales à Liège ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous intervenons pour le nettoyage de maisons très sales à Liège : logements négligés, remises en état après succession, après déménagement ou après travaux. Notre service de nettoyage en profondeur est conçu pour les situations difficiles. Appelez le 0492 95 53 48 pour un devis personnalisé.",
      },
    },
    {
      "@type": "Question",
      name: "Dans quelles zones intervenez-vous à Liège ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous intervenons dans toute la région liégeoise : Liège centre, Guillemins, Outremeuse, Herstal, Seraing, Ans, Grâce-Hollogne, Flémalle, Chaudfontaine et Beyne-Heusay. Les frais de déplacement sont inclus dans notre tarif pour toutes ces zones.",
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
