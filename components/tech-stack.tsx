import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const techStack = [
  {
    category: "Frontend Tools",
    technologies: [
      { name: "HTML5", icon: "/HTML5_Logo.svg?height=60&width=60" },
      { name: "CSS3", icon: "/CSS3.svg?height=60&width=60" },
      { name: "JavaScript", icon: "/JavaScript.svg?height=60&width=60" },
      { name: "Tailwind CSS", icon: "/Tailwind CSS.svg?height=60&width=60" },
      { name: "React.js", icon: "/React.svg?height=60&width=60" },
    ],
  },
  {
    category: "Animations",
    technologies: [
      { name: "LottieFiles", icon: "/lottiefiles.svg?height=60&width=60" },
      { name: "Framer Motion", icon: "/framer-motion.svg?height=60&width=60" },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-gradient-to-b from-secondary/30 dark:from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We use cutting-edge technologies to build responsive, high-performance web solutions.
          </p>
        </div>

        <div className="space-y-12">
          {techStack.map((category, index) => (
            <div key={index}>
              <h3 className="font-heading font-bold text-2xl mb-6 text-center">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <Card key={techIndex} className="glass-card border-none lift-up">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="mb-4 w-16 h-16 relative">
                        <Image
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          fill
                          className="object-contain"
                          crossOrigin="anonymous"
                        />
                      </div>
                      <p className="font-medium text-center">{tech.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
