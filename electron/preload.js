const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {

    runCommand(command) {
        return ipcRenderer.invoke("run-command", command);
    },

    scanProject(folder) {
        return ipcRenderer.invoke("scan-project", folder);
    },

    getProjects() {
        return ipcRenderer.invoke("get-projects");
    },

    openFolder(folder) {
        return ipcRenderer.invoke("open-folder", folder);
    },

    openVSCode(folder) {
        return ipcRenderer.invoke("open-vscode", folder);
    },

    openTerminal(folder) {
        return ipcRenderer.invoke("open-terminal", folder);
    },

    runExpo(folder) {
        return ipcRenderer.invoke("run-expo", folder);
    },

    gitStatus(folder) {
        return ipcRenderer.invoke("git-status", folder);
    },

    gitBranch(folder) {
        return ipcRenderer.invoke("git-branch", folder);
    },

    gitInit(folder) {
        return ipcRenderer.invoke("git-init", folder);
    },

    gitAdd(folder) {
        return ipcRenderer.invoke("git-add", folder);
    },

    gitCommit(folder, message) {
        return ipcRenderer.invoke("git-commit", {
            folder,
            message
        });
    },

    gitPull(folder) {
        return ipcRenderer.invoke("git-pull", folder);
    },

    gitPush(folder) {
        return ipcRenderer.invoke("git-push", folder);
    },

    gitFetch(folder) {
        return ipcRenderer.invoke("git-fetch", folder);
    },

    createProject(project) {
        return ipcRenderer.invoke(
            "create-project",
            project
        );
    }

});
