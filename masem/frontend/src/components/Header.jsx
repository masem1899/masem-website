import ALink from "./own/ALink";
import SocialLinks from "./SocialLinks";





export default function Header() {
    
    return (
        <div className="flex justify-between bg-background text-foreground pt-1 px-5 h-24 items-center">
            <ALink href="/" label="home" className="underline">Home</ALink>
            <SocialLinks className="flex gap-3" />
        </div>
    )
}