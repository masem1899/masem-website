import masemLogUrl from "@/assets/masem-logo.png";
import Button from "@/components/own/Button";
import ALink from "../own/ALink";



export default function Hero() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'});
    };

    return (
        <>
            {/* Hero section */}
            <section className="min-h-screen bg-muted text-foreground flex items-center justify-center px-4">
                <div className="max-w-2xl text-center space-y-6">
                    <div className="flex justify-center">
                        <img src={masemLogUrl} alt="Hero" className="w-64 h-64 mb-4 mx-auto transition-transform duration-1000 hover:rotate-[720deg] hover:scale-200" />
                    </div>
                    <h1 className="text-5xl font-extrabold">
                        Welcome to masem
                    </h1>
                    <p className="text-lg">
                        Hobby projects, experiments, and tools - and maybe more in the future.
                    </p>
                    <div className="flex justify-center gap-4 items-center">
                        <Button onClick={() => scrollTo('projects')}>
                            Projects
                        </Button>
                        <Button variant="outline" onClick={() => scrollTo('blog-posts')}>
                            News
                        </Button>
                        {/* <a onClick={() => scrollTo('newsletter')} href="#" className="underline">Newsletter</a> */}
                        {/* <Button variant="outline" onClick={() => scrollTo('newsletter')}>
                            Newsletter
                        </Button> */}
                    </div>
                </div>
            </section>
        </>
    )
};