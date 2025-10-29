// app/contact/page.js
import React from 'react';
import AcademicProfilesSection from '../../components/Contact/AcademicProfilesSection';
import ContactSection from '../../components/Contact/ContactSection';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <div className="contact-page">
        <Navbar />
      <AcademicProfilesSection />
      <ContactSection />
        <Footer />
    </div>
  );
}