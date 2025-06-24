import { useState } from "react";




export default function SocialLinks({ ...props }) {
    const [showText, setShowText] = useState(false);
//
    return (
            <div {...props} onMouseEnter={()=>setShowText(true)} onMouseLeave={() => setShowText(false)}>
                {/* github */}
                <a href="https://github.com/masem1899/" title="masem GitHub profile" aria-label="masem GitHub profile" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-github"></i> {showText && <span className="ml-1">GitHub</span>} 
                </a>
                {/* linkedIn */}
                | <a href="https://linkedin.com/in/mario-semper-94475528/" title="LinkedIn profile" aria-label="LinkedIn profile" rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-linkedin"></i> {showText && <span className="ml-1">LinkedIn</span>} 
                </a>
                {/* facebook */}
                | <a href="https://www.facebook.com/profile.php?id=61577638680516" title="Facebook profile" aria-label="Facebook profile" rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-facebook"></i>{showText && <span className="ml-1">Facebook</span>} 
                </a>
                {/* Youtube */}
                | <a href="https://www.youtube.com/@masem-contact" title="Youtbe profile" aria-label="Youtube profile" rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-youtube"></i>{showText && <span className="ml-1">Youtube</span>} 
                </a>
                {/* x twitter */}
                | <a href="https://x.com/masemContact" title="X (Twitter) profile" aria-label="X (Twitter) profile" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-x-twitter"></i> {showText && <span className="ml-1">X-Twitter</span>} 
                </a>
                {/* bluesky */}
                | <a href="https://bsky.app/profile/masemcontact.bsky.social" title="Bluesky profile" aria-label="Bluesky profile" rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-bluesky"></i>{showText && <span className="ml-1">BlueSky</span>} 
                </a>
                {/* instagram */}
                | <a href="https://www.instagram.com/masemcontact/" title="Instagram profile" aria-label="Instageram profile" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-instagram"></i>{showText && <span className="ml-1">Instagram</span>} 
                </a>
                {/* Threads */}
                | <a href="https://www.threads.com/@masemcontact" title="Threads profile" aria-label="Threads profile" rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-threads"></i>{showText && <span className="ml-1">Threads</span>} 
                </a>
                {/* Mastadon */}
                | <a href="https://www.threads.com/@masemcontact" title="Mastadon profile" aria-label="Mastadon profile" rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-mastodon"></i>{showText && <span className="ml-1">Mastadon</span>} 
                </a>
                {/* Reddit */}
                | <a href="https://www.reddit.com/user/masemContact/" title="Reddit profile" aria-label="Reddit profile" rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-square-reddit"></i>{showText && <span className="ml-1">Reddit</span>} 
                </a>
                {/* Hashnode */}
                | <a href="https://hashnode.com/@masem" title="Hashnode profile" aria-label="Hashnode profile" rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-hashnode"></i>{showText && <span className="ml-1">Hashnode</span>} 
                </a>
                {/* dev.to */}
                | <a href="https://dev.to/huetteldorf" title="dev.to profile" aria-label="dev.to profile" rel="noopener norefferer" target="_blank">
                    <i className="fa-solid fa-link"></i>{showText && <span className="ml-1">Dev.to</span>} 
                </a>
                {/* email */}
                | <a href="mailto:contact@masem.at" title="Send an email to contact@masem.at" aria-label="Send an email to contact@masem.at" rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-envelope"></i>{showText && <span className="ml-1">Email</span>} 
                </a>
                {/* newsletter */}
                {/* | <a 
                    href="#" onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth'})}
                    title="masem newsletter"
                    aria-label="masem newsletter"
                    rel="noopener noreferrer"
                ><i className="fa-solid fa-envelope-open-text"></i> Newsletter</a> */}
            </div>
    );
}