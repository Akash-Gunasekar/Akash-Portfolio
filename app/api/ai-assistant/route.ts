// import { NextResponse } from "next/server"

// const HF_API_TOKEN = process.env.HF_API_TOKEN
// const MODEL_ID = "mistralai/Mistral-7B-Instruct-v0.1"
// const API_URL = `https://api-inference.huggingface.co/models/${MODEL_ID}`

// // Portfolio information for the AI to use
// const portfolioInfo = `
// About Akash Gunasekar:
// - AI Software Engineer currently working at ConceptVines in Chennai (Jan 2024 – Present)
// - Former Data Science Intern at Imagecon Academy, Salem (Aug 2022 – Nov 2023)
// - Total Experience: 1 year 4 months (as of March 2025)
// - Specializes in AI, Machine Learning, NLP, LLMs, and Cloud Technologies
// - Skilled in Python, Neo4j, AWS, SQL, CQL, JavaScript, HTML/CSS, and various ML frameworks
// - Experienced with Flask, FastAPI, Docker, Nginx, Git, Streamlit, MLflow, and AWS services like EC2, Lambda, S3, IAM, VPC, API Gateway, and CloudWatch
// - Education:
//   - B.Tech in Artificial Intelligence and Data Science – Mahendra Engineering College, Namakkal (87%) – 2024
//   - Diploma in Electrical and Electronics Engineering – Dhanalakshmi Srinivasan Polytechnic College, Perambalur (92%) – 2021
//   - SSLC – Sri Ram Matriculation Hr. Sec. School, Cuddalore (85%) – 2018

// Projects:
// - ROI Compass: AWS sales coach assistant for calculating ROI for cloud migrations
// - TalentLens AI: Resume evaluation system using NLP
// - InsightMirror: AI-powered self-evaluation report analyzer
// - Neo Magic: Generative Smart Response system for banking using RAG and LLM
// - Charter Party Agreement Analyzer: Extracts and summarizes data from shipping emails using NLP & Neo4j
// - Integration Testing for Logistics: Testing framework using Pytest and Neo4j Test Containers
// - Unstructured Data Processor: Uses Mistral LLM for unstructured document processing
// - Profile Scraper: Automates data extraction from LinkedIn profile URLs
// - YouTube Audio & Subtitle Extractor: Processes and refines VTT data from YouTube videos
// - Voice Assistant Model: AI assistant using GPT-2, Transformers, and GTTS
// - Credit Risk Predictor: Trained ML model for financial risk prediction

// Certifications:
// - AWS Partner: Accreditation (Technical) – https://www.credly.com/badges/f7a174b9-af0d-4245-9c1f-2249e8e57ac9/linked_in_profile
// - Neo4j Fundamentals – https://graphacademy.neo4j.com/c/339c1bb0-5dc9-4288-90b9-59707044fc40/
// - Cypher Fundamentals – https://graphacademy.neo4j.com/c/e76bb07e-8857-4715-8f3f-8e56ad07da76/
// - Micro Degree in Data Science – https://www.imageconindia.com/certificate/verify-certificate (Certificate ID: IMIC22080308)

// Contact Information:
// - Email: akashpersonal18@gmail.com
// - Phone: +91 6379508387
// - Location: Chennai, Tamil Nadu, India
// - LinkedIn: https://www.linkedin.com/in/akash-gunasekar-859b48199/
// - GitHub: https://github.com/Akash-Gunasekar

// Personal Details:
// - Date of Birth: 17th October 2001
// - Nationality: Indian
// - Gender: Male
// - Languages Known: Tamil, English
// - Permanent Address: 54 DS City, Mallasamudhram, Namakkal- 637503
// `

// function formatChatHistory(messages: any[]) {
//   let prompt = `You are an AI assistant for Akash Gunasekar's portfolio website. Be helpful, concise, and professional.
// Use the following information about Akash Gunasekar to answer questions:
// ${portfolioInfo}

// If you don't know the answer to a question, just say you don't have that specific information.\n\n`

//   for (let i = 0; i < messages.length; i++) {
//     const message = messages[i]
//     prompt += `${message.role === "user" ? "User" : "Assistant"}: ${message.content}\n`
//   }

//   prompt += "Assistant:"
//   return prompt
// }

// export async function POST(request: Request) {
//   try {
//     const { message, history } = await request.json()

//     if (!message) {
//       return NextResponse.json({ error: "Message is required" }, { status: 400 })
//     }

//     const prompt = formatChatHistory([...history, { role: "user", content: message }])

//     console.log("🧾 Prompt sent to Hugging Face:", prompt)

//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${HF_API_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         inputs: prompt,
//         parameters: {
//           max_new_tokens: 300,
//           temperature: 0.5,
//           top_p: 0.9,
//           do_sample: true,
//           return_full_text: false,
//         },
//       }),
//     })

//     if (!response.ok) {
//       throw new Error(`Hugging Face API error: ${response.status}`)
//     }

//     const data = await response.json()

//     console.log("🧠 Hugging Face raw response:", JSON.stringify(data, null, 2))

