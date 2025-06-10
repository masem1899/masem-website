import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore} from 'firebase-admin/firestore';
import { Resend } from 'resend';





const resend = Resend(process.env.RESEND_API_KEY);
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);


if(!getApps().length) {
    initializeApp({
        credential: cert(serviceAccount),
    })
}

const db = getFirestore();

export default async function handler(req, res) {
    
}