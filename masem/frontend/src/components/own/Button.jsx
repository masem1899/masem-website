export default function Button({ children, className = "", variant = "default", ...props }) {
    const base = 
        "inline-flex items-center justify-center px-6 py-2 text-lg rounded-md transition font-medium";

    const variants = {
        default: "bg-masem hover:bg-masemDark text-white shadow",
        outline: "border border-masem text-masem hover:bg-masemLight",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        ghost: "bg-transparent text-masem hover:bg-masemLight",
        link: "text-masem underline-offset-4 hover:underline bg-transparent",
    }
    
    return (
        <button
            className={`${base} ${variants[variant] || variants.default} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}