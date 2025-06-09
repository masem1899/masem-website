
import Hero from "@/components/landing/Hero"
import Projects from "@/components/landing/Projects"
import Newsletter from "./components/landing/Newsletter"
import AboutMe from "./components/landing/AboutMe"
import Footer from "./components/Footer"

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

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
