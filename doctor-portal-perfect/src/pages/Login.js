import { useState } from "react";
import NeoCard from "../components/NeoCard";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }
    window.location.href = "/dashboard";
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
      <NeoCard className="p-5" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Doctor Login</h2>

        {error && <p className="text-danger">{error}</p>}

        <input
          type="email"
          className="form-control neo-input mb-3"
          placeholder="Doctor Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control neo-input mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>

        <p className="mt-3 text-center text-muted" style={{ fontSize: "14px" }}>
          Forgot Password?
        </p>
      </NeoCard>
    </div>
  );
}
