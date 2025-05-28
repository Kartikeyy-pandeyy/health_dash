import { Search, Bell, Plus, User } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="search-bar">
        <Search size={20} />
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-section">
        <Bell size={24} />
        <User size={24} />
        <Plus size={24} />
      </div>
    </header>
  );
}

export default Header;