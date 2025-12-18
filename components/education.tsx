"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

const educationData = [
  {
    institution: "JSS Academy of Technical Education",
    location: "Bangalore",
    degree: "B.E. in Information Science and Engineering",
    period: "2022 – 2026",
    score: "CGPA: 9.3 / 10",
    courses: ["Data Structures", "DBMS", "OOP", "OS", "Networks"],
  },
  {
    institution: "Oxford PU Science College",
    location: "Bangalore",
    degree: "Pre-University Course (Science)",
    period: "2020 – 2022",
    score: "Score: 96%",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    institution: "Brilliant School",
    location: "Bangalore",
    degree: "SSLC",
    period: "2020",
    score: "Score: 99%",
    courses: [],
  },
]

export function Education() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-1/3 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse delay-75" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            ref={ref}
            className={cn(
              "transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
            )}
          >
            <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold mb-12 text-balance gradient-text">
              Education
            </h2>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <Card
                  key={index}
                  className={cn(
                    "p-6 hover:shadow-2xl transition-all duration-500 border-border bg-card group relative overflow-hidden",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20",
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-chart-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <h3 className="font-space-grotesk text-xl font-bold group-hover:text-primary transition-colors">
                            {edu.institution}
                          </h3>
                          <p className="text-muted-foreground">{edu.location}</p>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">{edu.period}</span>
                      </div>

                      <p className="text-lg font-medium">{edu.degree}</p>
                      <p className="text-primary font-semibold">{edu.score}</p>

                      {edu.courses.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {edu.courses.map((course, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary/20 transition-colors"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
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
