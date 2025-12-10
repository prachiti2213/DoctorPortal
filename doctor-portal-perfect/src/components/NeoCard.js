export default function NeoCard({ children, className }) {
  return (
    <div className={`neo-card p-4 mb-4 ${className || ""}`}>
      {children}
    </div>
  );
}
