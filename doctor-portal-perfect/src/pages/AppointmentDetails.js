import { useParams } from "react-router-dom";
import appointments from "../data/appointments";
import NeoCard from "../components/NeoCard";

export default function AppointmentDetails() {
  const { id } = useParams();
  const appointment = appointments.find(a => a.id == id);

  if (!appointment) return <h3>Appointment not found</h3>;

  return (
    <div>
      <NeoCard>
        <h3>Appointment Details</h3>
        <p><strong>Patient:</strong> {appointment.patientName}</p>
        <p><strong>Date:</strong> {appointment.date}</p>
        <p><strong>Time:</strong> {appointment.time}</p>
        <p><strong>Type:</strong> {appointment.type}</p>
        <p><strong>Status:</strong> {appointment.status}</p>
      </NeoCard>

      <NeoCard>
        <h4>Symptoms</h4>
        <p>{appointment.symptoms}</p>
      </NeoCard>

      <NeoCard>
        <h4>Doctor Notes</h4>
        <textarea className="form-control neo-input" rows="4" placeholder="Add notes..."></textarea>
      </NeoCard>

      <button className="btn btn-primary mt-3">Save Notes</button>
    </div>
  );
}
