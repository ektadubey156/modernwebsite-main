import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Whitecircle Group transformed our Amazon business. Their keyword optimization strategy helped us increase our sales by 215% in just three months.",
    author: "Sarah Johnson",
    role: "CEO, HomeStyle Products",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "The team at Whitecircle Group knows e-commerce inside and out. Their listing enhancement service completely transformed our product pages and boosted our conversion rate by 45%.",
    author: "Michael Chen",
    role: "Founder, TechGadgets",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Their paid advertising strategy was a game-changer for our Flipkart store. We're now seeing a 300% ROAS and our brand visibility has never been better.",
    author: "Priya Sharma",
    role: "Marketing Director, FashionHub",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-secondary/30 dark:to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-none lift-up">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                <p className="mb-6 text-lg">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      crossOrigin="anonymous"
                    />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-heading font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
