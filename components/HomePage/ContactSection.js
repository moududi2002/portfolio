import '../../styles/HomePage/contactSection.css'

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-layout">
          {/* Top Row: Quick Connect */}
          <div className="quick-connect-card">
            <div className="contact-card">
              <div className="contact-card-header">
                <i className="fas fa-paper-plane"></i>
                <h3>Quick Connect</h3>
                <p>Let's start a conversation</p>
              </div>
              
              <div className="contact-stats">
                <div className="contact-stat">
                  <div className="stat-number">24h</div>
                  <div className="stat-label">Response Time</div>
                </div>
                <div className="contact-stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Response Rate</div>
                </div>
              </div>
              
              <div className="contact-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Project Discussion</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Research Collaboration</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Technical Consultation</span>
                </div>
              </div>
              
              <div className="contact-actions">
                <a href="mailto:moududi2002@gmail.com" className="action-btn primary">
                  <i className="fas fa-envelope"></i>
                  Email
                </a>
                <a href="https://wa.link/twgy68" className="action-btn secondary" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp
                </a>
                <a href="tel:+8801644793189" className="action-btn primary">
                  <i className="fas fa-phone"></i>
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}