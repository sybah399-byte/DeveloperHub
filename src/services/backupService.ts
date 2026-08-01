import fs from "fs";


export function createBackup(source:string){

const date = new Date()
.toISOString()
.replace(/:/g,"-")
.split(".")[0];


const backupFolder =
`${source}/../Backups/${date}`;


fs.mkdirSync(
backupFolder,
{recursive:true}
);


fs.cpSync(
source,
backupFolder,
{recursive:true}
);


return backupFolder;

}