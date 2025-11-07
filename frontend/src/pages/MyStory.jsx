import { useState, useEffect } from 'react';
import './MyStory.css';

const MyStory = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [storyData, setStoryData] = useState(null);

  useEffect(() => {
    fetch('/data/mystory.json')
      .then(response => response.json())
      .then(data => setStoryData(data))
      .catch(error => console.error('Error loading story content:', error));
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!storyData) {
    return <div className="page-container mystory-page">Loading...</div>;
  }

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
