const fs = require("fs");
const path = require("path");

const databaseFolder = path.join(
    __dirname,
    "..",
    "database"
);

const projectsFile = path.join(
    databaseFolder,
    "projects.json"
);

function ensureDatabase() {

    if (!fs.existsSync(databaseFolder)) {

        fs.mkdirSync(
            databaseFolder,
            {
                recursive: true
            }
        );

    }

    if (!fs.existsSync(projectsFile)) {

        fs.writeFileSync(
            projectsFile,
            JSON.stringify([], null, 4)
        );

    }

}

function getProjects() {

    ensureDatabase();

    return JSON.parse(
        fs.readFileSync(
            projectsFile,
            "utf8"
        )
    );

}

function saveProjects(projects) {

    ensureDatabase();

    fs.writeFileSync(
        projectsFile,
        JSON.stringify(
            projects,
            null,
            4
        )
    );

}

function addProject(project) {

    const projects =
        getProjects();

    const exists =
        projects.find(
            p => p.path === project.path
        );

    if (exists) {

        return exists;

    }

    const record = {

        id:
            Date.now().toString(),

        name:
            project.name,

        type:
            project.type,

        path:
            project.path,

        status:
            "Ready",

        progress:
            0,

        created:
            new Date().toISOString(),

        lastOpened:
            null,

        favourite:
            false

    };

    projects.push(record);

    saveProjects(projects);

    return record;

}

module.exports = {

    getProjects,

    saveProjects,

    addProject

};