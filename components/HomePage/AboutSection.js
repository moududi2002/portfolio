'use client'
import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import '../../styles/HomePage/aboutSection.css'

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver()
  const [animatedSkills, setAnimatedSkills] = useState(false)

  useEffect(() => {
    if (isVisible && !animatedSkills) {
      const timer = setTimeout(() => {
        setAnimatedSkills(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isVisible, animatedSkills])

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <div className={`animated-text ${isVisible ? 'animate' : ''}`}>
              <p>Motivated fourth-year CSE student skilled in C, Java and Python. Passionate about innovative research in Blockchain, Machine Learning and Artificial Intelligence with strong analytical abilities to contribute effectively to cutting-edge projects.</p>
            </div>
            
            <h3 className={`research-title ${isVisible ? 'animate' : ''}`}>Research Interests</h3>
            <div className="skills-list">
              {['Blockchain', 'Cyber Security', 'Machine Learning', 'Deep Learning', 'Artificial Intelligence', 'Cloud Computing', 'Health Care Technology'].map((skill, index) => (
                <span 
                  key={skill}
                  className={`skill-tag ${animatedSkills ? 'animate' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px) scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <h3 className="research-title">Academic Profiles</h3>
            <div className="academic-profiles">
              <a href="https://www.linkedin.com/in/abul-ala-moududi/" className="academic-profile-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://orcid.org/0009-0004-3433-7506" className="academic-profile-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-orcid"></i>
                <span>ORCID</span>
              </a>
              <a href="https://scholar.google.com/citations?user=ffpx0gEAAAAJ&amp;hl" className="academic-profile-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-graduation-cap"></i>
                <span>Google Scholar</span>
              </a>
              <a href="https://www.researchgate.net/profile/Abul-Ala-Moududi" className="academic-profile-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-researchgate"></i>
                <span>ResearchGate</span>
              </a>
              <a href="https://researchustad.org/team-members/68c94dc664c52c5fd198c0a7" className="academic-profile-link" target="_blank" rel="noopener noreferrer">
                <i className="research-ustad-icon"></i>
                <span>Research Ustad</span>
              </a>
            </div>
          </div>
          
          <div className="about-stats">
            <div className={`stat-card ${isVisible ? 'animate' : ''}`}>
              <div className="stat-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Education</h3>
              <p>B.Sc in Computer Science & Engineering</p>
              <p>National Institute of Textile Engineering & Research (NITER)</p>
              <p>University of Dhaka</p>
            </div>
            <div className={`stat-card ${isVisible ? 'animate' : ''}`} style={{animationDelay: '200ms'}}>
              <div className="stat-icon">
                <i className="fas fa-language"></i>
              </div>
              <h3>Language Proficiency</h3>
              <p>English (Fluent) - IELTS Band Score: 7.5</p>
              <p>Bangla (Native)</p>
              <p>German (Beginner Level)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}