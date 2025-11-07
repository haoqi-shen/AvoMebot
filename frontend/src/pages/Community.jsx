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
    return <div className="page-container blog-page">Loading...</div>;
  }

  return (
    <div className="page-container blog-page">
      <h1 className="page-title">{content.pageTitle}</h1>
      <p className="page-subtitle">{content.pageSubtitle}</p>
      
      <div className="blog-list">
        {content.blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-header">
              <h2 className="blog-title">{post.title}</h2>
              <div className="blog-meta">
                <span className="blog-date">📅 {post.date}</span>
                <span className="blog-read-time">⏱️ {post.readTime}</span>
              </div>
            </div>
            <p className="blog-excerpt">{post.excerpt}</p>
            <a href="#" className="blog-read-more">
              Read More →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Community;
