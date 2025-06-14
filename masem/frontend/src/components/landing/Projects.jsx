import { useProjects } from "@/hooks/useProjects";
import ProjectCard from "./ProjectCard";



export default function() {
    const { projects, loading } = useProjects();

    if (loading) return <p className="text-center">Loading projects...</p>
    
    return (
        <section id="projects" className="py-20 px-4 bg-muted text-foreground">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects?.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}