// components/ProjectExperience/ProjectsSection.js
import React from 'react';
import '../../styles/ProjectExperience/projects.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      icon: 'fas fa-coffee',
      title: 'Tea Shop Ordering System (Python)',
      description: 'Developed a comprehensive Tea Shop Ordering System implementing 8 key Design Patterns with a user-friendly CLI interface for interactive order customization.',
      tags: ['Python', 'OOP', 'Design Patterns', 'CLI', 'System Design'],
      details: 'Design Patterns Implemented: • Template • Strategy • Proxy • Composite • Adapter • Builder • Singleton • Factory'
    },
    {
      id: 2,
      icon: 'fas fa-database',
      title: 'Talenttown Software',
      description: 'A DBMS & Web Application Software Project developed using MySQL for backend management and Python integrated with Selenium for automated testing scripts.',
      tags: ['MySQL', 'Python', 'Selenium', 'Web Application']
    },
    {
      id: 3,
      icon: 'fas fa-shield-alt',
      title: 'Police Record Management System',
      description: 'A DBMS project storing and retrieving data in Database using MySQL for secure record management, with Python for backend processing and Java for user interface.',
      tags: ['MySQL', 'Python', 'Java', 'Database']
    },
    {
      id: 4,
      icon: 'fas fa-utensils',
      title: 'Petuk (Smart Food Recipe App)',
      description: 'An Android application using Java in Android Studio, featuring advanced recipe management and search functionalities for seamless user experience.',
      tags: ['Android', 'Java', 'Android Studio', 'Mobile App']
    },
    {
      id: 5,
      icon: 'fas fa-mobile-alt',
      title: 'NCC App (Club Management Application)',
      description: 'Built a cross-platform club management application using Flutter, streamlining user registration, event scheduling, and communication processes.',
      tags: ['Flutter', 'Cross-Platform', 'Mobile App', 'Club Management']
    },
    {
      id: 6,
      icon: 'fas fa-tint',
      title: 'Smart Irrigation & Water Management System',
      description: 'Developed an IoT-based system using ESP-32 and Arduino UNO to automate plant watering and water pump control, ensuring efficient water usage through real-time soil moisture and water level detection.',
      tags: ['IoT', 'ESP-32', 'Arduino', 'Automation', 'Sensor']
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title" style={{marginTop: '20px'}}>Academic Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-img">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                {project.details && (
                  <div style={{marginTop: '15px', fontSize: '0.9rem', color: '#666'}}>
                    <strong>{project.details.split(':')[0]}:</strong><br />
                    {project.details.split(':')[1]}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;