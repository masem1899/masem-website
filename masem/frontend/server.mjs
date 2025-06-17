import express from 'express';
import cors from 'cors';
import getProjectsHandler from './api/v1/projects.js';
import router from './api/v1/posts.js';
import getProjectHandler from './api/v1/get-project-handler.js';
import  { saveSubscription } from './api/v1/subscriptions.js';

const API_BASE = '/api/v1';

// const db = getFirestore();
const app = express();

app.use(cors());
app.use(express.json());

// projects
app.get(`${API_BASE}/projects`, getProjectsHandler);
app.get(`${API_BASE}/project/:slug`, getProjectHandler);

// posts
app.get(`${API_BASE}/posts`, router);
app.get(`${API_BASE}/posts/:slug`, router);
app.post(`${API_BASE}/posts`, router);

// subscriptions
app.post(`${API_BASE}/subscriptions`, saveSubscription);

// subscriptions
// app.post('/api/save-subscriber', async (req, res) => {
//     return getProjectsHandler(req, res);


app.listen(8787, () => {
    console.info('API server running on localhost:8787');
});