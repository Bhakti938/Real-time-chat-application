import React, { useState, useEffect, useRef } from "react";

const SOCKET_URL = "wss://echo.websocket.events";

export default function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = new WebSocket(SOCKET_URL);

    socket.current.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.current.onmessage = (event) => {
      if (
        event.data &&
        event.data !== "echo.websocket.events sponsored by Lob.com"
      ) {
        setMessages((prev) => [...prev, { text: event.data, sender: "server" }]);
      }
    };

    socket.current.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      socket.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.current.send(input);
      setMessages((prev) => [...prev, { text: input, sender: "me" }]);
      setInput("");
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2>💬 React Chat (Frontend Only)</h2>
      <div
        style={{
          height: 300,
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: 10,
          marginBottom: 10,
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === "me" ? "right" : "left",
              marginBottom: 5,
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "5px 10px",
                borderRadius: "12px",
                backgroundColor: msg.sender === "me" ? "#d1e7dd" : "#f8d7da",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type a message..."
        style={{ width: "75%", padding: 8 }}
      />
      <button onClick={sendMessage} style={{ padding: "8px 12px", marginLeft: 10 }}>
        Send
      </button>
    </div>
  );
}