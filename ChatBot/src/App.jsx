import { useState } from "react";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8080/api/chat", {
        message: newMessage.text,
      });

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: res.data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold p-4 bg-white shadow w-full text-center">
        🤖 AI Chatbot
      </h1>

      <div className="flex-1 w-full max-w-2xl p-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`my-2 p-3 rounded-lg max-w-xs ${
              msg.sender === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "mr-auto bg-gray-200 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="mr-auto my-2 p-3 bg-gray-200 rounded-lg max-w-xs">
            Typing...
          </div>
        )}
      </div>

      <div className="w-full max-w-2xl p-4 flex bg-white shadow">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
