export {};

declare global {

    interface Window {

        electronAPI: {

            runCommand(
                command:string
            ):Promise<{
                output?:string;
                error?:string;
            }>;


            scanProject(
                folder:string
            ):Promise<{

                name:string;
                path:string;
                type:string;
                files:number;
                git:boolean;
                status:string;

            }>;

        };

    }

}