import getDB from '../_auth.js';




// GET /posts
export async function fetchPosts(req, res) {
    console.log('Fetching posts... fetchPosts');
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
        
        return res.status(200).json(posts);
    } catch(error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to fetch blog posts', detail: error.message });
    }
}

// POST /posts
export async function savePost(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error:'Method not allowed' });
    }

    const { title, slug, date, content, tags } = req.body;

    if (!title || !slug || !date || !content) {
        return res.status(400).json({ error:'Missing required fields.' });
    }

    try {
        const ref = getDB().collection('blog-posts').doc(slug);
        const existing = await ref.get();

        const post = {
            title,
            slug,
            date,
            content,
            tags: Array.isArray(tags) ? tags : [],
            updatedAt: new Date().toISOString(),
        }

        if(!existing) {
            post.createdAt = new Date().toISOString();
        }

        await ref.set(post, { merge:true });

        return res.status(200).json({ success: true });
    } catch(error) {
        console.error('API Error saving post: ' , error);
        return res.status(500).json({ error:'Internal Server Error' })
    }
}


