import './MyStory.css';

const MyStory = () => {
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

  const education = [
    {
      id: 1,
      school: 'University Name',
      degree: 'Bachelor of Computer Science',
      period: '2016 - 2020',
      description: 'Major in Computer Science, focused on Software Engineering and Artificial Intelligence',
      gpa: 'GPA: 3.8/4.0',
    },
    {
      id: 2,
      school: 'Example University',
      degree: 'Master\'s Degree',
      period: '2020 - 2022',
      description: 'In-depth research in Machine Learning and Deep Learning technologies',
      gpa: 'GPA: 3.9/4.0',
    },
  ];

  return (
    <div className="page-container mystory-page">
      <h1 className="page-title">My Story</h1>
      <p className="page-subtitle">My professional journey and educational background</p>
      
      {/* Experience Section */}
      <div className="story-section">
        <h2 className="section-title">Work Experience</h2>
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

      {/* Education Section */}
      <div className="story-section">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-icon">🎓</div>
              <div className="education-details">
                <h2 className="education-school">{edu.school}</h2>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-period">{edu.period}</p>
                <p className="education-description">{edu.description}</p>
                <p className="education-gpa">{edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyStory;
