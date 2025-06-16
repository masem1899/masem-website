import { useEffect, useState } from "react"
import { useAppSettings } from "./useAppSettings";






export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // const API_URL = import.meta.env.DEV ? 'http://localhost:8787/api/v1' : '/api/v1';
    const { API_URL } = useAppSettings();
    
    useEffect(() => {
        const loadProjects = async() => {
            try {
                setLoading(true);
                const res = await fetch(`${API_URL}/projects`);
                if(!res.ok) throw new Error('Fetching projects failed.')
                console.log('response: ', res);
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