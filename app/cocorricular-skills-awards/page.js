// app/cocorricular-skills-awards/page.js
import React from 'react';
import CoCurricularSection from '../../components/CoCurricularSkillsAwards/CoCurricularSection';
import SkillsSection from '../../components/CoCurricularSkillsAwards/SkillsSection';
import AwardsSection from '../../components/CoCurricularSkillsAwards/AwardsSection';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/CoCurricularSkillsAwards/common.css';

export default function CoCurricularSkillsAwardsPage() {
  return (
    <div className="co-curricular-skills-awards-page">
        <Navbar />
      <CoCurricularSection />
      <SkillsSection />
      <AwardsSection />
        <Footer />
    </div>
  );
}