"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    value: 500,
    label: "Sellers Helped",
    prefix: "",
    suffix: "+",
  },
  {
    value: 300,
    label: "Average Sales Growth",
    prefix: "",
    suffix: "%",
  },
  {
    value: 50,
    label: "Total Revenue Generated",
    prefix: "$",
    suffix: "M+",
  },
]

export default function Statistics() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="py-24 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've helped hundreds of e-commerce sellers achieve remarkable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-none lift-up">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <div className="text-5xl md:text-6xl font-heading font-bold mb-2 gradient-text">
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </div>
                <p className="text-xl text-center">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
