import ALink from "./own/ALink";
import SocialLinks from "./SocialLinks";





export default function Header() {
    
    return (
        <div className="flex justify-between bg-background text-foreground pt-1 px-5 h-16 items-center">
            <ALink href="/" label="home" className="underline">Home</ALink>
            <ALink 
                href="https://www.paypal.com/donate/?business=6Y72SJVNPAU4S&amount=5&no_recurring=0&currency_code=EUR" 
                label="Would you like to invite me for ice cream 😋?" 
                className="underline" 
                target="_blank"
            >
                Would you like to invite me for ice cream 😋?
            </ALink>
            <SocialLinks className="flex gap-3" />
        </div>
    )
}