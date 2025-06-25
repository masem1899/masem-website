import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import HiddenForIPList from "../own/HiddenForIPList";
import { useEffect } from "react";






export default function MainLayout() {

    // for prerender.io
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.prerenderReady = false;
        }
    }, []);


    return (
        <>
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