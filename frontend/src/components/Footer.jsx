import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">About AvoMeBot</h3>
            <p className="footer-text">
              Your personal AI-powered assistant for exploring skills, experience, and professional journey.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Intro</a></li>
              <li><a href="/chat">Chat</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/experience">Experience</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact">
              <li>📧 contact@avomebot.com</li>
              <li>📱 Connect with us</li>
              <li>🌐 Follow on social media</li>
            </ul>
          </div>
          
          <div className="footer-section footer-cta">
            <h3 className="footer-heading">Get Started</h3>
            <p className="footer-text">
              Ready to explore? Start a conversation with AvoMeBot today!
            </p>
            <a href="/chat" className="footer-cta-button">
              Chat Now
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} AvoMeBot. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
