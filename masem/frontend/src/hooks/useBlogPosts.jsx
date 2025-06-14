import { useEffect, useState } from "react";





export const useBlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL || '';

    useEffect(() => {
        const loadBlogPosts = async() => {
            try {
                setLoading(true);
                const res = await fetch(`${API_URL}/api/get-posts`);
                if(!res.ok) throw new Error('Error fetching blog posts.');
                const data = await res.json();
                setPosts(data || []);
            } catch (error) {
                console.error('Error fetching blog posts.', error);
            } finally {
                setLoading(false);
            }
        };

        loadBlogPosts();
    }, []);

    return { posts, loading };
};