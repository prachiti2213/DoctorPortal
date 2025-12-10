import { useState } from "react";
import messagesData from "../data/messages";
import NeoCard from "../components/NeoCard";
import ChatBubble from "../components/ChatBubble";

export default function Messages() {
  const [messages, setMessages] = useState(messagesData);
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;
    setMessages([...messages, { id: messages.length+1, user: "Doctor", message: text, time: "Now" }]);
    setText("");
  };

  return (
    <div>
      <NeoCard>
        <h3>Messages</h3>

        <div style={{ height: "300px", overflowY: "auto" }}>
          {messages.map((msg, i) => (
            <ChatBubble
              key={i}
              message={msg.message}
              isDoctor={msg.user === "Doctor"}
            />
          ))}
        </div>

        <div className="d-flex mt-3">
          <input
            className="form-control neo-input"
            placeholder="Type message..."
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button className="btn btn-primary ms-2" onClick={sendMessage}>
            Send
          </button>
        </div>
      </NeoCard>
    </div>
  );
}
