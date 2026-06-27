import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, MessageCircle } from 'lucide-react';
import chatbotData from '../../data/chatbotData.json';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I am the KickinBanana Assistant 🤖. Ask me about sizes, prices, shipping, or custom designs!", isBot: true }
  ]);
  const [inputVal, setInputVal] = useState("");
  const chatBottomRef = useRef(null);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal.trim();
    const newMsgList = [...messages, { text: userText, isBot: false }];
    setMessages(newMsgList);
    setInputVal("");

    // Look for matching intents
    setTimeout(() => {
      let botResponse = null;
      const lowerText = userText.toLowerCase();

      for (const intent of chatbotData.intents) {
        if (intent.keywords.some(kw => lowerText.includes(kw))) {
          botResponse = intent.response;
          break;
        }
      }

      if (!botResponse) {
        botResponse = chatbotData.fallback;
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 600);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating Chat Button */}
      {!isOpen && (
        <button className="chatbot-float-btn pulse" onClick={() => setIsOpen(true)} aria-label="Open Chat">
          <MessageCircle size={24} />
          <span className="btn-tooltip">Chat with us!</span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="chatbot-window chatbot-open">
          <div className="chatbot-header">
            <div className="chatbot-header-title">
              <MessageSquare size={18} />
              <span>KB Assistant</span>
              <span className="online-indicator"></span>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble-wrapper ${msg.isBot ? 'bot' : 'user'}`}>
                <div className="chat-bubble">
                  {/* Parse basic markdown link syntax e.g. [label](url) */}
                  {msg.text.includes('[') && msg.text.includes(']') ? (
                    <span dangerouslySetInnerHTML={{
                      __html: msg.text
                        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
                    }} />
                  ) : (
                    <span>{msg.text}</span>
                  )}
                </div>
              </div>
            ))}
            <div ref={chatBottomRef} />
          </div>

          <form className="chatbot-input-row" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask about size, price, custom orders..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send-btn" aria-label="Send Message">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
