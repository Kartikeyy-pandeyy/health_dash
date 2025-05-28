import { calendarAppointments, calendarDetails } from "../data/appointments";

function CalendarView() {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>
      <div className="calendar-grid">
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="day">{day}</div>
        ))}
        {calendarAppointments.map((appt, index) => (
          <div key={index} className={`date ${appt.time ? "has-appointment" : ""}`}>
            <span>{appt.day}</span>
            {appt.time && <div className="time">{appt.time}</div>}
          </div>
        ))}
      </div>
      <div className="details-grid">
        {calendarDetails.map((detail, index) => (
          <div key={index} className="detail-card">
            <h4>{detail.title}</h4>
            <p>{detail.name}</p>
            <p className="time">{detail.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;