import logoUrl from "@/assets/masem-logo.png";

function Maintenance() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <img src={logoUrl} alt="MASEM Logo" className="h-24 mb-8" />
            <p className="mb-4">Wir führen derzeit Wartungsarbeiten durch. Bitte schauen Sie später wieder vorbei.</p>
            <a href="https://wa.me/<NUMMER>" className="bg-green-500 text-white px-4 py-2 rounded">Kontakt via WhatsApp</a>
        </div>
    );
}

export default Maintenance;
