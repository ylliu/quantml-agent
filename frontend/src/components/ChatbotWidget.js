import React, { useState } from 'react';

function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-widget-container">
      {/* 聊天窗口 */}
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h3>AI投资助手</h3>
            <button className="close-button" onClick={toggleChat}>×</button>
          </div>
          <div className="chatbot-iframe-container">
            <iframe
              src="https://udify.app/chatbot/ParQSzRJ17nuFbfK"
              style={{ width: '100%', height: '100%' }}
              frameBorder="0"
              allow="microphone"
              title="AI投资助手"
            ></iframe>
          </div>
        </div>
      )}
      
      {/* 聊天图标按钮 */}
      <button 
        className={`chatbot-icon ${isOpen ? 'active' : ''}`} 
        onClick={toggleChat}
        aria-label="打开AI助手"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <path d="M12 8v.01"></path>
          <path d="M12 12v.01"></path>
          <path d="M12 16v.01"></path>
        </svg>
      </button>
    </div>
  );
}

export default ChatbotWidget; 