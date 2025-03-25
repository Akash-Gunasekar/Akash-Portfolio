"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function RevealSection({ children, className = "", delay = 0 }: RevealSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [delay])

  return (
    <div ref={sectionRef} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

