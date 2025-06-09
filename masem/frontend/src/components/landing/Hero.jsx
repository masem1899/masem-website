
import heroIconUrl from "@/assets/hero.svg";
import Button from "@/components/own/Button";

export default function Hero() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'});
    };

    return (
        <>
            {/* Hero section */}
            <section className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center px-4">
                <div className="max-w-2xl text-center space-y-6">
                    <div className="flex justify-center">
                        <img src={heroIconUrl} alt="Hero" className="w-20 h-20 mb-4 mx-auto" />
                    </div>
                    <h1 className="text-5xl font-extrabold text-gray-900">
                        Welcome to masem
                    </h1>
                    <p className="">
                        Hobby projects, experiments, and tools - and maybe more in the future.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button>
                            Projects
                        </Button>
                        <Button variant="outline" onClick={() => scrollTo('newsletter')}>
                            Newsletter
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
};