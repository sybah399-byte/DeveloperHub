import type { ProjectInfo } from "../services/projectScanner";

type Props = {
    project: ProjectInfo;
};

export default function ProjectCard({ project }: Props) {

    return (

        <div className="project-card">

            <div className="project-header">

                <h2>{project.name}</h2>

                <span className="project-type">
                    {project.type}
                </span>

            </div>

            <div className="project-details">

                <p>
                    <strong>Path:</strong>
                    <br />
                    {project.path}
                </p>

                <p>
                    <strong>Status:</strong> {project.status}
                </p>

                <p>
                    <strong>Health:</strong> {project.health}%
                </p>

                <p>
                    <strong>Files:</strong> {project.files}
                </p>

                <p>
                    <strong>Git Repository:</strong>{" "}
                    {project.git ? "Yes" : "No"}
                </p>

                {project.frameworks.length > 0 && (

                    <p>
                        <strong>Frameworks:</strong>{" "}
                        {project.frameworks.join(", ")}
                    </p>

                )}

            </div>

            <div className="project-checks">

                <h3>Checks</h3>

                {project.checks.map((check, index) => (

                    <div key={index}>

                        {check.found ? "✅" : "❌"} {check.name}

                    </div>

                ))}

            </div>

        </div>

    );

}