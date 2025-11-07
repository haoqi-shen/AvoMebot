import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  const navigate = useNavigate();
  const [chatInput, setChatInput] = useState('');

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      navigate('/chat');
    }
  };

  return (
    <div className="page-container intro-page">
      <div className="intro-content">
        <div className="intro-hero">
          <h1 className="intro-title">
            Hello, I'm <span className="highlight">MeBot</span>
          </h1>
          <p className="intro-subtitle">
            Welcome to My Personal Website
          </p>
        </div>

        <div className="intro-description">
          <p>
            I'm a technology enthusiast and developer focused on building modern web applications.
            This website is built with React and Python, showcasing my projects, experience, and expertise.
          </p>
          <p>
            You can chat with my AI assistant MeBot through the Chat page in the navigation bar.
            It's trained to answer questions and converse just like me.
          </p>
        </div>

        <div className="intro-features">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Modern Tech Stack</h3>
            <p>Full-stack application built with React and Python</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Innovative Projects</h3>
            <p>Showcasing various technical projects and creative works</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Assistant</h3>
            <p>Intelligent chatbot ready to serve you</p>
          </div>
        </div>

        <div className="chat-entrance-section">
          <h2 className="chat-entrance-title">Chat with MeBot</h2>
          <p className="chat-entrance-description">
            Start a conversation with my AI assistant now
          </p>
          <form className="chat-entrance-form" onSubmit={handleChatSubmit}>
            <input
              type="text"
              className="chat-entrance-input"
              placeholder="Type your message and press Enter..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <button type="submit" className="chat-entrance-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Intro;