//     let aiResponse = ""
//     if (Array.isArray(data) && data[0]?.generated_text !== undefined) {
//       aiResponse = data[0].generated_text.trim()
//     }

//     return NextResponse.json({ response: aiResponse })
//   } catch (error) {
//     console.error("❌ Error in AI assistant API:", error)
//     return NextResponse.json(
//       { error: "Failed to get AI response from Hugging Face" },
//       { status: 500 }
//     )
//   }
// }


import { NextResponse } from "next/server"

const HF_API_TOKEN = process.env.HF_API_TOKEN
const MODEL_ID = "mistralai/Mistral-7B-Instruct-v0.1"
const API_URL = `https://api-inference.huggingface.co/models/${MODEL_ID}`

// Portfolio information for the AI to use
const portfolioInfo = `
About Akash Gunasekar:
- AI Software Engineer currently working at ConceptVines in Chennai (Jan 2024 – Present)
- Former Data Science Intern at Imagecon Academy, Salem (Aug 2022 – Nov 2023)
- Total Experience: 1 year 4 months (as of March 2025)
- Specializes in AI, Machine Learning, NLP, LLMs, and Cloud Technologies
- Skilled in Python, Neo4j, AWS, SQL, CQL, JavaScript, HTML/CSS, and various ML frameworks
- Experienced with Flask, FastAPI, Docker, Nginx, Git, Streamlit, MLflow, and AWS services like EC2, Lambda, S3, IAM, VPC, API Gateway, and CloudWatch
- Education:
  - B.Tech in Artificial Intelligence and Data Science – Mahendra Engineering College, Namakkal (87%) – 2024
  - Diploma in Electrical and Electronics Engineering – Dhanalakshmi Srinivasan Polytechnic College, Perambalur (92%) – 2021
  - SSLC – Sri Ram Matriculation Hr. Sec. School, Cuddalore (85%) – 2018

Projects:
- ROI Compass: AWS sales coach assistant for calculating ROI for cloud migrations
- TalentLens AI: Resume evaluation system using NLP
- InsightMirror: AI-powered self-evaluation report analyzer
- Neo Magic: Generative Smart Response system for banking using RAG and LLM
- Charter Party Agreement Analyzer: Extracts and summarizes data from shipping emails using NLP & Neo4j
- Integration Testing for Logistics: Testing framework using Pytest and Neo4j Test Containers
- Unstructured Data Processor: Uses Mistral LLM for unstructured document processing
- Profile Scraper: Automates data extraction from LinkedIn profile URLs
- YouTube Audio & Subtitle Extractor: Processes and refines VTT data from YouTube videos
- Voice Assistant Model: AI assistant using GPT-2, Transformers, and GTTS
- Credit Risk Predictor: Trained ML model for financial risk prediction

Certifications:
- AWS Partner: Accreditation (Technical) – https://www.credly.com/badges/f7a174b9-af0d-4245-9c1f-2249e8e57ac9/linked_in_profile
- Neo4j Fundamentals – https://graphacademy.neo4j.com/c/339c1bb0-5dc9-4288-90b9-59707044fc40/
- Cypher Fundamentals – https://graphacademy.neo4j.com/c/e76bb07e-8857-4715-8f3f-8e56ad07da76/
- Micro Degree in Data Science – https://www.imageconindia.com/certificate/verify-certificate (Certificate ID: IMIC22080308)

Contact Information:
- Email: akashpersonal18@gmail.com
- Phone: +91 6379508387
- Location: Chennai, Tamil Nadu, India
- LinkedIn: https://www.linkedin.com/in/akash-gunasekar-859b48199/
- GitHub: https://github.com/Akash-Gunasekar

Personal Details:
- Date of Birth: 17th October 2001
- Nationality: Indian
- Gender: Male
- Languages Known: Tamil, English
- Permanent Address: 54 DS City, Mallasamudhram, Namakkal- 637503
`

function formatPrompt(message: string) {
  return `
You are an AI assistant for Akash Gunasekar's portfolio website. Be helpful, concise, and professional.
Use the following information about Akash Gunasekar to answer the user's question:

${portfolioInfo}

If you don't know the answer to a question, just say you don't have that specific information.

User: ${message}
Assistant:`.trim()
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const prompt = formatPrompt(message)

    console.log("🧾 Prompt sent to Hugging Face:\n", prompt)

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 300,
          temperature: 0.5,
          top_p: 0.9,
          do_sample: true,
          return_full_text: false,
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`Hugging Face API error: ${response.status}`)
    }

    const data = await response.json()

    console.log("🧠 Hugging Face raw response:", JSON.stringify(data, null, 2))

    let aiResponse = ""
    if (Array.isArray(data) && data[0]?.generated_text !== undefined) {
      aiResponse = data[0].generated_text.trim()
    }

    return NextResponse.json({ response: aiResponse })
  } catch (error) {
    console.error("❌ Error in AI assistant API:", error)
    return NextResponse.json(
      { error: "Failed to get AI response from Hugging Face" },
      { status: 500 }
    )
  }
}
