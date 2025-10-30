import '../../styles/AchievementsGallery/extraCurricular.css'

export default function ExtraCurricular() {
  const activities = [
    {
      id: 1,
      title: "Research Ustad Team Member",
      organization: "Research Ustad",
      role: "Research Assistant",
      period: "2024-Present",
      description: "Active member of research community, contributing to AI and ML projects",
      achievements: [
        "Published research papers",
        "Participated in workshops",
        "Collaborated with researchers"
      ],
      image: "/images/research-ustad.jpg"
    },
    {
      id: 2,
      title: "Programming Contest Participant",
      organization: "Various Platforms",
      role: "Competitive Programmer",
      period: "2021-Present",
      description: "Regular participant in programming contests and hackathons",
      achievements: [
        "Solved 500+ problems",
        "Participated in 20+ contests",
        "Achieved good rankings"
      ],
      image: "/images/programming-contest.jpg"
    },
    {
      id: 3,
      title: "Volunteer Work",
      organization: "Community Service",
      role: "Volunteer",
      period: "2020-Present",
      description: "Active participation in community service and social welfare activities",
      achievements: [
        "Organized events",
        "Helped community members",
        "Promoted education"
      ],
      image: "/images/volunteer.jpg"
    }
  ]

  return (
    <section id="extra-curricular" className="extra-curricular-section">
      <div className="container">
        <h2 className="section-title">Extra-curricular Activities</h2>
        <div className="activities-grid">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-card">
              <div className="activity-image">
                <div className="image-placeholder">
                  <i className="fas fa-users"></i>
                </div>
              </div>
              <div className="activity-content">
                <h3>{activity.title}</h3>
                <p className="organization">{activity.organization}</p>
                <p className="role-period">
                  <span className="role">{activity.role}</span> • 
                  <span className="period"> {activity.period}</span>
                </p>
                <p className="description">{activity.description}</p>
                <div className="achievements-list">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {activity.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}