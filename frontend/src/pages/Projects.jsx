import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MeBot个人网站',
      description: '使用React和Python构建的现代化个人网站，集成AI聊天功能',
      technologies: ['React', 'Python', 'FastAPI', 'Vite'],
      link: '#',
    },
    {
      id: 2,
      title: '示例项目2',
      description: '这是一个示例项目的描述，展示你的技术能力和创新思维',
      technologies: ['JavaScript', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 3,
      title: '示例项目3',
      description: '另一个展示你专业技能的项目',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      link: '#',
    },
  ];

  return (
    <div className="page-container projects-page">
      <h1 className="page-title">我的项目</h1>
      <p className="page-subtitle">展示我开发的一些有趣的项目</p>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">
              查看项目 →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
