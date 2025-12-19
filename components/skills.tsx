"use client"

import { Card } from "@/components/ui/card"
import { Code2, Globe, Wrench, BookOpen, Cpu, Database, Terminal, Github, Box, FileCode2, Network } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

const skillsData = [
  {
    category: "Languages",
    icon: Code2,
    skills: [
      { name: "C", icon: Code2, color: "text-blue-600" },
      { name: "Java", icon: FileCode2, color: "text-orange-600" },
      { name: "Python", icon: Terminal, color: "text-yellow-600" },
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    category: "Web Development",
    icon: Globe,
    skills: [
      { name: "HTML", icon: FileCode2, color: "text-orange-500" },
      { name: "CSS", icon: Box, color: "text-blue-500" },
      { name: "JavaScript", icon: Code2, color: "text-yellow-500" },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: Github, color: "text-orange-600" },
      { name: "GitHub", icon: Github, color: "text-slate-700" },
      { name: "VS Code", icon: Terminal, color: "text-blue-600" },
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    category: "Learning",
    icon: BookOpen,
    skills: [
      { name: "Data Structures & Algorithms", icon: Database, color: "text-green-600" },
      { name: "Object-Oriented Programming", icon: Cpu, color: "text-purple-600" },
      { name: "Operating Systems", icon: Terminal, color: "text-indigo-600" },
      { name: "Computer Networks", icon: Network, color: "text-teal-600" },
    ],
    color: "from-amber-500 to-orange-500",
  },
]

export function Skills() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-20 w-80 h-80 bg-chart-2/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-chart-3/40 rounded-full blur-3xl animate-pulse delay-100" />
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
              Technical Skills
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData.map((category, index) => {
                const Icon = category.icon
                return (
                  <Card
                    key={index}
                    className={cn(
                      "p-6 hover:shadow-2xl transition-all duration-500 border-border bg-card group relative overflow-hidden h-full",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                        category.color,
                      )}
                    />

                    <div className="space-y-4 relative z-10">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <h3 className="font-space-grotesk text-xl font-bold group-hover:text-primary transition-colors min-h-[56px] flex items-center">
                        {category.category}
                      </h3>

                      <ul className="space-y-3">
                        {category.skills.map((skill, i) => {
                          const SkillIcon = skill.icon
                          return (
                            <li
                              key={i}
                              className="text-muted-foreground flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300"
                              style={{ transitionDelay: `${i * 50}ms` }}
                            >
                              <div className="h-6 w-6 rounded flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                <SkillIcon className={cn("h-3.5 w-3.5", skill.color)} />
                              </div>
                              <span className="text-sm leading-tight">{skill.name}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
