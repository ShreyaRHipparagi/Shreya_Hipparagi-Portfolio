import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { CursorFollower } from "@/components/cursor-follower"
import { FloatingParticles } from "@/components/floating-particles"

export default function Home() {
  return (
    <main className="min-h-screen animated-gradient relative">
      <FloatingParticles />
      <AnimatedBackground />
      <CursorFollower />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </main>
  )
}
