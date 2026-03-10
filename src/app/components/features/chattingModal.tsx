import React, { useState, useRef, useEffect } from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import "../../../css/chat.scss";
interface Message {
  id: number;
  sender: 'user' | 'other';
  avatar: string;
  name: string;
  text: string;
  time: string;
}

const Chatting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'other',
      avatar: '👩',
      name: 'Support Team',
      text: 'Hello! How can we help you today?',
      time: '10:30 AM',
    },
    {
      id: 2,
      sender: 'user',
      avatar: '👨',
      name: 'You',
      text: 'Hi! I have a question about the diamond ring',
      time: '10:31 AM',
    },
    {
      id: 3,
      sender: 'other',
      avatar: '👩',
      name: 'Support Team',
      text: 'Sure! Feel free to ask any questions about our products.',
      time: '10:32 AM',
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

 
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: 'user',
        avatar: '👨',
        name: 'You',
        text: inputValue,
        time: new Date().toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  return (
    <div className="chat-widget-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="simple-chat-container chat-open">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <h3 className="chat-title">Glamora Support</h3>
              <p className="chat-status">🟢 Online</p>
            </div>
            <button 
              className="chat-close-btn"
              onClick={handleToggleChat}
              aria-label="Close chat"
            >
              <CloseOutlinedIcon sx={{ fontSize: '20px' }} />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-message-wrapper ${msg.sender}`}
              >
                {msg.sender === 'other' && (
                  <div className="message-avatar">{msg.avatar}</div>
                )}
                <div className="message-content">
                  <p className="message-sender">{msg.name}</p>
                  <div className={`message-bubble ${msg.sender}`}>
                    <p className="message-text">{msg.text}</p>
                  </div>
                  <p className="message-time">{msg.time}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chat-input-area">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type message..."
              className="chat-textarea"
            />
            <button
              onClick={handleSendMessage}
              className="chat-send-btn"
              aria-label="Send message"
            >
              <SendOutlinedIcon sx={{ fontSize: '16px' }} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        className={`chat-toggle-btn ${isOpen ? 'open' : 'closed'}`}
        onClick={handleToggleChat}
        title={isOpen ? 'Close chat' : 'Open chat'}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <CloseOutlinedIcon sx={{ fontSize: '24px' }} />
        ) : (
          <>
            <MessageOutlinedIcon sx={{ fontSize: '24px' }} />
            {unreadCount > 0 && (
              <span className="chat-badge">{unreadCount}</span>
            )}
          </>
        )}
      </button>
    </div>
  );
};

export default Chatting;