"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  width?: number
  height?: number
  particleCount?: number
  className?: string
}

export default function AnimatedBackground({
  width = 800,
  height = 600,
  particleCount = 50,
  className = "",
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = width
    canvas.height = height

    // Create particles
    const particles: {
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
    }[] = []

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height

      // Create a color palette of purples and blues
      const colors = [
        "rgba(147, 51, 234, 0.5)", // Purple
        "rgba(79, 70, 229, 0.5)", // Indigo
        "rgba(59, 130, 246, 0.5)", // Blue
        "rgba(236, 72, 153, 0.5)", // Pink
      ]

      const color = colors[Math.floor(Math.random() * colors.length)]

      const velocity = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
      }

      particles.push({ x, y, radius, color, velocity })
    }

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x = -particle.velocity.x
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y = -particle.velocity.y
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      // No cleanup needed for this component
    }
  }, [width, height, particleCount])

  return <canvas ref={canvasRef} className={`${className}`} width={width} height={height} />
}
