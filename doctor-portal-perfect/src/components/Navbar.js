
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="glass-nav">
      <h5 className="fw-bold mb-0">Doctor Dashboard</h5>

      <div className="d-flex align-items-center gap-2">
        <span>Dr. Prachiti Morankar</span>
        {/* <img
          src="https://via.placeholder.com/40"
          className="rounded-circle border border-white"
          alt="profile"
        /> */}
      </div>
    </div>
  );
}
