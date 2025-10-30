import AcademicAchievements from '../../components/AchievementsGallery/AcademicAchievements'
import ExtraCurricular from '../../components/AchievementsGallery/ExtraCurricular'
import ResearchPublication from '../../components/AchievementsGallery/ResearchPublication'
import AwardsSection from '../../components/AchievementsGallery/AwardsSection'
import PhotoGallery from '../../components/AchievementsGallery/PhotoGallery'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import '../../styles/AchievementsGallery/pageHeader.css'

export default function AchievementsGallery() {
  return (
    <div className="achievements-gallery-page">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Achievements & Gallery</h1>
          <p className="page-subtitle">My academic journey, research work, awards, and memorable moments</p>
        </div>
      </section>

      <Navbar />

      {/* Academic Achievements */}
      <AcademicAchievements />

      {/* Extra-curricular Achievements */}
      <ExtraCurricular />

      {/* Research & Publications */}
      <ResearchPublication />

      {/* Awards Section */}
      <AwardsSection />

      {/* Photo Gallery */}
      <PhotoGallery />
        <Footer />
    </div>
  )
}