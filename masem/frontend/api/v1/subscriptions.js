import getDB from './_auth.js';
import { marked } from 'marked';
import { Resend } from 'resend';
import { welcomeEmail_md } from '../../email-templates/welcome-email.js';





export async function saveSubscription(req, res) {
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

        // Load html from file
        const html = marked(welcomeEmail_md);

        const resend = new Resend(process.env.RESEND_API_KEY);
    
        // Add to audience
        await resend.contacts.create({
            email,
            audienceId: 'b398f236-bb01-4d41-8ace-e9159e7eea80',
        });

        // Send welcome mail
        await resend.emails.send({
            from: 'masem <subscription@masem.at>',
            to: email,
            subject: 'Welcome to masem!',
            html: html,
        });

        return res.status(200).json({ success: true });
    } catch(err) {
        console.error('API error: ', err);
        return res.status(500).json({ error: err.message });
    }
}