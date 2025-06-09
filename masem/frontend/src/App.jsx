
import Hero from "@/components/landing/Hero"
import Projects from "@/components/landing/Projects"
import Newsletter from "./components/landing/Newsletter"
import AboutMe from "./components/landing/AboutMe"

function App() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <Hero />
      
      {/* Projects */}
      <Projects />
      
      {/* Newsletter */}
      <Newsletter />

      {/* About me */}
      <AboutMe />
    </div>

    
  )
}

export default App
