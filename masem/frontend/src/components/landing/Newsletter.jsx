import { Input } from "@/components/ui/input";
import Button from "../own/Button";
import { useState } from "react";


export default function Newsletter() {
    const [ email, setEmail ] = useState('');
    const [ status, setStatus ] = useState('');
    let API_URL = import.meta.env.VITE_API_URL;
    if (!API_URL) API_URL = 'https://masem.at'
    
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('loading');


        const res = await fetch(`${API_URL}/api/save-subscriber`, {
            method: 'POST',
            headers: { 'Content-Type':'application/json '},
            body: JSON.stringify({ email })
        });

        if (res.ok) {

            setStatus('success');
            setEmail('');
        } else {
            if(res.status === 403) {
                setStatus('exists');
            } else {
                setStatus('error');
            }
        }
    }


    return (
        <section id="newsletter" className="py-20 text-center bg-muted text-foreground">
            <h2 className="text-3xl font-bold mb-4q">Newsletter</h2>
            <p className="text-muted-foreground mb-4">Get updates from masem in your inbox.</p>
            <form className="flex justify-center items-center gap-2" onSubmit={handleSubmit}>
                <Input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="px-4 py-2 border rounded-md w-64 bg-background text-foreground
                                placeholder:text-muted-foreground border-border"
                />
                <Button type="submit" className="">Subscribe</Button>
            </form>
            { status === 'success' && <p className="mt-4 text-green-600">You're subscribed. Thank you!</p> }
            { status === 'error' && <p className="mt-4 text-red-600">Something went wrong ...</p> }
            { status === 'exists' && <p className="mt-4 text-orange-500">You are already registered.</p> }
        </section>
    );
}