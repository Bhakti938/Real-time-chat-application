import React, { useState, useEffect, useRef } from "react";

// WebSocket server URL (this one echoes back the message)
const SOCKET_URL = "wss://echo.websocket.events";

export default function App() {
  // State to store the input message
  const [input, setInput] = useState("");

  // State to store all chat messages
  const [messages, setMessages] = useState([]);

  // Ref to hold the WebSocket instance
  const socket = useRef(null);

  // Establish WebSocket connection on component mount
  useEffect(() => {
    // Create a new WebSocket connection
    socket.current = new WebSocket(SOCKET_URL);

    // When connection opens
    socket.current.onopen = () => {
      console.log("WebSocket connected");
    };

    // When message is received from server
    socket.current.onmessage = (event) => {
      // Ignore welcome message from the server
      if (
        event.data &&
        event.data !== "echo.websocket.events sponsored by Lob.com"
      ) {
        // Add incoming message to messages list with sender: server
        setMessages((prev) => [...prev, { text: event.data, sender: "server" }]);
      }
    };

    // When the connection closes
    socket.current.onclose = () => {
      console.log("WebSocket disconnected");
    };

    // Clean up: close WebSocket when component unmounts
    return () => {
      socket.current.close();
    };
  }, []);

  // Send message to the WebSocket server
  const sendMessage = () => {
    if (input.trim()) {
      // Send the message
      socket.current.send(input);

      // Add message to messages list with sender: me
      setMessages((prev) => [...prev, { text: input, sender: "me" }]);

      // Clear the input box
      setInput("");
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2>💬 React Chat (Frontend Only)</h2>

      {/* Message display area */}
      <div
        style={{
          height: 300,
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: 10,
          marginBottom: 10,
        }}
      >
        {/* Loop through all messages and display them */}
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

      {/* Input box and send button */}
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
