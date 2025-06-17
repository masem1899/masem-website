import { useAppSettings } from "@/hooks/useAppSettings";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";




export default function BlogDetails() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const { API_URL } = useAppSettings();


    useEffect(() => {
        setLoading(true);
        console.log('blogDetails url: ', `${API_URL}/posts/${slug}`);
        fetch(`${API_URL}/posts/${slug}`)
            .then((res) => res.json())
            .then((data) => setPost(data || {}))
            .catch((err) => console.error('error fetching post from api: ', err))
            .finally(() => setLoading(false));
    
    }, [slug])

    if (loading) return <p className="text-center mt-10">Loading post...</p>
    if (!post) return <p className="text-center mt-10">Post not found.</p>

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-sm mb-6">{new Date(post.date).toLocaleDateString()}</p>

            <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                >
                    {post.content}
                </ReactMarkdown>
            </div>
        </div>
    )
}