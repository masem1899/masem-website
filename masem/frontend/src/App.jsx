
import Hero from "@/components/landing/Hero"
import Projects from "@/components/landing/Projects"
import Newsletter from "./components/landing/Newsletter"
import AboutMe from "./components/landing/AboutMe"
import Footer from "./components/Footer"
import ToggleDarkMode from "./components/ToggleDarkMode"
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <>
      <div className="font-sans bg-background text-foreground">
        {/* Hero */}
        <Hero />
        
        {/* Projects */}
        <Projects />
        
        {/* Newsletter */}
        <Newsletter />

        {/* About me */}
        <AboutMe />

        {/* Footer */}
        <Footer />
      </div>
      <ToggleDarkMode />
      <Analytics />
    </>
  )
}

export default App
