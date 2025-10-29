// components/CoCurricularSkillsAwards/CoCurricularSection.js
'use client';
import React, { useEffect } from 'react';
import '../../styles/CoCurricularSkillsAwards/coCurricular.css';

const CoCurricularSection = () => {
  useEffect(() => {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const activityCards = document.querySelectorAll('.activity-card');
    
    if (filterButtons.length > 0) {
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          const filterValue = this.getAttribute('data-filter');
          
          // Filter cards
          activityCards.forEach(card => {
            if (filterValue === 'all') {
              card.style.display = 'flex';
            } else {
              const categories = card.getAttribute('data-category').split(' ');
              if (categories.includes(filterValue)) {
                card.style.display = 'flex';
              } else {
                card.style.display = 'none';
              }
            }
          });
        });
      });
    }

    // Animation for activities
    function animateActivities() {
      activityCards.forEach((card, index) => {
        const cardPos = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardPos < windowHeight - 100) {
          setTimeout(() => {
            card.classList.add('animate');
          }, index * 150);
        }
      });
    }

    // Initial animation
    setTimeout(animateActivities, 500);
    
    // Animate on scroll
    window.addEventListener('scroll', animateActivities);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateActivities);
    };
  }, []);

  const activities = [
    {
      id: 1,
      icon: 'fas fa-user-graduate',
      title: 'Invigilator - SSC Exam 2025',
      org: 'Boards of Intermediate and Secondary Education (BISE)',
      date: 'April 2025',
      status: 'running',
      description: 'The SSC (Secondary School Certificate) exam in Bangladesh is a public exam administered by the government. It\'s a crucial exam for students completing their 10th grade and is the equivalent of O-Levels in the UK.',
      highlights: [
        'Supervising examination halls',
        'Ensuring exam integrity and security',
        'Assisting with exam logistics'
      ],
      tags: ['Education', 'Government'],
      categories: ['education', 'current']
    },
    {
      id: 2,
      icon: 'fas fa-tasks',
      title: 'Assistant Exam Controller',
      org: 'The Student Welfare Association Savar',
      date: 'Jan 2023',
      status: 'running',
      description: 'Conducting 02 yearly scholarship exams where more than 4 thousand students attend every year.',
      highlights: [
        'Organizing large-scale scholarship exams',
        'Managing exam logistics and coordination',
        'Supervising exam administration'
      ],
      tags: ['Leadership', 'Education'],
      categories: ['leadership', 'current']
    },
    {
      id: 3,
      icon: 'fas fa-laptop-code',
      title: 'Campus Ambassador',
      org: 'ICT Olympiad Bangladesh, Season 2',
      date: 'Aug 2024',
      status: 'running',
      description: 'Bangladesh\'s premier and most impactful annual ICT Olympiad, bringing together students in a celebration of innovation and excellence.',
      highlights: [
        'Promoting ICT education and competitions',
        'Engaging student community',
        'Facilitating participation in olympiad'
      ],
      tags: ['Technology', 'Ambassador'],
      categories: ['tech', 'current']
    },
    {
      id: 4,
      icon: 'fas fa-users',
      title: 'Organizing Secretary',
      org: 'NITER Computer Club (NCC)',
      date: '2024 - 25 Session',
      status: 'past',
      description: 'Fosters innovation and hands-on learning in Computer Science and Engineering through workshops, competitions, and collaborative projects.',
      highlights: [
        'Organizing technical workshops and events',
        'Coordinating club activities and projects',
        'Promoting computer science education'
      ],
      tags: ['Leadership', 'Technology'],
      categories: ['leadership']
    },
    {
      id: 5,
      icon: 'fas fa-hands-helping',
      title: 'General Member',
      org: 'NITER Islamic Society (NIS)',
      date: '2022',
      status: 'running',
      description: 'Organized events fostering spiritual growth and community outreach, including workshops, discussions, and charity drives, enhancing campus engagement.',
      highlights: [
        'Participating in community service projects',
        'Organizing spiritual and educational events',
        'Contributing to charity initiatives'
      ],
      tags: ['Community', 'Leadership'],
      categories: ['leadership', 'current']
    },
    {
      id: 6,
      icon: 'fas fa-medal',
      title: 'District Admin Manager',
      org: 'ICT Olympiad Bangladesh, Season 1',
      date: 'Apr 2022 - Nov 2023',
      status: 'past',
      description: 'Bangladesh\'s premier and most impactful annual ICT Olympiad, bringing together students in a celebration of innovation and excellence.',
      highlights: [
        'Managing district-level operations',
        'Coordinating with educational institutions',
        'Overseeing participant registration'
      ],
      tags: ['Technology', 'Management'],
      categories: ['tech']
    },
    {
      id: 7,
      icon: 'fas fa-chalkboard-teacher',
      title: 'Private Tutor',
      org: 'Self-Employed',
      date: 'Jun 2019',
      status: 'running',
      description: 'Providing personalized home tuition to students from Grade 4 to Grade 12, focusing on conceptual understanding and academic improvement.',
      highlights: [
        'Science, Physics, Chemistry',
        'ICT',
        'General & Higher Mathematics',
        'English'
      ],
      tags: ['Education', 'Teaching'],
      categories: ['education', 'current']
    }
  ];

  return (
    <section id="co-curricular">
      <div className="container">
        <h2 className="section-title">Co-Curricular Activities</h2>
        
        <div className="activities-container">
          {/* Filter Buttons */}
          <div className="activities-filter">
            <button className="filter-btn active" data-filter="all">All Activities</button>
            <button className="filter-btn" data-filter="leadership">Leadership</button>
            <button className="filter-btn" data-filter="education">Education</button>
            <button className="filter-btn" data-filter="tech">Technology</button>
            <button className="filter-btn" data-filter="current">Current</button>
          </div>
          
          {/* Activities Grid */}
          <div className="activities-grid">
            {activities.map(activity => (
              <div 
                key={activity.id} 
                className="activity-card" 
                data-category={activity.categories.join(' ')}
              >
                <div className="activity-header">
                  <div className="activity-icon">
                    <i className={activity.icon}></i>
                  </div>
                  <h3 className="activity-title">{activity.title}</h3>
                  <div className="activity-org">{activity.org}</div>
                  <div className="activity-date">
                    {activity.date} 
                    <span className={`activity-status status-${activity.status}`}>
                      {activity.status === 'running' ? 'Running' : 'Past'}
                    </span>
                  </div>
                </div>
                <div className="activity-body">
                  <p className="activity-description">{activity.description}</p>
                  <div className="activity-highlights">
                    <div className="highlight-title">
                      {activity.id === 7 ? 'Subjects Taught:' : 'Key Responsibilities:'}
                    </div>
                    <ul className="highlight-list">
                      {activity.highlights.map((highlight, index) => (
                        <li key={index} className="highlight-item">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="activity-footer">
                  <div className="activity-tags">
                    {activity.tags.map((tag, index) => (
                      <span key={index} className="activity-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoCurricularSection;