// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { MoveRight, Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react"
// import HeroAnimation from "@/components/hero-animation"
// import SkillsSection from "@/components/skills-section"
// import ProjectsSection from "@/components/projects-section"
// import ExperienceSection from "@/components/experience-section"
// import EducationSection from "@/components/education-section"
// import { ThemeToggle } from "@/components/theme-toggle"
// import ContactSection from "@/components/contact-section"
// import AboutSection from "@/components/about-section"
// import Image from "next/image"

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <ThemeToggle />

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-royal-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
//         <div className="absolute inset-0 z-0">
//           <HeroAnimation />
//         </div>

//         <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="order-2 lg:order-1 animate-fadeIn">
//               <div className="inline-block mb-4 px-4 py-1 bg-royal-100 dark:bg-royal-900/30 text-royal-600 dark:text-royal-400 rounded-full text-sm font-medium">
//                 Hello, I'm Akash Gunasekar
//               </div>

//               <h1 className="text-4xl md:text-6xl font-bold mb-6">
//                 <span className="block text-slate-800 dark:text-white mb-2">AI Software</span>
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-royal-600 to-teal-500 dark:from-royal-400 dark:to-teal-400">
//                   Engineer
//                 </span>
//               </h1>

//               <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl mb-8 max-w-xl">
//                 Building intelligent systems with AI, Machine Learning, and Cloud Technologies to solve complex
//                 real-world problems.
//               </p>

//               <div className="flex flex-wrap gap-4 mb-8">
//                 <Button
//                   asChild
//                   size="lg"
//                   className="bg-royal-600 hover:bg-royal-700 text-white dark:bg-royal-600 dark:hover:bg-royal-700 dark:text-white group"
//                 >
//                   <Link href="#projects" className="flex items-center">
//                     View Projects
//                     <MoveRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                   </Link>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="lg"
//                   className="border-royal-300 dark:border-royal-700 hover:bg-royal-50 dark:hover:bg-royal-900/20 group"
//                 >
//                  <a 
//                   href="/Akash Gunasekar Resume - 2025.pdf" 
//                   download 
//                   className="flex items-center"
//                 >
//                   <Download className="mr-2 h-4 w-4 transition-transform duration-300 hover:scale-110" />
//                   Download Resume
//                 </a>
//                 </Button>
//               </div>

//               <div className="flex gap-5">
//                 <Link
//                   href="https://github.com/Akash-Gunasekar"
//                   target="_blank"
//                   className="bg-white dark:bg-slate-800 p-3 rounded-full text-slate-600 hover:text-royal-600 dark:text-slate-400 dark:hover:text-royal-400 transition-all duration-300 hover:shadow-md"
//                 >
//                   <Github className="h-5 w-5" />
//                 </Link>
//                 <Link
//                   href="https://www.linkedin.com/in/akash-gunasekar-859b48199/"
//                   target="_blank"
//                   className="bg-white dark:bg-slate-800 p-3 rounded-full text-slate-600 hover:text-royal-600 dark:text-slate-400 dark:hover:text-royal-400 transition-all duration-300 hover:shadow-md"
//                 >
//                   <Linkedin className="h-5 w-5" />
//                 </Link>
//                 <Link
//                   href="mailto:akashpersonal18@gmail.com"
//                   className="bg-white dark:bg-slate-800 p-3 rounded-full text-slate-600 hover:text-royal-600 dark:text-slate-400 dark:hover:text-royal-400 transition-all duration-300 hover:shadow-md"
//                 >
//                   <Mail className="h-5 w-5" />
//                 </Link>
//               </div>
//             </div>

//             <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slideInRight">
//               <div className="relative">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-royal-500 to-teal-500 rounded-full blur-md opacity-70 animate-pulse"></div>
//                 <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
//                   <div className="w-full h-full relative">
//                     <Image
//                       src="/images/profile.png"
//                       alt="Akash G"
//                       layout="fill"
//                       objectFit="cover"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-royal-500/10 to-transparent"></div>
//                   </div>
//                 </div>

//                 <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg border border-royal-100 dark:border-royal-900/30">
//                   <div className="text-sm font-medium text-royal-600 dark:text-royal-400">Currently working at</div>
//                   <div className="text-slate-800 dark:text-white font-bold">ConceptVines</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <Link
//             href="#about"
//             className="flex flex-col items-center text-slate-600 hover:text-royal-600 dark:text-slate-400 dark:hover:text-royal-400 transition-colors"
//           >
//             <span className="text-sm font-medium mb-2">Scroll Down</span>
//             <ChevronDown className="h-6 w-6" />
//           </Link>
//         </div>
//       </section>

