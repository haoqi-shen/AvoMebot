import { useState, useEffect } from 'react';
import './Community.css';

const Community = () => {
  const [content, setContent] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    fetch('/data/community.json')
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error('Error loading community content:', error));
  }, []);

  if (!content) {
    return <div className="page-container community-page">Loading...</div>;
  }

  const filteredContent = activeFilter === 'all' 
    ? content.recentContent 
    : content.recentContent.filter(item => item.topic.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="page-container community-page">
      {/* Header Section */}
      <div className="community-header">
        <h1 className="page-title">{content.pageTitle}</h1>
        <p className="page-subtitle">{content.pageSubtitle}</p>
        <p className="community-description">{content.overview.description}</p>
      </div>

      {/* Featured Content Section */}
      <section className="featured-section">
        <h2 className="section-title">
          <span className="section-icon">✨</span>
          {content.featured.title}
        </h2>
        <div className="featured-grid">
          {content.featured.items.map((item) => (
            <article key={item.id} className="featured-card">
              {item.image && <div className="card-image" style={{backgroundImage: `url(${item.image})`}}></div>}
              <div className="card-content">
                <div className="card-meta">
                  <span className="card-topic">{item.topic}</span>
                  <span className="card-type">{item.type}</span>
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-excerpt">{item.excerpt}</p>
                <div className="card-footer">
                  <span className="card-author">by {item.author}</span>
                  <span className="card-date">{item.date}</span>
                  <div className="card-engagement">
                    <span>❤️ {item.likes}</span>
                    <span>💬 {item.comments}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Topics Filter Section */}
      <section className="topics-section">
        <h2 className="section-title">
          <span className="section-icon">🔍</span>
          Browse by Topic
        </h2>
        <div className="topics-filter">
          <button 
            className={`topic-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Topics
          </button>
          {content.topics.map((topic) => (
            <button
              key={topic.id}
              className={`topic-btn ${activeFilter === topic.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(topic.id)}
            >
              <span className="topic-icon">{topic.icon}</span>
              <span className="topic-name">{topic.name}</span>
              <span className="topic-count">{topic.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Content Grid Section */}
      <section className="content-section">
        <h2 className="section-title">
          <span className="section-icon">📚</span>
          {activeFilter === 'all' ? 'Recent Content' : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Content`}
        </h2>
        <div className="content-grid">
          {filteredContent.map((item) => (
            <article key={item.id} className="content-card">
              {item.image && <div className="card-image" style={{backgroundImage: `url(${item.image})`}}></div>}
              <div className="card-content">
                <div className="card-meta">
                  <span className="card-topic">{item.topic}</span>
                  <span className="card-type">{item.type}</span>
                  <span className="card-read-time">{item.readTime}</span>
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-excerpt">{item.excerpt}</p>
                <div className="card-tags">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="card-footer">
                  <span className="card-author">by {item.author}</span>
                  <span className="card-date">{item.date}</span>
                  <div className="card-engagement">
                    <span>❤️ {item.likes}</span>
                    <span>💬 {item.comments}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Community;
