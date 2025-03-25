import type React from "react"
import "@/app/globals.css"
import { Poppins, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import AIAssistant from "@/components/ai-assistant"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Akash Gunasekar - AI Software Engineer",
  description:
    "Portfolio of Akash Gunasekar, AI Software Engineer specializing in Machine Learning, NLP, and Cloud Technologies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
          <AIAssistant />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'