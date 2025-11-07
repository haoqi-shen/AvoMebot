import { useState } from 'react';
import './MyStory.css';

const MyStory = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const storyData = {
    intro: {
      title: "My Journey",
      content: "Welcome to my story! Here's a glimpse into my professional journey and the experiences that have shaped who I am today.",
      image: null, // Placeholder for future photo
    },
    experiences: [
      {
        id: 'exp-1',
        title: 'Software Engineer at Company Name',
        period: '2022 - Present',
        story: 'This is where my journey truly took off. Working on cutting-edge web applications, I discovered my passion for building solutions that make a difference. Each day brings new challenges and opportunities to grow.',
        highlights: [
          'Led development of high-performance web applications',
          'Collaborated with cross-functional teams to deliver innovative solutions',
          'Mentored junior developers and contributed to team growth',
        ],
        image: null, // Placeholder for future photo
      },
      {
        id: 'exp-2',
        title: 'Junior Developer at Example Company',
        period: '2020 - 2022',
        story: 'My first step into the professional world. This is where I learned the fundamentals and developed my problem-solving skills. Every project was a learning opportunity.',
        highlights: [
          'Built responsive user interfaces using modern frameworks',
          'Participated in code reviews and improved code quality',
          'Learned agile development methodologies',
        ],
        image: null, // Placeholder for future photo
      },
    ],
    education: [
      {
        id: 'edu-1',
        title: "Master's Degree in Computer Science",
        institution: 'Example University',
        period: '2020 - 2022',
        story: 'Diving deeper into the world of machine learning and artificial intelligence. This program challenged me to think critically and push the boundaries of what\'s possible.',
        achievements: 'GPA: 3.9/4.0 - Research focus on Deep Learning',
        image: null, // Placeholder for future photo
      },
      {
        id: 'edu-2',
        title: 'Bachelor of Computer Science',
        institution: 'University Name',
        period: '2016 - 2020',
        story: 'Where it all began. I discovered my love for coding and technology. The foundation I built here continues to serve me well.',
        achievements: 'GPA: 3.8/4.0 - Focused on Software Engineering and AI',
        image: null, // Placeholder for future photo
      },
    ],
  };

  return (
    <div className="page-container mystory-page">
      <div className="mystory-layout">
        {/* Sidebar Navigation */}
        <aside className="mystory-sidebar">
          <h3 className="sidebar-title">Navigate My Story</h3>
          <nav className="sidebar-nav">
            <button
              className={`nav-item ${activeSection === 'intro' ? 'active' : ''}`}
              onClick={() => scrollToSection('intro')}
            >
              📖 Introduction
            </button>
            <div className="nav-section">
              <span className="nav-section-label">Professional Journey</span>
              {storyData.experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  className={`nav-item sub-item ${activeSection === exp.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(exp.id)}
                >
                  💼 Chapter {index + 1}
                </button>
              ))}
            </div>
            <div className="nav-section">
              <span className="nav-section-label">Academic Background</span>
              {storyData.education.map((edu, index) => (
                <button
                  key={edu.id}
                  className={`nav-item sub-item ${activeSection === edu.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(edu.id)}
                >
                  🎓 Chapter {index + 1}
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="mystory-content">
          {/* Introduction */}
          <section id="intro" className="story-chapter">
            <h1 className="chapter-title">{storyData.intro.title}</h1>
            <div className="chapter-content">
              <p className="chapter-text">{storyData.intro.content}</p>
              {storyData.intro.image && (
                <div className="chapter-image">
                  <img src={storyData.intro.image} alt="Introduction" />
                </div>
              )}
            </div>
          </section>

          {/* Professional Journey */}
          <section className="story-section-group">
            <h2 className="section-group-title">Professional Journey</h2>
            {storyData.experiences.map((exp) => (
              <section key={exp.id} id={exp.id} className="story-chapter">
                <div className="chapter-header">
                  <h3 className="chapter-title">{exp.title}</h3>
                  <span className="chapter-period">{exp.period}</span>
                </div>
                <div className="chapter-content">
                  {exp.image && (
                    <div className="chapter-image">
                      <img src={exp.image} alt={exp.title} />
                      <div className="image-placeholder">📷 Add Photo</div>
                    </div>
                  )}
                  {!exp.image && (
                    <div className="chapter-image-placeholder">
                      <span className="placeholder-icon">📷</span>
                      <span className="placeholder-text">Photo Coming Soon</span>
                    </div>
                  )}
                  <p className="chapter-story">{exp.story}</p>
                  <div className="chapter-highlights">
                    <h4>Key Highlights:</h4>
                    <ul>
                      {exp.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </section>

          {/* Academic Background */}
          <section className="story-section-group">
            <h2 className="section-group-title">Academic Background</h2>
            {storyData.education.map((edu) => (
              <section key={edu.id} id={edu.id} className="story-chapter">
                <div className="chapter-header">
                  <h3 className="chapter-title">{edu.title}</h3>
                  <span className="chapter-period">{edu.period}</span>
                </div>
                <div className="chapter-subtitle">{edu.institution}</div>
                <div className="chapter-content">
                  {edu.image && (
                    <div className="chapter-image">
                      <img src={edu.image} alt={edu.title} />
                    </div>
                  )}
                  {!edu.image && (
                    <div className="chapter-image-placeholder">
                      <span className="placeholder-icon">📷</span>
                      <span className="placeholder-text">Photo Coming Soon</span>
                    </div>
                  )}
                  <p className="chapter-story">{edu.story}</p>
                  <div className="chapter-achievements">
                    <strong>Achievements:</strong> {edu.achievements}
                  </div>
                </div>
              </section>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default MyStory;
