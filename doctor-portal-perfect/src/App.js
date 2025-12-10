import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import AppointmentDetails from "./pages/AppointmentDetails";
import Patients from "./pages/Patients";
import PatientProfile from "./pages/PatientProfile";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import DoctorProfile from "./pages/DoctorProfile";
import Settings from "./pages/Settings";

function Layout({ children }) {
  const location = useLocation();

  // Hide sidebar + navbar on login page
  const hideLayout = location.pathname === "/";

  return (
    <>
      {!hideLayout && <Sidebar />}
      {!hideLayout && <Navbar />}
      <div className={!hideLayout ? "page" : ""}>{children}</div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* LOGIN PAGE */}
          <Route path="/" element={<Login />} />

          {/* MAIN PAGES */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointments/:id" element={<AppointmentDetails />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/:id" element={<PatientProfile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<DoctorProfile />} />
          <Route path="/settings" element={<Settings />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
