export const calendarAppointments = Array(31)
  .fill(null)
  .map((_, index) => ({
    day: index + 1,
    time:
      index === 2 ? "09:00" :
      index === 5 ? "11:00" :
      index === 8 ? "13:00" :
      index === 12 ? "15:00" : "",
  }));

export const calendarDetails = [
  { title: "Dentist", name: "Dr. Smith", time: "09:00" },
  { title: "Physiotherapy Appointment", name: "Dr. Jones", time: "11:00" },
];

export const upcomingAppointments = [
  {
    day: "On Thursday",
    appointments: [
      { title: "Health checkup complete", time: "09:00", icon: "CheckCircle" },
      { title: "Ophthalmologist", time: "11:00", icon: "Eye" },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      { title: "Cardiologist", time: "13:00", icon: "Heart" },
      { title: "Neurologist", time: "15:00", icon: "Brain" },
    ],
  },
];