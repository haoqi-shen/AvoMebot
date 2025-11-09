import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  const navigate = useNavigate();
  const [chatInput, setChatInput] = useState('');
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/intro.json')
      .then(response => {
        if (!response.ok) throw new Error('Failed to load content');
        return response.json();
      })
      .then(data => setContent(data))
      .catch(error => {
        console.error('Error loading intro content:', error);
        setError('Failed to load page content. Please refresh the page.');
      });
  }, []);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      navigate('/chat', { state: { initialMessage: chatInput.trim() } });
    }
  };

  if (error) {
    return <div className="page-container intro-page"><p style={{ color: 'red', textAlign: 'center', padding: '2rem' }}>{error}</p></div>;
  }

  if (!content) {
    return <div className="page-container intro-page">Loading...</div>;
  }

  return (
    <div className="page-container intro-page">
      <div className="intro-content">
        <div className="intro-hero">
          <h1 className="intro-title">
            {content.hero.title.replace('{name}', '')}
            <span className="highlight">{content.hero.name}</span>
          </h1>
          <p className="intro-subtitle">
            {content.hero.subtitle}
          </p>
        </div>

        <div className="intro-description">
          {content.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="chat-entrance-section">
          <h2 className="chat-entrance-title">{content.chatEntrance.title}</h2>
          <p className="chat-entrance-description">
            {content.chatEntrance.description}
          </p>
          <form className="chat-entrance-form" onSubmit={handleChatSubmit}>
            <input
              type="text"
              className="chat-entrance-input"
              placeholder={content.chatEntrance.placeholder}
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <button type="submit" className="chat-entrance-button" aria-label="Send message">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>

        <div className="intro-features">
          {content.features.map((feature) => {
            const FeatureWrapper = feature.url ? 'a' : 'div';
            const isExternalUrl = feature.url && (feature.url.startsWith('http://') || feature.url.startsWith('https://'));
            const wrapperProps = feature.url 
              ? { 
                  href: feature.url, 
                  className: 'feature-card-link',
                  ...(isExternalUrl && { target: '_blank', rel: 'noopener noreferrer' })
                } 
              : {};
            
            return (
              <FeatureWrapper key={feature.id} {...wrapperProps}>
                <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  {Array.isArray(feature.description) ? (
                    feature.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  ) : (
                    <p>{feature.description}</p>
                  )}
                  {feature.callToAction && (
                    <div className="feature-cta-badge">
                      <span>{feature.callToAction}</span>
                    </div>
                  )}
                </div>
              </FeatureWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Intro;
