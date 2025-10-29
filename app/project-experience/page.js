
import React, { use } from 'react';
import ProjectsSection from '../../components/ProjectExperience/ProjectsSection';
import ExperienceSection from '../../components/ProjectExperience/ExperienceSection';
import Navbar from '../../components/Navbar'; 
import Footer from '../../components/Footer';
import '../../styles/ProjectExperience/common.css';

export default function ProjectExperiencePage() {
  return (
    <div className="project-experience-page">
      <Navbar />
      <ProjectsSection />
      <ExperienceSection />
        <Footer />
    </div>
  );
}