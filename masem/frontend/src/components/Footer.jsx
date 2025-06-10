import { track } from "@vercel/analytics";




export default function Footer() {
    return (
        <footer className="text-muted-foreground bg-card">
        <div className="py-10 text-center text-sm flex flex-col items-center space-y-2">
            <div>
            <a href="#legal" className="mx-2 hover:underline" onClick={() => track('common', 'legal')}>Legal Notice</a>
            <a href="#privacy" className="mx-2 hover:underline" onClick={() => track('common', 'privacy')}>Privacy Policy</a>
            </div>
        </div>
        </footer>
    );
}