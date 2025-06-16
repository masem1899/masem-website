import admin from 'firebase-admin';
import dotenv from 'dotenv';

console.log("1");
dotenv.config({ path: '.env.local' });
console.log("2");


const raw = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
raw.private_key = raw.private_key.replace(/\\n/g, '\n');
console.log("3");

if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(raw) });
}
console.log("4");

const db = admin.firestore();
console.log("5");


export default async function handler(req, res) {
console.log("6");

    if (req.method !== 'GET') {
        return res.status(405).json({ error:'Method not allowed.' });
    }
console.log("7");

    try {
console.log("8");

        const snapshot = await db.collection('projects').get();
console.log("9");

        const projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
console.log("10");

        return res.status(200).json({ projects });
    } catch (error) {
console.log("11");

        console.error('Failed to fetch projects: ', error);
        return res.status(500).json({ error:'Failed to fetch projects.' });
    }
}