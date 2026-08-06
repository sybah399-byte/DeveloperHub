export interface Project {

    id: string;

    name: string;

    description: string;

    type: string;

    path: string;

    status: "Active" | "Building" | "Planning" | "Archived";

    progress: number;

    lastOpened: string;

    icon: string;

}

export const projects: Project[] = [

    {

        id: "developerhub",

        name: "Developer Hub",

        description: "Main development workspace",

        type: "Electron + React",

        path: "C:/Users/Nikki/Documents/Projects/DeveloperHub",

        status: "Active",

        progress: 70,

        lastOpened: "Today",

        icon: "💻"

    },

    {

        id: "mensshed",

        name: "Men's Shed App",

        description: "Community mobile application",

        type: "Expo React Native",

        path: "C:/Users/Nikki/Documents/Projects/MensShedApp",

        status: "Building",

        progress: 40,

        lastOpened: "Today",

        icon: "📱"

    },

    {

        id: "jarvis",

        name: "Jarvis",

        description: "AI Development Assistant",

        type: "Node + AI",

        path: "",

        status: "Planning",

        progress: 0,

        lastOpened: "Never",

        icon: "🤖"

    }

];