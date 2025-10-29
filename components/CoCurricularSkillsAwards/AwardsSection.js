// components/CoCurricularSkillsAwards/AwardsSection.js
import React from 'react';
import '../../styles/CoCurricularSkillsAwards/awards.css';

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      icon: 'fas fa-trophy',
      title: '2nd Position: Open Book Quiz Contest',
      description: 'Organized by the NITER Islamic Society',
      year: '2024'
    },
    {
      id: 2,
      icon: 'fas fa-award',
      title: 'Best Volunteer Award',
      description: 'The Student Welfare Association Savar',
      year: '2024'
    },
    {
      id: 3,
      icon: 'fas fa-medal',
      title: '1st Position: Associate Intellectual Test',
      description: 'Organized by BICS',
      year: '2023'
    },
    {
      id: 4,
      icon: 'fas fa-trophy',
      title: '1st Position: Islamic Quiz Contest',
      description: 'Organized by NITER Islamic Society',
      year: '2023'
    },
    {
      id: 5,
      icon: 'fas fa-medal',
      title: '1st Position: Associate Intellectual Test',
      description: 'Organized by BICS',
      year: '2022'
    },
    {
      id: 6,
      icon: 'fas fa-graduation-cap',
      title: 'DU Full Funded Scholarship',
      description: 'For Private Constituent Institutions of the University of Dhaka',
      year: '2022'
    }
  ];

  return (
    <section id="awards">
      <div className="container">
        <h2 className="section-title">Awards & Prizes</h2>
        <div className="awards-grid">
          {awards.map(award => (
            <div key={award.id} className="award-card">
              <div className="award-icon">
                <i className={award.icon}></i>
              </div>
              <div className="award-content">
                <h3>{award.title}</h3>
                <p>{award.description}</p>
                <div className="award-year">{award.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;