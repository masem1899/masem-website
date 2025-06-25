import { useEffect, useState } from "react";
import { useAppSettings } from "./useAppSettings";





export const useBlogPosts = (projectSlug = null) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { API_URL } = useAppSettings();

    useEffect(() => {
        
        const loadBlogPosts = async() => {
            try {
                setLoading(true);
                const url = `${API_URL}/posts` + 
                    (projectSlug
                        ? `?$filter=project_slug eq '${projectSlug}'&$orderby=date desc`
                        : `?$orderby=date desc`);

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
    }, [projectId]);

    return { posts, loading };
};