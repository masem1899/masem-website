import getDB from '../_auth.js';





// GET /posts/:slug
export default async function fetchPost(req, res, slug) {
    console.log('Fetching posts... fetchPost');

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