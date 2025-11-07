import { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/data/footer.json')
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error('Error loading footer content:', error));
  }, []);

  if (!content) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">{content.about.heading}</h3>
            <p className="footer-text">
              {content.about.text}
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">{content.quickLinks.heading}</h3>
            <ul className="footer-links">
              {content.quickLinks.links.map((link, index) => (
                <li key={index}><a href={link.url}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">{content.contact.heading}</h3>
            <ul className="footer-contact">
              {content.contact.items.map((item, index) => (
                <li key={index}>{item.icon} {item.text}</li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section footer-cta">
            <h3 className="footer-heading">{content.cta.heading}</h3>
            <p className="footer-text">
              {content.cta.text}
            </p>
            <a href={content.cta.buttonUrl} className="footer-cta-button">
              {content.cta.buttonText}
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {content.copyright}</p>
          <div className="footer-bottom-links">
            {content.bottomLinks.map((link, index) => (
              <span key={index}>
                {index > 0 && <span>|</span>}
                <a href={link.url}>{link.label}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
