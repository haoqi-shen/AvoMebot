import { useState, useEffect } from 'react';
import './MyStory.css';

const MyStory = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [storyData, setStoryData] = useState(null);

  useEffect(() => {
    fetch('/data/mystory.json')
      .then(response => response.json())
      .then(data => setStoryData(data))
      .catch(error => console.error('Error loading story content:', error));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('[id^="hero"], [id^="milestone-"], [id^="northeastern"], [id^="johns-hopkins"], [id^="bytedance"], [id^="tencent"], [id^="pingan"], [id^="amazon"], [id^="avomebot"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [storyData]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!storyData) {
    return <div className="page-container mystory-page">Loading...</div>;
  }

  // Group milestones by category
  const work = storyData.milestones.filter(m => m.category === 'work');
  const current = storyData.milestones.filter(m => m.category === 'current');

  return (
    <div className="page-container mystory-page">
      <div className="mystory-layout">
        {/* Sidebar Navigation */}
        <aside className="mystory-sidebar">
          <h3 className="sidebar-title">Navigate My Story</h3>
          <nav className="sidebar-nav">
            {current.length > 0 && current.map((milestone) => (
              <button
                key={milestone.id}
                className={`nav-item ${activeSection === milestone.id ? 'active' : ''}`}
                onClick={() => scrollToSection(milestone.id)}
              >
                ✨ {milestone.title}
              </button>
            ))}

            {work.length > 0 && (
              <div className="nav-section">
                <span className="nav-section-label">Professional Journey</span>
                {work.map((milestone) => (
                  <button
                    key={milestone.id}
                    className={`nav-item sub-item ${activeSection === milestone.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(milestone.id)}
                  >
                    💼 {milestone.title}
                  </button>
                ))}
              </div>
            )}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="mystory-content">
          {/* Hero Section */}
          <section id="hero" className="story-hero">
            <h1 className="hero-title">{storyData.hero.title}</h1>
            <p className="hero-subtitle">{storyData.hero.subtitle}</p>
            <blockquote className="hero-quote">
              "{storyData.hero.quote}"
            </blockquote>
          </section>

          {/* Timeline */}
          <section className="story-timeline">
            {storyData.milestones.map((milestone) => (
              <div key={milestone.id} id={milestone.id} className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-year">{milestone.year}</span>
                </div>
                <div className="timeline-content">
                  <div className={milestone.image ? "milestone-image" : "milestone-image-placeholder"}>
                    {milestone.image ? (
                      <img src={milestone.image} alt={milestone.title} />
                    ) : (
                      <span className="placeholder-icon">📷</span>
                    )}
                  </div>
                  <div className="milestone-text">
                    <h3 className="milestone-title">{milestone.title}</h3>
                    <p className="milestone-story">{milestone.story}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Philosophy Section */}
          <section className="story-philosophy">
            <h2 className="philosophy-title">{storyData.philosophy.title}</h2>
            <p className="philosophy-content">{storyData.philosophy.content}</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MyStory;
