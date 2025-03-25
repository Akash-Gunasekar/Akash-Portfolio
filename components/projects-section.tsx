"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import RevealSection from "@/components/reveal-section"

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string | null>(null)

  const projects = [
    {
      id: 1,
      title: "ROI Compass",
      description:
        "AWS sales coach assistant that calculates and visualizes return on investment for cloud migrations.",
      longDescription:
        "ROI Compass is an intelligent AWS sales coaching tool that helps sales representatives calculate and demonstrate the potential return on investment for customers considering cloud migration. It analyzes current infrastructure costs, projects AWS savings, and generates compelling visual presentations to support the sales process.",
      category: ["AI", "LLM", "Sales"],
      sector: "Cloud Computing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      github: "",
      demo: "",
      techStack: ["Python", "AWS Services", "LangChain", "OpenAI", "Data Visualization"],
    },
    {
      id: 2,
      title: "TalentLens AI",
      description: "Advanced resume evaluation system that matches candidates to job requirements with precision.",
      longDescription:
        "TalentLens AI is a sophisticated resume evaluation system that uses natural language processing and machine learning to analyze candidate resumes against job requirements. It extracts key skills, experiences, and qualifications, providing recruiters with detailed match scores and highlighting potential areas for further exploration during interviews.",
      category: ["AI", "NLP", "HR"],
      sector: "Recruitment & HR",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      github: "",
      demo: "",
      techStack: ["Python", "NLP", "Machine Learning", "Document Processing", "FastAPI"],
    },
    {
      id: 3,
      title: "InsightMirror",
      description:
        "AI-powered self-evaluation report analyzer that identifies patterns and provides actionable insights.",
      longDescription:
        "InsightMirror transforms self-evaluation reports into actionable intelligence. This AI-powered tool analyzes text for sentiment, key themes, and growth opportunities, helping organizations identify patterns across teams and departments. It generates personalized feedback and development recommendations, supporting continuous improvement and professional growth.",
      category: ["AI", "NLP", "Analytics"],
      sector: "Professional Development",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      github: "",
      demo: "",
      techStack: ["Python", "NLP", "Sentiment Analysis", "Data Visualization", "Machine Learning"],
    },
    {
      id: 4,
      title: "Neo Magic",
      description: "Generative Smart Response to Bank Customer using RAG and LLM technologies.",
      longDescription:
        "Neo Magic is an advanced AI system that provides intelligent responses to bank customers by leveraging Retrieval Augmented Generation (RAG) and Large Language Models. It analyzes customer queries, retrieves relevant information from banking knowledge bases, and generates accurate, personalized responses, enhancing customer service efficiency.",
      category: ["AI", "LLM", "RAG"],
      sector: "Banking & Finance",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      github: "",
      demo: "",
      techStack: ["Python", "Neo4j", "LangChain", "OpenAI", "FastAPI"],
    },
    {
      id: 5,
      title: "Charter Party Agreement Analyzer",
      description:
        "Identifies negotiations, vessels and summarizes unstructured context from charter party agreement attachments in emails.",
      longDescription:
        "This AI solution extracts critical information from shipping emails and their attachments, particularly focusing on charter party agreements. It uses advanced NLP techniques to identify negotiation terms, vessel details, and provide concise summaries of complex unstructured documents, streamlining maritime business operations.",
      category: ["AI", "NLP", "Database"],
      sector: "Maritime & Logistics",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      github: "",
      demo: "",
      techStack: ["Python", "Neo4j", "Spacy", "LLM", "Email Processing"],
    },
    {
      id: 6,
      title: "Integration Testing for Logistics",
      description:
        "Comprehensive testing framework for logistics and shipping systems using Pytest and Neo4j Test Container.",
      longDescription:
        "A robust testing infrastructure built to ensure reliability in complex logistics and shipping systems. This project leverages Pytest for test orchestration and Neo4j Test Containers for simulating graph database interactions, providing comprehensive test coverage for critical shipping workflows and data pipelines.",
      category: ["Testing", "Database"],
      sector: "Logistics & Supply Chain",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      github: "",
      demo: "",
      techStack: ["Python", "Pytest", "Neo4j", "Docker", "CI/CD"],
    },
    {
      id: 7,
      title: "Unstructured Data Processor with Mistral",
      description: "Processes unstructured data and retrieves information using the Mistral LLM.",
      longDescription:
        "This system transforms chaotic unstructured data into valuable insights by leveraging the Mistral Large Language Model. It can process various document formats, extract key information, answer complex queries about the content, and organize the extracted knowledge for further analysis and business intelligence.",
      category: ["AI", "LLM", "Data Processing"],
      sector: "Healthcare & Research",
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      github: "",
      demo: "",
      techStack: ["Python", "Mistral LLM", "FastAPI", "Vector Databases"],
    },
    {
      id: 8,
      title: "Profile Scraper",
      description: "Automates data extraction from professional profile URLs like LinkedIn.",
      longDescription:
        "A sophisticated web scraping tool that extracts professional information from LinkedIn profiles. Built with privacy and data protection in mind, this tool helps recruiters and HR professionals gather relevant candidate information efficiently, supporting talent acquisition workflows while respecting platform limitations.",
      category: ["Web Scraping", "Automation"],
      sector: "HR & Recruitment",
      image:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      github: "",
      demo: "",
      techStack: ["Python", "Selenium", "BeautifulSoup", "Data Processing"],
    },
    {
      id: 9,
      title: "YouTube Audio & Subtitle Extractor",
      description: "Extracts and refines VTT data from YouTube videos.",
      longDescription:
        "This utility simplifies the process of extracting audio and subtitles from YouTube videos, with special functionality for processing and refining VTT subtitle data. It enables content creators and researchers to repurpose video content for transcription, translation, and accessibility purposes.",
      category: ["Audio Processing", "Data Extraction"],
      sector: "Media & Entertainment",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      github: "",
      demo: "",
      techStack: ["Python", "youtube-dl", "NLP", "Audio Processing"],
    },
    {
      id: 10,
      title: "Voice Assistant Model",
      description: "AI-powered voice assistant using text generation, GPT-2, transformers, and GTTS.",
      longDescription:
        "A comprehensive voice assistant framework that converts speech to text, processes user queries through transformer-based language models, and generates natural-sounding responses using Google's Text-to-Speech technology. This assistant can be customized for various applications from personal productivity to customer service.",
      category: ["AI", "Voice Technology"],
      sector: "Consumer Technology",
      image:
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      github: "",
      demo: "",
      techStack: ["Python", "GPT-2", "Transformers", "GTTS", "Speech Recognition"],
    },
    {
      id: 11,
      title: "Credit Risk Predictor",
      description: "ML model trained to predict credit risk for financial applications.",
      longDescription:
        "An advanced machine learning solution designed to assess borrower creditworthiness and predict default probability. This model incorporates various financial and behavioral indicators to generate accurate risk scores, helping financial institutions make informed lending decisions and manage their loan portfolios more effectively.",
      category: ["ML", "Finance"],
      sector: "Banking & Finance",
      image:
        "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      github: "",
      demo: "",
      techStack: ["Python", "Scikit-learn", "XGBoost", "Financial Data Analysis"],
    },
  ]

  const filteredProjects = filter ? projects.filter((project) => project.category.includes(filter)) : projects

  const categories = Array.from(new Set(projects.flatMap((project) => project.category)))

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Projects</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Explore my portfolio of AI, machine learning, and software development projects that showcase my technical
          skills and problem-solving abilities.
        </p>

        <RevealSection>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={!filter ? "default" : "outline"}
              onClick={() => setFilter(null)}
              className={
                !filter
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-accent"
              }
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={
                  filter === category
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-accent"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <RevealSection key={project.id} delay={idx * 100}>
              <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 card-hover group h-full flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.category.map((cat) => (
                      <Badge
                        key={cat}
                        variant="secondary"
                        className="bg-royal-100 text-royal-700 dark:bg-royal-900/30 dark:text-royal-300 hover:bg-royal-200 dark:hover:bg-royal-900/50"
                      >
                        {cat}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl text-slate-800 dark:text-white mb-2">{project.title}</CardTitle>
                  <div className="mb-2 text-sm font-medium text-teal-600 dark:text-teal-400 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                    {project.sector}
                  </div>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between mt-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="text-royal-600 dark:text-royal-400 border-royal-200 dark:border-royal-900/30 hover:bg-royal-50 dark:hover:bg-royal-900/20 hover:text-royal-700 dark:hover:text-royal-300 transition-all duration-300"
                      >
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                        <div className="text-sm font-medium text-teal-600 dark:text-teal-400 flex items-center mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                          </svg>
                          {project.sector}
                        </div>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-4 py-4">
                        <div className="flex items-center justify-center">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="rounded-lg w-full h-auto max-h-60 object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-slate-700 dark:text-slate-300 mb-4">{project.longDescription}</p>
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
                              Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech, index) => (
                                <Badge
                                  key={index}
                                  className="bg-royal-100 text-royal-700 dark:bg-royal-900/30 dark:text-royal-300"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2 mt-4">
                        {project.github && (
                          <Button variant="outline" className="gap-2 group" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                              Github
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button className="gap-2 bg-primary hover:bg-primary/90 group" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="text-slate-500 hover:text-royal-600 dark:text-slate-400 dark:hover:text-royal-400 hover:bg-royal-50 dark:hover:bg-royal-900/20 transition-all duration-300"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="text-slate-500 hover:text-royal-600 dark:text-slate-400 dark:hover:text-royal-400 hover:bg-royal-50 dark:hover:bg-royal-900/20 transition-all duration-300"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

