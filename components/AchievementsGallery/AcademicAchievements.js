import '../../styles/AchievementsGallery/academicAchievements.css'

export default function AcademicAchievements() {
  const achievements = [
    {
      id: 1,
      title: "B.Sc in Computer Science & Engineering",
      institution: "University of Dhaka",
      year: "2022-Present",
      description: "Pursuing undergraduate degree with focus on AI, ML and Research",
      type: "degree",
      documents: [
        { name: "Admission Certificate", type: "pdf", url: "#" },
        { name: "Academic Transcript", type: "pdf", url: "#" }
      ]
    },
    {
      id: 2,
      title: "Higher Secondary Certificate",
      institution: "Joypurhat Government College",
      year: "2019-2020",
      description: "Science Group, GPA: 5.00",
      type: "certificate",
      documents: [
        { name: "HSC Certificate", type: "pdf", url: "#" },
        { name: "HSC Transcript", type: "pdf", url: "#" }
      ]
    },
    {
      id: 3,
      title: "Secondary School Certificate",
      institution: "Joypurhat Government High School",
      year: "2017-2018",
      description: "Science Group, GPA: 5.00",
      type: "certificate",
      documents: [
        { name: "SSC Certificate", type: "pdf", url: "#" },
        { name: "SSC Transcript", type: "pdf", url: "#" }
      ]
    }
  ]

  return (
    <section id="academic-achievements" className="academic-section">
      <div className="container">
        <h2 className="section-title">Academic Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-icon">
                <i className={`fas ${
                  achievement.type === 'degree' ? 'fa-graduation-cap' : 'fa-award'
                }`}></i>
              </div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p className="institution">{achievement.institution}</p>
                <p className="year">{achievement.year}</p>
                <p className="description">{achievement.description}</p>
                <div className="documents">
                  {achievement.documents.map((doc, index) => (
                    <a key={index} href={doc.url} className="doc-link">
                      <i className={`fas ${
                        doc.type === 'pdf' ? 'fa-file-pdf' : 'fa-file-image'
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