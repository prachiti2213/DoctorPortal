import { useState } from "react";
import NeoCard from "../components/NeoCard";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <NeoCard>
        <h3>Settings</h3>

        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label className="form-check-label">Dark Mode</label>
        </div>

        <button className="btn btn-outline-primary">Change Password</button>
      </NeoCard>
    </div>
  );
}
