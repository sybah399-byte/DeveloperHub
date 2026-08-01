import { useState } from "react";
import { scanProject } from "../services/projectScanner";
import type { ProjectInfo } from "../services/projectScanner";
import "../styles/scanner.css";


export default function ProjectScanner(){


    const [project,setProject] =
        useState<ProjectInfo | null>(null);



    async function handleScan(){


        const result =
            await scanProject(
                "C:\\Users\\Nikki\\Documents\\Projects\\DeveloperHub"
            );


        setProject(result);

    }



    return (

        <div className="scanner-card">


            <h2>
                Project Scanner
            </h2>



            <button
                className="scan-button"
                onClick={handleScan}
            >
                Scan DeveloperHub
            </button>




            {project && (

                <div className="project-result">


                    <p>
                        <strong>Name:</strong> {project.name}
                    </p>


                    <p>
                        <strong>Type:</strong> {project.type}
                    </p>


                    <p>
                        <strong>Status:</strong> {project.status}
                    </p>


                    <p>
                        <strong>Git:</strong> {project.git ? "Yes" : "No"}
                    </p>


                    <p>
                        <strong>Files:</strong> {project.files}
                    </p>


                    <p>
                        <strong>Health:</strong> {project.health}%
                    </p>



                    <h3>
                        Checks
                    </h3>


                    {

                    project.checks.map(
                        (check,index)=>(

                            <p key={index}>

                                {check.found ? "✓" : "✗"}
                                {" "}
                                {check.name}

                            </p>

                        )

                    )

                    }



                </div>

            )}



        </div>

    );

}