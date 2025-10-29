'use client'
import { useState, useEffect } from 'react'

export function useScrollAnimation(threshold = 100) {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about')
      if (element) {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        
        if (elementTop < windowHeight - threshold) {
          setIsAnimated(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isAnimated
}