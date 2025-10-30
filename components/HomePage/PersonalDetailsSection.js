import '../../styles/HomePage/personalDetailsSection.css'



export default function PersonalDetailsSection() {
  return (
    <section id="personal-details">
      <div className="container">
        <h2 className="section-title">Personal Details</h2>
        
        <div className="personal-details-container">
          {/* Profile Header */}
          <div className="profile-header">
            <div className="profile-avatar">
              <i className="fas fa-user"></i>
            </div>
            <h3>Abul Ala Moududi</h3>
            <p>Computer Science & Engineering Student</p>
          </div>

          {/* Details Grid */}
          <div className="details-grid">
            {/* Left Column */}
            <div className="details-column">
              <div className="detail-card">
                <div className="detail-item">
                  <span className="detail-label">Father's Name</span>
                  <span className="detail-value">Abdul Mabud</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-item">
                  <span className="detail-label">Mother's Name</span>
                  <span className="detail-value">Mahfuja Begum</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-item">
                  <span className="detail-label">Date of Birth</span>
                  <span className="detail-value">April 2002</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-item">
                  <span className="detail-label">Nationality</span>
                  <span className="detail-value">Bangladeshi (by birth)</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-item">
                  <span className="detail-label">Religion</span>
                  <span className="detail-value">Islam</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="details-column">
              <div className="detail-card">
                <div className="detail-item">
                  <span className="detail-label">Marital Status</span>
                  <span className="detail-value">Unmarried</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-item">
                  <span className="detail-label">Height & Weight</span>
                  <span className="detail-value">5' 5" & 53 Kg</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-item">
                  <span className="detail-label">Blood Group</span>
                  <span className="detail-value">O (+ve)</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-item">
                  <span className="detail-label">Academic Status</span>
                  <span className="detail-value">Ongoing B.Sc in CSE at University of Dhaka</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-item">
                  <span className="detail-label">Bank Information</span>
                  <span className="detail-value">Islami Bank Bangladesh PLC</span>
                </div>
              </div>

            </div>
          </div>

          {/* Address Section */}
          <div className="address-section">
            <div className="detail-card">
              <div className="address-grid">
                <div className="detail-item">
                  <span className="detail-label">
                    <i className="fas fa-home"></i>Permanent Address
                  </span>
                  <span className="detail-value">
                    Vill: Billah, Post: Chalkvarunia<br />
                    Postal Code: 5900<br />
                    Upozela: Joypurhat Sadar<br />
                    Dist: Joypurhat
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">
                    <i className="fas fa-map-marker-alt"></i>Present Address
                  </span>
                  <span className="detail-value">
                    Niribili, Nabinagar<br />
                    Savar, Dhaka-1340
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}