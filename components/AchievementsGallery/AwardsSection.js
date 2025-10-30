import '../../styles/AchievementsGallery/awardsSection.css'

export default function AwardsSection() {
  const awards = [
    {
      id: 1,
      title: "Academic Excellence Award",
      organization: "University of Dhaka",
      year: "2023",
      description: "Awarded for outstanding academic performance and research contributions",
      category: "academic",
      prize: "Certificate of Excellence",
      documents: [
        { name: "Award Certificate", type: "pdf", url: "#" },
        { name: "Award Photo", type: "image", url: "#" }
      ]
    },
    {
      id: 2,
      title: "Best Research Paper Award",
      organization: "International AI Conference",
      year: "2024",
      description: "Recognized for innovative research in machine learning applications",
      category: "research",
      prize: "Trophy & Certificate",
      documents: [
        { name: "Award Certificate", type: "pdf", url: "#" },
        { name: "Conference Photo", type: "image", url: "#" }
      ]
    },
    {
      id: 3,
      title: "Programming Competition Winner",
      organization: "National Coding Challenge",
      year: "2022",
      description: "First prize in national level programming competition",
      category: "competition",
      prize: "Medal & Cash Prize",
      documents: [
        { name: "Winner Certificate", type: "pdf", url: "#" },
        { name: "Competition Photo", type: "image", url: "#" }
      ]
    },
    {
      id: 4,
      title: "Leadership Excellence Award",
      organization: "NITER Computer Club",
      year: "2023",
      description: "Awarded for outstanding leadership and team management skills",
      category: "leadership",
      prize: "Leadership Certificate",
      documents: [
        { name: "Leadership Certificate", type: "pdf", url: "#" }
      ]
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'academic': return 'fa-graduation-cap';
      case 'research': return 'fa-flask';
      case 'competition': return 'fa-trophy';
      case 'leadership': return 'fa-users';
      default: return 'fa-award';
    }
  }

  return (
    <section id="awards" className="awards-section">
      <div className="container">
        <h2 className="section-title">Awards & Recognition</h2>
        <div className="awards-grid">
          {awards.map((award) => (
            <div key={award.id} className="award-card">
              <div className="award-header">
                <div className="award-icon">
                  <i className={`fas ${getCategoryIcon(award.category)}`}></i>
                </div>
                <div className="award-title-content">
                  <h3>{award.title}</h3>
                  <p className="organization">{award.organization}</p>
                </div>
                <span className="award-year">{award.year}</span>
              </div>
              
              <div className="award-body">
                <p className="award-description">{award.description}</p>
                <div className="award-prize">
                  <i className="fas fa-gift"></i>
                  <span>{award.prize}</span>
                </div>
              </div>
              
              <div className="award-footer">
                <div className="award-documents">
                  {award.documents.map((doc, index) => (
                    <a key={index} href={doc.url} className="doc-badge">
                      <i className={`fas ${
                        doc.type === 'pdf' ? 'fa-file-pdf' : 'fa-image'
                      }`}></i>
                      {doc.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}