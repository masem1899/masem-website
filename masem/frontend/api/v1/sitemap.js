import { pool, pgPlaceholders } from './_neon.js';


async function fetchSlugs() {
    const slugs = [];

    // projects
    let { rows: projects } = await pool.query('SELECT slug from projects', []);
    projects.map((p) => {
        slugs.push(`/projects/${p.slug}`);
    });

    // posts
    let { rows: posts } = await pool.query('SELECT slug from posts', []);
    posts.map((p) => {
        slugs.push(`/posts/${p.slug}`);
    })

    return slugs;
}

export default async function sitemap_handler(req, res) {
    const baseUrl = "https://masem.at";

    const slugs = await fetchSlugs();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
                        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                        ${slugs.map(slug => `
                            <url><loc>${baseUrl}${slug}</loc></url>
                        `).join("")}
                    </urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.send(sitemap);
}