import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ALink from "@/components/own/ALink";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";





const ProjectDetails = () => {
    const [ project, setProject ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    const { slug } = useParams();
    //const { posts, loading: blogLoading } = useBlogPosts(slug)
    const posts = [];
    const blogLoading = false;
    
    const API_URL = import.meta.env.VITE_API_URL || '';

    useEffect(() => {
        const loadProject = async() => {
            try {
                setLoading(true);
                const res = await fetch(`${API_URL}/projects?$filter=name -eq '${encodeURIComponent(slug)}'`);
                const data = await res.json();
                setProject(data[0] || {});
            } catch(error) {
                console.error('Error fetching project details', error);
            } finally {
                setLoading(false);
            }
        };

        loadProject();
    }, [slug]);


    if (loading) return <p className="text-center mt-10">Loading project...</p>
    if (!project) return <p className="text-center mt-10">Project not found.</p>

    return (
        <>
            <div className="font-sans bg-muted text-foreground">
                <div className="max-w-3xl bg-muted mx-auto px-6 py-10">
                    {/* project details */}
                    <h1 className="text-3xl font-bold mb-2">{project.icon} {project.name}</h1>
                    <p className="mb-4 text-muted-foreground">{project.description}</p>
                    <div className="mb-6 text-xs text-muted-foreground">
                        Tags: { project.tags?.join(', ') || 'none' }
                    </div>

                    {project.url && (
                        <ALink href={project.url} className="text-blue-600 underline" label="Visit project homepage">Visit Project</ALink>
                    )}

                    <hr className="my-8" />

                    {/* blog posts */}
                    <h2 className="text-xl font-semibold mb-2">Related Blog Posts</h2>
                    {blogLoading && <p>Loading posts</p>}
                    {!blogLoading && posts.length === 0 && <p>No related posts yet.</p>}

                    <ul className="space-y-2">
                        {posts.map(post => (
                            <li key={post.slug}>
                                <ALink href={`/blog/${post.slug}`} className="text-blue-500 hover:underline" label={post.title}>
                                    {post.title}
                                </ALink>
                                <div className="text-sm text-muted-foreground">
                                    {new Date(post.date).toLocaleDateString() }
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
};

export default ProjectDetails;