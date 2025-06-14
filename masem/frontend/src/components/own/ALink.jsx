




export default function ALink({ children, label = '', ...props }) {
    return (
        <a target="_blank" rel="noopener noreferrer" aria-label={label} title={label} {...props}>
            {children}
        </a>
    )
}