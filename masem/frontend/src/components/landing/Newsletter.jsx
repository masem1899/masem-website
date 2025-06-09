import { Input } from "@/components/ui/input";
import Button from "../own/Button";



export default function Newsletter() {
    return (
        <section id="newsletter" className="py-20 text-center bg-gray-100">
            <h2 className="text-3xl font-bold mb-4">Newsletter</h2>
            <p className="text-gray-600 mb-4">Get updates from masem in your inbox.</p>
            <form className="flex justify-center items-center gap-2">
                <Input 
                    type="email"
                    placeholder="you@example.com"
                    className="px-4 py-2 border rounded-md w-64"
                />
                <Button type="Submit">Subscribe</Button>
            </form>
        </section>
    );
}