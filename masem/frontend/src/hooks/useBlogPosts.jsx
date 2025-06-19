import { useEffect, useState } from "react";
import { useAppSettings } from "./useAppSettings";





export const useBlogPosts = (projectId = null) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { API_URL } = useAppSettings();

    useEffect(() => {
        
        const loadBlogPosts = async() => {
            try {
                setLoading(true);
                const url = projectSlug
                    ? `${API_URL}/posts?$filter=relation eq 'projects' and relationId eq ${projectId}&$orderby=date desc`
                    : `${API_URL}/posts?$orderby=date desc`;

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