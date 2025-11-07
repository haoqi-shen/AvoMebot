import { useState, useEffect } from 'react';
import './Lab.css';

const Lab = () => {
  const [content, setContent] = useState(null);
  const [articles, setArticles] = useState([]);
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

  if (!content) {
    return (
      <div className="page-container lab-page">
        {error ? error : 'Loading...'}
      </div>
    );
  }

  // Get research notes (all articles) - show first 3 for compact preview
  const researchNotes = articles || [];
  const previewResearchNotes = researchNotes.slice(0, 3);

  return (
    <div className="page-container lab-page">
      {/* Hero Section */}
      <div className="lab-hero">
        <h1 className="hero-title">{content.pageTitle}</h1>
        <p className="hero-subtitle">{content.pageSubtitle}</p>
        <p className="hero-description">{content.overview.description}</p>
      </div>

      {/* Main Content - All Sections Visible */}
      {/* Main Content - All Sections Visible */}
      <div className="lab-content">
        {/* Featured Experiments Section */}
        <section className="experiments-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">🔬</span>
              Featured Experiments
            </h2>
            <p className="section-description">
              Explore my latest projects, prototypes, and thought experiments around AI, design, and human collaboration.
            </p>
          </div>
          <div className="experiments-grid">
            {content.featured.items.map((item) => (
              <article key={item.id} className="experiment-card">
                <div className="card-header">
                  <span className="card-badge">{item.topic}</span>
                  <span className="card-type">{item.type}</span>
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-excerpt">{item.excerpt}</p>
                {item.tags && (
                  <div className="card-tags">
                    {item.tags.map((tag) => (
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
              </article>
            ))}
          </div>
        </section>

        {/* Research Notes Section */}
        <section className="research-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">📝</span>
              Research Notes
            </h2>
            <p className="section-description">
              Thought fragments, technical summaries, and MeBot dialogues — my research and ideation space.
            </p>
          </div>
          
          {/* Topic Filters */}
          <div className="topic-filters">
            {content.topics.map((topic) => (
              <div key={topic.id} className="topic-filter-item">
                <span className="topic-icon">{topic.icon}</span>
                <div className="topic-info">
                  <h4 className="topic-name">{topic.name}</h4>
                  <p className="topic-description">{topic.description}</p>
                </div>
                <span className="topic-count">{topic.count} notes</span>
              </div>
            ))}
          </div>

          {/* Articles List - Show preview of 5 */}
          <div className="research-list">
            {previewResearchNotes.map((article) => (
              <article key={article.id} className="research-item">
                <div className="research-meta">
                  <span className="research-category">{article.category}</span>
                  <span className="research-type">{article.type || 'article'}</span>
                  <span className="research-date">{article.date}</span>
                  <span className="research-time">{article.readTime}</span>
                </div>
                <h3 className="research-title">
                  {article.notionUrl ? (
                    <a href={article.notionUrl} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  ) : (
                    article.title
                  )}
                </h3>
                <p className="research-excerpt">{article.excerpt}</p>
                <div className="research-footer">
                  <div className="research-tags">
                    {article.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="research-engagement">
                    <span>❤️ {article.likes}</span>
                    <span>💬 {article.comments}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {researchNotes.length > 3 && (
            <div className="view-more">
              <button className="view-more-btn">View All {researchNotes.length} Notes →</button>
            </div>
          )}
        </section>

        {/* Co-Lab Section */}
        <section className="colab-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">🤝</span>
              Co-Lab: Collaborative Space
            </h2>
            <p className="section-description">
              Connect, collaborate, and co-create. Join open discussions, propose projects, and share your ideas.
            </p>
          </div>
          <div className="colab-grid">
            {content.coLabSpaces.map((space) => (
              <article key={space.id} className="colab-card">
                <div className="colab-icon">{space.icon}</div>
                <div className="colab-content">
                  <h3 className="colab-title">{space.title}</h3>
                  <p className="colab-description">{space.description}</p>
                  <div className="colab-meta">
                    <span className="colab-category">{space.category}</span>
                    <span className="colab-count">{space.count} active items</span>
                  </div>
                  <button className="colab-action">Explore →</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Lab;
