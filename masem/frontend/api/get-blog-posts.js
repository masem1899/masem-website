import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';




export default function handler(req, res) {
    const dir = path.join(process.cwd(), '/public/content/blog');
    const files = fs.readdirSync(dir);

    const posts = files
        .filter(file => file.endsWith('.md'))
        .map((filename) => {
            const absolute = path.join(dir, filename)
            const fileContent = fs.readFileSync(absolute, 'utf-8');

            const { data, content } = matter(fileContent);

            return {
                title: data.title || 'Untitled',
                slug: data.slug || filename.replace('.md', ''),
                date: data.date || null,
                content
            };
        });

    return res.status(200).json(posts);
}