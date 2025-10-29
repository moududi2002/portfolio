import Image from 'next/image'
import Link from 'next/link'
import '../../styles/HomePage/headerSection.css'

export default function HeaderSection() {
  return (
    <header id="home">
      <div className="container">
        <div className="header-content">
          <div className="profile-img">
            <Image 
              src="/images/moududi (2).jpeg" 
              alt="MD Abul Ala Moududi" 
              width={200}
              height={200}
              style={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: '50%', 
                objectFit: 'cover', 
                display: 'block' 
              }}
            />
          </div>
          <h1>MD Abul Ala Moududi</h1>
          <h2>Undergraduate CSE Student | Research Enthusiast | ML & AI Learner</h2>
          <div className="h-contact-info">
            <div className="h-contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:moududi2002@gmail.com"><strong>moududi2002@gmail.com</strong></a>
            </div>
            <div className="h-contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+8801644793189"><strong>+8801644-793189</strong></a>
            </div>
            <div className="h-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Savar, Dhaka, Bangladesh</span>
            </div>
          </div>
          <div style={{marginTop: '30px'}}>
            <Link href="#contact" className="btn">Get In Touch</Link>
          </div>
        </div>
      </div>
    </header>
  )
}