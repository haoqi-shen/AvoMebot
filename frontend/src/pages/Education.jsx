import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      school: '大学名称',
      degree: '计算机科学学士',
      period: '2016 - 2020',
      description: '主修计算机科学，专注于软件工程和人工智能',
      gpa: 'GPA: 3.8/4.0',
    },
    {
      id: 2,
      school: '示例大学',
      degree: '硕士学位',
      period: '2020 - 2022',
      description: '深入研究机器学习和深度学习技术',
      gpa: 'GPA: 3.9/4.0',
    },
  ];

  return (
    <div className="page-container education-page">
      <h1 className="page-title">教育背景</h1>
      <p className="page-subtitle">我的学习经历</p>
      
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
