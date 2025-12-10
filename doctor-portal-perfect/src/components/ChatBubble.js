export default function ChatBubble({ message, isDoctor }) {
  return (
    <div className={`chat-msg ${isDoctor ? "doctor-msg" : "patient-msg"}`}>
      <div className="chat-bubble neo-card p-3">
        {message}
      </div>
    </div>
  );
}
