"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

export function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-75" />
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
            <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold mb-8 text-balance gradient-text">
              About Me
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p
                className={cn(
                  "transition-all duration-700 delay-100",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
                )}
              >
                I'm a dedicated Information Science Engineering student at JSSATEB, Bangalore, maintaining a CGPA of
                9.3. My journey in technology is driven by a passion for problem-solving and creating impactful
                solutions.
              </p>

              <p
                className={cn(
                  "transition-all duration-700 delay-200",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
                )}
              >
                With a strong foundation in Data Structures, Algorithms, DBMS, and Object-Oriented Programming, I'm
                constantly expanding my skill set. I believe in learning by doing, which is why I've built multiple
                projects ranging from student management systems to portfolio websites.
              </p>

              <p
                className={cn(
                  "transition-all duration-700 delay-300",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
                )}
              >
                Beyond coding, I'm actively involved in my college's Coding Club, participating in hackathons and weekly
                problem-solving sessions. I also volunteer in organizing tech fests and guest talks, contributing to the
                vibrant tech community at my college.
              </p>

              <p
                className={cn(
                  "transition-all duration-700 delay-400",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
                )}
              >
                When I'm not coding, you'll find me exploring new technologies, participating in debates and group
                discussions, or working on improving my public speaking skills. I'm always eager to take on new
                challenges and collaborate on innovative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
