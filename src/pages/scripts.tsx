import { useState } from "react";
import "../styles/scripts.css";

interface Script {

    name: string;

    command: string;

}

export default function Scripts() {

    const [scripts] = useState<Script[]>([

        {
            name: "Install Packages",
            command: "npm install"
        },

        {
            name: "Run Dev Server",
            command: "npm run dev"
        },

        {
            name: "Build Project",
            command: "npm run build"
        },

        {
            name: "Start Electron",
            command: "npm run electron:dev"
        }

    ]);

    const [output, setOutput] = useState("");

    async function runScript(command: string) {

        setOutput("Running...");

        const result =
            await window.electronAPI.runCommand(command);

        setOutput(

            result.output ||

            result.error ||

            "Completed"

        );

    }

    return (

        <div className="scripts-page">

            <h1>Script Runner</h1>

            <p>
                Run your common development commands with one click.
            </p>

            <div className="scripts-list">

                {

                    scripts.map((script) => (

                        <button

                            key={script.name}

                            onClick={() =>
                                runScript(script.command)
                            }

                        >

                            {script.name}

                        </button>

                    ))

                }

            </div>

            <pre className="script-output">

                {output}

            </pre>

        </div>

    );

}