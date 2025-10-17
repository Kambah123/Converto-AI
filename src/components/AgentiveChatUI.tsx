import React, { useState, useRef, useEffect } from "react";

const AgentiveChatUI = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/agentive-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botReply = data.choices?.[0]?.message?.content || data.response || data.message || "Sorry, I could not get a response.";
      setMessages((msgs) => [...msgs, { from: "bot", text: botReply }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { from: "bot", text: "Sorry, something went wrong." }]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-full p-2 border-2 border-primary hover:scale-105 transition-transform"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
      >
        <img src="/owl-logo.png" alt="Chatbot" className="w-14 h-14" />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col" style={{ fontFamily: "inherit" }}>
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-primary/10 to-white rounded-t-2xl">
            <img src="/owl-logo.png" alt="Chatbot" className="w-8 h-8" />
            <span className="font-bold text-primary text-lg">Pechal Chatbot</span>
            <button className="ml-auto text-gray-400 hover:text-primary" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-background" style={{ minHeight: 200, maxHeight: 320 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-3 py-2 rounded-xl text-sm max-w-[80%] ${msg.from === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-800"}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <div className="flex items-center gap-2 px-4 py-3 border-t border-gray-100 bg-white rounded-b-2xl">
            <input
              className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-gray-50"
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              className="bg-primary text-white rounded-full px-4 py-2 font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AgentiveChatUI; 