const {
    app,
    BrowserWindow,
    ipcMain
} = require("electron");

const path = require("path");

const {
    runCommand,
    scanProject,
    openFolder,
    openVSCode,
    openTerminal,
    runExpo,
    gitStatus,
    gitBranch,
    gitInit,
    gitAdd,
    gitCommit,
    gitPull,
    gitPush,
    gitFetch
} = require("./commands");

const registerCreateProjectIPC =
    require("./ipc/createProject");

const registerProjectsIPC =
    require("./ipc/projects");

function createWindow() {

    const win = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 1100,
        minHeight: 700,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    const viteURL =
        process.env.VITE_DEV_SERVER_URL ||
        "http://localhost:5173";

    win.loadURL(viteURL);
}

ipcMain.handle(
    "run-command",
    async (event, command) => await runCommand(command)
);

ipcMain.handle(
    "scan-project",
    async (event, folder) => await scanProject(folder)
);

ipcMain.handle(
    "open-folder",
    async (event, folder) => await openFolder(folder)
);

ipcMain.handle(
    "open-vscode",
    async (event, folder) => await openVSCode(folder)
);

ipcMain.handle(
    "open-terminal",
    async (event, folder) => await openTerminal(folder)
);

ipcMain.handle(
    "run-expo",
    async (event, folder) => await runExpo(folder)
);

ipcMain.handle(
    "git-status",
    async (event, folder) => await gitStatus(folder)
);

ipcMain.handle(
    "git-branch",
    async (event, folder) => await gitBranch(folder)
);

ipcMain.handle(
    "git-init",
    async (event, folder) => await gitInit(folder)
);

ipcMain.handle(
    "git-add",
    async (event, folder) => await gitAdd(folder)
);

ipcMain.handle(
    "git-commit",
    async (event, data) =>
        await gitCommit(data.folder, data.message)
);

ipcMain.handle(
    "git-pull",
    async (event, folder) => await gitPull(folder)
);

ipcMain.handle(
    "git-push",
    async (event, folder) => await gitPush(folder)
);

ipcMain.handle(
    "git-fetch",
    async (event, folder) => await gitFetch(folder)
);

registerProjectsIPC();
registerCreateProjectIPC();

app.whenReady().then(() => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
