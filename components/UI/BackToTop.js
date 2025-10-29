'use client'
import { useState, useEffect } from 'react'
import '../../styles/UI/backToTop.css'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div 
      className={`back-to-top ${isVisible ? 'active' : ''}`} 
      onClick={scrollToTop}
    >
      <i className="fas fa-chevron-up"></i>
    </div>
  )
}