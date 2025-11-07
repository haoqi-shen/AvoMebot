import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  const navigate = useNavigate();

  const handleChatNavigate = () => {
    navigate('/chat');
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
          <div className="feature-card chatbox-card" onClick={handleChatNavigate}>
            <div className="feature-icon">💬</div>
            <h3>Chat with MeBot</h3>
            <p>Start a conversation with my AI assistant now</p>
            <div className="chat-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
