import logoUrl from "@/assets/masem-logo.png";

function Maintenance() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <div className="mb-8 flex items-end justify-center">
                <img src="/assets/masemIT-logo-512x512.png" alt="MASEM Logo" className="h-48" />
                <a href="https://ai-ttract.com/?utm_source=site&utm_medium=maintenance&utm_campaign=masemIT" target="_blank">
                    <img src="/assets/ai-ttract-logo-nav-transparent.png" alt="ai-ttract Logo" className="h-48" />
                </a>
            </div>
            <p className="mb-4">Wir führen derzeit Wartungsarbeiten durch. Bitte schauen Sie später wieder vorbei.</p>
            <a href="https://wa.me/4367763652004" className="bg-green-500 text-white px-4 py-2 rounded">Kontakt via WhatsApp</a>
        </div>
    );
}

export default Maintenance;
