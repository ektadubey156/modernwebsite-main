import { Search, TrendingUp, DollarSign, FileText, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Search className="h-10 w-10 text-purple-500" />,
    title: "Keyword Optimization",
    description:
      "Strategic keyword research and implementation to improve visibility and drive targeted traffic to your listings.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-blue-500" />,
    title: "Product Ranking",
    description:
      "Advanced techniques to boost your product rankings and ensure your products appear at the top of search results.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-pink-500" />,
    title: "Paid Ads (Amazon/Flipkart)",
    description:
      "Expertly managed advertising campaigns that maximize ROI and increase visibility on major e-commerce platforms.",
  },
  {
    icon: <FileText className="h-10 w-10 text-green-500" />,
    title: "Listing Enhancement",
    description:
      "Comprehensive optimization of product listings including titles, descriptions, images, and A+ content to boost conversion rates.",
  },
  {
    icon: <Globe className="h-10 w-10 text-yellow-500" />,
    title: "SEO & Branding",
    description:
      "Holistic approach to e-commerce SEO and brand building to establish a strong, recognizable presence in the marketplace.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/30 dark:to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive e-commerce growth solutions designed to maximize your sales and visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-none lift-up">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
