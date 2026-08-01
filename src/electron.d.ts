export {};

declare global {

    interface Window {

        electronAPI: {

            runCommand(
                command:string
            ):Promise<string>;

        };

    }

}