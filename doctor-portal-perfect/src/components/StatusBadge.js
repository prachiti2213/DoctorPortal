export default function StatusBadge({ status }) {
  const colors = {
    Pending: "warning",
    Confirmed: "primary",
    Completed: "success",
    Cancelled: "danger"
  };

  return (
    <span className={`badge bg-${colors[status]}`}>
      {status}
    </span>
  );
}
