"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

const projectsData = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects, skills, and achievements with beautiful animations and smooth user experience.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ShreyaRHipparagi/Shreya_Hipparagi-Portfolio",
    demo: "https://v0-shreya-hipparagi.vercel.app/",
    gradient: "from-violet-500 via-purple-500 to-pink-500",
  },
  {
    title: "StudyWithFlow AI – Smart Study Planner",
    description:
      "AI-powered study planning platform that helps students organize their learning schedule and track progress efficiently.",
    tech: ["React", "TypeScript", "AI/ML", "Lovable"],
    github: "https://github.com/ShreyaRHipparagi/studywithflowai",
    demo: "https://studywithflowai.lovable.app",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    title: "FAANG Interview Preparation Platform",
    description:
      "Comprehensive platform for FAANG interview preparation with coding challenges, system design, and practice resources.",
    tech: ["Python", "Flask", "MongoDB", "RESTful API"],
    github: "https://github.com/ShreyaRHipparagi/FAANG",
    demo: "https://faang-app.onrender.com",
    gradient: "from-pink-500 via-rose-500 to-red-500",
  },
  {
    title: "AI Yoga Trainer",
    description:
      "AI-powered yoga training application that provides real-time pose detection and personalized feedback for yoga practitioners.",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
    github: "https://github.com/ShreyaRHipparagi/AI-Yoga",
    demo: "https://yoga-ai-app.onrender.com",
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
