import { useState } from "react";
import "../styles/git.css";


export default function Git(){


    const projectPath =
        "C:\\Users\\Nikki\\Documents\\Projects\\DeveloperHub";


    const [output,setOutput] =
        useState("");



    const [message,setMessage] =
        useState("");


    const [loading,setLoading] =
        useState(false);




    async function runAction(
        action:()=>Promise<any>
    ){

        setLoading(true);


        const result =
            await action();


        setOutput(
            result.output ||
            result.error ||
            "Completed"
        );


        setLoading(false);

    }





    return (

        <div className="git-page">


            <h1>
                Git Centre
            </h1>


            <p>
                Manage DeveloperHub repository.
            </p>



            <button
                disabled={loading}
                onClick={()=>
                    runAction(
                        () =>
                        window.electronAPI.gitInit(
                            projectPath
                        )
                    )
                }
            >
                Initialise Git
            </button>




            <button
                disabled={loading}
                onClick={()=>
                    runAction(
                        () =>
                        window.electronAPI.gitStatus(
                            projectPath
                        )
                    )
                }
            >
                Check Status
            </button>




            <button
                disabled={loading}
                onClick={()=>
                    runAction(
                        () =>
                        window.electronAPI.gitBranch(
                            projectPath
                        )
                    )
                }
            >
                Check Branch
            </button>




            <hr />



            <h2>
                Commit Changes
            </h2>



            <button
                disabled={loading}
                onClick={()=>
                    runAction(
                        () =>
                        window.electronAPI.gitAdd(
                            projectPath
                        )
                    )
                }
            >
                Stage All Files
            </button>




            <input

                placeholder="Commit message"

                value={message}

                onChange={
                    e =>
                    setMessage(
                        e.target.value
                    )
                }

            />




            <button
                disabled={loading}
                onClick={()=>
                    runAction(
                        () =>
                        window.electronAPI.gitCommit({

                            folder:
                                projectPath,

                            message:
                                message ||
                                "DeveloperHub update"

                        })
                    )
                }
            >
                Create Commit
            </button>





            {
                loading &&
                <p>
                    Running Git command...
                </p>
            }





            <pre>
                {output}
            </pre>


        </div>

    );

}