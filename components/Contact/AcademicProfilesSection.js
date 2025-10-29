// components/Contact/AcademicProfilesSection.js
'use client';
import React, { useEffect } from 'react';
import '../../styles/Contact/academicProfiles.css';

const AcademicProfilesSection = () => {
  useEffect(() => {
    const profileItems = document.querySelectorAll('.academic-profile-item');
    const modal = document.getElementById('profile-modal');
    const closeModal = document.querySelector('.close-modal');

    // Profile data
    const profileData = {
      'linkedin': {
        title: 'LinkedIn Profile',
        description: 'Connect with me on LinkedIn for professional networking and career opportunities.',
        icon: '<i class="fab fa-linkedin"></i>',
        link: 'https://www.linkedin.com/in/abul-ala-moududi/',
        stats: {
          stat1: { number: '500+', label: 'Connections' },
          stat2: { number: '50+', label: 'Endorsements' },
          stat3: { number: '10+', label: 'Skills' }
        }
      },
      'orcid': {
        title: 'ORCID Profile',
        description: 'My unique researcher identifier linking my research activities and outputs.',
        icon: '<i class="fab fa-orcid"></i>',
        link: 'https://orcid.org/0009-0004-3433-7506',
        stats: {
          stat1: { number: '3', label: 'Works' },
          stat2: { number: '2', label: 'Research' },
          stat3: { number: '1', label: 'Education' }
        }
      },
      'google-scholar': {
        title: 'Google Scholar',
        description: 'Explore my research publications, citations, and academic contributions.',
        icon: '<i class="fas fa-graduation-cap"></i>',
        link: 'https://scholar.google.com/citations?user=ffpx0gEAAAAJ&hl',
        stats: {
          stat1: { number: '2', label: 'Papers' },
          stat2: { number: '15+', label: 'Citations' },
          stat3: { number: '2024', label: 'h-index' }
        }
      },
      'researchgate': {
        title: 'ResearchGate',
        description: 'Join me on ResearchGate for scientific collaboration and knowledge sharing.',
        icon: '<i class="fab fa-researchgate"></i>',
        link: 'https://www.researchgate.net/profile/Abul-Ala-Moududi',
        stats: {
          stat1: { number: '85', label: 'Reads' },
          stat2: { number: '3', label: 'Publications' },
          stat3: { number: '10+', label: 'Followers' }
        }
      },
      'research-ustad': {
        title: 'Research Ustad',
        description: 'Member of Research Ustad community for research guidance and mentorship.',
        icon: '<i class="research-ustad-icon"></i>',
        link: 'https://researchustad.org/team-members/68c94dc664c52c5fd198c0a7',
        stats: {
          stat1: { number: 'Active', label: 'Status' },
          stat2: { number: 'Team', label: 'Member' },
          stat3: { number: '2024', label: 'Joined' }
        }
      }
    };

    // Open modal on profile item click
    profileItems.forEach(item => {
      item.addEventListener('click', function() {
        const profileType = this.getAttribute('data-profile');
        const data = profileData[profileType];
        
        if (data) {
          document.getElementById('modal-icon').innerHTML = data.icon;
          document.getElementById('modal-title').textContent = data.title;
          document.getElementById('modal-description').textContent = data.description;
          const modalLink = document.getElementById('modal-link');
          modalLink.href = data.link;
          modalLink.setAttribute('target', '_blank');
          
          // Update stats
          document.getElementById('stat-1').textContent = data.stats.stat1.number;
          document.getElementById('stat-label-1').textContent = data.stats.stat1.label;
          document.getElementById('stat-2').textContent = data.stats.stat2.number;
          document.getElementById('stat-label-2').textContent = data.stats.stat2.label;
          document.getElementById('stat-3').textContent = data.stats.stat3.number;
          document.getElementById('stat-label-3').textContent = data.stats.stat3.label;
          
          modal.style.display = 'block';
          document.body.style.overflow = 'hidden';
        }
      });
    });

    // Close modal
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });

    return () => {
      window.removeEventListener('click', () => {});
      document.removeEventListener('keydown', () => {});
    };
  }, []);

  const profiles = [
    {
      id: 'linkedin',
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      description: 'Professional Network'
    },
    {
      id: 'orcid',
      icon: 'fab fa-orcid',
      title: 'ORCID',
      description: 'Research Identifier'
    },
    {
      id: 'google-scholar',
      icon: 'fas fa-graduation-cap',
      title: 'Google Scholar',
      description: 'Research Publications'
    },
    {
      id: 'researchgate',
      icon: 'fab fa-researchgate',
      title: 'ResearchGate',
      description: 'Research Collaboration'
    },
    {
      id: 'research-ustad',
      icon: 'research-ustad-icon',
      title: 'Research Ustad',
      description: 'Research Community'
    }
  ];

  return (
    <section id="academic-profiles">
      <div className="container">
        <h2 className="section-title">Academic Profiles</h2>
        <div className="academic-profiles">
          {profiles.map(profile => (
            <div key={profile.id} className="academic-profile-item" data-profile={profile.id}>
              <div className="profile-icon">
                <i className={profile.icon}></i>
              </div>
              <h3>{profile.title}</h3>
              <p>{profile.description}</p>
              <button className="btn view-profile-btn">View Profile</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Structure */}
      <div id="profile-modal" className="modal">
        <div className="modal-content">
          <span className="close-modal">&times;</span>
          <div className="modal-header">
            <div className="modal-icon" id="modal-icon"></div>
            <h2 id="modal-title">Profile Details</h2>
          </div>
          <div className="modal-body">
            <p id="modal-description"></p>
            <div className="modal-stats">
              <div className="stat">
                <span className="stat-number" id="stat-1">0</span>
                <span className="stat-label" id="stat-label-1">Connections</span>
              </div>
              <div className="stat">
                <span className="stat-number" id="stat-2">0</span>
                <span className="stat-label" id="stat-label-2">Publications</span>
              </div>
              <div className="stat">
                <span className="stat-number" id="stat-3">0</span>
                <span className="stat-label" id="stat-label-3">Projects</span>
              </div>
            </div>
            <a href="#" id="modal-link" className="btn modal-btn" target="_blank">Visit Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicProfilesSection;