import express from 'express';
import cors from 'cors';
import getProjectsHandler from './api/projects.js';
import getBlogPostsHandler from './api/get-blog-posts.js';
import getProjectHandler from './api/get-project-handler.js';

const API_BASE = '/api/v1';

// const db = getFirestore();
const app = express();

app.use(cors());
app.use(express.json());

// projects
app.get(`${API_BASE}/projects`, getProjectsHandler);
app.get(`${API_BASE}/project/:slug`, getProjectHandler);

// posts
app.get(`${API_BASE}/posts`, getBlogPostsHandler);

// subscriptions
// app.post('/api/save-subscriber', async (req, res) => {
//     return getProjectsHandler(req, res);


app.listen(8787, () => {
    console.log('API server running on localhost:8787');
});