import express from 'express';
import cors from 'cors';
import projects from './api/v1/projects.js';
import posts from './api/v1/posts.js';
import knowledge from './api/v1/knowledge.js';
import sitemap_handler from './api/v1/sitemap.js';

const API_BASE = '/api/v1';

// const db = getFirestore();
const app = express();

app.use(cors());
app.use(express.json());

app.get(`${API_BASE}/projects`, projects);
app.get(`${API_BASE}/posts`, posts);
app.get(`${API_BASE}/knowledge`, knowledge);
app.get(`${API_BASE}/sitemap`, sitemap_handler);

app.listen(8787, () => {
    console.info('API server running on localhost:8787');
});