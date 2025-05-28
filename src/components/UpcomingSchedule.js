import { upcomingAppointments } from "../data/appointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#1f2937", marginBottom: "12px" }}>
        The Upcoming Schedule
      </h3>
      {upcomingAppointments.map((schedule, index) => (
        <div key={index} className="day-section">
          <h4 style={{ fontSize: "13px", fontWeight: 500, color: "#6b7280", marginBottom: "6px" }}>
            {schedule.day}
          </h4>
          {schedule.appointments.map((appt, idx) => (
            <SimpleAppointmentCard key={idx} {...appt} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;