import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const location = useLocation();
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/data/navigation.json')
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error('Error loading navigation content:', error));
  }, []);

  if (!content) {
    return null;
  }

  return (
    <nav className="navigation-bar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to={content.brand.url}>{content.brand.name}</Link>
        </div>
        <ul className="nav-menu">
          {content.navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
