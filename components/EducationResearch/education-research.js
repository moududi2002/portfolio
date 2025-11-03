'use client'
import React, { useEffect } from 'react'
import '../../styles/educationResearch/education-research.css'

const EducationResearch = () => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item')
    const skillTags = document.querySelectorAll('.skill-tag')

    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      )
    }

    function handleScrollAnimation() {
      // Timeline items animation
      timelineItems.forEach(item => {
        if (isInViewport(item)) {
          item.classList.add('active')
        }
      })

      // Research interests animation - more flexible for mobile
      const researchInterestsSection = document.getElementById('research-interests')
      if (researchInterestsSection && isInViewport(researchInterestsSection)) {
        skillTags.forEach(tag => {
          const delay = parseInt(tag.getAttribute('data-delay')) || 0
          setTimeout(() => {
            tag.classList.add('animate')
          }, delay)
        })
      }
    }

    // Initial check
    handleScrollAnimation()

    // Check on scroll with throttle for better performance
    let ticking = false
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScrollAnimation()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scrollHandler)
    window.addEventListener('resize', handleScrollAnimation)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
      window.removeEventListener('resize', handleScrollAnimation)
    }
  }, [])

  return (
    <>
      {/* Education Section */}
      <section id="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <i className="fas fa-graduation-cap education-icon"></i>
                <div className="timeline-date">Feb 2022 – Present</div>
                <h3>B.Sc in Computer Science & Engineering</h3>
                <p>National Institute of Textile Engineering & Research (NITER)</p>
                <p>University of Dhaka | Dhaka, Bangladesh</p>
                <p><strong>CGPA:</strong> 3.62/4.0</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <i className="fas fa-university education-icon"></i>
                <div className="timeline-date">Aug 2018 - Jan 2021</div>
                <h3>Higher Secondary in Science</h3>
                <p>Mohipur Hazi Mohshin Govt. College</p>
                <p>Joypurhat, Rajshahi, Bangladesh</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <i className="fas fa-school education-icon"></i>
                <div className="timeline-date">Jan 2016 - June 2018</div>
                <h3>Secondary in Science</h3>
                <p>Joypurhat Siddikia Kamil Model Madrasha</p>
                <p>Joypurhat, Rajshahi, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section id="research-interests">
        <div className="container">
          <h2 className="section-title">Research Interests</h2>
          <div className="skills-list">
            <span className="skill-tag" data-delay="0">Blockchain</span>
            <span className="skill-tag" data-delay="100">Cyber Security</span>
            <span className="skill-tag" data-delay="200">Machine Learning</span>
            <span className="skill-tag" data-delay="300">Deep Learning</span>
            <span className="skill-tag" data-delay="400">Artificial Intelligence</span>
            <span className="skill-tag" data-delay="500">Cloud Computing</span>
            <span className="skill-tag" data-delay="600">Health Care Technology</span>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research">
        <div className="container">
          <h2 className="section-title">Research Experience</h2>
          <div className="research-grid">
            <div className="research-card">
              <span className="status published">Published</span>
              <h3>Comparative Analysis Based on DeepSeek, ChatGPT, and Google Gemini</h3>
              <p>Features, Techniques, Performance, Future Prospects</p>
              <a href="https://doi.org/10.48550/arXiv.2503.04783" style={{marginTop: '15px', display: 'inline-block'}}>
                <i className="fas fa-external-link-alt"></i> View Paper
              </a>
            </div>
            <div className="research-card">
              <span className="status submitted">Submitted</span>
              <h3>LSTM-Integrated Model for Sentiment Analysis</h3>
              <p>Combining BoW, TF-IDF Features, and Performance Analysis of Conventional Machine Learning Models</p>
            </div>
            <div className="research-card">
              <span className="status ongoing">Ongoing</span>
              <h3>Brain Tumor Detection in MRI Images</h3>
              <p>Developing an optimized machine learning model aimed at enhancing diagnostic accuracy in brain tumor detection using advanced Machine Learning techniques.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EducationResearch