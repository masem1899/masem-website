import ProjectCard from "@/components/landing/ProjectCard";
import { useProjects } from "@/hooks/useProjects";




export default function ProjectList() {
    const { projects, loading } = useProjects();
    
    if (loading) return <p className="text-center mt-5">Loading projects...</p>
    
    return (
        <div className="max-w-3xl bg-muted mx-auto py-10">
            <h1 className="text-3xl font-bold text-center">Projects by masem.at</h1>
            {projects?.map(project => (
                <div className="mt-5" key={project.id}>
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    )
}