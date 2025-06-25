import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import HiddenForIPList from "../own/HiddenForIPList";
import { useEffect } from "react";
import { Helmet } from "react-helmet";






export default function MainLayout() {

    // for prerender.io
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.prerenderReady = false;
        }
    }, []);

    console.log("mainlayout");
    return (
        <>
            {/* ✅ Global <head> tags */}
            <Helmet>
                <title>Masem – Modern Tools for Developers</title>
                <meta name="test-marker" content="helmet-is-working" />
                <meta name="title" content="Masem – Modern Tools for Developers" />
                <meta
                    name="description"
                    content="Masem offers streamlined developer utilities, prototypes, and APIs for testing, automation, and future-ready web tools."
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical (default) */}
                <link rel="canonical" href="https://www.masem.at" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.masem.at/" />
                <meta property="og:title" content="Masem – Modern Tools for Developers" />
                <meta
                    property="og:description"
                    content="Masem offers streamlined developer utilities, prototypes, and APIs for testing, automation, and future-ready web tools."
                />
                <meta property="og:image" content="https://www.masem.at/assets/fb.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.masem.at/" />
                <meta property="twitter:title" content="Masem – Modern Tools for Developers" />
                <meta
                    property="twitter:description"
                    content="Masem offers streamlined developer utilities, prototypes, and APIs for testing, automation, and future-ready web tools."
                />
                <meta property="twitter:image" content="https://www.masem.at/assets/fb.png" />
            </Helmet>

            {/* Header */}
            <Header />
            
            {/* Main Content */}
            <main className="min-h-screen font-sans bg-muted text-foreground">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />

            {/* Analytics */}
            <HiddenForIPList hideFor="[77.220.109.78]">
                <Analytics />
                <SpeedInsights />
            </HiddenForIPList>
        </>
    )
}