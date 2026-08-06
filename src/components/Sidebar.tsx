import {
    LayoutDashboard,
    FolderOpen,
    FolderTree,
    Terminal,
    GitBranch,
    Bot,
    Zap,
    Package,
    Hammer,
    Archive,
    Settings,
    ChevronRight
} from "lucide-react";

import { NavLink } from "react-router-dom";

import "../styles/sidebar.css";

interface NavigationItem {

    name: string;

    path: string;

    icon: JSX.Element;

}

export default function Sidebar() {

    const navigation: NavigationItem[] = [

        {
            name: "Dashboard",
            path: "/",
            icon: <LayoutDashboard size={18} />
        },

        {
            name: "Projects",
            path: "/projects",
            icon: <FolderOpen size={18} />
        },

        {
            name: "File Explorer",
            path: "/explorer",
            icon: <FolderTree size={18} />
        },

        {
            name: "Terminal",
            path: "/terminal",
            icon: <Terminal size={18} />
        },

        {
            name: "Git Centre",
            path: "/git",
            icon: <GitBranch size={18} />
        },

        {
            name: "Automation",
            path: "/automation",
            icon: <Zap size={18} />
        },

        {
            name: "AI Assistant",
            path: "/ai",
            icon: <Bot size={18} />
        },

        {
            name: "Plugins",
            path: "/plugins",
            icon: <Package size={18} />
        },

        {
            name: "Build & Release",
            path: "/builder",
            icon: <Hammer size={18} />
        },

        {
            name: "Backups",
            path: "/backups",
            icon: <Archive size={18} />
        },

        {
            name: "Settings",
            path: "/settings",
            icon: <Settings size={18} />
        }

    ];

    return (

        <aside className="sidebar">

            <div className="brand">

                <h2>DeveloperHub</h2>

                <p>Professional Development Environment</p>

            </div>

            <nav className="sidebar-nav">

                {navigation.map((item) => (

                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >

                        {item.icon}

                        <span>{item.name}</span>

                        <ChevronRight
                            size={14}
                            className="nav-arrow"
                        />

                    </NavLink>

                ))}

            </nav>

            <div className="sidebar-footer">

                <div>

                    <strong>Workspace</strong>

                    <p>DeveloperHub</p>

                </div>

                <small>v2.0.0</small>

            </div>

        </aside>

    );

}