'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../styles/navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        <Link href="/" onClick={closeMenu}>
          <Image 
            src="/images/moududilogo.png" 
            alt="Logo" 
            width={50} 
            height={50}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </Link>
        <Link href="/" className="logo" onClick={closeMenu}>Moududi<span></span></Link>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/education-research" onClick={closeMenu}>Education & Research</Link></li>
          <li><Link href="/project-experience" onClick={closeMenu}>Projects & Experience</Link></li>
          <li><Link href="/cocorricular-skills-awards" onClick={closeMenu}>Co-Curricular, Skills & Awards</Link></li>
          <li><Link href="/certifications-workshops" onClick={closeMenu}>Certifications & Workshops</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}