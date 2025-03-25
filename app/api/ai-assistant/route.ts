import { NextResponse } from "next/server"

// Hugging Face API configuration
const HF_API_TOKEN = process.env.HF_API_TOKEN
const MODEL_ID = "mistralai/Mistral-7B-Instruct-v0.1"
const API_URL = `https://api-inference.huggingface.co/models/${MODEL_ID}`

// Portfolio information for the AI to use
const portfolioInfo = `
About Akash Gunasekar:
- AI Software Engineer currently working at ConceptVines in Chennai
- Specializes in AI, Machine Learning, NLP, and Cloud Technologies
- Skilled in Python, Neo4j, AWS, and various ML frameworks
- Education: B. Tech in Artificial Intelligence and Data Science from Mahendra Engineering College

Projects:
- ROI Compass: AWS sales coach assistant for calculating ROI for cloud migrations
- TalentLens AI: Resume evaluation system using NLP
- InsightMirror: AI-powered self-evaluation report analyzer
- Neo Magic: Generative Smart Response system for banking using RAG and LLM
- Charter Party Agreement Analyzer: Extracts information from shipping emails
- Integration Testing for Logistics: Testing framework using Pytest and Neo4j
- Unstructured Data Processor: Uses Mistral LLM for data processing
- Profile Scraper: Automates data extraction from professional profiles
- YouTube Audio & Subtitle Extractor: Processes VTT data from videos
- Voice Assistant Model: AI-powered assistant using GPT-2 and GTTS
- Credit Risk Predictor: ML model for financial applications

Contact Information:
- Email: akashpersonal18@gmail.com
- Phone: +91 6379508387
- Location: Chennai, Tamil Nadu, India
- LinkedIn: https://www.linkedin.com/in/akash-gunasekar/
- GitHub: https://github.com/Akash-Gunasekar
`

// Format chat history for the Mistral model
function formatChatHistory(messages: any[]) {
  let formattedPrompt = `<s>[INST] You are an AI assistant for Akash Gunasekar's portfolio website. You should be helpful, concise, and professional. 
Use the following information about Akash Gunasekar to answer questions:
${portfolioInfo}

If you don't know the answer to a question, don't make up information. Just say you don't have that specific information.
[/INST]</s>`

  // Add conversation history
  for (let i = 0; i < messages.length; i++) {
    const message = messages[i]
    if (message.role === "user") {
      formattedPrompt += `<s>[INST] ${message.content} [/INST]</s>`
    } else {
      formattedPrompt += `<s> ${message.content} </s>`
    }
  }

  return formattedPrompt
}

// Fallback function to generate responses if the API fails
function generateFallbackResponse(message: string): string {
  message = message.toLowerCase()

  // About Akash
  if (message.includes("who") && (message.includes("akash") || message.includes("you"))) {
    return "Akash Gunasekar is an AI Software Engineer currently working at ConceptVines in Chennai. He specializes in AI, Machine Learning, NLP, and Cloud Technologies."
  }

  // Education
  if (
    message.includes("education") ||
    message.includes("study") ||
    message.includes("degree") ||
    message.includes("college")
  ) {
    return "Akash has a B. Tech in Artificial Intelligence and Data Science from Mahendra Engineering College."
  }

  // Skills
  if (
    message.includes("skill") ||
    message.includes("expertise") ||
    message.includes("technology") ||
    message.includes("tech stack")
  ) {
    return "Akash is skilled in AI & Machine Learning, NLP, Python, Neo4j, AWS, Cloud Computing, Backend Development, and Database Design."
  }

  // Projects
  if (message.includes("project") || message.includes("work") || message.includes("portfolio")) {
    return "Some of Akash's notable projects include:\n\n1. ROI Compass: AWS sales coach assistant for calculating ROI for cloud migrations\n2. TalentLens AI: Resume evaluation system using NLP\n3. InsightMirror: AI-powered self-evaluation report analyzer\n4. Neo Magic: Generative Smart Response system for banking\n5. Charter Party Agreement Analyzer: Extracts information from shipping emails"
  }

  // Contact
  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("phone") ||
    message.includes("reach")
  ) {
    return "You can contact Akash via:\nEmail: akashpersonal18@gmail.com\nPhone: +91 6379508387\nLinkedIn: https://www.linkedin.com/in/akash-gunasekar/\nGitHub: https://github.com/Akash-Gunasekar"
  }

  // Experience
  if (message.includes("experience") || message.includes("work experience") || message.includes("job")) {
    return "Akash is currently working as an AI Software Engineer at ConceptVines in Chennai. He previously worked as a Data Science Intern at Imagecon Academy in Salem."
  }

  // Default responses
  const defaultResponses = [
    "I'm Akash's portfolio assistant. I can tell you about his skills, projects, experience, or contact information. What would you like to know?",
    "Akash specializes in AI and machine learning. How can I help you learn more about his work?",
    "I'd be happy to share information about Akash's projects and experience. What specific information are you looking for?",
    "Feel free to ask about Akash's skills, education, or how to contact him.",
  ]

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
}

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    try {
      // Format the prompt with chat history
      const prompt = formatChatHistory([...history, { role: "user", content: message }])

      // Call Hugging Face API
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 500,
            temperature: 0.7,
            top_p: 0.95,
            do_sample: true,
            return_full_text: false,
          },
        }),
      })

      if (!response.ok) {
        throw new Error(`Hugging Face API error: ${response.status}`)
      }

      const data = await response.json()

      // Extract the generated text
      let aiResponse = ""
      if (Array.isArray(data) && data.length > 0 && data[0].generated_text) {
        aiResponse = data[0].generated_text.trim()
      } else {
        throw new Error("Unexpected API response format")
      }

      return NextResponse.json({ response: aiResponse })
    } catch (error) {
      console.error("Error calling Hugging Face API:", error)

      // Use fallback response generator if API call fails
      const fallbackResponse = generateFallbackResponse(message)
      return NextResponse.json({ response: fallbackResponse })
    }
  } catch (error) {
    console.error("Error in AI assistant API:", error)
    return NextResponse.json({ error: "Failed to get AI response" }, { status: 500 })
  }
}

