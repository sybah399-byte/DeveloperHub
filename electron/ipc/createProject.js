const { ipcMain } = require("electron");
const createProject = require("../services/ProjectEngine/CreateProject");

function registerCreateProjectIPC() {

    ipcMain.handle(
        "create-project",
        async (event, data) => {

            return await createProject(data);

        }
    );

}

module.exports = registerCreateProjectIPC;