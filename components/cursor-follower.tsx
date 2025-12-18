"use client"

import { useEffect, useState } from "react"

export function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" || target.tagName === "A" || target.tagName === "BUTTON",
      )
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      />

      {/* Cursor ring */}
      <div
        className="fixed w-8 h-8 border-2 border-primary/50 rounded-full pointer-events-none z-[9998] transition-all duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      />

      {/* Trailing glow */}
      <div
        className="fixed w-64 h-64 pointer-events-none z-[9997] transition-all duration-700 ease-out opacity-30"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, oklch(0.7 0.2 270) 0%, oklch(0.65 0.25 320) 30%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </>
  )
}
