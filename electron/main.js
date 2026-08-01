const {
    app,
    BrowserWindow,
    ipcMain
} = require("electron");

const path = require("path");


const {
    runCommand,
    scanProject,
    gitStatus,
    gitBranch,
    gitInit,
    gitAdd,
    gitCommit
} = require("./commands");



function createWindow(){

    const win = new BrowserWindow({

        width:1200,

        height:800,

        webPreferences:{

            preload:path.join(
                __dirname,
                "preload.js"
            ),

            contextIsolation:true,

            nodeIntegration:false

        }

    });


    win.loadURL(
        "http://localhost:5173"
    );

}





ipcMain.handle(
    "run-command",
    async(event,command)=>{

        return await runCommand(command);

    }
);



ipcMain.handle(
    "scan-project",
    async(event,folder)=>{

        return await scanProject(folder);

    }
);



ipcMain.handle(
    "git-status",
    async(event,folder)=>{

        return await gitStatus(folder);

    }
);



ipcMain.handle(
    "git-branch",
    async(event,folder)=>{

        return await gitBranch(folder);

    }
);



ipcMain.handle(
    "git-init",
    async(event,folder)=>{

        return await gitInit(folder);

    }
);



ipcMain.handle(
    "git-add",
    async(event,folder)=>{

        return await gitAdd(folder);

    }
);



ipcMain.handle(
    "git-commit",
    async(event,data)=>{

        return await gitCommit(
            data.folder,
            data.message
        );

    }
);





app.whenReady().then(()=>{

    createWindow();

});