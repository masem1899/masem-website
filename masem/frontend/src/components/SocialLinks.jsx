import { useState } from "react";
import Clarity from "@microsoft/clarity";



export default function SocialLinks({ ...props }) {
    const [showText, setShowText] = useState(false);

    const socialClick = (channel) => {
        Clarity.event(`visit_${channel}`);
    };

    return (
            <div {...props} className="h-24 flex gap-3" onMouseLeave={() => setShowText(false)}>
                {/* github */}
                <a href="https://github.com/masem-at/" title="masem GitHub profile" aria-label="masem GitHub profile" rel="noopener noreferrer" target="_blank" onClick={() => socialClick('Github')}>
                    <i className="fab fa-github"></i>
                </a>
                {/* linkedIn */}
                <a href="https://linkedin.com/in/mario-semper-94475528/" title="LinkedIn profile" aria-label="LinkedIn profile" rel="noopener noreferrer" target="_blank" onClick={() => socialClick('LinkedIn')}>
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                {/* facebook */}
                <a href="https://www.facebook.com/profile.php?id=61577638680516" title="Facebook profile" aria-label="Facebook profile" rel="noopener noreferrer" target="_blank" onClick={() => socialClick('Facebook')}>
                    <i className="fa-brands fa-facebook"></i>
                </a>
                {/* Youtube */}
                <a href="https://www.youtube.com/@masem-contact" title="Youtbe profile" aria-label="Youtube profile" rel="noopener noreferrer" target="_blank" onClick={() => socialClick('Youtube')}>
                    <i className="fa-brands fa-youtube"></i>
                </a>
                {/* x twitter */}
                <a href="https://x.com/masemContact" title="X (Twitter) profile" aria-label="X (Twitter) profile" rel="noopener noreferrer" target="_blank" onClick={() => socialClick('X')}>
                    <i className="fab fa-x-twitter"></i>
                </a>
                {/* bluesky */}
                <a href="https://bsky.app/profile/masemcontact.bsky.social" title="Bluesky profile" aria-label="Bluesky profile" rel="noopener noreferrer" target="_blank" onClick={() => socialClick('BlueSky')}>
                    <i className="fa-brands fa-square-bluesky"></i>
                </a>
                {/* instagram */}
                <a href="https://www.instagram.com/masemcontact/" title="Instagram profile" aria-label="Instageram profile" rel="noopener noreferrer" target="_blank" onClick={() => socialClick('Instagram')}>
                    <i className="fab fa-instagram"></i>
                </a>
                {/* Threads */}
                <a href="https://www.threads.com/@masemcontact" title="Threads profile" aria-label="Threads profile" rel="noopener noreferrer" target="_blank" onClick={() => socialClick('Threads')}>
                    <i className="fa-brands fa-threads"></i>
                </a>
                {/* Mastadon */}
                <a href="https://mastodon.social/@masemContact" title="Mastadon profile" aria-label="Mastadon profile" rel="noopener noreferrer" target="_blank" onClick={() => socialClick('Mastadon')}>
                    <i className="fa-brands fa-mastodon"></i>
                </a>
                {/* Reddit */}
                | <a href="https://www.reddit.com/user/masemContact/" title="Reddit profile" aria-label="Reddit profile" rel="noopener noreferrer" target="_blank" onClick={() => socialClick('Reddit')}>
                    <i className="fa-brands fa-square-reddit"></i>
                </a>
                {/* Hashnode */}
                <a href="https://hashnode.com/@masem" title="Hashnode profile" aria-label="Hashnode profile" rel="noopener noreferrer" target="_blank" onClick={() => socialClick('Hashnode')}>
                    <i className="fa-brands fa-hashnode"></i>
                </a>
                {/* dev.to */}
                <a href="https://dev.to/masem" title="dev.to profile" aria-label="dev.to profile" rel="noopener norefferer" target="_blank" onClick={() => socialClick('DevTo')}>
                    <i className="fa-solid fa-link"></i>
                </a>
                {/* email */}
                <a href="mailto:contact@masem.at" title="Send an email to contact@masem.at" aria-label="Send an email to contact@masem.at" rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-envelope"></i>
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