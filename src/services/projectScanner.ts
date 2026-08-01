export interface ProjectCheck {

    name:string;

    found:boolean;

}


export interface ProjectInfo {

    name:string;

    path:string;

    type:string;

    files:number;

    git:boolean;

    status:string;

    frameworks:string[];

    health:number;

    checks:ProjectCheck[];

}



export async function scanProject(
    folder:string
):Promise<ProjectInfo>{


    return await window.electronAPI.scanProject(
        folder
    );


}