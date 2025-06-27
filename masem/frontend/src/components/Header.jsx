import ALink from "./own/ALink";
import SocialLinks from "./SocialLinks";





export default function Header() {
    
    return (
        <div className="flex justify-between bg-background text-foreground pt-1 px-5 h-24 items-center">
            <ALink href="/" label="home" className="underline">Home</ALink>
            <a href="https://www.buymeacoffee.com/masem" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{height: '60px !important', width: '217px !important'}} /></a>
            <SocialLinks className="flex gap-3" />
        </div>
    )
}