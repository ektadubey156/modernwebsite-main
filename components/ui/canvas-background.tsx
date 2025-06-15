"use client"

import { useEffect, useRef } from "react"

interface CanvasBackgroundProps {
  className?: string
}

interface Particle {
  x: number
  y: number
  radius: number
  color: string
  velocity: {
    x: number
    y: number
  }
}

export default function CanvasBackground({ className = "" }: CanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
   const setCanvasDimensions = () => {
  const dpr = window.devicePixelRatio || 1;
  const width = canvas.offsetWidth;
  const height = canvas.offsetHeight;

  // Set canvas pixel dimensions for high-DPI rendering
  canvas.width = width * dpr;
  canvas.height = height * dpr;

  ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset any existing transforms
  ctx.scale(dpr, dpr);
};
    setCanvasDimensions()

    // Create particles
    const particles: Particle[] = []
    const particleCount = 50

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
        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.velocity.x = -particle.velocity.x
        }

        if (particle.y < 0 || particle.y > window.innerHeight) {
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

    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions()
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={`${className}`} />
}
