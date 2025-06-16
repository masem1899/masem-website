import { Input } from "@/components/ui/input";
import Button from "../own/Button";
import { useState } from "react";
import { useAppSettings } from "@/hooks/useAppSettings";


export default function Newsletter() {
    const [ email, setEmail ] = useState('');
    const [ status, setStatus ] = useState('idle'); // idle | loading | success | error | already
    const [ errorMessage, setErrorMessage] = useState('');
    
    async function handleSubmit(e) {
        e.preventDefault();

        const { API_URL } = useAppSettings();

        if (!email || !email.includes('@')) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        setStatus('loading');


        const res = await fetch(`${API_URL}/subscriptions`, {
            method: 'POST',
            headers: { 'Content-Type':'application/json '},
            body: JSON.stringify({ email })
        });
        const data = await res.json();

        if (res.ok) {
            setStatus('success');
            setEmail('');
        } else {
            if(res.status === 403) {
                setStatus('already');
            } else {
                setStatus('error');
                setErrorMessage('Network error, pleas try again.');
            }
        }
    }


    return (
        <section id="newsletter" className="py-12 text-center bg-muted text-foreground">
            <h2 className="text-3xl font-bold mb-4q">Subscribe to our newsletter</h2>
            <form className="flex justify-center items-center gap-2" onSubmit={handleSubmit}>
                <Input 
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setStatus('idle');
                    }}
                    disabled={status === 'loading'}
                    placeholder="you@example.com"
                    required
                    className='px-4 py-2 border rounded-md w-64 bg-background text-foreground
                                placeholder:text-muted-foreground border-border'
                />
                <Button 
                    type="submit" 
                    className={`px-6 ${
                        status === 'loading'
                        ? 'cursor-not-allowed'
                        : ''
                    }`}
                    disabled={status === 'loading'}>
                        Subscribe
                </Button>

            </form>
            { status === 'success' && <p className="mt-4 text-green-600">You're successfully subscribed. Thank you!</p> }
            { status === 'error' && <p className="mt-4 text-red-600">Error: {errorMessage}</p> }
            { status === 'already' && <p className="mt-4 text-orange-500">You're already subscribed.</p> }
        </section>
    );
}