import { Zap, Shield, Smartphone, Globe, BarChart, Layers } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-10 w-10 text-purple-500" />,
    title: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring your users have a seamless experience every time.",
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-500" />,
    title: "Secure by Design",
    description: "Built with security in mind, protecting your data and your users with industry-leading practices.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-pink-500" />,
    title: "Mobile Optimized",
    description: "Fully responsive design ensures perfect performance across all devices and screen sizes.",
  },
  {
    icon: <Globe className="h-10 w-10 text-green-500" />,
    title: "Global Reach",
    description: "Deploy to edge locations worldwide for the fastest possible access from anywhere.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-yellow-500" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our comprehensive analytics and reporting tools.",
  },
  {
    icon: <Layers className="h-10 w-10 text-red-500" />,
    title: "Scalable Architecture",
    description: "Our platform grows with your business, handling increased traffic with ease.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-secondary/30 dark:to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform is packed with powerful features designed to help you build amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-xl p-6 lift-up">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-heading font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
