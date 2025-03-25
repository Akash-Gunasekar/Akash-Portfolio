"use client"
import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3

        // Set color based on theme
        const isDark = document.documentElement.classList.contains("dark")
        this.color = isDark
          ? `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.3})`
          : `rgba(79, 70, 229, ${Math.random() * 0.5 + 0.3})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height

        // Update color based on theme
        const isDark = document.documentElement.classList.contains("dark")
        this.color = isDark
          ? `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.3})`
          : `rgba(79, 70, 229, ${Math.random() * 0.5 + 0.3})`
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = 80 // Reduced for better performance

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Connect particles with lines
    function connectParticles() {
      if (!ctx) return

      const maxDistance = 150 // Maximum distance to draw connections
      const isDark = document.documentElement.classList.contains("dark")

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            const lineColor = isDark ? `rgba(99, 102, 241, ${opacity * 0.2})` : `rgba(79, 70, 229, ${opacity * 0.2})`

            ctx.strokeStyle = lineColor
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      connectParticles()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [resolvedTheme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />
}

