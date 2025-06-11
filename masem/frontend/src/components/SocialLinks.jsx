



export default function SocialLinks({ ...props }) {
    return (
            <div {...props}>
                {/* github */}
                <a href="https://github.com/masem1899/" title="masem GitHub profile" aria-label="masem GitHub profile" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github"></i> GitHub
                </a>
                {/* linkedIn */}
                | <a href="https://linkedin.com/in/mario-semper-94475528/" title="LinkedIn profile" aria-label="LinkedIn profile" rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                </a>
                {/* x twitter */}
                | <a href="https://x.com/masemContact" title="X (Twitter) profile" aria-label="X (Twitter) profile" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-x-twitter"></i> (Twitter)
                </a>
                {/* bluesky */}
                | <a href="https://bsky.app/profile/masemcontact.bsky.social" title="Bluesky profile" aria-label="Bluesky profile" rel="noopener noreferrer" target="_blank">
                    <i class="fa-brands fa-square-bluesky"></i> BlueSky
                </a>
                {/* instagram */}
                | <a href="https://www.instagram.com/masemcontact/" title="Instagram profile" aria-label="Instageram profile" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-instagram"></i> Instagram
                </a>
                {/* dev.to */}
                | <a href="https://dev.to/huetteldorf" title="dev.to profile" aria-label="dev.to profile" rel="noopener norefferer" target="_blank">
                    <i class="fa-solid fa-link"></i> Dev.to
                </a>
                {/* email */}
                | <a href="mailto:contact@masem.at" title="Send an email to contact@masem.at" aria-label="Send an email to contact@masem.at" rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-envelope"></i> Email
                </a>
                {/* newsletter */}
                | <a 
                    href="#" onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth'})}
                    title="masem newsletter"
                    aria-label="masem newsletter"
                    rel="noopener noreferrer"
                ><i class="fa-solid fa-envelope-open-text"></i> Newsletter</a>
            </div>
    );
}