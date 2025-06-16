import admin from 'firebase-admin';
import dotenv from 'dotenv';

let db = null;


export default function getDB() {
    
    if(db) return db;    
    

    dotenv.config({ path: '.env.local' });
    
    const raw = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    raw.private_key = raw.private_key.replace(/\\n/g, '\n');
    
    if (!admin.apps.length) {
        admin.initializeApp({ credential: admin.credential.cert(raw) });
    }
    
    return admin.firestore();
}
