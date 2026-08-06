const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {

    /*
    ==========================================
    Terminal
    ==========================================
    */

    runCommand(command) {

        return ipcRenderer.invoke(
            "run-command",
            command
        );

    },

    /*
    ==========================================
    Project Scanner
    ==========================================
    */

    scanProject(folder) {

        return ipcRenderer.invoke(
            "scan-project",
            folder
        );

    },

    /*
    ==========================================
    Workspace
    ==========================================
    */

    openFolder(folder) {

        return ipcRenderer.invoke(
            "open-folder",
            folder
        );

    },

    openVSCode(folder) {

        return ipcRenderer.invoke(
            "open-vscode",
            folder
        );

    },

    openTerminal(folder) {

        return ipcRenderer.invoke(
            "open-terminal",
            folder
        );

    },

    runExpo(folder) {

        return ipcRenderer.invoke(
            "run-expo",
            folder
        );

    },

    /*
    ==========================================
    Git
    ==========================================
    */

    gitStatus(folder) {

        return ipcRenderer.invoke(
            "git-status",
            folder
        );

    },

    gitBranch(folder) {

        return ipcRenderer.invoke(
            "git-branch",
            folder
        );

    },

    gitInit(folder) {

        return ipcRenderer.invoke(
            "git-init",
            folder
        );

    },

    gitAdd(folder) {

        return ipcRenderer.invoke(
            "git-add",
            folder
        );

    },

    gitCommit(folder, message) {

        return ipcRenderer.invoke(
            "git-commit",
            {
                folder,
                message
            }
        );

    },

    gitPull(folder) {

        return ipcRenderer.invoke(
            "git-pull",
            folder
        );

    },

    gitPush(folder) {

        return ipcRenderer.invoke(
            "git-push",
            folder
        );

    },

    gitFetch(folder) {

        return ipcRenderer.invoke(
            "git-fetch",
            folder
        );

    }

});