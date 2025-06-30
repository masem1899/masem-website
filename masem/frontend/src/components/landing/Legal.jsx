import { useState } from "react";

export default function LegalPage() {
  const [lang, setLang] = useState("de");

  return (
    <div className="p-8">
      <div className="mb-4">
        <button
          onClick={() => setLang("de")}
          className={`mr-2 px-4 py-2 ${lang === "de" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          Deutsche Version
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 ${lang === "en" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          English Version
        </button>
      </div>

      {lang === "de" ? (
        <div>
          <h1 className="text-xl font-bold mb-4">Impressum</h1>
          <p><strong>Angaben gemäß § 5 TMG</strong></p>
          <p>Mario Semper<br />
            masem.at<br />
            Webentwicklung, Tools & APIs<br />
            3851 Kautzen, Österreich</p>

          <p><strong>Kontakt:</strong><br />
            contakt@masem.at</p>

          <h2 className="text-lg font-semibold mt-6">Haftung für Inhalte</h2>
          <p>Als Diensteanbieter bin ich gemäß § 18 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>

          <h2 className="text-lg font-semibold mt-6">Haftung für Links</h2>
          <p>Für Inhalte externer Links wird keine Haftung übernommen. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>

          <h2 className="text-lg font-semibold mt-6">Urheberrecht</h2>
          <p>Alle Inhalte dieser Website unterliegen dem österreichischen Urheberrecht. Die Verwendung ohne ausdrückliche Genehmigung ist nicht gestattet.</p>

          <h1 className="text-xl font-bold mt-10">Datenschutzerklärung</h1>
          <p>Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst und behandle Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

          <p><strong>Verantwortlicher:</strong><br />
            Mario Semper – contact@masem.at</p>

          <p><strong>Erhobene Daten:</strong><br />
            IP-Adresse (anonymisiert), Datum/Uhrzeit, Seitenaufrufe, Browser, Betriebssystem</p>

          <p><strong>Cookies:</strong> Keine Tracking-Cookies. Nur technisch notwendige Cookies.</p>

          <p><strong>Analyse:</strong> Anonyme Zugriffsauswertung mit datenschutzkonformen Methoden (z. B. Vercel Analytics).</p>

          <p><strong>Ihre Rechte:</strong> Auskunft, Berichtigung, Löschung, Einschränkung, Widerruf.</p>

          <p>Kontaktieren Sie mich unter kontakt@masem.at bei Fragen zum Datenschutz.</p>
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-bold mb-4">Legal Notice</h1>
          <p><strong>Information according to § 5 ECG (Austria)</strong></p>
          <p>Mario Semper<br />
            masem.at<br />
            Web development, tools & APIs<br />
            3851 Kautzen, Austria</p>

          <p><strong>Contact:</strong><br />
            contact@masem.at</p>

          <h2 className="text-lg font-semibold mt-6">Liability for Content</h2>
          <p>As a service provider, I am responsible for my own content in accordance with general law. I am not obliged to monitor transmitted or stored third-party information.</p>

          <h2 className="text-lg font-semibold mt-6">Liability for Links</h2>
          <p>I accept no responsibility for the content of external links. The operators of the linked pages are solely responsible for their content.</p>

          <h2 className="text-lg font-semibold mt-6">Copyright</h2>
          <p>All content on this website is subject to Austrian copyright. Any usage requires written permission.</p>

          <h1 className="text-xl font-bold mt-10">Privacy Policy</h1>
          <p>I take the protection of your personal data very seriously. Your data is handled confidentially and in accordance with the GDPR and this privacy statement.</p>

          <p><strong>Responsible Party:</strong><br />
            Mario Semper – contact@masem.at</p>

          <p><strong>Collected Data:</strong><br />
            IP address (anonymized), timestamp, visited pages, browser, operating system</p>

          <p><strong>Cookies:</strong> No tracking cookies used. Only technically required cookies may be set.</p>

          <p><strong>Analytics:</strong> Anonymous page analytics may be performed using privacy-focused tools (e.g., Vercel Analytics).</p>

          <p><strong>Your Rights:</strong> Access, rectification, deletion, restriction, withdrawal of consent.</p>

          <p>For any questions, contact me at kontakt@masem.at.</p>
        </div>
      )}
    </div>
  );
}
