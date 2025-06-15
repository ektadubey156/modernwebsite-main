"use client"


import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import CanvasBackground from "@/components/ui/canvas-background"


export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Canvas Background */}
      <CanvasBackground className="absolute inset-0 w-full h-full -z-10" />


      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background -z-10" />

      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
            <span className="gradient-text">Grow Your E-Commerce Sales</span> by 10X
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            Whitecircle Group helps e-commerce sellers optimize their listings, improve rankings, and drive more sales
            on platforms like Amazon and Flipkart. Our data-driven approach delivers measurable results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg">
              Book Free Growth Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Learn More
            </Button>
          </div>

          <div className="mt-16 glass-card p-6 rounded-2xl lift-up">
            <div className="aspect-video rounded-lg flex items-center justify-center" >
              <img
        src="/hero-image.jpg"
        alt="Example"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
             
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
