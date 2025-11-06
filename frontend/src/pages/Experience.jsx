import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: '公司名称',
      position: '软件工程师',
      period: '2022 - 至今',
      description: [
        '开发和维护高性能的Web应用程序',
        '使用React和Python构建全栈解决方案',
        '协作团队完成复杂的技术项目',
      ],
    },
    {
      id: 2,
      company: '示例公司',
      position: '初级开发者',
      period: '2020 - 2022',
      description: [
        '参与前端开发和UI/UX改进',
        '学习并应用现代开发最佳实践',
        '与团队协作交付高质量代码',
      ],
    },
  ];

  return (
    <div className="page-container experience-page">
      <h1 className="page-title">工作经验</h1>
      <p className="page-subtitle">我的职业发展历程</p>
      
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
