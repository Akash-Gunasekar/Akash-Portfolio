"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"
import RevealSection from "@/components/reveal-section"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    // Reset form
    setFormState({ name: "", email: "", message: "" })
    // Show success message or redirect
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-royal-50 to-teal-50 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get In Touch</h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <RevealSection className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden h-full">
                <div className="bg-gradient-to-r from-royal-600 to-teal-500 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                  <p className="text-royal-100 mb-6">
                    Feel free to reach out to me anytime. I'm always open to discussing new projects, ideas, or
                    opportunities.
                  </p>
                </div>

                <div className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-royal-100 dark:bg-royal-900/30 p-3 rounded-full text-royal-600 dark:text-royal-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Email</h4>
                        <a
                          href="mailto:akashpersonal18@gmail.com"
                          className="text-slate-800 dark:text-white hover:text-royal-600 dark:hover:text-royal-400 transition-colors"
                        >
                          akashpersonal18@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-royal-100 dark:bg-royal-900/30 p-3 rounded-full text-royal-600 dark:text-royal-400">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Phone</h4>
                        <a
                          href="tel:+916379508387"
                          className="text-slate-800 dark:text-white hover:text-royal-600 dark:hover:text-royal-400 transition-colors"
                        >
                          +91 6379508387
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-royal-100 dark:bg-royal-900/30 p-3 rounded-full text-royal-600 dark:text-royal-400">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Location</h4>
                        <p className="text-slate-800 dark:text-white">Chennai, Tamil Nadu, India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-royal-100 dark:bg-royal-900/30 p-3 rounded-full text-royal-600 dark:text-royal-400">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">LinkedIn</h4>
                        <a
                          href="https://www.linkedin.com/in/akash-gunasekar/"
                          target="_blank"
                          className="text-slate-800 dark:text-white hover:text-royal-600 dark:hover:text-royal-400 transition-colors"
                          rel="noreferrer"
                        >
                          Akash Gunasekar
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-royal-100 dark:bg-royal-900/30 p-3 rounded-full text-royal-600 dark:text-royal-400">
                        <Github className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">GitHub</h4>
                        <a
                          href="https://github.com/Akash-Gunasekar"
                          target="_blank"
                          className="text-slate-800 dark:text-white hover:text-royal-600 dark:hover:text-royal-400 transition-colors"
                          rel="noreferrer"
                        >
                          Akash-Gunasekar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            <RevealSection className="lg:col-span-3" delay={200}>
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:border-royal-500 dark:focus:border-royal-500 focus:ring-royal-500 dark:focus:ring-royal-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:border-royal-500 dark:focus:border-royal-500 focus:ring-royal-500 dark:focus:ring-royal-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Hello, I'd like to talk about..."
                      rows={6}
                      className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:border-royal-500 dark:focus:border-royal-500 focus:ring-royal-500 dark:focus:ring-royal-500 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-royal-600 to-teal-500 hover:from-royal-700 hover:to-teal-600 text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  )
}

