import { useState } from "react";

import { projects } from "../data/projects";
import NewProjectDialog from "../components/NewProjectDialog";

import "../styles/projects.css";

export default function Projects() {

    const [showNewProject, setShowNewProject] = useState(false);

    const [selectedProject, setSelectedProject] = useState(projects[0]?.id);

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
                                {project.icon}
                            </span>

                            <div>

                                <h3>{project.name}</h3>

                                <small>{project.type}</small>

                            </div>

                        </div>

                        <p>{project.description}</p>

                        <div className="progress-bar">

                            <div
                                className="progress-fill"
                                style={{
                                    width: `${project.progress}%`
                                }}
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

                onClose={() => setShowNewProject(false)}

            />

        </div>

    );

}