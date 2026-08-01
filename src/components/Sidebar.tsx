import {
    LayoutDashboard,
    Folder,
    Zap,
    Terminal as TerminalIcon,
    GitBranch,
    Bot,
    Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";

import "../styles/sidebar.css";


export default function Sidebar() {


    const links = [

        {
            name: "Dashboard",
            path: "/",
            icon: <LayoutDashboard size={18}/>
        },

        {
            name: "Projects",
            path: "/projects",
            icon: <Folder size={18}/>
        },

        {
            name: "Automation",
            path: "/automation",
            icon: <Zap size={18}/>
        },

        {
            name: "Terminal",
            path: "/terminal",
            icon: <TerminalIcon size={18}/>
        },

        {
            name: "Git",
            path: "/git",
            icon: <GitBranch size={18}/>
        },

        {
            name: "AI Assistant",
            path: "/ai",
            icon: <Bot size={18}/>
        },

        {
            name: "Settings",
            path: "/settings",
            icon: <Settings size={18}/>
        }

    ];


    return (

        <aside className="sidebar">


            <div className="brand">

                <h2>
                    ⚙ Developer Hub
                </h2>

                <p>
                    Dev Command Centre
                </p>

            </div>


            <nav>

                {links.map((link)=>(

                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({isActive}) =>
                            isActive ? "active" : ""
                        }
                    >

                        {link.icon}

                        {link.name}

                    </NavLink>

                ))}

            </nav>


            <div className="sidebar-footer">

                <small>
                    DeveloperHub v1.0
                </small>

            </div>


        </aside>

    );

}