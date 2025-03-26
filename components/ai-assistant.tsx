// "use client"

// import type React from "react"

// import { useState, useRef, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Bot, X, Send, User, Minimize2, Maximize2 } from "lucide-react"

// interface Message {
//   role: "user" | "assistant"
//   content: string
// }

// export default function AIAssistant() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isMinimized, setIsMinimized] = useState(false)
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       role: "assistant",
//       content: "Hi there! I'm Akash Gunasekar's AI assistant powered by Mistral-7B. How can I help you today?",
//     },
//   ])
//   const [input, setInput] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const messagesEndRef = useRef<HTMLDivElement>(null)

//   // Scroll to bottom of messages
//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
//     }
//   }, [messages])

//   const handleSendMessage = async (e?: React.FormEvent) => {
//     if (e) e.preventDefault()

//     if (!input.trim()) return

//     const userMessage = input.trim()
//     setInput("")

//     // Add user message to chat
//     setMessages((prev) => [...prev, { role: "user", content: userMessage }])

//     // Set loading state
//     setIsLoading(true)

//     try {
//       // Prepare the conversation history for the API
//       const history = messages.map((msg) => ({
//         role: msg.role,
//         content: msg.content,
//       }))

//       // Call the Hugging Face API through our backend
//       const response = await fetch("/api/ai-assistant", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           message: userMessage,
//           history: history,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to get response from AI")
//       }

//       const data = await response.json()

