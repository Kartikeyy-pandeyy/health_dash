function ActivityFeed() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const heights = [18, 38, 14, 28, 48, 8, 32]; // Fine-tuned heights to match design

  return (
    <div className="activity-feed">
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#1f2937", margin: 0 }}>
          Activity
        </h3>
        <p style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>
          3 appointments on this week
        </p>
      </div>
      <div
        className="chart"
        style={{
          display: "flex",
          gap: "5px",
          height: "50px", // Adjusted height for compactness
        }}
      >
        {days.map((day, index) => (
          <div
            key={index}
            className="bar"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div
              className={index % 2 === 0 ? "bar-blue" : "bar-light"}
              style={{
                height: `${heights[index]}px`,
                width: "100%",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            ></div>
            <p style={{ fontSize: "11px", color: "#6b7280", marginTop: "4px", marginBottom: 0 }}>
              {day}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;