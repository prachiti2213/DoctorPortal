export default function CustomModal({ title, children, onClose }) {
  return (
    <div className="modal-backdrop-blur">
      <div className="neo-card modal-box">
        <div className="d-flex justify-content-between mb-3">
          <h4>{title}</h4>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        {children}
      </div>
    </div>
  );
}
