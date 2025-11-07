import { Link, useLocation } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Intro' },
    { path: '/chat', label: 'Chat' },
    { path: '/products', label: 'Products and Services' },
    { path: '/mystory', label: 'My Story' },
    { path: '/community', label: 'Community' },
  ];

  return (
    <nav className="navigation-bar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">MeBot</Link>
        </div>
        <ul className="nav-menu">
          {navItems.map((item) => (
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
