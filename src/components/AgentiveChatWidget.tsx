import React, { useEffect } from "react";

const AgentiveChatWidget: React.FC = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (document.getElementById("agentivehub-chatbot-script")) return;
    const script = document.createElement("script");
    script.id = "agentivehub-chatbot-script";
    script.type = "text/javascript";
    script.src = "https://agentivehub.com/production.bundle.min.js";
    script.onload = function () {
      if (!document.getElementById("root")) {
        const root = document.createElement("div");
        root.id = "root";
        document.body.appendChild(root);
      }
      // @ts-ignore
      if (window.myChatWidget && typeof window.myChatWidget.load === "function") {
        // @ts-ignore
        window.myChatWidget.load({
          id: "a3326875-dee6-453d-9618-6a45f2ea203b",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  // Floating container for bottom left
  return (
    <div style={{
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 9999,
      pointerEvents: "none", // Let the widget handle its own events
    }}>
      {/* The widget will render itself via the injected script */}
    </div>
  );
};

export default AgentiveChatWidget; 