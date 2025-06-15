import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small businesses and startups",
    features: ["Up to 5 team members", "10GB storage", "Basic analytics", "24/7 support", "1 project"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    description: "Ideal for growing businesses and teams",
    features: [
      "Up to 20 team members",
      "50GB storage",
      "Advanced analytics",
      "Priority support",
      "5 projects",
      "Custom domains",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$249",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited team members",
      "500GB storage",
      "Premium analytics",
      "Dedicated support",
      "Unlimited projects",
      "Custom domains",
      "Advanced security",
      "API access",
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees or surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl p-6 lift-up relative ${plan.popular ? "border-2 border-primary" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="font-heading font-bold text-2xl mb-2">{plan.name}</h3>
                <div className="text-4xl font-heading font-bold mb-2">
                  {plan.price}
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
