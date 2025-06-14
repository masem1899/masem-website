import { useEffect, useState } from "react";





export const useBlogPosts = (projectSlug = null) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL || '';

    useEffect(() => {
        
        const loadBlogPosts = async() => {
            try {
                setLoading(true);
                const url = projectSlug
                    ? `${API_URL}/posts?projectSlug=${encodeURIComponent(projectSlug)}`
                    : `${API_URL}/posts`;

                const res = await fetch(`${url}`);
                
                if (!res.ok) throw new Error('Fetching blog posts failed');
                const data = await res.json();
                setPosts(data || []);    
            } catch(error) {
                console.error('Error fetching blog posts', error);
            } finally {
                setLoading(false);
            }
        };

        loadBlogPosts();
    }, [projectSlug]);

    return { posts, loading };
};