import { useState, useEffect } from 'react';
import './Community.css';

const Community = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/data/community.json')
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error('Error loading community content:', error));
  }, []);

  if (!content) {
    return <div className="page-container community-page">Loading...</div>;
  }

  return (
    <div className="page-container community-page">
      <h1 className="page-title">{content.pageTitle}</h1>
      <p className="page-subtitle">{content.pageSubtitle}</p>
      
      <div className="community-sections">
        {content.sections.map((section) => (
          <section key={section.id} className="community-section">
            <div className="section-header">
              <span className="section-icon">{section.icon}</span>
              <h2 className="section-title">{section.title}</h2>
            </div>
            
            <div className="section-items">
              {section.items.map((item) => (
                <div key={item.id} className="section-item-card">
                  <div className="item-content">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-description">{item.description}</p>
                  </div>
                  {item.count !== null && (
                    <div className="item-count">
                      <span className="count-number">{item.count}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Community;
