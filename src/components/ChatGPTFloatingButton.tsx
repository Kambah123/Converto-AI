const ChatGPTFloatingButton = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(
      "https://chatgpt.com/g/g-6865a4befecc8191946334a45293aeac-pechal-chatbot-guide",
      "PechalChatbot",
      "width=420,height=700,resizable=yes,scrollbars=yes"
    );
  };

  return (
    <a
      href="https://chatgpt.com/g/g-6865a4befecc8191946334a45293aeac-pechal-chatbot-guide"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-full p-2 border-2 border-primary hover:scale-105 transition-transform"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
      title="Chat with Pechal"
    >
      <img src="/updated logo.png" alt="Chatbot" className="w-14 h-14" />
    </a>
  );
};

export default ChatGPTFloatingButton; 