// components/CoCurricularSkillsAwards/SkillsSection.js
import React from 'react';
import '../../styles/CoCurricularSkillsAwards/skills.css';

const SkillsSection = () => {
  const skills = {
    programming: [
      { name: 'C', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'Python', level: 75 }
    ],
    web: [
      { name: 'HTML/CSS', level: 70 },
      { name: 'MySQL', level: 75 },
      { name: 'Git/GitHub', level: 80 }
    ],
    soft: [
      { name: 'Problem-Solving', level: 90 },
      { name: 'Leadership', level: 85 },
      { name: 'Communication', level: 80 }
    ]
  };

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            {skills.programming.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-name">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-level" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skill-category">
            <h3>Web Technologies</h3>
            {skills.web.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-name">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-level" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skill-category">
            <h3>Soft Skills</h3>
            {skills.soft.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-name">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-level" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;