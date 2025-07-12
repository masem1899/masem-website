import { Link } from "react-router-dom";





const ProjectCard = ({ project }) => (
    <div className="rounded-xl border p-4 shadow hover:shadow-lg transition">
        <div className="text-2xl font-bold mb-2">
            <Link
                to={`/projects/${project.slug}`}
                className="text-xl hover:text-blue-500 inline-block"
            >
                {project.icon} {project.name}
            </Link>
        </div>
        <p className="text-muted-foreground">{project.description}</p>
        {/* <Link
            to={`/projects/${project.slug}`}
            className="text-blue-600 underline inline-block"
        >
            View Details
        </Link>
         */}
        <div className="mt-2 text-xs text-muted-foreground">
            {project.tags?.join(', ')}
        </div>
    </div>
);
export default ProjectCard;