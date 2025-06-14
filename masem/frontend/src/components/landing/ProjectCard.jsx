




const ProjectCard = ({ project }) => (
    <div className="rounded-xl border p-4 shadow hover:shadow-lg transition">
        <div className="text-2xl mb-2">{project.icon} {project.name}</div>
        <p className="text-muted-foreground">{project.description}</p>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline inline-block">
            Visit
        </a>
        <div className="mt-2 text-xs text-muted-foreground">
            {project.tags?.join(', ')}
        </div>
    </div>
);
export default ProjectCard;