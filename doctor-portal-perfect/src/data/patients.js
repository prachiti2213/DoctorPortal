const patients = [
  {
    id: 1,
    name: "Rohit Kumar",
    age: 32,
    gender: "Male",
    condition: "Diabetes",
    lastVisit: "2025-01-10",
    phone: "9876543210",
    email: "rohit@example.com",
    history: [
      { date: "2024-12-20", issue: "High Sugar", prescription: "Metformin" },
      { date: "2024-11-15", issue: "Routine Checkup", prescription: "Vitamin D" }
    ],
    reports: [
      { name: "Blood Test Report", date: "2024-12-22" },
      { name: "X-Ray Scan", date: "2024-10-05" }
    ]
  },
  {
    id: 2,
    name: "Sneha Patil",
    age: 28,
    gender: "Female",
    condition: "Thyroid",
    lastVisit: "2025-01-05",
    phone: "9988776655",
    email: "sneha@example.com",
    history: [
      { date: "2024-12-01", issue: "Thyroid Check", prescription: "Thyronorm" }
    ],
    reports: []
  },
  {
    id: 3,
    name: "Akash Singh",
    age: 40,
    gender: "Male",
    condition: "Blood Pressure",
    lastVisit: "2025-01-07",
    phone: "9090909090",
    email: "akash@example.com",
    history: [
      { date: "2024-12-18", issue: "BP Fluctuations", prescription: "Amlodipine" }
    ],
    reports: [{ name: "ECG Report", date: "2024-12-19" }]
  }
];

export default patients;
