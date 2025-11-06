import './Intro.css';

const Intro = () => {
  return (
    <div className="page-container intro-page">
      <div className="intro-content">
        <div className="intro-hero">
          <h1 className="intro-title">
            你好，我是 <span className="highlight">MeBot</span>
          </h1>
          <p className="intro-subtitle">
            欢迎来到我的个人网站
          </p>
        </div>

        <div className="intro-description">
          <p>
            我是一个热爱技术的开发者，专注于构建现代化的Web应用程序。
            这个网站使用React和Python构建，展示了我的项目、经验和专业知识。
          </p>
          <p>
            你可以通过导航栏中的Chat页面与我的AI助手MeBot交流，
            它经过训练，能够像我一样回答问题和进行对话。
          </p>
        </div>

        <div className="intro-features">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>现代技术栈</h3>
            <p>使用React和Python构建的全栈应用</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>创新项目</h3>
            <p>展示各种技术项目和创意作品</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI助手</h3>
            <p>智能聊天机器人随时为你服务</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
