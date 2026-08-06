const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");


function execute(command) {

    return new Promise((resolve) => {

        exec(command, (error, stdout, stderr) => {

            resolve({

                success: !error,

                output: stdout,

                error: error ? error.message : stderr

            });

        });

    });

}



function runCommand(command) {

    return execute(command);

}



async function scanProject(folder) {

    const result = {

        name: path.basename(folder),

        path: folder,

        type: "Unknown",

        files: 0,

        git: false,

        status: "Scanned",

        health: 100,

        checks: []

    };


    function walk(dir) {

        let entries = [];

        try {

            entries = fs.readdirSync(dir);

        } catch {

            return;

        }


        for (const entry of entries) {

            const full = path.join(dir, entry);

            const stat = fs.statSync(full);


            if (stat.isDirectory()) {

                walk(full);

            } else {

                result.files++;

            }

        }

    }


    walk(folder);


    return result;

}



function openFolder(folder) {

    return execute(
        `explorer "${folder}"`
    );

}



function openVSCode(folder) {

    return execute(
        `code "${folder}"`
    );

}



function openTerminal(folder) {

    return execute(
        `powershell -NoExit -Command "Set-Location '${folder}'"`
    );

}



function runExpo(folder) {

    return new Promise((resolve) => {

        const command =
            `Set-Location '${folder}'; npx expo start`;


        exec(
            `start powershell -NoExit -Command "${command}"`,
            (error) => {

                resolve({

                    success: !error,

                    output: error
                        ? ""
                        : "Expo terminal launched",

                    error: error
                        ? error.message
                        : ""

                });

            }
        );

    });

}



function gitStatus(folder) {

    return execute(
        `git -C "${folder}" status`
    );

}


function gitBranch(folder) {

    return execute(
        `git -C "${folder}" branch`
    );

}


function gitInit(folder) {

    return execute(
        `git -C "${folder}" init`
    );

}


function gitAdd(folder) {

    return execute(
        `git -C "${folder}" add .`
    );

}


function gitCommit(folder, message) {

    return execute(
        `git -C "${folder}" commit -m "${message}"`
    );

}


function gitPull(folder) {

    return execute(
        `git -C "${folder}" pull`
    );

}


function gitPush(folder) {

    return execute(
        `git -C "${folder}" push`
    );

}


function gitFetch(folder) {

    return execute(
        `git -C "${folder}" fetch`
    );

}



module.exports = {

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

};