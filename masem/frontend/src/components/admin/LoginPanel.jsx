import { useAuth } from "@/context/AuthContext";





export default function LoginPanel() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const { login } = useAuth();

    const handleLogin = async () => {
        if(!email) return setMessage({ type:'error', message:'Email required.'});
        await login(email);
        setMessage({ type:'info', message:'Check your email for login link!'});
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
            <Input
                type="email"
                className="border px-4 py-2 w-full mb-4"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button
                type="button"
                onClick={handleLogin}
            >
                Send login link
            </Button>
            {message.type === 'error' 
                ? (<p className="text-red-600">${message}</p>)
                : (<p className="text-green-600">${message}</p>)
            }
        </div>
    );
}