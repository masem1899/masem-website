




export default function Footer() {
    return (
        <footer className="text-gray-500 bg-gray-50">
        <div className="py-10 text-center text-sm flex flex-col items-center space-y-2">
            <div>
            <a href="#impressum" className="mx-2 hover:underline">Legal Notice</a>
            <a href="#privacy" className="mx-2 hover:underline">Privacy Policy</a>
            </div>
            <a
            title="Google Analytics Alternative"
            href="https://clicky.com/101486458"
            className="mt-2"
            >
            <img
                alt="Clicky"
                src="//static.getclicky.com/media/links/badge.gif"
                width="88"
                height="31"
            />
            </a>
            <script async data-id="101486458" src="//static.getclicky.com/js"></script>
            <noscript>
            <p>
                <img
                alt="Clicky"
                width="1"
                height="1"
                src="//in.getclicky.com/101486458ns.gif"
                />
            </p>
            </noscript>
        </div>
        </footer>
    );
}