"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { ref, isVisible } = useScrollReveal()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl animate-pulse" />
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
            <div className="text-center mb-12">
              <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold mb-4 text-balance gradient-text">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                I'm always open to discussing new projects, opportunities, or collaborations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="p-6 border-border bg-card hover:shadow-xl transition-all duration-300">
                  <div className="space-y-4">
                    <h3 className="font-space-grotesk text-xl font-bold">Contact Information</h3>

                    <div className="space-y-4">
                      <a
                        href="mailto:shreyahipparagi2006@gmail.com"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          shreyahipparagi2006@gmail.com
                        </span>
                      </a>

                      <a
                        href="tel:+918660036622"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          +91-8660036622
                        </span>
                      </a>

                      <a
                        href="https://linkedin.com/in/shreya-hipparagi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <Linkedin className="h-5 w-5 text-primary" />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          linkedin.com/in/shreya-hipparagi
                        </span>
                      </a>

                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <Github className="h-5 w-5 text-primary" />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          GitHub Profile
                        </span>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-6 border-border bg-card hover:shadow-xl transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      required
                      className="bg-background hover:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-background hover:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <Textarea
                      placeholder="Your Message"
                      required
                      rows={5}
                      className="bg-background resize-none hover:border-primary transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full group hover:scale-105 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </div>

            <div className="mt-12 text-center text-muted-foreground">
              <p className="text-sm">© 2025 Shreya R H</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
