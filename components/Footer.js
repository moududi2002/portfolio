import Link from 'next/link'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Abul Ala Moududi</h3>
            <p style={{textAlign: 'justify'}}>Undergraduate CSE Student | Researcher | Tech Enthusiast passionate about AI, ML, Cybersecurity, and Innovative Solutions.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="/education-research">Education & Research</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="footer-links footer-contact">
              <li><i className="fas fa-phone"></i> <a href="tel:+8801644-793189">+8801644-793189</a></li>
              <li><i className="fas fa-envelope"></i> <a href="mailto:moududi2002@gmail.com">moududi2002@gmail.com</a></li>
              <li><i className="fas fa-map-marker-alt"></i> Savar, Dhaka, Bangladesh</li>
            </ul>
            <div className="social-links">
              <a href="https://www.facebook.com/abul.ala.moududi.98" target="_blank" className="social-link" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/abul_ala_moududi" target="_blank" className="social-link" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://x.com/moududi2002" target="_blank" className="social-link" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/abul-ala-moududi/" target="_blank" className="social-link" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.link/twgy68" target="_blank" className="social-link" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://t.me/moududi2002" target="_blank" className="social-link" rel="noopener noreferrer">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Abul Ala Moududi. All Rights Reserved. | Last updated in September 2025</p>
        </div>
      </div>
    </footer>
  )
}