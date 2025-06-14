import SocialLinks from "./SocialLinks";



export default function Footer() {
    return (
        <footer className="text-muted-foreground bg-muted">
        <div className="py-10 text-center text-sm flex flex-col items-center space-y-2">
            <div>
                <a href="#legal" className="mx-2 hover:underline">Legal Notice</a>
                <a href="#privacy" className="mx-2 hover:underline">Privacy Policy</a>
            </div>
            <div className="pt-3">
                <p className="font-bold text-green-500">Don't hesitate to visit us on our social media channels:</p>
                <SocialLinks className="pt-1 gap-3 flex items-center justify-center"></SocialLinks>
            </div>
        </div>
        </footer>
    );
}