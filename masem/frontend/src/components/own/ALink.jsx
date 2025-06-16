




export default function ALink({ children, label = '', ...props }) {
    return (
        <a rel="noopener noreferrer" aria-label={label} title={label} {...props}>
            {children}
        </a>
    )
}