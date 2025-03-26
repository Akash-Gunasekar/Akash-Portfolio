"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"

type Tab = {
  id: string
  label: string
  component: React.ReactNode
}

export default function TabbedContent() {
  const [activeTab, setActiveTab] = useState("skills")

  // Create a wrapper component to hide titles
  const HideTitleWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="[&_h2:first-of-type]:hidden">{children}</div>
  )

  const tabs: Tab[] = [
    {
      id: "skills",
      label: "Skills",
      component: (
        <HideTitleWrapper>
          <SkillsSection />
        </HideTitleWrapper>
      ),
    },
    {
      id: "projects",
      label: "Projects",
      component: (
        <HideTitleWrapper>
          <ProjectsSection />
        </HideTitleWrapper>
      ),
    },
    {
      id: "experience",
      label: "Experience",
      component: (
        <HideTitleWrapper>
          <ExperienceSection />
        </HideTitleWrapper>
      ),
    },
    {
      id: "education",
      label: "Education",
      component: (
        <HideTitleWrapper>
          <EducationSection />
        </HideTitleWrapper>
      ),
    },
  ]

  return (
    <section id="content" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
          My Portfolio
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === tab.id
                  ? "bg-royal-600 text-white dark:bg-royal-600"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8">{tabs.find((tab) => tab.id === activeTab)?.component}</div>
      </div>
    </section>
  )
}

