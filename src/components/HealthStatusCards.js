import { healthIndicators } from "../data/healthData";

function HealthStatusCards() {
  return (
    <div className="health-status">
      {healthIndicators.slice(1).map((indicator, index) => (
        <div key={index} className="status-card">
          <div className={`dot ${indicator.status}`}></div>
          <div>
            <p>{indicator.label}</p>
            <p>{indicator.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;