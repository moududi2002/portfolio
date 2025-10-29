// components/CertificationsWorkshops/CertificationsSection.js
'use client';
import React, { useEffect } from 'react';
import '../../styles/CertificationsWorkshops/certifications.css';

const CertificationsSection = () => {
  useEffect(() => {
    const certificationSection = document.getElementById('certifications');
    const certificationCards = document.querySelectorAll('.certification-card');
    
    function animateCertificationCards() {
      const sectionPos = certificationSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (sectionPos.top < windowHeight - 100) {
        certificationCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate');
          }, index * 200);
        });
        
        window.removeEventListener('scroll', animateCertificationCards);
      }
    }

    setTimeout(animateCertificationCards, 1000);
    window.addEventListener('scroll', animateCertificationCards);

    // Add click event for certificate links
    document.querySelectorAll('.btn.view-certificate:not(.disabled)').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('View certificate clicked');
      });
    });

    return () => {
      window.removeEventListener('scroll', animateCertificationCards);
    };
  }, []);

  const certifications = [
    {
      id: 1,
      icon: 'fas fa-graduation-cap',
      title: 'Machine Learning Specialization',
      org: 'Stanford University - Coursera',
      date: 'Issued: June 2024',
      status: 'completed',
      skills: ['Python', 'TensorFlow', 'Neural Networks']
    },
    {
      id: 2,
      icon: 'fas fa-code',
      title: 'Full Stack Web Development',
      org: 'University of Michigan - edX',
      date: 'Issued: April 2024',
      status: 'completed',
      skills: ['JavaScript', 'React', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      icon: 'fas fa-shield-alt',
      title: 'Cybersecurity Fundamentals',
      org: 'IBM - Coursera',
      date: 'Expected: December 2024',
      status: 'in-progress',
      skills: ['Network Security', 'Cryptography', 'Ethical Hacking']
    },
    {
      id: 4,
      icon: 'fas fa-cloud',
      title: 'AWS Cloud Practitioner',
      org: 'Amazon Web Services',
      date: 'Issued: March 2024',
      status: 'completed',
      skills: ['Cloud Computing', 'AWS Services', 'Infrastructure']
    },
    {
      id: 5,
      icon: 'fas fa-database',
      title: 'Data Science Professional',
      org: 'Johns Hopkins University',
      date: 'Issued: February 2024',
      status: 'completed',
      skills: ['R Programming', 'Data Analysis', 'Statistics']
    },
    {
      id: 6,
      icon: 'fas fa-robot',
      title: 'Deep Learning Specialization',
      org: 'deeplearning.ai',
      date: 'Issued: January 2024',
      status: 'completed',
      skills: ['Deep Learning', 'CNN', 'RNN', 'TensorFlow']
    }
  ];

  return (
    <section id="certifications">
      <div className="container">
        <h2 className="section-title" style={{marginTop: '15px'}}>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map(cert => (
            <div key={cert.id} className="certification-card">
              <div className="certification-header">
                <div className="certification-icon">
                  <i className={cert.icon}></i>
                </div>
                <div className="certification-badge">
                  <span className={`status-badge ${cert.status}`}>
                    {cert.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <p className="certification-org">{cert.org}</p>
                <p className="certification-date">{cert.date}</p>
                <div className="certification-skills">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="certification-actions">
                <a 
                  href="#" 
                  className={`btn view-certificate ${cert.status === 'in-progress' ? 'disabled' : ''}`}
                >
                  <i className={cert.status === 'in-progress' ? 'fas fa-clock' : 'fas fa-external-link-alt'}></i>
                  {cert.status === 'in-progress' ? 'In Progress' : 'View Certificate'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;