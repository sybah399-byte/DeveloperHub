import { useState } from "react";
import "../styles/newProjectDialog.css";

interface NewProjectDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

declare global {
    interface Window {
        electronAPI: {
            createProject(project: {
                name: string;
                type: string;
                location: string;
            }): Promise<any>;
        };
    }
}

export default function NewProjectDialog({
    isOpen,
    onClose,
}: NewProjectDialogProps) {

    const [projectName, setProjectName] = useState("");
    const [projectType, setProjectType] = useState("Expo React Native");
    const [projectFolder, setProjectFolder] = useState(
        "C:\\Users\\Nikki\\Documents\\Projects"
    );

    async function createProject() {

        if (!projectName.trim()) {
            alert("Please enter a project name.");
            return;
        }

        const result = await window.electronAPI.createProject({
            name: projectName,
            type: projectType,
            location: projectFolder
        });

        if (result.success) {
            alert(`Project created!\n\n${result.folder}`);
            onClose();
        } else {
            alert(result.error);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="dialog-overlay">

            <div className="dialog-window">

                <h2>New Project</h2>

                <p>Create a new project.</p>

                <label>Project Name</label>

                <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="My Awesome App"
                />

                <label>Project Type</label>

                <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                >
                    <option>Expo React Native</option>
                    <option>React + Vite</option>
                    <option>Electron</option>
                    <option>Next.js</option>
                    <option>Node.js</option>
                    <option>Blank Project</option>
                </select>

                <label>Project Folder</label>

                <input
                    type="text"
                    value={projectFolder}
                    onChange={(e) => setProjectFolder(e.target.value)}
                />

                <div className="dialog-buttons">

                    <button
                        className="cancel-button"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="create-button"
                        onClick={createProject}
                    >
                        Create Project
                    </button>

                </div>

            </div>

        </div>
    );
}