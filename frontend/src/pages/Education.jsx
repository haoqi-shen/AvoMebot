import './Education.css';

const Education = () => {
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
    <div className="page-container education-page">
      <h1 className="page-title">Education</h1>
      <p className="page-subtitle">My academic journey</p>
      
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
  );
};

export default Education;
