import Hero from "@/components/hero"
import Services from "@/components/services"
import TechStack from "@/components/tech-stack"
import Statistics from "@/components/statistics"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <Hero />
      <Services />
      <TechStack />
      <Statistics />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  )
}