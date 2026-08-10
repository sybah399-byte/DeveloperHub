const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

function run(command, cwd) {

    return new Promise((resolve, reject) => {

        exec(
            command,
            { cwd },
            (error, stdout, stderr) => {

                if (error) {

                    reject(stderr || error.message);

                    return;

                }

                resolve(stdout);

            }
        );

    });

}

async function createBlank(folder) {

    if (!fs.existsSync(folder)) {

        fs.mkdirSync(folder, {
            recursive: true
        });

    }

}

async function createReact(folder) {

    await run(
        `npm create vite@latest "${folder}" -- --template react-ts`,
        process.cwd()
    );

}

async function createExpo(folder) {

    await run(
        `npx create-expo-app "${folder}"`,
        process.cwd()
    );

}

async function createNext(folder) {

    await run(
        `npx create-next-app@latest "${folder}" --ts --eslint --yes`,
        process.cwd()
    );

}

async function createElectron(folder) {

    if (!fs.existsSync(folder)) {

        fs.mkdirSync(folder, {
            recursive: true
        });

    }

    await run("npm init -y", folder);

}

async function initialiseGit(folder) {

    await run("git init", folder);

}

module.exports = async function (project) {

    const folder =
        path.join(
            project.location,
            project.name
        );

    switch (project.type) {

        case "Expo React Native":

            await createExpo(folder);

            break;

        case "React + Vite":

            await createReact(folder);

            break;

        case "Electron":

            await createElectron(folder);

            break;

        case "Next.js":

            await createNext(folder);

            break;

        default:

            await createBlank(folder);

    }

    await initialiseGit(folder);

    return {

        success: true,

        folder,

        name: project.name,

        type: project.type

    };

};