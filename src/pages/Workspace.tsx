import "../styles/workspace.css";

const project =
    "C:\\Users\\Nikki\\Documents\\Projects\\MensShedApp";


export default function Workspace() {


    async function openFolder() {

        const result =
            await window.electronAPI.openFolder(project);

        console.log(result);

    }


    async function openVSCode() {

        const result =
            await window.electronAPI.openVSCode(project);

        console.log(result);

    }


    async function openTerminal() {

        const result =
            await window.electronAPI.openTerminal(project);

        console.log(result);

    }


    async function runExpo() {

        const result =
            await window.electronAPI.runExpo(project);

        alert(
            JSON.stringify(
                result,
                null,
                2
            )
        );

    }


    async function gitStatus() {

        const result =
            await window.electronAPI.gitStatus(project);

        alert(
            result.output ||
            result.error
        );

    }


    return (

        <div className="workspace-page">

            <h1>
                Workspace
            </h1>


            <p>
                Current Project
            </p>


            <div className="workspace-card">

                <h2>
                    Men's Shed App
                </h2>


                <p>
                    {project}
                </p>


                <div className="workspace-buttons">


                    <button onClick={openFolder}>
                        📁 Open Folder
                    </button>


                    <button onClick={openVSCode}>
                        💻 Open VS Code
                    </button>


                    <button onClick={openTerminal}>
                        🖥 Open Terminal
                    </button>


                    <button onClick={runExpo}>
                        🚀 Run Expo
                    </button>


                    <button onClick={gitStatus}>
                        🌿 Git Status
                    </button>


                </div>


            </div>


        </div>

    );

}











