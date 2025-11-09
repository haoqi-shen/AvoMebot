import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  const navigate = useNavigate();
  const [chatInput, setChatInput] = useState('');
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const pageRef = useRef(null);

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

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const page = pageRef.current;
      if (!page) return;

      const sections = page.querySelectorAll('.presentation-section');
      
      sections.forEach((section) => {
        const bg = section.querySelector('.parallax-bg');
        if (bg) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          
          // Calculate parallax offset based on section position
          const offset = (sectionTop - window.innerHeight / 2) * 0.3;
          bg.style.transform = `translateY(${offset}px)`;
        }
      });
    };

    const page = pageRef.current;
    if (page) {
      page.addEventListener('scroll', handleScroll);
      return () => page.removeEventListener('scroll', handleScroll);
    }
  }, [content]);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      navigate('/chat', { state: { initialMessage: chatInput.trim() } });
    }
  };

  if (error) {
    return <div className="intro-page-presentation"><p style={{ color: 'red', textAlign: 'center', padding: '2rem' }}>{error}</p></div>;
  }

  if (!content) {
    return <div className="intro-page-presentation">Loading...</div>;
  }

  return (
    <div className="intro-page-presentation" ref={pageRef}>
      {/* Section 1: Hero */}
      <section className="presentation-section hero-section">
        <div className="parallax-bg hero-bg"></div>
        <div className="section-content">
          <div className="intro-hero">
            <h1 className="intro-title">
              {content.hero.title.replace('{name}', '')}
              <span className="highlight">{content.hero.name}</span>
            </h1>
            <p className="intro-subtitle">
              {content.hero.subtitle}
            </p>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>

      {/* Section 2: Description */}
      <section className="presentation-section description-section">
        <div className="parallax-bg description-bg"></div>
        <div className="section-content">
          <div className="intro-description">
            {content.description.map((paragraph, index) => (
              <p key={index} className="description-paragraph">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Chat Entrance */}
      <section className="presentation-section chat-section">
        <div className="parallax-bg chat-bg"></div>
        <div className="section-content">
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
        </div>
      </section>

      {/* Section 4: Features */}
      <section className="presentation-section features-section">
        <div className="parallax-bg features-bg"></div>
        <div className="section-content">
          <div className="intro-features">
            {content.features.map((feature, index) => {
              const FeatureWrapper = feature.url ? 'a' : 'div';
              const wrapperProps = feature.url ? { href: feature.url, className: 'feature-card-link' } : {};
              
              return (
                <FeatureWrapper key={feature.id} {...wrapperProps}>
                  <div className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    {Array.isArray(feature.description) ? (
                      feature.description.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
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
      </section>
    </div>
  );
};

export default Intro;
