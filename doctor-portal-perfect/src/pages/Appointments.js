import { useState } from "react";
import appointmentsData from "../data/appointments";
import NeoCard from "../components/NeoCard";
import SearchBar from "../components/SearchBar";
import StatusBadge from "../components/StatusBadge";
import CustomModal from "../components/CustomModal";

export default function Appointments() {
  const [appointments, setAppointments] = useState(appointmentsData);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  const filtered = appointments.filter(a =>
    a.patientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <SearchBar
          value={search}
          placeholder="Search appointments..."
          onChange={setSearch}
        />

        <button className="btn btn-primary" onClick={() => setShowAdd(true)}>
          + Add Appointment
        </button>
      </div>

      <NeoCard>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Time</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map(a => (
              <tr key={a.id}>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.time}</td>
                <td>{a.type}</td>
                <td><StatusBadge status={a.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </NeoCard>

      {/* ADD APPOINTMENT MODAL */}
      {showAdd && (
        <CustomModal title="Add Appointment" onClose={() => setShowAdd(false)}>
          <p>Form Coming Here...</p>
        </CustomModal>
      )}
    </div>
  );
}
