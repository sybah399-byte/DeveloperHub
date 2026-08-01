const {
    contextBridge,
    ipcRenderer
} = require("electron");


contextBridge.exposeInMainWorld(
    "electronAPI",
    {


        runCommand(command){

            return ipcRenderer.invoke(
                "run-command",
                command
            );

        },


        scanProject(folder){

            return ipcRenderer.invoke(
                "scan-project",
                folder
            );

        },


        gitStatus(folder){

            return ipcRenderer.invoke(
                "git-status",
                folder
            );

        },


        gitBranch(folder){

            return ipcRenderer.invoke(
                "git-branch",
                folder
            );

        },


        gitInit(folder){

            return ipcRenderer.invoke(
                "git-init",
                folder
            );

        },


        gitAdd(folder){

            return ipcRenderer.invoke(
                "git-add",
                folder
            );

        },


        gitCommit(data){

            return ipcRenderer.invoke(
                "git-commit",
                data
            );

        }


    }
);