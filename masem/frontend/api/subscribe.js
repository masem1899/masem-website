// File: /api
import { Resend } from "resend";



const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error:'Method not allowed.' });
    }

    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
        return res.status(400).json({ error:'Invalid email.' });
    }

    try {
        const data = await resend.emails.send({
            from: 'masem <subscription@masem.at>',
            to: email,
            subject: 'Thanks for subscribing!',
            html: `<p>Welcome to the masem newsletter!</p>`
        });

        console.log("✅ Email sent:", data);
        return res.status(200).json({ success: true }); // ← MUST return a response
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error:'Failed to send email.' })
    }
};