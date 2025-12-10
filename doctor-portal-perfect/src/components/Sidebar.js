import React from "react";
import {
  Home24Regular, CalendarLtr24Regular, People24Regular,
  Mail24Regular, Alert24Regular, Person24Regular,
  Settings24Regular
} from "@fluentui/react-icons";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="glass-sidebar">
      <h3 className="logo">Doctor Portal</h3>

      <div className="menu">
        <a href="/dashboard"><Home24Regular /> Dashboard</a>
        <a href="/appointments"><CalendarLtr24Regular /> Appointments</a>
        <a href="/patients"><People24Regular /> Patients</a>
        <a href="/messages"><Mail24Regular /> Messages</a>
        <a href="/notifications"><Alert24Regular /> Notifications</a>
        <a href="/profile"><Person24Regular /> Profile</a>
        <a href="/settings"><Settings24Regular /> Settings</a>
      </div>
    </div>
  );
}
