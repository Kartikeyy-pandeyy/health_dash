import DashboardOverview from "./DashboardOverview";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

function DashboardMainContent() {
  return (
    <main className="main-content">
      <div className="content-container">
        <h2>Dashboard</h2>
        <div className="grid">
          <div className="left-column">
            <DashboardOverview />
            <div className="anatomy-health-container">
              <AnatomySection />
              <HealthStatusCards />
            </div>
            <CalendarView />
          </div>
          <div className="right-column">
            <UpcomingSchedule />
            <ActivityFeed />
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardMainContent;