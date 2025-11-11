"use client"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border py-4">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between gap-8">
        <Link
          href="/"
          className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Local Connect
        </Link>

        <nav
          className={`${isOpen ? "flex" : "hidden"} md:flex gap-10 items-center flex-1 md:relative md:flex-row md:bg-transparent md:border-0 md:padding-0 absolute top-full left-0 right-0 bg-background border-b border-border padding-6 flex-col gap-4 md:padding-0`}
        >
          <Link href="/services" className="text-foreground font-medium hover:text-primary transition-colors">
            Browse Services
          </Link>
          <Link href="#how-it-works" className="text-foreground font-medium hover:text-primary transition-colors">
            How it works
          </Link>
          <Link href="#pricing" className="text-foreground font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="/dashboard"
            className="px-5 py-2.5 rounded text-primary border border-primary hover:bg-primary hover:text-primary-foreground transition-all font-semibold text-sm"
          >
            Dashboard
          </Link>
          <Link
            href="/login"
            className="px-5 py-2.5 rounded bg-primary text-primary-foreground hover:opacity-90 hover:-translate-y-0.5 transition-all font-semibold text-sm"
          >
            Sign In
          </Link>
        </div>

        <button
          className="md:hidden bg-transparent border-none text-2xl cursor-pointer text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  )
}
