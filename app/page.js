import Navbar from '../components/Navbar'
import HeaderSection from '../components/HomePage/HeaderSection'
import AboutSection from '../components/HomePage/AboutSection'
import ExpertiseSection from '../components/HomePage/ExpertiseSection'
import PersonalDetailsSection from '../components/HomePage/PersonalDetailsSection'
import ContactSection from '../components/HomePage/ContactSection'
import Footer from '../components/Footer'
import BackToTop from '../components/UI/BackToTop'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <AboutSection />
      <ExpertiseSection />
      <PersonalDetailsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </>
  )
}