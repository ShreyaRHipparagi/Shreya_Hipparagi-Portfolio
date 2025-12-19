"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen, Award } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

const educationData = [
  {
    institution: "JSS Academy of Technical Education",
    location: "Bangalore",
    degree: "Bachelor of Engineering in Information Science and Engineering",
    period: "2024 – 2028",
    score: "CGPA: 9.3 / 10",
    courses: [
      { name: "Data Structures and Algorithms", icon: "💻", color: "from-blue-500 to-cyan-500" },
      { name: "Database Management Systems", icon: "🗄️", color: "from-green-500 to-emerald-500" },
      { name: "Object Oriented Programming", icon: "🎯", color: "from-purple-500 to-pink-500" },
      { name: "Operating Systems", icon: "⚙️", color: "from-orange-500 to-red-500" },
      { name: "Computer Networks", icon: "🌐", color: "from-indigo-500 to-blue-500" },
      { name: "Machine Learning", icon: "🤖", color: "from-pink-500 to-rose-500" },
      { name: "Artificial Intelligence", icon: "🧠", color: "from-violet-500 to-purple-500" },
    ],
    icon: GraduationCap,
    iconColor: "from-blue-500 to-cyan-500",
  },
  {
    institution: "Oxford PU Science College",
    location: "Bangalore",
    degree: "Pre-University Course (PCMB)",
    period: "2022 – 2024",
    score: "Score: 96%",
    courses: [
      { name: "Physics", icon: "⚛️", color: "from-blue-500 to-indigo-500" },
      { name: "Chemistry", icon: "🧪", color: "from-green-500 to-teal-500" },
      { name: "Mathematics", icon: "📐", color: "from-purple-500 to-pink-500" },
      { name: "Biology", icon: "🧬", color: "from-emerald-500 to-green-500" },
    ],
    icon: BookOpen,
    iconColor: "from-green-500 to-emerald-500",
  },
  {
    institution: "Brilliant School",
    location: "Bangalore",
    degree: "Secondary School Leaving Certificate",
    period: "2021 – 2022",
    score: "Score: 99%",
    courses: [],
    icon: Award,
    iconColor: "from-amber-500 to-orange-500",
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
              {educationData.map((edu, index) => {
                const IconComponent = edu.icon
                return (
                  <Card
                    key={index}
                    className={cn(
                      "p-6 hover:shadow-2xl transition-all duration-500 border-border bg-card group relative overflow-hidden",
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20",
                    )}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div
                          className={cn(
                            "h-12 w-12 rounded-lg bg-gradient-to-br flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg",
                            edu.iconColor,
                          )}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
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
                                className={cn(
                                  "px-3 py-1.5 text-sm rounded-full bg-gradient-to-r text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-1.5",
                                  course.color,
                                )}
                              >
                                <span className="text-base">{course.icon}</span>
                                {course.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
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
