"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setCursorGlow({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(800px circle at ${cursorGlow.x}px ${cursorGlow.y}px, 
              rgba(139, 92, 246, 0.25),
              rgba(236, 72, 153, 0.15),
              transparent 70%)
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(59, 130, 246, 0.3),
              transparent 60%)
          `,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <p className="text-primary font-medium animate-in fade-in slide-in-from-left duration-500 flex items-center gap-2">
                <Sparkles className="h-4 w-4 animate-pulse" />
                Hello, I'm
              </p>
              <h1 className="font-space-grotesk text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance animate-in fade-in slide-in-from-left duration-700 delay-100 gradient-text">
                Shreya R H
              </h1>
              <p className="text-2xl sm:text-3xl text-foreground/90 animate-in fade-in slide-in-from-left duration-700 delay-200 font-medium">
                Information Science Engineering Student
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-in fade-in slide-in-from-left duration-700 delay-300">
              Passionate about crafting elegant solutions to complex problems. Currently pursuing B.E. at JSSATEB with a
              CGPA of 9.3, specializing in data structures, algorithms, and full-stack development.
            </p>

            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-left duration-700 delay-400">
              <Button size="lg" className="group glow-effect hover:scale-105 transition-all duration-300" asChild>
                <a href="#contact">
                  Get In Touch
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-all duration-300 border-primary/50 bg-transparent"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="flex gap-4 animate-in fade-in slide-in-from-left duration-700 delay-500">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 hover:rotate-6 transition-all duration-300 glow-effect"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/shreya-hipparagi"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 hover:rotate-6 transition-all duration-300 glow-effect"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:shreyahipparagi2006@gmail.com"
                className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 hover:rotate-6 transition-all duration-300 glow-effect"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Multiple glowing layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-accent/50 to-chart-2/50 rounded-3xl blur-3xl opacity-60 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tl from-accent/40 via-primary/40 to-chart-3/40 rounded-3xl blur-2xl opacity-50 animate-pulse delay-75" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-primary/30 bg-card shadow-2xl hover:scale-105 transition-transform duration-500 glow-effect">
                <Image src="/images/shreya-profile.png" alt="Shreya R H" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <ArrowDown className="h-6 w-6 text-primary animate-pulse" />
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
