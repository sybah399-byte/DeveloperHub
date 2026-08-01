import {scanProjects} from "../services/projectScanner";


export default function Scanner(){

    const projects = scanProjects();


    return (

        <div>

            <h1>
                Project Scanner
            </h1>


            {
                projects.map(project=>(

                    <div className="project-card" key={project.name}>

                        <h2>
                            {project.name}
                        </h2>

                        <p>
                            {project.framework}
                        </p>

                        <p>
                            {project.path}
                        </p>

                    </div>

                ))
            }

        </div>

    );

}