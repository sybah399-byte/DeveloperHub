import { useEffect, useState } from "react";
import { graffitiTheme } from "../theme/graffiti";

type Project = {
    id: string;
    name: string;
    type: string;
    status: string;
    progress: number;
    path: string;
    description?: string;
    icon?: string;
};

type ElectronAPI = {
    getProjects?: () => Promise<Project[]>;
    openFolder?: (path: string) => Promise<unknown>;
    openVSCode?: (path: string) => Promise<unknown>;
    runExpo?: (path: string) => Promise<unknown>;
};

declare global {
    interface Window {
        electronAPI?: ElectronAPI;
    }
}

export default function Dashboard() {

    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProjects() {
            try {
                if (window.electronAPI?.getProjects) {
                    const result = await window.electronAPI.getProjects();
                    setProjects(Array.isArray(result) ? result : []);
                }
            } catch (error) {
                console.error("Failed to load projects:", error);
                setProjects([]);
            } finally {
                setLoading(false);
            }
        }

        loadProjects();
    }, []);

    function getGreeting() {
        const hour = new Date().getHours();

        if (hour < 12) return "GOOD MORNING MR SYBAH";
        if (hour < 18) return "GOOD AFTERNOON MR SYBAH";
        return "GOOD EVENING MR SYBAH";
    }

    function openFolder(path: string) {
        if (window.electronAPI?.openFolder) {
            window.electronAPI.openFolder(path);
        }
    }

    function openVSCode(path: string) {
        if (window.electronAPI?.openVSCode) {
            window.electronAPI.openVSCode(path);
        }
    }

    function startExpo(path: string) {
        if (window.electronAPI?.runExpo) {
            window.electronAPI.runExpo(path);
        }
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                background: graffitiTheme.background,
                padding: "30px",
                color: graffitiTheme.text
            }}
        >
            <div
                style={{
                    background: graffitiTheme.panel,
                    padding: "35px",
                    borderRadius: "20px",
                    border: `3px solid ${graffitiTheme.green}`,
                    boxShadow: `0 0 25px ${graffitiTheme.green}`
                }}
            >
                <h1
                    style={{
                        fontFamily: graffitiTheme.titleFont,
                        fontSize: "48px",
                        color: graffitiTheme.green,
                        letterSpacing: "4px"
                    }}
                >
                    DEVELOPER HUB
                </h1>

                <h2
                    style={{
                        fontFamily: graffitiTheme.font,
                        color: graffitiTheme.pink
                    }}
                >
                    {getGreeting()}
                </h2>

                <p>
                    Your digital workshop is online.
                    <br />
                    Build. Break. Create.
                </p>
            </div>

            <h2
                style={{
                    marginTop: "40px",
                    fontFamily: graffitiTheme.titleFont,
                    color: graffitiTheme.blue
                }}
            >
                🎨 PROJECT WALL
            </h2>

            {loading && <p>Loading projects...</p>}

            {!loading && projects.length === 0 && (
                <p>No projects have been added yet.</p>
            )}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
                    gap: "25px"
                }}
            >
                {projects.map((project) => (
                    <div
                        key={project.id}
                        style={{
                            background: "#202020",
                            padding: "25px",
                            borderRadius: "15px",
                            border: `2px solid ${graffitiTheme.pink}`,
                            boxShadow: `0 0 15px ${graffitiTheme.pink}`
                        }}
                    >
                        <h2
                            style={{
                                fontFamily: graffitiTheme.font,
                                color: graffitiTheme.blue
                            }}
                        >
                            {project.name}
                        </h2>

                        <p>
                            TYPE:
                            <br />
                            {project.type}
                        </p>

                        <p>
                            STATUS:
                            <br />
                            <strong>{project.status}</strong>
                        </p>

                        <div
                            style={{
                                height: "15px",
                                background: "#333",
                                borderRadius: "10px"
                            }}
                        >
                            <div
                                style={{
                                    width: `${project.progress}%`,
                                    height: "15px",
                                    background: graffitiTheme.green,
                                    borderRadius: "10px"
                                }}
                            />
                        </div>

                        <p>PROGRESS {project.progress}%</p>

                        <button onClick={() => openFolder(project.path)}>
                            📂 OPEN FOLDER
                        </button>
                        {" "}
                        <button onClick={() => openVSCode(project.path)}>
                            💻 VS CODE
                        </button>

                        {project.type.includes("Expo") && (
                            <>
                                <br />
                                <br />
                                <button onClick={() => startExpo(project.path)}>
                                    ▶ START EXPO
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
