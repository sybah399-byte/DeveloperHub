import {
  LayoutDashboard,
  Folder,
  Settings
} from "lucide-react";

export default function Sidebar() {

  return (
    <aside className="sidebar">

      <h2>
        Developer Hub
      </h2>

      <button>
        <LayoutDashboard size={18}/>
        Dashboard
      </button>

      <button>
        <Folder size={18}/>
        Projects
      </button>

      <button>
        <Settings size={18}/>
        Settings
      </button>

    </aside>
  );
}