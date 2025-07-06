import ALink from "./own/ALink";
import SocialLinks from "./SocialLinks";
import ToggleDarkMode from "./ToggleDarkMode";





export default function Header() {
    
    return (
        <div className="flex justify-between bg-masem text-foreground pt-1 px-5 h-24 items-center">
            <ALink href="/" label="home" className="underline">Home</ALink>
            <ToggleDarkMode/>
            <SocialLinks className="flex space-x-3" />
        </div>
    )
}