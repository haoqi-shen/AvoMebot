import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-12345',
    },
    {
      id: 2,
      name: 'Python Professional Certification',
      issuer: 'Python Institute',
      date: '2022',
      credentialId: 'PCAP-54321',
    },
    {
      id: 3,
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      credentialId: 'META-67890',
    },
  ];

  return (
    <div className="page-container certifications-page">
      <h1 className="page-title">Certifications</h1>
      <p className="page-subtitle">Professional certifications I've earned</p>
      
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="certification-card">
            <div className="cert-badge">🏆</div>
            <h2 className="cert-name">{cert.name}</h2>
            <p className="cert-issuer">{cert.issuer}</p>
            <div className="cert-details">
              <span className="cert-date">📅 {cert.date}</span>
              <span className="cert-id">🔑 {cert.credentialId}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
