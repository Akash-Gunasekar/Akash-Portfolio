"use client"
import { Code, Brain, Server, Database, Cpu, Cloud } from "lucide-react"
import RevealSection from "@/components/reveal-section"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealSection>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-royal-500/20 to-teal-500/20 rounded-2xl blur-md"></div>
              <div className="relative bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-xl border border-royal-100 dark:border-royal-900/30">
                <div className="flex flex-col space-y-6">
                  <p className="text-lg text-slate-700 dark:text-slate-300">
                    Passionate and results-driven AI Software Engineer with a strong foundation in Artificial
                    Intelligence, Machine Learning, and Software Development. I specialize in developing intelligent,
                    scalable, and impactful solutions using cutting-edge AI/ML technologies.
                  </p>

                  <div className="border-l-4 border-royal-500 pl-4 italic text-slate-600 dark:text-slate-400">
                    "I believe in the power of AI to transform industries and improve lives. My goal is to build AI
                    systems that are not just intelligent, but also ethical, accessible, and impactful."
                  </div>

                  <p className="text-lg text-slate-700 dark:text-slate-300">
                    Currently working as an AI Software Engineer at ConceptVines in Chennai, where I develop and deploy
                    AI-powered applications that solve real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-royal-50 dark:bg-royal-900/20 p-5 rounded-lg border border-royal-100 dark:border-royal-800/30 hover:shadow-md transition-all duration-300">
                <Brain className="h-8 w-8 text-royal-500 mb-3" />
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">AI & ML</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Expert in building intelligent systems using machine learning and deep learning techniques.
                </p>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg border border-teal-100 dark:border-teal-800/30 hover:shadow-md transition-all duration-300">
                <Code className="h-8 w-8 text-teal-500 mb-3" />
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">NLP</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Specialized in natural language processing and large language models.
                </p>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg border border-teal-100 dark:border-teal-800/30 hover:shadow-md transition-all duration-300">
                <Server className="h-8 w-8 text-teal-500 mb-3" />
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Backend</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Proficient in Python, Flask, and FastAPI for robust backend development.
                </p>
              </div>

              <div className="bg-royal-50 dark:bg-royal-900/20 p-5 rounded-lg border border-royal-100 dark:border-royal-800/30 hover:shadow-md transition-all duration-300">
                <Database className="h-8 w-8 text-royal-500 mb-3" />
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Databases</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Experience with SQL, NoSQL, and graph databases like Neo4j.
                </p>
              </div>

              <div className="bg-royal-50 dark:bg-royal-900/20 p-5 rounded-lg border border-royal-100 dark:border-royal-800/30 hover:shadow-md transition-all duration-300 col-span-2 md:col-span-1">
                <Cloud className="h-8 w-8 text-royal-500 mb-3" />
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Cloud</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Skilled in AWS services for deploying scalable AI solutions.
                </p>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg border border-teal-100 dark:border-teal-800/30 hover:shadow-md transition-all duration-300 col-span-2 md:col-span-1">
                <Cpu className="h-8 w-8 text-teal-500 mb-3" />
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">DevOps</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Experience with Docker, CI/CD, and deployment automation.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}