//       // Add AI response to chat
//       setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
//     } catch (error) {
//       console.error("Error getting AI response:", error)
//       // Add error message to chat
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content: "I'm sorry, I encountered an error. Please try again later.",
//         },
//       ])
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const toggleChat = () => {
//     setIsOpen((prev) => !prev)
//     if (isMinimized) setIsMinimized(false)
//   }

//   const toggleMinimize = () => {
//     setIsMinimized((prev) => !prev)
//   }

//   return (
//     <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
//       {isOpen && (
//         <Card
//           className={`mb-2 w-80 sm:w-96 shadow-lg transition-all duration-300 ${
//             isMinimized ? "h-16" : "h-[500px] max-h-[80vh]"
//           } flex flex-col`}
//         >
//           <CardHeader className="p-3 border-b flex flex-row items-center justify-between shrink-0">
//             <div className="flex items-center">
//               <Bot className="h-5 w-5 text-royal-500 mr-2" />
//               <CardTitle className="text-sm font-medium">Portfolio AI Assistant</CardTitle>
//             </div>
//             <div className="flex items-center space-x-1">
//               <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleMinimize}>
//                 {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
//               </Button>
//               <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleChat}>
//                 <X className="h-4 w-4" />
//               </Button>
//             </div>
//           </CardHeader>

//           {!isMinimized && (
//             <>
//               <CardContent className="p-3 overflow-y-auto flex-grow">
//                 <div className="space-y-4">
//                   {messages.map((message, index) => (
//                     <div
//                       key={index}
//                       className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
//                     >
//                       <div
//                         className={`flex items-start space-x-2 max-w-[80%] ${
//                           message.role === "assistant" ? "" : "flex-row-reverse space-x-reverse"
//                         }`}
//                       >
//                         <div
//                           className={`p-1 rounded-full ${
//                             message.role === "assistant"
//                               ? "bg-royal-100 text-royal-600 dark:bg-royal-900/30 dark:text-royal-400"
//                               : "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400"
//                           }`}
//                         >
//                           {message.role === "assistant" ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
//                         </div>
//                         <div
//                           className={`p-3 rounded-lg ${
//                             message.role === "assistant"
//                               ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
//                               : "bg-royal-500 text-white dark:bg-royal-600"
//                           }`}
//                         >
//                           <p className="text-sm whitespace-pre-wrap">{message.content}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                   {isLoading && (
//                     <div className="flex justify-start">
//                       <div className="flex items-start space-x-2 max-w-[80%]">
//                         <div className="p-1 rounded-full bg-royal-100 text-royal-600 dark:bg-royal-900/30 dark:text-royal-400">
//                           <Bot className="h-5 w-5" />
//                         </div>
//                         <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
//                           <div className="flex space-x-1">
//                             <div className="h-2 w-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce"></div>
//                             <div
//                               className="h-2 w-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce"
//                               style={{ animationDelay: "0.2s" }}
//                             ></div>
//                             <div
//                               className="h-2 w-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce"
//                               style={{ animationDelay: "0.4s" }}
//                             ></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                   <div ref={messagesEndRef} />
//                 </div>
//               </CardContent>

//               <CardFooter className="p-3 border-t mt-auto shrink-0">
//                 <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
//                   <Input
//                     placeholder="Type your message..."
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     disabled={isLoading}
//                     className="flex-1"
//                   />
//                   <Button
//                     type="submit"
//                     size="icon"
//                     disabled={isLoading || !input.trim()}
//                     className="bg-royal-500 hover:bg-royal-600 text-white"
//                   >
//                     <Send className="h-4 w-4" />
//                   </Button>
//                 </form>
//               </CardFooter>
//             </>
//           )}
//         </Card>
//       )}

//       <Button
//         onClick={toggleChat}
//         className={`rounded-full w-12 h-12 bg-gradient-to-r from-royal-500 to-teal-500 hover:from-royal-600 hover:to-teal-600 text-white shadow-lg transition-all duration-300 ${
//           isOpen ? "rotate-90 opacity-0 pointer-events-none" : "rotate-0 opacity-100"
//         }`}
//       >
//         <Bot className="h-6 w-6" />
//       </Button>
//     </div>
//   )
// }




"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, X, Send, User, Minimize2, Maximize2, Copy, RefreshCw } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm Akash Gunasekar's AI assistant powered by Mistral-7B. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copyNotification, setCopyNotification] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Hide copy notification after 2 seconds
  useEffect(() => {
    if (copyNotification) {
      const timer = setTimeout(() => {
        setCopyNotification(null)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [copyNotification])

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])

    // Set loading state
    setIsLoading(true)

    try {
      // Prepare the conversation history for the API
      const history = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }))

      // Call the Hugging Face API through our backend
      const response = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history: history,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response from AI")
      }

      const data = await response.json()

      // Add AI response to chat
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
    } catch (error) {
      console.error("Error getting AI response:", error)
      // Add error message to chat
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I encountered an error. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const toggleChat = () => {
    setIsOpen((prev) => !prev)
    if (isMinimized) setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized((prev) => !prev)
  }

  const copyMessage = (content: string) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        setCopyNotification("Copied to clipboard!")
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err)
        setCopyNotification("Failed to copy")
      })
  }

  const refreshChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Hi there! I'm Akash Gunasekar's AI assistant powered by Mistral-7B. How can I help you today?",
      },
    ])
    setInput("")
    setCopyNotification("Chat refreshed!")
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {copyNotification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in-out">
          {copyNotification}
        </div>
      )}

      {isOpen && (
        <Card
          className={`mb-2 w-80 sm:w-96 shadow-lg transition-all duration-300 ${
            isMinimized ? "h-16" : "h-[500px] max-h-[80vh]"
          } flex flex-col`}
        >
          <CardHeader className="p-3 border-b flex flex-row items-center justify-between shrink-0">
            <div className="flex items-center">
              <Bot className="h-5 w-5 text-royal-500 mr-2" />
              <CardTitle className="text-sm font-medium">Portfolio AI Assistant</CardTitle>
            </div>
            <div className="flex items-center space-x-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={refreshChat}>
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Refresh chat</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleMinimize}>
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleChat}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="p-3 overflow-y-auto flex-grow">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`flex items-start space-x-2 max-w-[80%] ${
                          message.role === "assistant" ? "" : "flex-row-reverse space-x-reverse"
                        }`}
                      >
                        <div
                          className={`p-1 rounded-full ${
                            message.role === "assistant"
                              ? "bg-royal-100 text-royal-600 dark:bg-royal-900/30 dark:text-royal-400"
                              : "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400"
                          }`}
                        >
                          {message.role === "assistant" ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                        </div>
                        <div
                          className={`p-3 rounded-lg group relative ${
                            message.role === "assistant"
                              ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                              : "bg-royal-500 text-white dark:bg-royal-600"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <button
                            onClick={() => copyMessage(message.content)}
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
                            aria-label="Copy message"
                          >
                            <Copy className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2 max-w-[80%]">
                        <div className="p-1 rounded-full bg-royal-100 text-royal-600 dark:bg-royal-900/30 dark:text-royal-400">
                          <Bot className="h-5 w-5" />
                        </div>
                        <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce"></div>
                            <div
                              className="h-2 w-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="h-2 w-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce"
                              style={{ animationDelay: "0.4s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              <CardFooter className="p-3 border-t mt-auto shrink-0">
                <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={isLoading || !input.trim()}
                    className="bg-royal-500 hover:bg-royal-600 text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </>
          )}
        </Card>
      )}

      <Button
        onClick={toggleChat}
        className={`rounded-full w-12 h-12 bg-gradient-to-r from-royal-500 to-teal-500 hover:from-royal-600 hover:to-teal-600 text-white shadow-lg transition-all duration-300 ${
          isOpen ? "rotate-90 opacity-0 pointer-events-none" : "rotate-0 opacity-100"
        }`}
      >
        <Bot className="h-6 w-6" />
      </Button>
    </div>
  )
}

