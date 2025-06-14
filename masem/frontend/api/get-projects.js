import admin from 'firebase-admin';
import dotenv from 'dotenv';


dotenv.config({ path: '.env.local' });


const raw = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
raw.private_key = raw.private_key.replace(/\\n/g, '\n');

if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(raw) });
}

const db = admin.firestore();


export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error:'Method not allowed.' });
    }

    try {
        const snapshot = await db.collection('projects').get();
        const projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return res.status(200).json({ projects });
    } catch (error) {
        console.error('Failed to fetch projects: ', error);
        return res.status(500).json({ error:'Failed to fetch projects.' });
    }
}