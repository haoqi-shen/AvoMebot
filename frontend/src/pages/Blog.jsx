import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '如何使用React和Python构建全栈应用',
      date: '2024-01-15',
      excerpt: '在这篇文章中，我将分享如何使用React作为前端框架和Python FastAPI作为后端来构建现代化的全栈Web应用...',
      readTime: '5分钟阅读',
    },
    {
      id: 2,
      title: 'AI聊天机器人集成指南',
      date: '2024-01-10',
      excerpt: '探索如何将AI聊天机器人集成到你的网站中，提供更好的用户体验和交互性...',
      readTime: '8分钟阅读',
    },
    {
      id: 3,
      title: '现代前端开发最佳实践',
      date: '2024-01-05',
      excerpt: '了解当前前端开发的最佳实践，包括代码组织、性能优化和可访问性...',
      readTime: '10分钟阅读',
    },
  ];

  return (
    <div className="page-container blog-page">
      <h1 className="page-title">博客</h1>
      <p className="page-subtitle">我的技术文章和思考</p>
      
      <div className="blog-list">
        {blogPosts.map((post) => (
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
              阅读更多 →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
