"use client"
import RevealSection from "@/components/reveal-section"

export default function EducationSection() {
  const education = [
    {
      degree: "B. Tech in Artificial Intelligence and Data Science",
      institution: "Mahendra Engineering College",
      location: "Namakkal",
      year: "2024",
      grade: "87%",
    },
    {
      degree: "Diploma in Electrical and Electronics Engineering",
      institution: "Dhanalakshmi Srinivasan Polytechnic College",
      location: "Perambalur",
      year: "2021",
      grade: "92%",
    },
    {
      degree: "SSLC (Secondary School Leaving Certificate)",
      institution: "Sri Ram Matriculation Higher Secondary School",
      location: "Cuddalore",
      year: "2018",
      grade: "85%",
    },
  ]

  const certifications = [
    {
      name: "AWS Partner: Accreditation (Technical)",
      issuer: "AWS",
      link: "https://www.credly.com/badges/...",
    },
    {
      name: "Neo4j Fundamentals",
      issuer: "Neo4j",
      link: "https://graphacademy.neo4j.com/certificates/...",
    },
    {
      name: "Cypher Fundamentals",
      issuer: "Neo4j",
      link: "https://graphacademy.neo4j.com/certificates/...",
    },
    {
      name: "Micro Degree in Data Science",
      issuer: "Imagecon Academy",
      link: "https://imagecon.academy/certificates/IMIC22080308",
    },
  ]

  return (
    <section id="education" className="py-20 bg-royal-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <RevealSection>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 text-royal-500"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-8 border-l-2 border-royal-300 dark:border-royal-700 last:border-transparent last:pb-0"
                  >
                    <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-royal-500"></div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-royal-300 dark:hover:border-royal-700 card-hover">
                      <h4 className="text-xl font-medium text-slate-800 dark:text-white mb-1">{edu.degree}</h4>
                      <p className="text-royal-600 dark:text-royal-400 mb-2">
                        {edu.institution}, {edu.location}
                      </p>
                      <div className="flex justify-between text-slate-600 dark:text-slate-400">
                        <span>{edu.year}</span>
                        <span className="text-teal-600 dark:text-teal-400">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 text-royal-500"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M7 7h.01"></path>
                  <path d="M10.5 7h6.5"></path>
                  <path d="M7 12h.01"></path>
                  <path d="M10.5 12h6.5"></path>
                  <path d="M7 17h.01"></path>
                  <path d="M10.5 17h6.5"></path>
                </svg>
                Certifications
              </h3>

              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-royal-300 dark:hover:border-royal-700 hover:bg-royal-50 dark:hover:bg-slate-800/70 transition-all flex items-center group card-hover"
                  >
                    <div className="bg-royal-100 dark:bg-royal-900/30 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-royal-600 dark:text-royal-400"
                      >
                        <path d="M12.5 2h-10a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-10"></path>
                        <path d="m9 14.5 1.5 1.5 8-8"></path>
                        <path d="M14 3v4h4"></path>
                        <path d="M14 3 21 10"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-slate-800 dark:text-white group-hover:text-royal-600 dark:group-hover:text-royal-400 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-royal-100 to-teal-100 dark:from-royal-900/30 dark:to-teal-900/20 p-6 rounded-lg border border-royal-200 dark:border-royal-800/20">
                <h4 className="text-lg font-medium text-slate-800 dark:text-white mb-2">Personal Skills</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-slate-700 dark:text-slate-300">
                    <span className="text-royal-500 mr-2">•</span>
                    <span>
                      <strong className="text-royal-600 dark:text-royal-400">Adaptability & Flexibility</strong> – Quick
                      to learn and adapt to new technologies and dynamic work environments.
                    </span>
                  </li>
                  <li className="flex items-start text-slate-700 dark:text-slate-300">
                    <span className="text-royal-500 mr-2">•</span>
                    <span>
                      <strong className="text-royal-600 dark:text-royal-400">Attention to Detail</strong> – Ensure
                      accuracy and efficiency in coding, debugging, and project execution.
                    </span>
                  </li>
                  <li className="flex items-start text-slate-700 dark:text-slate-300">
                    <span className="text-royal-500 mr-2">•</span>
                    <span>
                      <strong className="text-royal-600 dark:text-royal-400">Continuous Learning</strong> – Enthusiastic
                      about exploring emerging technologies and upgrading skills.
                    </span>
                  </li>
                  <li className="flex items-start text-slate-700 dark:text-slate-300">
                    <span className="text-royal-500 mr-2">•</span>
                    <span>
                      <strong className="text-royal-600 dark:text-royal-400">Creativity & Innovation</strong> – Capable
                      of thinking outside the box to develop unique and effective solutions.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}

