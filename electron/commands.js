const {exec} = require("child_process");
const fs = require("fs");
const path = require("path");


function runCommand(command){

    return new Promise((resolve)=>{

        exec(
            command,
            (error,stdout,stderr)=>{

                resolve({

                    output:stdout,

                    error:
                        error
                        ? error.message
                        : stderr

                });

            }
        );

    });

}





function gitStatus(folder){

    return runCommand(
        `git -C "${folder}" status`
    );

}



function gitBranch(folder){

    return runCommand(
        `git -C "${folder}" branch`
    );

}



function gitInit(folder){

    return runCommand(
        `git -C "${folder}" init`
    );

}



function gitAdd(folder){

    return runCommand(
        `git -C "${folder}" add .`
    );

}



function gitCommit(folder,message){

    return runCommand(
        `git -C "${folder}" commit -m "${message}"`
    );

}





module.exports = {

    runCommand,

    gitStatus,

    gitBranch,

    gitInit,

    gitAdd,

    gitCommit

};