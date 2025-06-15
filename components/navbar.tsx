"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-card">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
          <span className="font-heading font-bold text-xl">Whitecircle Group</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/#tech-stack" className="text-sm font-medium hover:text-primary transition-colors">
            Tech Stack
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/testimonial" className="text-sm font-medium hover:text-primary transition-colors">
            Share Testimonial
          </Link>
          <Button asChild>
            <Link href="/contact">Book Free Growth Audit</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card absolute top-full left-0 right-0 p-4 flex flex-col space-y-4">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#tech-stack"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Tech Stack
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/testimonial"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Share Testimonial
          </Link>
          <Button asChild onClick={() => setIsMenuOpen(false)}>
            <Link href="/contact">Book Free Growth Audit</Link>
          </Button>
        </div>
      )}
    </nav>
  )
}