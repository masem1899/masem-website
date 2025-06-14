import Footer from "@/components/Footer";
import AboutMe from "@/components/landing/AboutMe";
import Blog from "@/components/landing/Blog";
import Hero from "@/components/landing/Hero";
import Newsletter from "@/components/landing/Newsletter";
import Projects from "@/components/landing/Projects";
import SocialLinks from "@/components/SocialLinks";
import ToggleDarkMode from "@/components/ToggleDarkMode";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';




function Landing() {
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

export default Landing;