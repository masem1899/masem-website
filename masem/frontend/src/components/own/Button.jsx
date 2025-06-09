export default function Button({ children, className = "", variant = "default", ...props }) {
    const base = 
        "px-6 py-2 text-lg rounded-md shadow transition font-medium";

    const variants = {
        default: "bg-masem hover:bg-masemDark text-white",
        outline: "border border-masem text-masem hover:bg-masemLight"
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