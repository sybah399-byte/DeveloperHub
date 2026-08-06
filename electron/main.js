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


function createWindow() {

    const win = new BrowserWindow({

        width: 1400,

        height: 900,

        minWidth: 1100,

        minHeight: 700,

        webPreferences: {

            preload: path.join(
                __dirname,
                "preload.js"
            ),

            contextIsolation: true,

            nodeIntegration: false

        }

    });


    const viteURL =
        process.env.VITE_DEV_SERVER_URL ||
        "http://localhost:5173";


    win.loadURL(viteURL);

}


/*
=========================================
Terminal
=========================================
*/

ipcMain.handle(
    "run-command",
    async (event, command) => {

        return await runCommand(command);

    }
);


/*
=========================================
Project Scanner
=========================================
*/

ipcMain.handle(
    "scan-project",
    async (event, folder) => {

        return await scanProject(folder);

    }
);


/*
=========================================
Workspace
=========================================
*/

ipcMain.handle(
    "open-folder",
    async (event, folder) => {

        return await openFolder(folder);

    }
);


ipcMain.handle(
    "open-vscode",
    async (event, folder) => {

        return await openVSCode(folder);

    }
);


ipcMain.handle(
    "open-terminal",
    async (event, folder) => {

        return await openTerminal(folder);

    }
);


ipcMain.handle(
    "run-expo",
    async (event, folder) => {

        return await runExpo(folder);

    }
);


/*
=========================================
Git
=========================================
*/

ipcMain.handle(
    "git-status",
    async (event, folder) => {

        return await gitStatus(folder);

    }
);


ipcMain.handle(
    "git-branch",
    async (event, folder) => {

        return await gitBranch(folder);

    }
);


ipcMain.handle(
    "git-init",
    async (event, folder) => {

        return await gitInit(folder);

    }
);


ipcMain.handle(
    "git-add",
    async (event, folder) => {

        return await gitAdd(folder);

    }
);


ipcMain.handle(
    "git-commit",
    async (event, data) => {

        return await gitCommit(
            data.folder,
            data.message
        );

    }
);


ipcMain.handle(
    "git-pull",
    async (event, folder) => {

        return await gitPull(folder);

    }
);


ipcMain.handle(
    "git-push",
    async (event, folder) => {

        return await gitPush(folder);

    }
);


ipcMain.handle(
    "git-fetch",
    async (event, folder) => {

        return await gitFetch(folder);

    }
);


app.whenReady().then(() => {

    createWindow();

});


app.on(
    "window-all-closed",
    () => {

        if (process.platform !== "darwin") {

            app.quit();

        }

    }
);


app.on(
    "activate",
    () => {

        if (BrowserWindow.getAllWindows().length === 0) {

            createWindow();

        }

    }
);