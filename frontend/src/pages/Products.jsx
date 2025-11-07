import { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error('Error loading products content:', error));
  }, []);

  if (!content) {
    return <div className="page-container products-page">Loading...</div>;
  }

  return (
    <div className="page-container products-page">
      <h1 className="page-title">{content.pageTitle}</h1>
      <p className="page-subtitle">{content.pageSubtitle}</p>
      
      <div className="products-grid">
        {content.products.map((product) => (
          <div key={product.id} className="product-card">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-technologies">
              {product.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={product.link} className="product-link">
              View Product →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
