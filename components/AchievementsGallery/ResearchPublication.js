import '../../styles/AchievementsGallery/researchPublication.css'

export default function ResearchPublication() {
  const researchItems = [
    {
      id: 1,
      title: "Machine Learning Applications in Healthcare",
      authors: "Moududi, M. A. A., et al.",
      journal: "International Journal of AI Research",
      year: "2024",
      status: "Published",
      description: "Research on implementing ML algorithms for disease prediction and healthcare optimization",
      links: [
        { type: "paper", url: "#", label: "View Paper" },
        { type: "code", url: "#", label: "Source Code" },
        { type: "presentation", url: "#", label: "Presentation" }
      ],
      tags: ["Machine Learning", "Healthcare", "AI", "Research"]
    },
    {
      id: 2,
      title: "Blockchain Technology for Secure Data Management",
      authors: "Moududi, M. A. A., & Research Team",
      journal: "IEEE Conference on Blockchain",
      year: "2024",
      status: "Under Review",
      description: "Exploring blockchain solutions for secure and transparent data management systems",
      links: [
        { type: "preprint", url: "#", label: "Preprint" }
      ],
      tags: ["Blockchain", "Security", "Data Management", "Cryptography"]
    },
    {
      id: 3,
      title: "Deep Learning for Image Recognition",
      authors: "Moududi, M. A. A.",
      journal: "Journal of Computer Vision",
      year: "2023",
      status: "Published",
      description: "Implementation of deep learning models for advanced image recognition tasks",
      links: [
        { type: "paper", url: "#", label: "View Paper" },
        { type: "demo", url: "#", label: "Live Demo" }
      ],
      tags: ["Deep Learning", "Computer Vision", "CNN", "AI"]
    }
  ]

  return (
    <section id="research-publication" className="research-section">
      <div className="container">
        <h2 className="section-title">Research & Publications</h2>
        <div className="research-grid">
          {researchItems.map((research) => (
            <div key={research.id} className="research-card">
              <div className="research-header">
                <h3>{research.title}</h3>
                <span className={`status-badge ${research.status.toLowerCase().replace(' ', '-')}`}>
                  {research.status}
                </span>
              </div>
              
              <div className="research-meta">
                <p className="authors"><strong>Authors:</strong> {research.authors}</p>
                <p className="journal"><strong>Journal/Conference:</strong> {research.journal}</p>
                <p className="year"><strong>Year:</strong> {research.year}</p>
              </div>
              
              <p className="research-description">{research.description}</p>
              
              <div className="research-tags">
                {research.tags.map((tag, index) => (
                  <span key={index} className="research-tag">{tag}</span>
                ))}
              </div>
              
              <div className="research-links">
                {research.links.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    className={`research-link ${link.type}`}
                  >
                    <i className={`fas ${
                      link.type === 'paper' ? 'fa-file-pdf' :
                      link.type === 'code' ? 'fa-code' :
                      link.type === 'presentation' ? 'fa-presentation' :
                      link.type === 'preprint' ? 'fa-file-alt' : 'fa-eye'
                    }`}></i>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}