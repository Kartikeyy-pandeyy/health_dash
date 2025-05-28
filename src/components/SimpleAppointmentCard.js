import * as LucideIcons from "lucide-react";

function SimpleAppointmentCard({ title, time, icon }) {
  const Icon = LucideIcons[icon];
  return (
    <div
      className="appointment-card"
      style={{
        backgroundColor: "#e0f2fe", // Lighter blue background
        padding: "8px 10px",
        borderRadius: "8px",
        marginBottom: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        className="info"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Icon style={{ color: "#3b82f6", width: "16px", height: "16px" }} />
        <div>
          <p style={{ fontSize: "12px", fontWeight: 500, color: "#1f2937", margin: 0 }}>
            {title}
          </p>
          <p style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>
            {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;