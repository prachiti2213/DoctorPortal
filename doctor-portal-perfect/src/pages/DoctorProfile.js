import NeoCard from "../components/NeoCard";
import doctor from "../data/doctor";

export default function DoctorProfile() {
  return (
    <div>
      <NeoCard>
        <h2>{doctor.name}</h2>
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
        <p><strong>Experience:</strong> {doctor.experience}</p>
        <p><strong>Phone:</strong> {doctor.phone}</p>
        <p><strong>Email:</strong> {doctor.email}</p>
        <p><strong>Timings:</strong> {doctor.timings}</p>
      </NeoCard>

      <NeoCard>
        <h4>Qualifications</h4>
        {doctor.qualifications.map((q, i) => (
          <p key={i}>🎓 {q}</p>
        ))}
      </NeoCard>
    </div>
  );
}
