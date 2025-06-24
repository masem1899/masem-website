import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutMe from "@/components/landing/AboutMe";
import Blogs from "@/components/landing/Blogs";
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
            {/* Hero */}
            <Hero />
            
            {/* Blog Section */}
            <Blogs />

            {/* Projects */}
            <Projects />
            
            {/* Newsletter */}
            <Newsletter />

            {/* About me */}
            <AboutMe />

        {/* <VercelDebugBar /> */}
        </>
    )
}

export default Landing;