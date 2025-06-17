import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useAppSettings } from "@/hooks/useAppSettings";





const generateSlug = (title) => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
};


export default function BlogEditor({ existingPost = null, onSave}) {
    const [post, setPost] = useState({
        title: '',
        slug: '',
        date: new Date().toISOString().split('T')[0],
        content: '',
        tags: [],
    });
    const [errorMessage, setErrorMessage] = useState(null);

    const { API_URL } = useAppSettings();


    useEffect(() => {
        if(existingPost) {
            setPost({ 
                ...existingPost, 
                tags: existingPost.tags?.join(', ') ?? ''
            });
        } else {
            setPost({
                title: '',
                slug: '',
                date: new Date().toISOString().split('T')[0],
                content: '',
                tags: '',
            });
        }
    }, [existingPost]);

    useEffect(() => {
        if(!existingPost) {
            setPost((prev) => ({
                ...prev,
                slug: generateSlug(prev.title),
            }))};
    }, [post.title]);

    const handleChange = (field) => (e) => {
        setPost((prev) => ({ ...prev, [field]:e.target.value }));
    };

    const handleSubmit = async () => {
        const { title, slug, date, content } = post;
        if (!title || !slug || !date || !content) {
            setErrorMessage('All fields are required.');
            return;
        }

        const payload = {
            ...post,
            tags: post.tags
                .split(',')
                .map((t) => t.trim())
                .filter(Boolean),
        };

        try {
            const res = await fetch(`${API_URL}/posts`, {
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error('Failed to save post.');

            onSave && onSave(payload);
        } catch(err) {
            console.error('Save error: ', err);
            setErrorMessage('Error saving post.');
        }
    };

    return (
        <div className="space-y-4">
            { errorMessage && <p className="text-red-600">{errorMessage}</p> }
            <Input value={post.title} onChange={handleChange('title')} placeholder="Title" 
            />
            <Input className="bg-muted" value={post.slug} placeholder="Slug" readOnly />
            <Input type="date" value={post.date} onChange={handleChange('date')} />
            <Input value={post.tags} onChange={handleChange('tags')} placeholder="Tags (comma separated)" />
            <Textarea value={post.content} onChange={handleChange('content')} placeholder="Markdown content" rows={15} />
            <Button onClick={handleSubmit}>Save Post</Button>
        </div>
    );
}