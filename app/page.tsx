import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PainReliefSection from "@/components/pain-relief-section"
import ServicesSection from "@/components/services-section"
import WhyUsSection from "@/components/why-us-section"
import TestimonialsSection from "@/components/testimonials-section"
import HowItWorksSection from "@/components/how-it-works-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PainReliefSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  )
}
