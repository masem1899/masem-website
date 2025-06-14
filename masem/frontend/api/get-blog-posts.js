import getDB from './_auth.js';




export default async function handler(req, res) {
    const { projectSlug } = req.query;

    try {
        const db = getDB();
        let q = db.collection('blog-posts');
        
        if (projectSlug) q = q.where('projectSlug', '==', projectSlug);

        q = q.orderBy('date', 'desc');
        const snapshot = await q.get();
        const posts = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        
        res.status(200).json(posts);
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch blog posts', detail: error.message });
    }
}