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
    description: "AWS sales coach assistant that calculates and visualizes return on investment for cloud migrations.",
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
  {
    id: 12,
    title: "Alphind Synthetic Data Generation",
    description:
      "Synthetic data generation using FHIR involves creating artificial but realistic healthcare data that adheres to FHIR standards.",
    longDescription:
      "Alphind's synthetic data generation platform creates realistic healthcare datasets that comply with FHIR (Fast Healthcare Interoperability Resources) standards. This solution enables healthcare organizations to develop, test, and train AI models without compromising patient privacy, while ensuring data maintains clinical validity and statistical properties of real-world health information.",
    category: ["Healthcare", "Data Generation", "AI"],
    sector: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["Python", "FHIR", "Machine Learning", "Healthcare Standards", "Data Synthesis"],
  },
  {
    id: 13,
    title: "AWS Bedrock Foundational Models",
    description:
      "The Anthropic AI model has been implemented as a Sales Coach on AWS, leveraging generative AI to provide real-time coaching, sales insights, and personalized recommendations",
    longDescription:
      "This project implements Anthropic's Claude model on AWS Bedrock to create an intelligent sales coaching system. The AI coach analyzes sales conversations, provides real-time guidance, identifies improvement opportunities, and delivers personalized recommendations to sales representatives, helping them enhance their performance and close deals more effectively.",
    category: ["AI", "Sales", "Cloud"],
    sector: "Sales & Marketing",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["AWS Bedrock", "Anthropic Claude", "Generative AI", "AWS Lambda", "API Gateway"],
  },
  {
    id: 14,
    title: "Cypress Automation Testing",
    description:
      "The Automation Testing for AWS Gen AI ROI Calculator ensures the accuracy, reliability, and performance of the ROI estimation tool. This testing framework automates validation processes, including input-output consistency, data accuracy, UI functionality, and API performance, guaranteeing that the ROI calculator delivers precise and actionable insights for AWS Gen AI investments",
    longDescription:
      "A comprehensive Cypress-based testing framework designed specifically for the AWS Generative AI ROI Calculator. This automation suite validates all aspects of the calculator, from UI interactions to complex calculations, ensuring consistent results across different scenarios. The framework includes regression testing, edge case validation, and performance monitoring to maintain the calculator's reliability and accuracy.",
    category: ["Testing", "Automation", "Cloud"],
    sector: "Quality Assurance",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["Cypress", "JavaScript", "AWS Services", "CI/CD", "Test Automation"],
  },
  {
    id: 16,
    title: "Consumer Duty Compliance - Close Brothers",
    description:
      "The Consumer Duty Compliance initiative for Close Brothers ensures that the financial institution meets regulatory requirements by prioritizing customer outcomes, transparency, and fairness",
    longDescription:
      "A comprehensive compliance solution developed for Close Brothers to meet the FCA's Consumer Duty regulations. This system monitors customer interactions, product performance, and service delivery to ensure fair treatment and positive outcomes for consumers. It includes automated compliance checks, risk assessment tools, and reporting capabilities to demonstrate regulatory adherence and identify improvement opportunities.",
    category: ["Compliance", "Finance", "Regulatory"],
    sector: "Financial Services",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
    github: "",
    demo: "",
    techStack: ["Regulatory Technology", "Data Analytics", "Compliance Frameworks", "Reporting Tools"],
  },
  {
    id: 17,
    title: "Deepevals - Hitachi",
    description: "Evaluates Proposed solution against the problem statement",
    longDescription:
      "Deepevals is an advanced evaluation framework developed for Hitachi that assesses proposed technical solutions against defined problem statements. The system uses multiple evaluation criteria including technical feasibility, cost-effectiveness, scalability, and alignment with business objectives to provide comprehensive solution assessments. It helps decision-makers identify the most viable solutions and potential implementation challenges.",
    category: ["Evaluation", "Decision Support", "AI"],
    sector: "Enterprise Solutions",
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    github: "",
    demo: "",
    techStack: ["Python", "Evaluation Frameworks", "Data Analysis", "Reporting", "Decision Models"],
  },
  {
    id: 18,
    title: "Deepevals - Profile Scoring Agent",
    description:
      "To develop an initial gating agent that efficiently screens and summarizes candidate profiles against a given Job Description (JD). This will help optimize the evaluation process by filtering relevant profiles before a detailed review, ensuring efficient bandwidth utilization for the hiring team",
    longDescription:
      "The Profile Scoring Agent is an AI-powered recruitment tool that automates the initial candidate screening process. It analyzes resumes and profiles against job descriptions, scoring candidates based on skills match, experience relevance, and qualification alignment. The system generates concise summaries highlighting key strengths and potential gaps, allowing hiring teams to focus their attention on the most promising candidates and streamlining the recruitment pipeline.",
    category: ["AI", "HR", "Recruitment"],
    sector: "Human Resources",
    image:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["NLP", "Machine Learning", "Resume Parsing", "Scoring Algorithms", "Python"],
  },
  {
    id: 19,
    title: "Deepseek",
    description:
      "Deploy DeepSeek-R1 on the cloud for scalable AI model inference and training, ensuring high-performance computing.",
    longDescription:
      "This project focuses on deploying and optimizing DeepSeek-R1, a powerful large language model, on cloud infrastructure for enterprise-scale applications. The implementation includes containerized deployment, auto-scaling capabilities, and performance optimization to handle varying workloads. The system provides APIs for seamless integration with existing applications, enabling organizations to leverage advanced AI capabilities for text generation, reasoning, and knowledge extraction.",
    category: ["AI", "Cloud", "LLM"],
    sector: "AI Infrastructure",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    github: "",
    demo: "",
    techStack: ["DeepSeek-R1", "Docker", "Kubernetes", "Cloud Computing", "API Development"],
  },
  {
    id: 20,
    title: "FHLB - AI AGENT",
    description: "AI Agent crawls all the publicly available data in their websites",
    longDescription:
      "The FHLB AI Agent is an intelligent web crawler designed specifically for Federal Home Loan Bank websites. It systematically navigates and extracts publicly available information including financial data, regulatory filings, program details, and market updates. The collected data is structured, indexed, and made searchable, providing comprehensive insights into FHLB activities and offerings while maintaining compliance with access regulations.",
    category: ["AI", "Web Crawling", "Data Extraction"],
    sector: "Financial Services",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["Python", "Web Scraping", "NLP", "Data Processing", "Search Indexing"],
  },
  {
    id: 21,
    title: "FHLB - Outlook Automation",
    description:
      "Automatically send emails based on predefined triggers or conditions, ensuring timely communication without manual intervention.",
    longDescription:
      "The FHLB Outlook Automation system streamlines email communications for Federal Home Loan Bank operations. This solution monitors business events and data changes to trigger personalized, context-aware email communications to stakeholders. It includes template management, scheduling capabilities, delivery tracking, and compliance features to ensure all communications adhere to regulatory requirements while reducing manual effort and improving consistency.",
    category: ["Automation", "Communication", "Workflow"],
    sector: "Financial Services",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    github: "",
    demo: "",
    techStack: ["Microsoft Graph API", "Power Automate", "Azure Functions", "Email Templates", "Workflow Automation"],
  },
  {
    id: 22,
    title: "Financial Literature Standards",
    description: "This identifie the GAP and alert where the gaps are missing in the page number of the document",
    longDescription:
      "The Financial Literature Standards tool ensures document integrity and compliance by analyzing financial documents for pagination issues and structural inconsistencies. It automatically scans documents to identify missing pages, sequence errors, and reference inconsistencies, generating detailed reports highlighting discrepancies. This solution helps financial institutions maintain document quality and regulatory compliance while reducing manual review time and potential oversight errors.",
    category: ["Document Analysis", "Compliance", "Quality Assurance"],
    sector: "Financial Services",
    image:
      "https://images.unsplash.com/photo-1568234928966-359c35dd8327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    github: "",
    demo: "",
    techStack: ["PDF Processing", "Document Analysis", "Pattern Recognition", "Reporting Tools", "Python"],
  },
  {
    id: 23,
    title: "Graph Lamini",
    description:
      "Graph LlamaIndex enables efficient querying of uploaded documents by constructing a knowledge graph that links entities, topics, and concepts within the data. This structured approach improves retrieval accuracy and contextual understanding, making it useful for applications such as chatbots, recommendation systems, and research assistants",
    longDescription:
      "Graph Lamini leverages the LlamaIndex framework to create sophisticated knowledge graphs from document collections. The system analyzes document content to identify entities, relationships, and concepts, organizing them into an interconnected graph structure. This approach enables more contextual and precise information retrieval compared to traditional keyword searches, supporting complex queries that require understanding relationships between concepts and providing more relevant responses in AI applications.",
    category: ["Knowledge Graphs", "AI", "Information Retrieval"],
    sector: "Knowledge Management",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    github: "",
    demo: "",
    techStack: ["LlamaIndex", "Graph Databases", "NLP", "Knowledge Representation", "Python"],
  },
  {
    id: 24,
    title: "Hitachi Synthetic Generation",
    description:
      "Hitachi Synthetic Generation creates high-quality synthetic data for AI training, testing, and analysis while preserving privacy and accuracy. It enhances model performance without using real sensitive data",
    longDescription:
      "Hitachi's Synthetic Data Generation platform creates statistically representative artificial datasets that maintain the characteristics and relationships of original data without exposing sensitive information. This solution enables organizations to develop, test, and train AI models on realistic data while addressing privacy concerns and regulatory requirements. The platform supports various data types including structured, time-series, and transactional data, with controls to ensure synthetic data quality and utility.",
    category: ["Data Generation", "Privacy", "AI"],
    sector: "Data Science",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["Generative Models", "Statistical Modeling", "Privacy Preservation", "Data Validation", "Python"],
  },
  {
    id: 25,
    title: "IQVIA and Hitachi",
    description:
      "IQVIA's unstructured synthetic data generation creates high-quality, privacy-safe data for AI and analytics. With Speed Data Quality, it ensures accuracy, consistency, and reliability in data-driven applications",
    longDescription:
      "A collaborative solution between IQVIA and Hitachi that specializes in generating synthetic healthcare and pharmaceutical data from unstructured sources. The system transforms complex medical documents, clinical notes, and research papers into privacy-compliant synthetic datasets that preserve statistical properties and relationships. The Speed Data Quality framework ensures the synthetic data maintains high standards of accuracy, consistency, and utility for AI training and analytics applications in healthcare research.",
    category: ["Healthcare", "Data Generation", "Analytics"],
    sector: "Healthcare & Pharmaceuticals",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    github: "",
    demo: "",
    techStack: [
      "NLP",
      "Synthetic Data Generation",
      "Healthcare Analytics",
      "Data Quality Frameworks",
      "Machine Learning",
    ],
  },
  {
    id: 26,
    title: "Langflow",
    description:
      "Langflow is integrated into Speedx as an AI agent studio, enabling seamless creation, customization, and deployment of AI workflows with a user-friendly interface.",
    longDescription:
      "Langflow provides a visual development environment for creating and deploying AI workflows within the Speedx platform. This integration allows users to design complex AI pipelines through an intuitive drag-and-drop interface, connecting various components like data sources, LLMs, and processing steps. The system supports rapid prototyping, testing, and deployment of AI agents without extensive coding, democratizing AI development while maintaining the flexibility to customize workflows for specific business needs.",
    category: ["AI", "Workflow", "Low-Code"],
    sector: "AI Development",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["Langflow", "LangChain", "React", "Python", "AI Orchestration"],
  },
  {
    id: 27,
    title: "Medeanalytics",
    description: "Research Documents on LLM model",
    longDescription:
      "Medeanalytics is a comprehensive research initiative focused on applying Large Language Models to healthcare analytics. The project explores how LLMs can extract insights from medical literature, clinical notes, and healthcare data to support clinical decision-making, identify treatment patterns, and predict patient outcomes. The research includes model fine-tuning for medical terminology, evaluation of accuracy in healthcare contexts, and development of specialized prompting techniques for medical queries. This project aims to bridge the gap between advanced AI capabilities and practical healthcare applications, producing research documents that guide the responsible implementation of LLMs in medical analytics.",
    category: ["Healthcare", "AI Research", "LLM"],
    sector: "Healthcare Analytics",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["LLM", "Medical NLP", "Research Methodology", "Healthcare Data", "Python"],
  },
  {
    id: 28,
    title: "Mistral LLM - Document Q&A Bot",
    description:
      "A document-based Q&A bot using the Mistral LLM from Hugging Face enables users to upload files and get AI-driven answers instantly",
    longDescription:
      "This document Q&A system leverages the Mistral Large Language Model to provide intelligent responses to queries about uploaded documents. Users can upload various document formats which are processed, indexed, and made available for natural language questioning. The system uses advanced context retrieval techniques to find relevant document sections and generates accurate, contextually appropriate answers based on the document content, with citations to source material.",
    category: ["AI", "Document Processing", "Q&A"],
    sector: "Knowledge Management",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["Mistral LLM", "Hugging Face", "Vector Databases", "Document Processing", "RAG"],
  },
  {
    id: 29,
    title: "Neuberger Berman",
    description:
      "Neuberger Berman's unstructured document query and retrieval system enables efficient search and extraction of relevant information from complex, unstructured documents using AI",
    longDescription:
      "Developed for Neuberger Berman, this advanced document intelligence system transforms how the firm manages and extracts value from unstructured financial documents. The solution processes various document types including prospectuses, financial reports, and research papers, creating a searchable knowledge base with semantic understanding. Users can query documents in natural language and receive precise information with source references, significantly reducing the time spent searching through complex financial documentation.",
    category: ["AI", "Document Intelligence", "Finance"],
    sector: "Investment Management",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["NLP", "Document Processing", "Vector Search", "Financial Text Analysis", "RAG"],
  },
  {
    id: 30,
    title: "Neuberger Berman Email Automation System",
    description:
      "An AI-driven email automation system that sends emails based on predefined criteria, streamlining communication and improving efficiency.",
    longDescription:
      "This email automation system for Neuberger Berman intelligently manages client and internal communications based on market events, portfolio changes, and business rules. The AI-powered solution analyzes incoming information, determines communication requirements, personalizes content for recipients, and schedules optimal delivery times. It includes compliance checks, performance tracking, and integration with existing CRM systems to ensure all communications align with regulatory requirements and business objectives.",
    category: ["Automation", "Communication", "AI"],
    sector: "Investment Management",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    github: "",
    demo: "",
    techStack: ["Email Automation", "NLP", "Business Rules Engine", "Compliance Checking", "CRM Integration"],
  },
  {
    id: 31,
    title: "NLP - Tasks",
    description: "Retrieve similar terms - cosine similarities",
    longDescription:
      "This NLP toolkit specializes in semantic similarity analysis using cosine similarity metrics. The system processes text data to create vector representations of terms and concepts, enabling the identification of semantically related terms regardless of exact wording. Applications include content recommendation, search enhancement, knowledge graph construction, and terminology standardization across documents, helping organizations discover hidden connections in their textual data.",
    category: ["NLP", "Text Analysis", "Semantic Search"],
    sector: "Data Science",
    image:
      "https://images.unsplash.com/photo-1456428746267-a1756408f782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["Word Embeddings", "Cosine Similarity", "Vector Representations", "Python", "NLP Libraries"],
  },
  {
    id: 32,
    title: "Nova - Model",
    description:
      "Nova Model calculates AWS ROI by analyzing cost savings, performance improvements, and efficiency gains, aiding businesses in cloud investment decisions.",
    longDescription:
      "The Nova Model is a sophisticated financial analysis tool that provides comprehensive ROI calculations for AWS cloud migrations and implementations. It incorporates multiple factors including infrastructure costs, operational efficiencies, performance improvements, and business agility benefits to deliver accurate, customized ROI projections. The model supports scenario planning with sensitivity analysis and visualization capabilities, helping organizations make data-driven decisions about their AWS investments.",
    category: ["Finance", "Cloud", "Analytics"],
    sector: "Cloud Computing",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["Financial Modeling", "AWS Services", "Data Analytics", "Visualization", "ROI Calculation"],
  },
  {
    id: 33,
    title: "Open Web-UI",
    description:
      "Open WebUI is a self-hosted, open-source ChatGPT UI with local models and API integration, providing a user-friendly interface for AI interactions.",
    longDescription:
      "Open Web-UI is a versatile, self-hosted interface for interacting with various AI models, including local and API-based options. This open-source solution provides a ChatGPT-like experience with additional features such as conversation management, prompt templates, and file uploads. The platform supports multiple models simultaneously, allowing users to compare responses and choose the most appropriate AI for specific tasks while maintaining control over their data and deployment environment.",
    category: ["AI", "UI", "Open Source"],
    sector: "AI Interfaces",
    image:
      "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["React", "Node.js", "LLM Integration", "WebSockets", "Open Source"],
  },
  {
    id: 34,
    title: "PPT-Generation - AWS ROI Calc",
    description:
      "Generates PPT proposals, including AWS ROI calculations, to streamline business presentations and financial analysis.",
    longDescription:
      "This automated presentation generation system creates professional PowerPoint proposals featuring AWS ROI calculations and visualizations. The solution takes financial and technical inputs about a potential AWS implementation, calculates comprehensive ROI metrics, and automatically generates compelling slides with appropriate charts, tables, and narrative content. The system includes customizable templates, branding options, and the ability to highlight key financial benefits, helping sales teams deliver polished, data-driven proposals with minimal manual effort.",
    category: ["Automation", "Presentation", "Finance"],
    sector: "Sales Enablement",
    image:
      "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["Python", "PowerPoint Automation", "Data Visualization", "Financial Modeling", "AWS Services"],
  },
  {
    id: 35,
    title: "Payment Fraud Detection",
    description:
      "Detect fraudulent transactions by extracting deep features, modeling anomalies with variational autoencoders, and leveraging graph analysis for suspicious patterns.",
    longDescription:
      "This advanced fraud detection system combines multiple AI techniques to identify suspicious payment transactions with high accuracy and low false positives. The solution extracts deep features from transaction data, uses variational autoencoders to model normal behavior and detect anomalies, and applies graph analysis to uncover complex fraud patterns across transaction networks. Real-time scoring capabilities enable immediate intervention for high-risk transactions while continuous learning mechanisms adapt to evolving fraud tactics.",
    category: ["AI", "Security", "Finance"],
    sector: "Financial Security",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: [
      "Deep Learning",
      "Variational Autoencoders",
      "Graph Analysis",
      "Anomaly Detection",
      "Real-time Processing",
    ],
  },
  {
    id: 36,
    title: "Review and Repair Agent",
    description:
      "The Review and Repair Agent analyzes document formatting, identifies issues, and suggests or applies corrections for improved structure and readability.",
    longDescription:
      "The Review and Repair Agent is an intelligent document quality assurance tool that automatically analyzes documents for formatting inconsistencies, structural issues, and readability problems. It identifies a wide range of issues including inconsistent headings, improper spacing, table formatting errors, and accessibility concerns. The system can either generate detailed reports with recommended fixes or automatically apply corrections based on configurable rules, significantly improving document quality and consistency while reducing manual review time.",
    category: ["Document Processing", "Quality Assurance", "Automation"],
    sector: "Content Management",
    image:
      "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["Document Analysis", "Pattern Recognition", "NLP", "Automated Correction", "Quality Metrics"],
  },
  {
    id: 37,
    title: "S4c - Alternative Text Generation",
    description:
      "S4C generates alternative text for images in PDFs, improving accessibility and enhancing content understanding for visually impaired users.",
    longDescription:
      "S4C (Sight for Content) is an accessibility-focused solution that automatically generates descriptive alternative text for images embedded in PDF documents. Using computer vision and natural language generation, the system analyzes image content and context to create accurate, contextually relevant descriptions that work with screen readers and other assistive technologies. This solution helps organizations meet accessibility standards while improving document usability for visually impaired users across large document collections.",
    category: ["Accessibility", "AI", "Document Processing"],
    sector: "Accessibility",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["Computer Vision", "NLG", "PDF Processing", "Accessibility Standards", "Image Analysis"],
  },
  {
    id: 38,
    title: "Self-Service Portal - Turn On/Off Virtual Machines Integrated with AD",
    description:
      "Start or stop virtual machines connected to Active Directory via the self-service portal for efficient resource management.",
    longDescription:
      "This self-service portal provides authorized users with the ability to manage virtual machine states through a secure, role-based interface integrated with Active Directory. Users can start, stop, restart, and schedule VM operations based on their access permissions, reducing IT support overhead while maintaining governance. The solution includes usage tracking, approval workflows for critical systems, and automated notifications, helping organizations optimize cloud resource utilization and control costs while empowering end-users.",
    category: ["Cloud Management", "Self-Service", "IT Operations"],
    sector: "IT Infrastructure",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["Active Directory", "Cloud APIs", "Web Portal", "Role-Based Access Control", "Automation"],
  },
  {
    id: 39,
    title: "Sequence Diagram Generator Using Mermaid",
    description:
      "Create sequence diagrams using Mermaid.js and save them as SVG for documentation, visualization, or sharing.",
    longDescription:
      "This specialized tool simplifies the creation of technical sequence diagrams using the Mermaid.js syntax. Users can describe system interactions in a simple text format, and the generator renders professional sequence diagrams with customizable styling options. The solution supports exporting diagrams as SVG files for inclusion in documentation, presentations, or collaborative sharing. It includes features like diagram versioning, template libraries, and integration capabilities with documentation systems, making it valuable for software development and system architecture teams.",
    category: ["Documentation", "Visualization", "Development Tools"],
    sector: "Software Development",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "",
    demo: "",
    techStack: ["Mermaid.js", "SVG", "JavaScript", "Diagram Generation", "Technical Documentation"],
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

