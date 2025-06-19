import express from 'express';
import cors from 'cors';
import projects from './api/v1/projects.js';
import posts from './api/v1/posts.js';
//import getProjectsHandler from './api/v1/projects.js';
//import postsRouter from './api/v1/posts.js';
//import  { saveSubscription } from './api/v1/subscriptions.js';

const API_BASE = '/api/v1';

// const db = getFirestore();
const app = express();

app.use(cors());
app.use(express.json());

// projects
//app.get(`${API_BASE}/projects`, getProjectsHandler);
//app.get(`${API_BASE}/project/:slug`, getProjectsHandler);
app.get(`${API_BASE}/projects`, projects);
app.get(`${API_BASE}/posts`, posts);
// posts
// app.get(`${API_BASE}/posts`, postsRouter);
// app.get(`${API_BASE}/posts/:slug`, postsRouter);
// app.post(`${API_BASE}/posts`, postsRouter);

// subscriptions
// app.post(`${API_BASE}/subscriptions`, saveSubscription);

// subscriptions
// app.post('/api/save-subscriber', async (req, res) => {
//     return getProjectsHandler(req, res);


app.listen(8787, () => {
    console.info('API server running on localhost:8787');
});