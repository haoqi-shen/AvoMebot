import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Build Full-Stack Applications with React and Python',
      date: '2024-01-15',
      excerpt: 'In this article, I will share how to build modern full-stack web applications using React as the frontend framework and Python FastAPI as the backend...',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'AI Chatbot Integration Guide',
      date: '2024-01-10',
      excerpt: 'Explore how to integrate AI chatbots into your website for better user experience and interactivity...',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'Modern Frontend Development Best Practices',
      date: '2024-01-05',
      excerpt: 'Learn current frontend development best practices, including code organization, performance optimization, and accessibility...',
      readTime: '10 min read',
    },
  ];

  return (
    <div className="page-container blog-page">
      <h1 className="page-title">Blog</h1>
      <p className="page-subtitle">My technical articles and thoughts</p>
      
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
              Read More →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
