import { useEffect, useState } from "react";
import NewProjectDialog from "../components/NewProjectDialog";
import "../styles/projects.css";

type Project = {
    id: string;
    name: string;
    type: string;
    description?: string;
    progress: number;
    status: string;
    icon?: string;
    path: string;
};

type ElectronAPI = {
    getProjects?: () => Promise<Project[]>;
};

declare global {
    interface Window {
        electronAPI?: ElectronAPI;
    }
}

export default function Projects() {

    const [showNewProject, setShowNewProject] = useState(false);
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<string>();
    const [loading, setLoading] = useState(true);

    async function loadProjects() {
        try {
            if (window.electronAPI?.getProjects) {
                const result = await window.electronAPI.getProjects();
                const loadedProjects = Array.isArray(result) ? result : [];
                setProjects(loadedProjects);
                setSelectedProject((current) => current ?? loadedProjects[0]?.id);
            }
        } catch (error) {
            console.error("Failed to load projects:", error);
            setProjects([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProjects();
    }, []);

    return (
        <div className="projects-page">

            <div className="projects-header">

                <div>
                    <h1>Project Manager</h1>
                    <p>
                        Create, launch and manage your development projects.
                    </p>
                </div>

                <div className="projects-actions">
                    <button
                        className="primary-button"
                        onClick={() => setShowNewProject(true)}
                    >
                        + New Project
                    </button>

                    <button className="secondary-button">
                        Import Project
                    </button>
                </div>

            </div>

            {loading && <p>Loading projects...</p>}

            {!loading && projects.length === 0 && (
                <p>No projects have been added yet. Click &quot;+ New Project&quot; to create one.</p>
            )}

            <div className="project-list">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={
                            selectedProject === project.id
                                ? "project-card selected"
                                : "project-card"
                        }
                        onClick={() => setSelectedProject(project.id)}
                    >
                        <div className="project-title">
                            <span className="project-icon">
                                {project.icon || "📁"}
                            </span>

                            <div>
                                <h3>{project.name}</h3>
                                <small>{project.type}</small>
                            </div>
                        </div>

                        <p>
                            {project.description || `${project.type} project`}
                        </p>

                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${project.progress}%` }}
                            />
                        </div>

                        <div className="project-footer">
                            <span>{project.status}</span>
                            <span>{project.progress}%</span>
                        </div>
                    </div>
                ))}
            </div>

            <NewProjectDialog
                isOpen={showNewProject}
                onClose={async () => {
                    setShowNewProject(false);
                    await loadProjects();
                }}
            />

        </div>
    );
}
