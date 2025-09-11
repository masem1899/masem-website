import { useState } from "react";
import logoUrl from "@/assets/masem-logo.png";

function Maintenance() {
    const [showLegal, setShowLegal] = useState(false);

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

            <button
                type="button"
                className="mt-4 text-blue-600 hover:underline"
                onClick={() => setShowLegal((prev) => !prev)}
            >
                Rechtliches | Legal
            </button>

            {showLegal && (
                <div className="mt-8 text-left max-w-2xl">
                    <h1 className="text-3xl font-bold mb-8">Impressum & Datenschutz / Legal Notice & Privacy Policy</h1>

                    {/* IMPRESSUM */}
                    <section id="impressum" className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Impressum</h2>
                        <p><strong>Firma:</strong> masemIT e.U.</p>
                        <p><strong>Geschäftsführung:</strong> Mario Semper</p>
                        <p><strong>Adresse:</strong> Fraißlgasse 2, 3851 Kautzen, Österreich</p>
                        <p><strong>Firmenbuchgericht:</strong> Landesgericht Krems</p>
                        <p><strong>Firmenbuchnummer:</strong> FN 661236g</p>
                        <p><strong>UID-Nummer:</strong> ATU82330407</p>
                        <p><strong>Kontakt:</strong> <a href="mailto:contact@masem.at" className="text-blue-600 hover:underline">contact@masem.at</a></p>

                        <h3 className="mt-6 font-semibold">Haftungsausschluss</h3>
                        <p>Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb übernehmen wir für diese fremden Inhalte auch keine Gewähr.</p>
                    </section>

                    {/* DATENSCHUTZERKLÄRUNG */}
                    <section id="datenschutz" className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Datenschutzerklärung</h2>

                        <h3 className="font-semibold mt-4">Verantwortlicher</h3>
                        <p>masemIT e.U.<br />
                            Mario Semper<br />
                            Fraißlgasse 2, 3851 Kautzen, Österreich<br />
                            E-Mail: <a href="mailto:datenschutz@masem.at" className="text-blue-600 hover:underline">datenschutz@masem.at</a>
                        </p>

                        <h3 className="font-semibold mt-4">Verarbeitete Daten</h3>
                        <ul className="list-disc ml-6">
                            <li><strong>Kontaktformular:</strong> Eingabedaten zur Bearbeitung Ihrer Anfrage</li>
                            <li><strong>Newsletter:</strong> Verarbeitung Ihrer E-Mail-Adresse durch Brevo (Sendinblue)</li>
                            <li><strong>Analyse:</strong> Verwendung von Microsoft Clarity zur Nutzerverhaltensanalyse (ohne Cookies)</li>
                        </ul>

                        <h3 className="font-semibold mt-4">Rechtsgrundlagen</h3>
                        <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. a (Einwilligung) und lit. f (berechtigtes Interesse) DSGVO.</p>

                        <h3 className="font-semibold mt-4">Ihre Rechte</h3>
                        <ul className="list-disc ml-6">
                            <li>Auskunft, Berichtigung, Löschung</li>
                            <li>Einschränkung der Verarbeitung, Widerspruch</li>
                            <li>Datenübertragbarkeit</li>
                            <li>Beschwerderecht bei der Datenschutzbehörde (dsb.gv.at)</li>
                        </ul>

                        <h3 className="font-semibold mt-4">Datensicherheit</h3>
                        <p>Wir treffen technische und organisatorische Sicherheitsmaßnahmen entsprechend dem Stand der Technik.</p>

                        <h3 className="font-semibold mt-4">Änderungen</h3>
                        <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen. Es gilt die jeweils auf dieser Seite veröffentlichte Fassung.</p>
                    </section>

                    {/* ENGLISH VERSION */}
                    <section id="legal-en">
                        <h2 className="text-2xl font-semibold mb-4">Legal Notice & Privacy Policy</h2>

                        <h3 className="font-semibold mt-4">Legal Notice</h3>
                        <p><strong>Company:</strong> masemIT e.U.</p>
                        <p><strong>Managing Director:</strong> Mario Semper</p>
                        <p><strong>Address:</strong> Fraißlgasse 2, 3851 Kautzen, Austria</p>
                        <p><strong>Commercial Court:</strong> Regional Court Krems</p>
                        <p><strong>Company Register No.:</strong> FN 661236g</p>
                        <p><strong>VAT ID:</strong> ATU82330407</p>
                        <p><strong>Contact:</strong> <a href="mailto:contact@masem.at" className="text-blue-600 hover:underline">contact@masem.at</a></p>

                        <h3 className="mt-6 font-semibold">Disclaimer</h3>
                        <p>This website contains links to external websites. We have no influence on the contents of those websites and therefore accept no liability.</p>

                        <h3 className="font-semibold mt-4">Privacy Policy</h3>

                        <h4 className="font-semibold mt-2">Controller</h4>
                        <p>masemIT e.U., Mario Semper<br />
                        Fraißlgasse 2, 3851 Kautzen, Austria<br />
                        Email: <a href="mailto:datenschutz@masem.at" className="text-blue-600 hover:underline">datenschutz@masem.at</a></p>

                        <h4 className="font-semibold mt-2">Data Processing</h4>
                        <ul className="list-disc ml-6">
                            <li><strong>Contact form:</strong> We process your input data to respond to your inquiry.</li>
                            <li><strong>Newsletter:</strong> We use Brevo (Sendinblue) to manage newsletter subscriptions.</li>
                            <li><strong>Analytics:</strong> We use Microsoft Clarity for behavior analysis (no cookies used).</li>
                        </ul>

                        <h4 className="font-semibold mt-2">Legal Basis</h4>
                        <p>Processing is based on Art. 6 (1) a (consent) and f (legitimate interests) GDPR.</p>

                        <h4 className="font-semibold mt-2">Your Rights</h4>
                        <ul className="list-disc ml-6">
                            <li>Access, correction, erasure</li>
                            <li>Restriction, objection</li>
                            <li>Data portability</li>
                            <li>Right to lodge a complaint with the Austrian DPA (dsb.gv.at)</li>
                        </ul>

                        <h4 className="font-semibold mt-2">Data Security</h4>
                        <p>We apply technical and organizational security measures according to industry standards.</p>

                        <h4 className="font-semibold mt-2">Changes</h4>
                        <p>We reserve the right to change this privacy policy. The current version is available on this page.</p>
                    </section>
                </div>
            )}
        </div>
    );
}

export default Maintenance;
