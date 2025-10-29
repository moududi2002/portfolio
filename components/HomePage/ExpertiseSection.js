'use client'
import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import '../../styles/HomePage/expertiseSection.css'

export default function ExpertiseSection() {
  const [ref, isVisible] = useIntersectionObserver()
  const [animatedCards, setAnimatedCards] = useState(false)

  useEffect(() => {
    if (isVisible && !animatedCards) {
      setAnimatedCards(true)
    }
  }, [isVisible, animatedCards])

  const expertiseData = [
    {
      category: "ai-ml",
      icon: "fas fa-brain",
      title: "AI & ML Research",
      description: "Research and project-based innovation in Machine Learning, Data Science and Artificial Intelligence",
      level: "Expert"
    },
    {
      category: "leadership", 
      icon: "fas fa-users",
      title: "Team Leadership",
      description: "Team Lead and Management with proven project coordination skills",
      level: "Advanced"
    },
    {
      category: "web",
      icon: "fas fa-code", 
      title: "Web Development",
      description: "Full-stack web development with modern technologies",
      level: "Proficient"
    },
    {
      category: "programming",
      icon: "fas fa-laptop-code",
      title: "Programming", 
      description: "C, Java, Python, Python Automation, HTML, CSS, JavaScript, SQL",
      level: "Expert"
    },
    {
      category: "projects",
      icon: "fas fa-project-diagram",
      title: "Project Management",
      description: "End-to-end Python project handling and execution", 
      level: "Advanced"
    }
  ]

  return (
    <section id="expertise" className="expertise-section" ref={ref}>
      <div className="container">
        <h2 className="section-title">Expertise Area</h2>
        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <div 
              key={item.category}
              className={`expertise-card ${animatedCards ? 'animate' : ''}`}
              data-category={item.category}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="expertise-icon">
                <i className={item.icon}></i>
              </div>
              <div className="expertise-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span className="expertise-level">{item.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}