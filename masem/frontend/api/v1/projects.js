import getDB from "./_auth.js";


export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error:'Method not allowed.' });
    }

    try {
        const db = getDB();
        const snapshot = await db.collection('projects').get();
        const projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return res.status(200).json({ projects });
    } catch (error) {
        console.error('Failed to fetch projects: ', error);
        return res.status(500).json({ error:'Failed to fetch projects.' });
    }
}