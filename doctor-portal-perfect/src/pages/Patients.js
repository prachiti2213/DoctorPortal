import { useState } from "react";
import patientsData from "../data/patients";
import NeoCard from "../components/NeoCard";
import SearchBar from "../components/SearchBar";
import CustomModal from "../components/CustomModal";

export default function Patients() {
  const [patients, setPatients] = useState(patientsData);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <SearchBar
          value={search}
          placeholder="Search patients..."
          onChange={setSearch}
        />

        <button className="btn btn-primary" onClick={() => setShowAdd(true)}>
          + Add Patient
        </button>
      </div>

      <NeoCard>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Condition</th>
              <th>Last Visit</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map(p => (
              <tr key={p.id}>
                <td><a href={`/patients/${p.id}`}>{p.name}</a></td>
                <td>{p.condition}</td>
                <td>{p.lastVisit}</td>
                <td>{p.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </NeoCard>

      {showAdd && (
        <CustomModal title="Add Patient" onClose={() => setShowAdd(false)}>
          <input className="form-control neo-input mb-2" placeholder="Name" />
          <input className="form-control neo-input mb-2" placeholder="Age" />
          <input className="form-control neo-input mb-2" placeholder="Condition" />
          <button className="btn btn-primary w-100">Save</button>
        </CustomModal>
      )}
    </div>
  );
}
