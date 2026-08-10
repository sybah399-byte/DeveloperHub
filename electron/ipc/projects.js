const { ipcMain } = require("electron");
const Database = require("../services/Database");

module.exports = function registerProjectsIPC() {

    ipcMain.handle(
        "get-projects",
        async () => {

            return Database.getProjects();

        }
    );

};