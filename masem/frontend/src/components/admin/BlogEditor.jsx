import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";





const generateSlug = (title) => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
};


export default function BlogEditor({ existingPost = null, onSave}) {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');

    useEffect(() => {
        if(existingPost) {
            setTitle(existingPost.title);
            setSlug(existingPost.slug);
            setDate(existingPost.date);
            setContent(existingPost.content);
            setTags(existingPost.tags.join(', '));
        } else {
            const today = new Date().toISOString().split('T')[0];
            setDate(today);
        }
    }, [existingPost]);

    useEffect(() => {
        if(!existingPost) {
            setSlug(generateSlug(title));
        }
    }, [title]);

    const handleSubmit = () => {

    };

    return (
        <div className="space-y-4">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <Input className="bg-muted" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="Slug" readOnly />
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Markdown content" rows={15} />
            <Button onClick={handleSubmit}>Save Post</Button>
        </div>
    );
}