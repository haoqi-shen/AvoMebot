import { useState, useEffect } from 'react';
import './MyStory.css';

const MyStory = () => {
  const [storyData, setStoryData] = useState(null);

  useEffect(() => {
    fetch('/data/mystory.json')
      .then(response => response.json())
      .then(data => setStoryData(data))
      .catch(error => console.error('Error loading story content:', error));
  }, []);

  if (!storyData) {
    return <div className="page-container mystory-page">Loading...</div>;
  }

  return (
    <div className="page-container mystory-page">
      <div className="mystory-container">
        {/* Hero Section */}
        <section className="story-hero">
          <h1 className="hero-title">{storyData.hero.title}</h1>
          <p className="hero-subtitle">{storyData.hero.subtitle}</p>
          <blockquote className="hero-quote">
            "{storyData.hero.quote}"
          </blockquote>
        </section>

        {/* Timeline */}
        <section className="story-timeline">
          {storyData.milestones.map((milestone) => (
            <div key={milestone.id} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">{milestone.year}</span>
              </div>
              <div className="timeline-content">
                {milestone.image && (
                  <div className="milestone-image">
                    <img src={milestone.image} alt={milestone.title} />
                  </div>
                )}
                {!milestone.image && (
                  <div className="milestone-image-placeholder">
                    <span className="placeholder-icon">📷</span>
                  </div>
                )}
                <div className="milestone-text">
                  <h3 className="milestone-title">{milestone.title}</h3>
                  <p className="milestone-emotion">{milestone.emotion}</p>
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
      </div>
    </div>
  );
};

export default MyStory;
