import express from 'express';
import cors from 'cors';
import getProjectsHandler from './api/get-projects.js';
import getBlogPostsHandler from './api/get-blog-posts.js';



// const db = getFirestore();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/get-projects', getProjectsHandler);

app.get('/api/get-blog-posts', getBlogPostsHandler);

app.post('/api/save-subscriber', async (req, res) => {
    return getProjectsHandler(req, res);
    // const { email } = req.body;
    // if (!email || !email.includes('@')) {
    //     return res.status(400),json({ error: 'Invalid email.'});
    // }


    // const existing = await db.collection('subscribers')
    //     .where('email', '==', email)
    //     .limit(1)
    //     .get();
    // console.log('1', existing.empty);
    // if(!existing.empty) return res.status(403).json({ message: 'already subscribed.'});
    // console.log('2');
    
    // await db.collection('subscribers').add({ email, createdAt: new Date(), status:'subscribed'});

    // const markdown = fs.readFileSync(mdFilePath, 'utf-8');
    // const html = marked.parse(markdown);

    // const resend = new Resend(process.env.RESEND_API_KEY);
    
    // await resend.contacts.create({
    //     email,
    //     audienceId: 'b398f236-bb01-4d41-8ace-e9159e7eea80',
    // });
    
    // await resend.emails.send({
    //     from: 'masem <subscription@masem.at>',
    //     to: email,
    //     subject: 'Welcome to masem!',
    //     html: html
    // });

    return res.status(200).json({ success: true });
});

app.listen(8787, () => {
    console.log('API server running on localhost:8787');
});