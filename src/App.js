import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-container">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;