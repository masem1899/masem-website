import { useAppSettings } from "@/hooks/useAppSettings";
import { useEffect, useState } from "react";
import ALink from "../own/ALink";





export default function AboutMe() {
    const [ knowledge, setKnowledge ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const { API_URL } = useAppSettings();

    useEffect(() => {
        fetch(`${API_URL}/knowledge?$orderby=name`)
            .then((res) => res.json())
            .then((data) => {
                setKnowledge(data || []);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log('error fetching knowledge:', error);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) return <p>Loading knowledge...</p>

    return (
        <section id="about" className="py-20 text-center bg-muted text-foreground">
            <h2 className="text-3xl font-bold mb-4">About me</h2>
            <p className="text-muted-foreground">
                Hi, I’m Mario Semper, a software expert and product owner substitute based in Austria. I work at UNIQA as part of ColPlat, a team focused on building internal collaboration tools using Microsoft Power Platform.

Outside of work, I enjoy hiking, skiing, and spending time with my two kids (and our Maine Coon cat, Luna 🐾). I’ve worked across many areas of software development and still enjoy exploring new ideas and technologies in my spare time.

Here at masem (a blend of my name and ideas), I share personal projects, tools, and the occasional experiment. It’s my creative outlet—quiet for now, but always in motion.
            </p>
            <div className="flex mt-2 justify-center">
                <img src="assets/mario.png" alt="picture of mario" title="picture of mario" width="300"/>
            </div>
            <h4 className="font-semibold mt-4">Knowledge and expirience:</h4>
            <p className="mt-1 text-muted-foreground">
                {knowledge?.map((k, index) => (
                    <>
                        <ALink key={k.id} label={k.name} href={k.url} target="_blank" className="underline mr-1">{k.name}</ALink>
                        {(index + 1) % 8 === 0 && <br/>}
                    </>
                ))};
            </p>
            <h4 className="font-semibold mt-4">Hobbies:</h4>
            <p className="mt-1 text-muted-foreground">Soccer (not active anymore), Skiiing, Reading, Netflix, Garden, Programming and last but not least, my Family and cat Luna.</p>
        </section>
    );
}