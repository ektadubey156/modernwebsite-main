"use client"

import AnimatedBackground from "@/components/ui/animated-background"

export default function BackgroundExample() {
  return (
    <div className="relative w-full h-[400px]">
      <AnimatedBackground width={800} height={400} particleCount={30} className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Content on top of the animated background</h2>
      </div>
    </div>
  )
}
