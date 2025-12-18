"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

const projectsData = [
  {
    title: "Student Result Management",
    description:
      "Created a file-based system to manage and calculate student marks and grades using classes and I/O operations.",
    tech: ["C++", "File Handling", "OOP"],
    github: "#",
    gradient: "from-violet-500 via-purple-500 to-pink-500",
  },
  {
    title: "Portfolio Website",
    description: "Built a personal website to showcase projects and skills; responsive layout hosted on GitHub Pages.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    title: "Library Management System",
    description:
      "CLI-based project to manage book records, student details, and issue/return features using file handling.",
    tech: ["Python", "File I/O", "Data Structures"],
    github: "#",
    gradient: "from-pink-500 via-rose-500 to-red-500",
  },
  {
    title: "Calculator App",
    description: "Console application for basic arithmetic operations with menu-driven logic and loop control.",
    tech: ["C", "Algorithms"],
    github: "#",
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
]

export function Projects() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-chart-1/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/40 rounded-full blur-3xl animate-pulse delay-150" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            ref={ref}
            className={cn(
              "transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
            )}
          >
            <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold mb-12 text-balance gradient-text">
              Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {projectsData.map((project, index) => (
                <Card
                  key={index}
                  className={cn(
                    "p-6 hover:shadow-2xl transition-all duration-500 border-border bg-card group relative overflow-hidden",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      project.gradient,
                    )}
                  />

                  <div className="space-y-4">
                    <h3 className="font-space-grotesk text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium group-hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="group-hover:border-primary transition-colors bg-transparent"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button size="sm" className="group-hover:scale-105 transition-transform" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
