"use client"

import { Card } from "@/components/ui/card"
import { Award, Trophy, Users } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

const achievementsData = [
  {
    icon: Trophy,
    title: "School Topper",
    description: "Scored 99% in SSLC Board Exams",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Award,
    title: "Top 5% PU Batch",
    description: "96% aggregate in Pre-University",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Conference Volunteer",
    description: "National Conference on Innovation, JSSATEB (2024)",
    color: "from-blue-500 to-cyan-500",
  },
]

const certificationsData = [
  "C Programming – Completed core C programming fundamentals",
  "Cyber Security – Learned about threats, prevention methods, and ethical practices",
]

const extracurricularsData = [
  "Member, Coding Club – Participated in college-level hackathons",
  "Volunteered in organizing tech fests and guest talks",
  "Active in debate and group discussions",
]

export function Achievements() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="achievements" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-chart-4/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-chart-5/40 rounded-full blur-3xl animate-pulse delay-100" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div ref={ref}>
            <div
              className={cn(
                "transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
              )}
            >
              <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold mb-12 text-balance gradient-text">
                Achievements
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {achievementsData.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <Card
                      key={index}
                      className={cn(
                        "p-6 text-center hover:shadow-2xl transition-all duration-500 border-border bg-card group relative overflow-hidden",
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90",
                      )}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                          achievement.color,
                        )}
                      />

                      <div className="space-y-4 relative z-10">
                        <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>

                        <h3 className="font-space-grotesk text-xl font-bold group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h3>

                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "grid md:grid-cols-2 gap-8 transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
            )}
          >
            <div>
              <h3 className="font-space-grotesk text-2xl font-bold mb-6">Certifications</h3>
              <Card className="p-6 border-border bg-card hover:shadow-xl transition-all duration-300">
                <ul className="space-y-3">
                  {certificationsData.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div>
              <h3 className="font-space-grotesk text-2xl font-bold mb-6">Extracurricular Activities</h3>
              <Card className="p-6 border-border bg-card hover:shadow-xl transition-all duration-300">
                <ul className="space-y-3">
                  {extracurricularsData.map((activity, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
