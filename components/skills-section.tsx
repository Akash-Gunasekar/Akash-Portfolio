"use client"
import { useRef, useEffect } from "react"
import RevealSection from "@/components/reveal-section"

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = document.querySelectorAll(".skill-bar")
            elements.forEach((el, index) => {
              if (el instanceof HTMLElement) {
                setTimeout(() => {
                  el.classList.add("skill-bar-animate")
                }, index * 100)
              }
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Deep Learning", "NLP", "LLMs"],
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "React js", "SQL", "R Programming"],
    },
    {
      title: "Backend Development",
      skills: ["Flask", "FastAPI", "Node.js"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Neo4j", "Chroma vectorDB"],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-royal-50 to-white dark:from-slate-900 dark:to-slate-950"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Technical Skills</h2>

        <RevealSection>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {skillCategories.map((category, index) => (
                <div key={index} className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-royal-500/20 to-teal-500/20 rounded-xl blur-md"></div>
                  <div className="relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-royal-100 dark:border-royal-900/30 h-full">
                    <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-royal-600 to-teal-500 dark:from-royal-400 dark:to-teal-400">
                      {category.title}
                    </h3>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill}</span>
                          </div>
                          <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="skill-bar h-full rounded-full bg-gradient-to-r from-royal-500 to-teal-500 dark:from-royal-400 dark:to-teal-400"
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-royal-100 dark:border-royal-900/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-royal-500/10 to-teal-500/10 rounded-bl-full"></div>

              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Areas of Expertise</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "Large Language Models",
                  "Machine Learning",
                  "Natural Language Processing",
                  "Deep Learning",
                  "Data Engineering",
                  "Cloud Computing",
                  "API Development",
                  "DevOps",
                  "Data Visualization",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-royal-50 to-teal-50 dark:from-royal-900/20 dark:to-teal-900/20 px-4 py-2 rounded-lg border border-royal-100 dark:border-royal-900/30 text-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </div>

      <style jsx global>{`
        .skill-bar {
          transition: width 1.5s ease-out;
        }
        .skill-bar-animate {
          width: 85% !important;
        }
      `}</style>
    </section>
  )
}

