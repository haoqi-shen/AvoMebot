import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PhotoCarousel from '../components/PhotoCarousel';
import './MyStory.css';

const MyStory = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [storyData, setStoryData] = useState(null);
  const location = useLocation();

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
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Handle URL hash for deep linking
  useEffect(() => {
    if (storyData && location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # symbol
      const element = document.getElementById(sectionId);
      if (element) {
        // Wait a bit for the DOM to render
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [storyData, location.hash]);

  if (!storyData) {
    return <div className="page-container mystory-page">Loading...</div>;
  }

  // Sort milestones by year in descending order (most recent first)
  const sortedMilestones = [...storyData.milestones].sort((a, b) => {
    return parseInt(b.year) - parseInt(a.year);
  });

  return (
    <div className="page-container mystory-page">
      <div className="mystory-layout">
        {/* Sidebar Navigation */}
        <aside className="mystory-sidebar">
          <h3 className="sidebar-title">Navigate My Story</h3>
          <nav className="sidebar-nav">
            {sortedMilestones.map((milestone) => (
              <button
                key={milestone.id}
                className={`nav-item ${activeSection === milestone.id ? 'active' : ''}`}
                onClick={() => scrollToSection(milestone.id)}
              >
                {milestone.logo && (
                  <img 
                    src={milestone.logo} 
                    alt={`${milestone.title} logo`}
                    className="nav-item-logo"
                  />
                )}
                {milestone.title}
              </button>
            ))}
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
            {sortedMilestones.map((milestone) => (
              <div key={milestone.id} id={milestone.id} className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-year">{milestone.year}</span>
                </div>
                <div className="timeline-content">
                  <PhotoCarousel 
                    images={milestone.images || []} 
                    altText={milestone.title}
                  />
                  <div className="milestone-text">
                    <div className="milestone-title-container">
                      {milestone.logo && (
                        <img 
                          src={milestone.logo} 
                          alt={`${milestone.title} logo`}
                          className="milestone-logo"
                        />
                      )}
                      <h3 className="milestone-title">{milestone.title}</h3>
                    </div>
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
