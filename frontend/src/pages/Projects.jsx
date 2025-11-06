import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MeBot Personal Website',
      description: 'Modern personal website built with React and Python, featuring integrated AI chat functionality',
      technologies: ['React', 'Python', 'FastAPI', 'Vite'],
      link: '#',
    },
    {
      id: 2,
      title: 'Example Project 2',
      description: 'A sample project description showcasing technical skills and innovative thinking',
      technologies: ['JavaScript', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 3,
      title: 'Example Project 3',
      description: 'Another project demonstrating professional expertise',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      link: '#',
    },
  ];

  return (
    <div className="page-container projects-page">
      <h1 className="page-title">My Projects</h1>
      <p className="page-subtitle">Showcasing some of my interesting projects</p>
      
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
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
