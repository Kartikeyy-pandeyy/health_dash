import { navigationLinks } from "../data/navigation";
import * as LucideIcons from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h1>
          <span>Health</span>
          <span>CARE.</span>
        </h1>
      </div>
      <h2>General</h2>
      <nav>
        {navigationLinks.map((link) => {
          const Icon = LucideIcons[link.icon];
          return (
            <div
              key={link.name}
              className={link.name === "Dashboard" ? "active" : ""}
            >
              <Icon />
              <span>{link.name}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;