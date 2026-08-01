import "../styles/automation.css";


export default function Automation(){

    const tasks = [

        {
            name:"Install Dependencies",
            description:"Install npm packages for current project",
            command:"npm install"
        },

        {
            name:"Start Expo",
            description:"Launch React Native development server",
            command:"npx expo start"
        },

        {
            name:"Build Project",
            description:"Create production build",
            command:"npm run build"
        },

        {
            name:"Backup Project",
            description:"Create a project backup",
            command:"backup"
        },

        {
            name:"Git Commit",
            description:"Save current changes",
            command:"git commit"
        }

    ];



    function runTask(command:string){

        if((window as any).electronAPI){

            (window as any).electronAPI.runCommand(command);

        }
        else{

            alert(
                "Would run:\n\n" + command
            );

        }

    }



    return (

        <div className="automation-page">

            <h1>
                Automation
            </h1>


            <p className="subtitle">
                Developer workflow shortcuts
            </p>



            <div className="automation-grid">


            {
                tasks.map((task)=>(


                    <div
                        className="automation-card"
                        key={task.name}
                    >

                        <h2>
                            {task.name}
                        </h2>


                        <p>
                            {task.description}
                        </p>


                        <code>
                            {task.command}
                        </code>



                        <button

                            onClick={()=>
                                runTask(task.command)
                            }

                        >

                            ▶ Run

                        </button>


                    </div>


                ))
            }


            </div>


        </div>

    );

}