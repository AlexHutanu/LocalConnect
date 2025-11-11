"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-8 items-center text-center">
          <div className="max-w-3xl mx-auto">
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground text-balance mb-4 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}
            >
              Connect with <span className="text-primary">Professional Services</span>
            </h1>
            <p
              className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              Discover and book vetted service providers instantly. Get quality work done right the first time.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <Link
              href="/dashboard"
              className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full transition-smooth hover:shadow-lg hover:bg-primary/90 hover:scale-105 text-center"
            >
              Explore Services
            </Link>
            <Link
              href="#how-it-works"
              className="px-8 py-3 bg-card text-foreground font-bold rounded-full border border-border transition-smooth hover:border-primary hover:bg-background hover:shadow-md text-center"
            >
              Learn More
            </Link>
          </div>

          <div
            className={`grid grid-cols-3 gap-8 md:gap-12 pt-12 w-full max-w-2xl transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="flex flex-col items-center transition-smooth hover:scale-110">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Providers</div>
            </div>
            <div className="flex flex-col items-center transition-smooth hover:scale-110">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">500K+</div>
              <div className="text-sm text-muted-foreground">Customers</div>
            </div>
            <div className="flex flex-col items-center transition-smooth hover:scale-110">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
