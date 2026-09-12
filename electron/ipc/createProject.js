const { ipcMain } = require("electron");
const createProject = require("../services/ProjectEngine/CreateProject");
const Database = require("../services/Database");

function registerCreateProjectIPC() {

    ipcMain.handle(
        "create-project",
        async (event, data) => {

            const result = await createProject(data);

            if (result && result.success) {

                Database.addProject({
                    name: result.name || data.name,
                    type: result.type || data.type,
                    path: result.folder,
                    description: `${result.type || data.type} project`,
                    icon: "📁"
                });

            }

            return result;
        }
    );

}

module.exports = registerCreateProjectIPC;
