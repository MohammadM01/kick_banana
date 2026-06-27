import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import chatbotData from '../../data/chatbotData.json';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const chatBottomRef = useRef(null);
  const hasGreeted = useRef(false);

  const quickQuestions = [
    "What is the price of jerseys?",
    "How does custom printing work?",
    "Tell me about sizing and fit",
    "What is the delivery time?"
  ];

  useEffect(() => {
    if (isOpen && !hasGreeted.current) {
      hasGreeted.current = true;
      setMessages([{ text: chatbotData.greeting, isBot: true }]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendText = (text) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { text: text, isBot: false }]);

    setTimeout(() => {
      let botResponse = null;
      const lowerText = text.toLowerCase();

      for (const item of chatbotData.responses) {
        if (item.keywords.some(kw => lowerText.includes(kw))) {
          botResponse = item.response;
          break;
        }
      }

      if (!botResponse) {
        botResponse = chatbotData.fallback;
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 450);
  };

  const handleSendForm = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleSendText(inputVal);
    setInputVal("");
  };

  const handleWhatsAppFallback = () => {
    const fallbackMsg = "Hi KICKINBANANA! I want to chat about customized jerseys and rates.";
    window.open(`https://wa.me/919373874400?text=${encodeURIComponent(fallbackMsg)}`, '_blank');
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating Chat Button */}
      {!isOpen && (
        <button className="chatbot-float-btn pulse-ring" onClick={() => setIsOpen(true)} aria-label="Open Chat">
          <FaRobot size={24} />
          <span className="btn-tooltip">Chat with BananaBot</span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="chatbot-window chatbot-open">
          <div className="chatbot-header">
            <div className="chatbot-header-title">
              <FaRobot size={22} className="bot-header-icon" />
              <div>
                <h4>BananaBot</h4>
                <span className="online-indicator"></span>
              </div>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes size={18} />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble-wrapper ${msg.isBot ? 'bot' : 'user'}`}>
                <div className="chat-bubble">
                  {msg.text}
                  {msg.isBot && msg.text === chatbotData.fallback && (
                    <button
                      className="whatsapp-fallback-btn"
                      onClick={handleWhatsAppFallback}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        marginTop: '12px',
                        background: '#25D366',
                        color: 'white',
                        border: 'none',
                        padding: '10px 16px',
                        borderRadius: '6px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        letterSpacing: '0.5px'
                      }}
                    >
                      Chat on WhatsApp
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div ref={chatBottomRef} />
          </div>

          {/* Quick Suggestions list */}
          <div className="chatbot-suggestions">
            {quickQuestions.map((q, i) => (
              <button key={i} className="suggestion-chip" onClick={() => handleSendText(q)}>
                {q}
              </button>
            ))}
          </div>

          <form className="chatbot-input-row" onSubmit={handleSendForm}>
            <input
              type="text"
              placeholder="Ask me a question..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send-btn" aria-label="Send Message">
              <FaPaperPlane size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
