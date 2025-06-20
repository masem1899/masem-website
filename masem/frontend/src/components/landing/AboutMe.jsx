import { useAppSettings } from "@/hooks/useAppSettings";
import { useEffect, useState } from "react";
import ALink from "../own/ALink";





export default function AboutMe() {
    const [ knowledge, setKnowledge ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const { API_URL } = useAppSettings();

    useEffect(() => {
        fetch(`${API_URL}/knowledge`)
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
                I'm a developer building useful tools for real people -
                masem is a playground for ideas and future products.
            </p>
            <div className="flex mt-2 justify-center">
                <img src="assets/mario.png" alt="picture of mario" title="picture of mario" width="300"/>
            </div>
            <h4 className="font-semibold mt-4">Knowldege and expirience:</h4>
            <p className="mt-1 text-muted-foreground">
                {knowledge?.map(k => (
                    <ALink label={k.name} href={k.url} target="_blank" className="underline mr-1">{k.name}</ALink>
                ))}
            </p>
        </section>
    );
}