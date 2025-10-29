// components/ProjectExperience/ExperienceSection.js
import React from 'react';
import '../../styles/ProjectExperience/experience.css';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Assistant Teacher (Science)',
      date: 'Jun 2025 - Present',
      company: 'Hazi Jan Mohammad High School',
      responsibilities: [
        'Conduct engaging science classes following the national curriculum',
        'Prepare lesson plans and assessment materials',
        'Encourage scientific thinking through extracurricular activities'
      ]
    },
    {
      id: 2,
      title: 'Executive Director & Moderator',
      date: 'Dec 2024 - Present',
      company: 'Research Ustad',
      responsibilities: [
        'Managed and collaborated with research teams',
        'Conducted workshops and courses for students',
        'Managed social media presence and engagement'
      ]
    },
    {
      id: 3,
      title: 'Head of IT & Co-Founder',
      date: 'Aug 2024 - Present',
      company: 'Warishaan Apparels Limited',
      responsibilities: [
        'Directed comprehensive IT operations',
        'Ensured network security and system integration',
        'Supervised IT team operations and troubleshooting'
      ]
    },
    {
      id: 4,
      title: 'Field Supervisor (TAP Application)',
      date: 'May 2021 - Sep 2021',
      company: 'Mutual Trust Bank (MTB), Joypurhat, Rajshahi, Bangladesh',
      responsibilities: [
        'Team Management: Supervised and coordinated a team of 100 individuals, ensuring efficient workflow, task delegation, and adherence to organizational goals.',
        'Operational Oversight: Ensured smooth execution of the TAP application process, overseeing daily operations, and resolving any challenges or issues arising in the field.',
        'Guidance and Training: Provided guidance and on-the-job training to team members, ensuring that they were well equipped to meet performance standards and comply with banking protocols.'
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-grid">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <div className="experience-date">{exp.date}</div>
              </div>
              <h4>{exp.company}</h4>
              <ul>
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;