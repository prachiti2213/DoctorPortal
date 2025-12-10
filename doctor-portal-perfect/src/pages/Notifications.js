import { useState } from "react";
import data from "../data/notifications";
import NeoCard from "../components/NeoCard";

export default function Notifications() {
  const [notifications, setNotifications] = useState(data);

  const markRead = (id) => {
    setNotifications(
      notifications.map(n =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  return (
    <div>
      <NeoCard>
        <h3>Notifications</h3>

        {notifications.map(n => (
          <div key={n.id} className="d-flex justify-content-between mb-2">
            <span>{n.message} — <em>{n.time}</em></span>

            {!n.read && (
              <button className="btn btn-sm btn-outline-primary" onClick={() => markRead(n.id)}>
                Mark Read
              </button>
            )}
          </div>
        ))}
      </NeoCard>
    </div>
  );
}
