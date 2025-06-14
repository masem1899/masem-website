import fs from 'fs';
import path from 'path';




export default function handler(req, res) {
    const dir = path.join(process.cwd(), '/src/content/blog');
    const files = fs.readdirSync(dir);

    const posts = files.map((filename) => {
        const content = fs.readFileSync(path.join(dir, filename), 'utf-8');
        return {
            slug: filename.replace('.md', ''),
            title: filename.split('-').slice(1).join(' ').replace('.md', ''),
            content
        };
    });

    return res.status(200).json(posts);
}