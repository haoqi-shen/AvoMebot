import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Company Name',
      position: 'Software Engineer',
      period: '2022 - Present',
      description: [
        'Develop and maintain high-performance web applications',
        'Build full-stack solutions using React and Python',
        'Collaborate with team to deliver complex technical projects',
      ],
    },
    {
      id: 2,
      company: 'Example Company',
      position: 'Junior Developer',
      period: '2020 - 2022',
      description: [
        'Participate in frontend development and UI/UX improvements',
        'Learn and apply modern development best practices',
        'Collaborate with team to deliver high-quality code',
      ],
    },
  ];

  return (
    <div className="page-container experience-page">
      <h1 className="page-title">Work Experience</h1>
      <p className="page-subtitle">My professional journey</p>
      
      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-marker"></div>
            <div className="experience-content">
              <h2 className="experience-company">{exp.company}</h2>
              <h3 className="experience-position">{exp.position}</h3>
              <p className="experience-period">{exp.period}</p>
              <ul className="experience-description">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
