"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarClock, MapPin } from "lucide-react"
import RevealSection from "@/components/reveal-section"

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "AI Software Engineer",
      company: "ConceptVines",
      location: "Chennai",
      period: "January 2024 - Present",
      description: [
        "Developing AI-powered applications using LLMs, NLP, and machine learning",
        "Building solutions for data processing, information extraction, and intelligent automation",
        "Implementing Neo4j graph databases and AWS cloud infrastructure",
        "Collaborating with cross-functional teams to design and deploy AI solutions",
      ],
      skills: ["Python", "LLM", "NLP", "Neo4j", "AWS", "Machine Learning"],
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Imagecon Academy",
      location: "Salem",
      period: "August 2022 - November 2023",
      description: [
        "Analyzed complex datasets and developed machine learning models",
        "Created data visualizations and reports to communicate insights",
        "Contributed to research projects in the field of computer vision and image processing",
        "Assisted in curriculum development for data science training programs",
      ],
      skills: ["Python", "Data Analysis", "ML Algorithms", "Data Visualization", "Research"],
    },
  ]

  const [activeExp, setActiveExp] = useState(experiences[0].id)

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-teal-50 to-royal-50 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Work Experience</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-4">
            <RevealSection>
              {experiences.map((exp) => (
                <Card
                  key={exp.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                    activeExp === exp.id
                      ? "bg-royal-50 dark:bg-royal-900/20 border-royal-300 dark:border-royal-700"
                      : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-royal-200 dark:hover:border-royal-800"
                  }`}
                  onClick={() => setActiveExp(exp.id)}
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg text-slate-800 dark:text-white">
                      {exp.title} - {exp.company}
                    </CardTitle>
                    <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                      <CalendarClock className="h-4 w-4 mr-2 text-royal-500" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-royal-500" />
                      {exp.location}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </RevealSection>
          </div>

          <div className="lg:col-span-8">
            <RevealSection delay={200}>
              {experiences.find((exp) => exp.id === activeExp) && (
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 h-full card-hover">
                  <CardHeader className="p-6 pb-2">
                    <CardTitle className="text-2xl text-slate-800 dark:text-white">
                      {experiences.find((exp) => exp.id === activeExp)?.title}
                    </CardTitle>
                    <div className="text-lg text-royal-600 dark:text-royal-400">
                      {experiences.find((exp) => exp.id === activeExp)?.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-slate-600 dark:text-slate-400 text-sm mt-2">
                      <div className="flex items-center">
                        <CalendarClock className="h-4 w-4 mr-1" />
                        {experiences.find((exp) => exp.id === activeExp)?.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experiences.find((exp) => exp.id === activeExp)?.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-3">Responsibilities</h3>
                    <ul className="space-y-2 mb-6">
                      {experiences
                        .find((exp) => exp.id === activeExp)
                        ?.description.map((item, index) => (
                          <li key={index} className="flex items-start text-slate-700 dark:text-slate-300">
                            <span className="text-teal-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                    </ul>

                    <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {experiences
                        .find((exp) => exp.id === activeExp)
                        ?.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            className="bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border border-teal-200 dark:border-teal-800/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  )
}

