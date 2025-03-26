"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Home, User, Code, Mail, Menu, X } from "lucide-react"

type NavItem = {
  id: string
  label: string
  icon: React.ReactNode
}

export default function FixedNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const navItems: NavItem[] = [
    { id: "hero", label: "Home", icon: <Home className="h-4 w-4" /> },
    { id: "about", label: "About", icon: <User className="h-4 w-4" /> },
    { id: "content", label: "Portfolio", icon: <Code className="h-4 w-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 300

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-royal-600 text-white shadow-lg lg:hidden"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Navigation sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-16 transform bg-white/90 backdrop-blur-sm shadow-lg transition-transform duration-300 dark:bg-slate-900/90 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="flex h-full flex-col items-center justify-center py-8">
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-royal-100 dark:hover:bg-royal-900/30",
                  activeSection === item.id
                    ? "bg-royal-600 text-white dark:bg-royal-600"
                    : "text-slate-600 dark:text-slate-400",
                )}
              >
                {item.icon}
                <span className="absolute left-16 ml-2 hidden rounded-md bg-royal-600 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 lg:block">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

