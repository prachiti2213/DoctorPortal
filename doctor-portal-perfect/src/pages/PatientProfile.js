import { useParams } from "react-router-dom";
import patients from "../data/patients";
import NeoCard from "../components/NeoCard";

export default function PatientProfile() {
  const { id } = useParams();
  const patient = patients.find(p => p.id == id);

  if (!patient) return <h3>Patient not found</h3>;

  return (
    <div>
      <NeoCard>
        <h2>{patient.name}</h2>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Condition:</strong> {patient.condition}</p>
        <p><strong>Phone:</strong> {patient.phone}</p>
        <p><strong>Email:</strong> {patient.email}</p>
      </NeoCard>

      <NeoCard>
        <h4>Medical History</h4>
        {patient.history.map((item, i) => (
          <p key={i}>
            <strong>{item.date}:</strong> {item.issue}  
            <br />
            <em>Prescription: {item.prescription}</em>
          </p>
        ))}
      </NeoCard>

      <NeoCard>
        <h4>Reports</h4>
        {patient.reports.map((r, i) => (
          <p key={i}>📄 {r.name} — {r.date}</p>
        ))}
      </NeoCard>
    </div>
  );
}
