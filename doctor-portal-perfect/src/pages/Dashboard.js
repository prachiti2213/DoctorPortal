import NeoCard from "../components/NeoCard";
import appointments from "../data/appointments";
import patients from "../data/patients";
import messages from "../data/messages";
import notifications from "../data/notifications";

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* KPI CARDS */}
      <div className="row mb-4">
        <div className="col-md-3">
          <NeoCard>
            <h5>Total Patients</h5>
            <h2>{patients.length}</h2>
          </NeoCard>
        </div>

        <div className="col-md-3">
          <NeoCard>
            <h5>Today’s Appointments</h5>
            <h2>{appointments.filter(a => a.date === "2025-01-20").length}</h2>
          </NeoCard>
        </div>

        <div className="col-md-3">
          <NeoCard>
            <h5>Completed Consultations</h5>
            <h2>{appointments.filter(a => a.status === "Completed").length}</h2>
          </NeoCard>
        </div>

        <div className="col-md-3">
          <NeoCard>
            <h5>New Messages</h5>
            <h2>{messages.length}</h2>
          </NeoCard>
        </div>
      </div>

      {/* TODAY'S APPOINTMENTS */}
      <NeoCard>
        <h4 className="mb-3">Today's Appointments</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Time</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(a => (
              <tr key={a.id}>
                <td>{a.patientName}</td>
                <td>{a.time}</td>
                <td>{a.type}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </NeoCard>

      {/* RECENT PATIENTS */}
      <NeoCard className="mt-4">
        <h4 className="mb-3">Recent Patients</h4>
        {patients.slice(0, 3).map(p => (
          <p className="mb-2" key={p.id}>
            <strong>{p.name}</strong> — Last Visit: {p.lastVisit}
          </p>
        ))}
      </NeoCard>

      {/* NOTIFICATIONS */}
      <NeoCard className="mt-4">
        <h4>Notifications</h4>
        {notifications.map(n => (
          <p key={n.id}>• {n.message}</p>
        ))}
      </NeoCard>

    </div>
  );
}
