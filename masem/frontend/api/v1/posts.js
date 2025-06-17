import getDB from './_auth.js';
import matter from 'gray-matter';





// GET /posts
export async function fetchPosts(req, res) {
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
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch blog posts', detail: error.message });
    }
}

// GET /posts/:slug
export async function fetchPost(req, res) {
    const { slug } = req.params;
    console.log('slug', slug);
    try {
        const snapshot = await getDB()
            .collection('blog-posts')
            .where('slug', '==', slug)
            .limit(1)
            .get();

        if (snapshot.empty) {
            return res.status(404).json({ error:'Post not found.'} );
        }

        //const doc = snapshot.docs[0].data();
        //const { data, content } = matter(doc.content);

        res.status(200).json(snapshot.docs[0].data());
    } catch(error) {
        console.error('API fetch post failed: ', error);
        res.status(500).json( {error:'Internal server error' });
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