//       {/* About Section */}
//       <AboutSection />

//       {/* Skills Section */}
//       <SkillsSection />

//       {/* Projects Section */}
//       <ProjectsSection />

//       {/* Experience Section */}
//       <ExperienceSection />

//       {/* Education Section */}
//       <EducationSection />

//       {/* Contact Section */}
//       <ContactSection />

//       {/* Footer */}
//       <footer className="py-6 bg-white dark:bg-slate-950 border-t border-royal-100 dark:border-slate-800">
//         <div className="container mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
//           <p>© {new Date().getFullYear()} Akash G. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </main>
//   )
// }



import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoveRight, Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react"
import HeroAnimation from "@/components/hero-animation"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import TabbedContent from "@/components/tabbed-content"
import FixedNavigation from "@/components/fixed-navigation"

export default function Home() {
  return (
    <main className="min-h-screen pl-0 lg:pl-16">
      <ThemeToggle />
      <FixedNavigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-royal-50 to-teal-50 dark:from-slate-900 dark:to-slate-800"
      >
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fadeIn">
              <div className="inline-block mb-4 px-4 py-1 bg-royal-100 dark:bg-royal-900/30 text-royal-600 dark:text-royal-400 rounded-full text-sm font-medium">
                Hello, I'm Akash Gunasekar
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="block text-slate-800 dark:text-white mb-2">AI Software</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-royal-600 to-teal-500 dark:from-royal-400 dark:to-teal-400">
                  Engineer
                </span>
              </h1>

              <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl mb-8 max-w-xl">
                Building intelligent systems with AI, Machine Learning, and Cloud Technologies to solve complex
                real-world problems.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-royal-600 hover:bg-royal-700 text-white dark:bg-royal-600 dark:hover:bg-royal-700 dark:text-white group"
                >
                  <Link href="#content" className="flex items-center">
                    View Portfolio
                    <MoveRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-royal-300 dark:border-royal-700 hover:bg-royal-50 dark:hover:bg-royal-900/20 group"
                >
                  <a href="/Akash Gunasekar Resume - 2025.pdf" download className="flex items-center">
                    <Download className="mr-2 h-4 w-4 transition-transform duration-300 hover:scale-110" />
                    Download Resume
                  </a>
                </Button>
              </div>

              <div className="flex gap-5">
                <Link
                  href="https://github.com/Akash-Gunasekar"
                  target="_blank"
                  className="bg-white dark:bg-slate-800 p-3 rounded-full text-slate-600 hover:text-royal-600 dark:text-slate-400 dark:hover:text-royal-400 transition-all duration-300 hover:shadow-md"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/akash-gunasekar-859b48199/"
                  target="_blank"
                  className="bg-white dark:bg-slate-800 p-3 rounded-full text-slate-600 hover:text-royal-600 dark:text-slate-400 dark:hover:text-royal-400 transition-all duration-300 hover:shadow-md"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:akashpersonal18@gmail.com"
                  className="bg-white dark:bg-slate-800 p-3 rounded-full text-slate-600 hover:text-royal-600 dark:text-slate-400 dark:hover:text-royal-400 transition-all duration-300 hover:shadow-md"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slideInRight">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-royal-500 to-teal-500 rounded-full blur-md opacity-70 animate-pulse"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
                  <div className="w-full h-full relative">
                    <Image
                      src="/images/profile.png"
                      alt="Akash G"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-500/10 to-transparent"></div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg border border-royal-100 dark:border-royal-900/30">
                  <div className="text-sm font-medium text-royal-600 dark:text-royal-400">Currently working at</div>
                  <div className="text-slate-800 dark:text-white font-bold">ConceptVines</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="flex flex-col items-center text-slate-600 hover:text-royal-600 dark:text-slate-400 dark:hover:text-royal-400 transition-colors"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </Link>
        </div> */}
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Tabbed Content Section (Skills, Projects, Experience, Education) */}
      <TabbedContent />

      {/* Contact Section */}
      <section id="contact">
        {/* <ContactSection /> */}
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white dark:bg-slate-950 border-t border-royal-100 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Akash Gunasekar. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  )
}

