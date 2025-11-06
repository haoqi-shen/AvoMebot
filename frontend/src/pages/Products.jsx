import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'MeBot Personal Website',
      description: 'Modern personal website built with React and Python, featuring integrated AI chat functionality',
      technologies: ['React', 'Python', 'FastAPI', 'Vite'],
      link: '#',
    },
    {
      id: 2,
      title: 'Example Product 2',
      description: 'A sample product description showcasing technical skills and innovative thinking',
      technologies: ['JavaScript', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 3,
      title: 'Example Product 3',
      description: 'Another product demonstrating professional expertise',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      link: '#',
    },
  ];

  return (
    <div className="page-container products-page">
      <h1 className="page-title">My Products</h1>
      <p className="page-subtitle">Showcasing some of my interesting products</p>
      
      <div className="products-grid">
        {products.map((product) => (
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
