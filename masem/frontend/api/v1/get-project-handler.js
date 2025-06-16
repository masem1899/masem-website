import getDB from "./_auth.js";






export default async function getProjectHandler(req, res) {
        const slug = req.params.slug;
        
        try {
            const db = getDB();
            let q = db.collection('projects');
            q = q.where('slug', '==', slug).limit(1);
            
            const snapshot = await q.get();
            
            if (!snapshot.empty) {
                
                const project = {
                    ...snapshot.docs[0].data()
                }

                res.status(200).json(project);
            } else {
                res.status(404).json({ error:`Project ${slug} not exists` });
            }

        } catch(error) {
            res.status(500).json({ error: 'Error fetch project details', details: error.message });
        }
}