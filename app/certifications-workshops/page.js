// app/certifications-workshops/page.js
import React from 'react';
import CertificationsSection from '../../components/CertificationsWorkshops/CertificationsSection';
import WorkshopsSection from '../../components/CertificationsWorkshops/WorkshopsSection';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CertificationsWorkshopsPage() {
  return (
    <div className="certifications-workshops-page">
        <Navbar />
      <CertificationsSection />
      <WorkshopsSection />
        <Footer />
    </div>
  );
}