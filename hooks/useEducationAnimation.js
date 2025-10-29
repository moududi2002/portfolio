// hooks/useEducationAnimation.js
import { useEffect, useRef } from 'react'

export const useEducationAnimation = () => {
  const animationExecuted = useRef(false)

  useEffect(() => {
    if (animationExecuted.current) return
    animationExecuted.current = true

    // Education Section Animation
    const timelineItems = document.querySelectorAll('.timeline-item')
    const skillTags = document.querySelectorAll('.skill-tag')

    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    function handleScrollAnimation() {
      timelineItems.forEach(item => {
        if (isInViewport(item)) {
          item.classList.add('active')
        }
      })

      const researchInterestsSection = document.getElementById('research-interests')
      if (researchInterestsSection && isInViewport(researchInterestsSection)) {
        skillTags.forEach(tag => {
          const delay = parseInt(tag.getAttribute('data-delay')) || 0
          setTimeout(() => {
            tag.classList.add('animate')
          }, delay)
        })
      }
    }

    // Initial check with delay
    setTimeout(handleScrollAnimation, 800)

    // Check on scroll
    window.addEventListener('scroll', handleScrollAnimation)

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation)
    }
  }, [])
}