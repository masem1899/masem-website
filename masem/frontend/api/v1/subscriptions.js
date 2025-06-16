import getDB from './_auth.js';
import { marked } from 'marked';
import { welcomeEmail_md } from '../../email-templates/welcome-email.js';





export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(200).json({ error:'Method not allowed.' });

    const { email } = req.body;
    
    if (!email ||
        !email.toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return res.status(400).json({ error:'Invalid email address.' });
    }

    try {
        const db = getDB();

        const snapshot = await db.collection('subscribers')
            .where('email', '==', email)
            .limit(1)
            .get();

        if (!snapshot.empty) {
            return res.status(403).json({ message: 'Already subscribed.'} );
        }

        // Store subscriber
        await db.collection('subscribers').add({
            email,
            createdAt: new Date(),
            status: 'subscribed'
        });

        const html = marked(welcomeEmail_md);
        
        return res.status(200).json({ success: true });
    } catch(err) {
        console.error('API error: ', err);
        return res.status(500).json({ error: err.message });
    }
}