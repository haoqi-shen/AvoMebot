import { useState, useEffect, useMemo } from 'react';
import './Lab.css';

const Lab = () => {
  const [content, setContent] = useState(null);
  const [articles, setArticles] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [error, setError] = useState(null);

  // Utility function to normalize topic names for comparison
  const normalizeTopicName = (topicName) => {
    return topicName.toLowerCase().replace(/\s+/g, '-');
  };

  useEffect(() => {
    // Load both lab.json and articles.json
    Promise.all([
      fetch('/data/lab.json').then(res => res.json()),
      fetch('/data/articles.json').then(res => res.json())
    ])
      .then(([labData, articlesData]) => {
        // Calculate topic counts based on actual articles
        const topicsWithCounts = labData.topics.map(topic => {
          const count = (articlesData.articles || []).filter(article => 
            normalizeTopicName(article.category) === topic.id
          ).length;
          return { ...topic, count };
        });
        
        setContent({ ...labData, topics: topicsWithCounts });
        setArticles(articlesData.articles || []);
      })
      .catch(error => {
        console.error('Error loading lab content:', error);
        setError('Failed to load lab content. Please try again later.');
      });
  }, []);

  // Memoize the active topic name to avoid recalculating on every render
  const activeTopicName = useMemo(() => {
    if (!content || activeFilter === 'all') return null;
    return content.topics.find(t => t.id === activeFilter)?.name;
  }, [content, activeFilter]);

  if (!content) {
    return (
      <div className="page-container lab-page">
        {error ? error : 'Loading...'}
      </div>
    );
  }

  // Get content based on filter
  const getFilteredContent = () => {
    if (activeFilter === 'all') {
      // Show featured content when no filter is applied
      return content.featured.items;
    } else {
      // Filter articles by category
      return (articles || []).filter(article => 
        normalizeTopicName(article.category) === activeFilter
      );
    }
  };

  const displayContent = getFilteredContent();

  return (
    <div className="page-container lab-page">
      {/* Header Section */}
      <div className="lab-header">
        <h1 className="page-title">{content.pageTitle}</h1>
        <p className="page-subtitle">{content.pageSubtitle}</p>
        <p className="lab-description">{content.overview.description}</p>
      </div>

      {/* Topics Filter Section - Moved to top */}
      <section className="topics-section">
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

      {/* Two-column layout: Content + Lab Spaces */}
      <div className="lab-layout">
        {/* Main Content Column */}
        <section className="content-column">
          <h2 className="section-title">
            <span className="section-icon">{activeFilter === 'all' ? '✨' : '📚'}</span>
            {activeFilter === 'all' ? 'Featured Content' : activeTopicName || 'Content'}
          </h2>
          <div className="content-list">
            {displayContent.map((item) => (
              <article key={item.id} className="content-card-compact">
                <div className="card-content">
                  <div className="card-meta">
                    <span className="card-topic">{item.topic || item.category}</span>
                    {item.type && <span className="card-type">{item.type}</span>}
                    {item.readTime && <span className="card-read-time">{item.readTime}</span>}
                  </div>
                  <h3 className="card-title">
                    {item.notionUrl ? (
                      <a href={item.notionUrl} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="card-excerpt">{item.excerpt}</p>
                  {item.tags && (
                    <div className="card-tags">
                      {(item.tags || []).map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
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

        {/* Lab Spaces Sidebar */}
        <aside className="sidebar-column">
          <section className="lab-spaces-compact">
            <h2 className="section-title">
              <span className="section-icon">🧪</span>
              Co-Lab
            </h2>
            <div className="spaces-list">
              {(content.coLabSpaces || []).map((space) => (
                <article key={space.id} className="space-card-compact">
                  <div className="space-icon">{space.icon}</div>
                  <div className="space-info">
                    <h3 className="space-title">{space.title}</h3>
                    <p className="space-description">{space.description}</p>
                    <div className="space-meta">
                      <span className="space-category">{space.category}</span>
                      <span className="space-count">{space.count} items</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Lab;
