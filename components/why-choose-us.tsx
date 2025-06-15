import { Brain, Users, Award, BarChart3 } from "lucide-react"

const reasons = [
  {
    icon: <Brain className="h-12 w-12 text-purple-500" />,
    title: "AI-Driven Strategy",
    description:
      "Our proprietary AI algorithms analyze market trends and competitor data to develop winning strategies for your e-commerce business.",
  },
  {
    icon: <Users className="h-12 w-12 text-blue-500" />,
    title: "Experienced Team",
    description:
      "Our team of e-commerce experts has years of experience helping sellers succeed on platforms like Amazon and Flipkart.",
  },
  {
    icon: <Award className="h-12 w-12 text-pink-500" />,
    title: "Proven Results",
    description:
      "We've helped hundreds of sellers achieve significant growth in sales, rankings, and visibility on major e-commerce platforms.",
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-green-500" />,
    title: "Transparent Reporting",
    description:
      "We provide detailed, easy-to-understand reports that show exactly how our strategies are impacting your business.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to helping your e-commerce business reach its full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-6">
              <div className="glass-card p-4 rounded-xl h-fit">
                <div className="p-2">{reason.icon}</div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
