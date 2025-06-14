
import Hero from "@/components/landing/Hero"
import Projects from "@/components/landing/Projects"
import Newsletter from "./components/landing/Newsletter"
import AboutMe from "./components/landing/AboutMe"
import Footer from "./components/Footer"
import ToggleDarkMode from "./components/ToggleDarkMode"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import SocialLinks from "./components/SocialLinks"
import { VercelDebugBar } from 'vercel-debug-bar';
import Blog from "./components/landing/Blog"



function App() {
  return (
    <>
      <div className="font-sans bg-background text-foreground">
        {/* social links */}
        <div className="flex justify-end bg-muted text-foreground pt-1 pr-2"><span>&nbsp;</span><SocialLinks className="flex gap-3" /></div>
        {/* Hero */}
        <Hero />
        
        {/* Blog Section */}
        <Blog />

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
      <SpeedInsights />
      {/* <VercelDebugBar /> */}
    </>
  )
}

export default App 
