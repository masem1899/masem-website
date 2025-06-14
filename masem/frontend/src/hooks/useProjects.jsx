import { useEffect, useState } from "react"






export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const API_URL = import.meta.env.VITE_API_URL || '';

    useEffect(() => {
        const loadProjects = async() => {
            try {
                setLoading(true);
                const res = await fetch(`${API_URL}/api/get-projects`);
                if(!res.ok) throw new Error('Fetching projects failed.')
                const data = await res.json();
                setProjects(data.projects || []);
            } catch(error) {
                console.error('Error fetching projects: ', error);
            } finally {
                setLoading(false);
            }
        }
            
        loadProjects();
    }, []);

    return { projects, loading };
}