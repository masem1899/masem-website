import { useState } from "react";

export default function PrivacyPolicy() {
  const [lang, setLang] = useState("en");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-sm leading-relaxed">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setLang("de")}
          className={`px-4 py-2 rounded ${lang === "de" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          Deutsche Version
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded ${lang === "en" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          English Version
        </button>
      </div>

      {lang === "de" ? (
        <div>
          <h1 className="text-xl font-bold mb-4">Datenschutzerklärung</h1>
          <p>Ich, Mario Semper, nehme den Schutz Ihrer persönlichen Daten sehr ernst. Ihre Daten werden im Rahmen der gesetzlichen Vorschriften (DSGVO, TKG 2003) vertraulich behandelt.</p>

          <h2 className="text-lg font-semibold mt-6">Verantwortlicher</h2>
          <p>Mario Semper<br />contakt@masem.at<br />https://masem.at</p>

          <h2 className="text-lg font-semibold mt-6">Zugriffsdaten</h2>
          <p>Beim Besuch dieser Website werden folgende Daten automatisch erfasst:</p>
          <ul className="list-disc list-inside ml-4">
            <li>IP-Adresse (anonymisiert)</li>
            <li>Datum und Uhrzeit</li>
            <li>besuchte Seite(n)</li>
            <li>Browsertyp und Betriebssystem</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">Cookies</h2>
          <p>Diese Website verwendet keine Tracking-Cookies. Technisch notwendige Cookies können verwendet werden.</p>

          <h2 className="text-lg font-semibold mt-6">Analysedienste</h2>
          <p>Es kann eine anonyme Zugriffsauswertung erfolgen, z. B. mit Vercel Analytics. Es werden keine personenbezogenen Profile erstellt oder weitergegeben.</p>

          <h2 className="text-lg font-semibold mt-6">Kontaktaufnahme</h2>
          <p>Bei Kontakt per E-Mail werden Ihre Angaben nur zur Bearbeitung verwendet und nicht weitergegeben.</p>

          <h2 className="text-lg font-semibold mt-6">Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerruf.</p>

          <p>Kontaktieren Sie mich dazu unter: kontakt@masem.at</p>
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-bold mb-4">Privacy Policy</h1>
          <p>I, Mario Semper, take your privacy seriously. Your data is processed in accordance with legal requirements (GDPR).</p>

          <h2 className="text-lg font-semibold mt-6">Controller</h2>
          <p>Mario Semper<br />contakt@masem.at<br />https://masem.at</p>

          <h2 className="text-lg font-semibold mt-6">Access Data</h2>
          <p>When visiting this website, the following data may be automatically logged:</p>
          <ul className="list-disc list-inside ml-4">
            <li>IP address (anonymized)</li>
            <li>Date and time</li>
            <li>Pages visited</li>
            <li>Browser type and OS</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">Cookies</h2>
          <p>This site does not use tracking cookies. Technical cookies may be necessary for functionality.</p>

          <h2 className="text-lg font-semibold mt-6">Analytics</h2>
          <p>Anonymous analytics may be performed using privacy-friendly tools like Vercel Analytics. No personal profiles are created or shared.</p>

          <h2 className="text-lg font-semibold mt-6">Contact</h2>
          <p>When contacting me by email, your data is only used to respond and is not shared.</p>

          <h2 className="text-lg font-semibold mt-6">Your Rights</h2>
          <p>You have the right to access, correct, delete, restrict processing, and withdraw consent at any time.</p>

          <p>To do so, email: kontakt@masem.at</p>
        </div>
      )}
    </div>
  );
}
