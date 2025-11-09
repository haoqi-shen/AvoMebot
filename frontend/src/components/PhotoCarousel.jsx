import { useState, useEffect, useRef } from 'react';
import './PhotoCarousel.css';

const PhotoCarousel = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);

  // Show 3 images at a time
  const visibleImages = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(images.length - visibleImages, prev + 1));
  };

  // Touch/Mouse drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // If dragged more than 50px, change slide
    if (translateX > 50 && currentIndex > 0) {
      handlePrev();
    } else if (translateX < -50 && currentIndex < images.length - visibleImages) {
      handleNext();
    }
    
    setTranslateX(0);
  };

  // Reset index when images change
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  // If no images or empty array, show placeholder
  if (!images || images.length === 0) {
    return (
      <div className="photo-carousel">
        <div className="carousel-placeholder">
          <span className="placeholder-icon">📷</span>
          <span className="placeholder-text">No photos available</span>
        </div>
      </div>
    );
  }

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < images.length - visibleImages;

  return (
    <div className="photo-carousel">
      <div 
        className="carousel-container"
        ref={carouselRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div 
          className="carousel-track"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / visibleImages)}% + ${translateX}px))`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-in-out'
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img 
                src={image} 
                alt={`${altText} - Photo ${index + 1}`}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
      
      {images.length > visibleImages && (
        <div className="carousel-controls">
          <button 
            className="carousel-button prev" 
            onClick={handlePrev}
            disabled={!canGoPrev}
            aria-label="Previous photos"
          >
            ‹
          </button>
          <div className="carousel-indicators">
            {Array.from({ length: Math.ceil(images.length / visibleImages) }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${Math.floor(currentIndex / visibleImages) === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index * visibleImages)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button 
            className="carousel-button next" 
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next photos"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoCarousel;
