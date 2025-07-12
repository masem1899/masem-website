import ALink from "./own/ALink";
import SocialLinks from "./SocialLinks";
import ToggleDarkMode from "./ToggleDarkMode";





export default function Header() {
    
    return (
        <header className="bg-masem z-50 w-full border-b relative border-transparent md:border-none">
            <div className="container mx-auto px-2 md:px-4 2xl:px-10">
                <div className="relative z-40 flex flex-row items-center justify-between pb-2 pt-8 md:mb-4">
                    <div className="flex flex-row items-center py-1">
                        <div className="hidden md:block">
                            <img src="/assets/masem-banner-new-h40.png" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <ALink href="https://wordclimb.masem.at?utm_source=masem.at&utm_medium=website" className="" target="_blank" label="game wordclimb by masem.at">
                            <i className="fa-solid fa-gamepad"></i>
                        </ALink>
                        <ToggleDarkMode/>
                    </div>
                </div>
                <div>
                    <div className="mx-0 mb-2 hidden w-full flew-row items-center md:flex">
                        <div className="flex flex-row flex-wrap gap-y-2 justify-center gap-x-1.5 text-slate-800">
                            <SocialLinks />
                        </div>
                        {/* <div className="mb-0 ml-auto flex flex-row items-center justify-center gap-x-3"> */}
                        {/* </div> */}
                    </div>
                    <nav className="relative flex flex-row flex-nowrap items-end whitespace-nowrap px-2 pt-2">
                        <ALink href="/" label="home" className="underline">Home</ALink>
                        <ALink href="/projects" label="projects" className="underline px-2">Projects</ALink>
                    </nav>
                </div>
            </div>
        </header>
    )
}