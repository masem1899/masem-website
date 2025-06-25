import { Link } from "react-router-dom";





const ProjectCard = ({ project }) => (
    <div className="rounded-xl border p-4 shadow hover:shadow-lg transition">
        <div className="text-2xl mb-2">{project.icon} {project.name}</div>
        <p className="text-muted-foreground">{project.description}</p>

        <Link
            to={`/projects/${project.slug}`}
            className="text-blue-600 underline inline-block"
        >
            View Details
        </Link>
        
        <div className="mt-2 text-xs text-muted-foreground">
            {project.tags?.join(', ')}
        </div>
    </div>
);
export default ProjectCard;