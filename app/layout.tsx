import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import ChatBot from "@/components/chat-bot"
import { Toaster } from "@/components/ui/toaster"

// Variable fonts with different widths
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Whitecircle Group - E-commerce Growth Experts",
  description: "Specialized e-commerce agency helping brands grow on Amazon, Flipkart and other marketplaces.",
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <ChatBot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}