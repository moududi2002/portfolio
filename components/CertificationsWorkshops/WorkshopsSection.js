// components/CertificationsWorkshops/WorkshopsSection.js
import React from 'react';
import '../../styles/CertificationsWorkshops/workshops.css';

const WorkshopsSection = () => {
  const workshops = [
    {
      id: 1,
      title: 'WRITING RESEARCH ARTICLES AND PUBLICATIONS WORKSHOP',
      description: 'Conduct by Research and Integrated Thought Ltd. (RIT)'
    },
    {
      id: 2,
      title: 'WEB APPLICATION DEVELOPMENT WORKSHOP',
      description: 'Conduct by Mr. Md Sahal, Associate Software Engineer Brain Station 23 PLC'
    },
    {
      id: 3,
      title: 'Web and Software Development Seminar',
      description: 'Conduct by ANISUL ISLAM, Full Stack Trainer and Software Engineer'
    },
    {
      id: 4,
      title: 'Basic IOT and Robotics Workshop',
      description: 'Conduct by Bangladesh Flying Labs'
    }
  ];

  return (
    <section id="workshops">
      <div className="container">
        <h2 className="section-title">Workshops & Seminars</h2>
        <div className="workshop-grid">
          {workshops.map(workshop => (
            <div key={workshop.id} className="workshop-card">
              <h3>{workshop.title}</h3>
              <p>{workshop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;