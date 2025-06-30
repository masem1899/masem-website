import SocialLinks from "./SocialLinks";
import ToggleDarkMode from "./ToggleDarkMode";



export default function Footer() {
    return (
        <footer className="text-muted-foreground bg-background">
        <div className="py-10 text-center text-sm flex flex-col items-center space-y-2">
            <div>
                <a href="https://www.buymeacoffee.com/masem" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{height: '60px !important', width: '217px !important'}} /></a>
                <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="masem" data-color="#FFDD00" data-emoji=""  data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>
            </div>
            <div>
                <a href="/legal" className="mx-2 hover:underline">Legal Notice</a>
                <a href="/privacy" className="mx-2 hover:underline">Privacy Policy</a>
            </div>
            <div className="pt-3">
                <p className="font-bold text-green-500">Don't hesitate to visit us on our social media channels:</p>
                <SocialLinks className="pt-1 gap-3 flex items-center justify-center"></SocialLinks>
            </div>
            <div className="pt-3">
                <ToggleDarkMode />
            </div>
        </div>
        </footer>
    );
}