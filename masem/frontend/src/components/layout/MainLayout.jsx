import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";






export default function MainLayout() {
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
            <Analytics />
            <SpeedInsights />
        </>
    )
}