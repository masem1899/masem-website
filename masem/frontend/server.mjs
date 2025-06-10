import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import { marked } from 'marked';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { Resend } from 'resend';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const mdFilePath = resolve(__dirname, 'email-templates/welcome.md');



dotenv.config({ path:'.env.local' });
// console.log('[DEBUG] FIREBASE_SERVICE_ACCOUNT_KEY:', process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

const raw = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
raw.privateKey = raw.private_key.replace(/\\n/g, '\n');
if (!getApps().length) {
    initializeApp({ credential: cert(raw) });
}


const db = getFirestore();
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/save-subscriber', async (req, res) => {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
        return res.status(400),json({ error: 'Invalid email.'});
    }


    const existing = await db.collection('subscribers')
        .where('email', '==', email)
        .limit(1)
        .get();
    console.log('1', existing.empty);
    if(!existing.empty) return res.status(409).json({ message: 'already subscribed.'});
    console.log('2');
    
    await db.collection('subscribers').add({ email, createdAt: new Date(), status:'subscribed'});

    const markdown = fs.readFileSync(mdFilePath, 'utf-8');
    const html = marked.parse(markdown);

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.contacts.create({
        email,
        audienceId: 'b398f236-bb01-4d41-8ace-e9159e7eea80',
    });
    
    // await resend.emails.send({
    //     from: 'masem <subscription@masem.at>',
    //     to: email,
    //     subject: 'Welcome to masem!',
    //     html: html
    // });

    return res.status(200).json({ success: true });
});

app.listen(8787, () => {
    console.log('API server running');
});