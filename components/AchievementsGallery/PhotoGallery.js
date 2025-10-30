'use client'
import { useState } from 'react'
import '../../styles/AchievementsGallery/photoGallery.css'

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryCategories = [
    {
      id: 'academic',
      title: 'Academic Life',
      photos: [
        {
          id: 1,
          src: '/images/gallery/academic-1.jpg',
          title: 'University Campus',
          description: 'Beautiful campus of University of Dhaka',
          category: 'academic'
        },
        {
          id: 2,
          src: '/images/gallery/academic-2.jpg',
          title: 'Study Session',
          description: 'Deep focus during study hours',
          category: 'academic'
        },
        {
          id: 3,
          src: '/images/gallery/academic-3.jpg',
          title: 'Lab Work',
          description: 'Working on computer science projects',
          category: 'academic'
        }
      ]
    },
    {
      id: 'research',
      title: 'Research Activities',
      photos: [
        {
          id: 4,
          src: '/images/gallery/research-1.jpg',
          title: 'Research Presentation',
          description: 'Presenting research findings',
          category: 'research'
        },
        {
          id: 5,
          src: '/images/gallery/research-2.jpg',
          title: 'Team Collaboration',
          description: 'Working with research team members',
          category: 'research'
        },
        {
          id: 6,
          src: '/images/gallery/research-3.jpg',
          title: 'Conference Participation',
          description: 'Attending international conference',
          category: 'research'
        }
      ]
    },
    {
      id: 'personal',
      title: 'Personal Moments',
      photos: [
        {
          id: 7,
          src: '/images/gallery/personal-1.jpg',
          title: 'Outdoor Activity',
          description: 'Enjoying nature and outdoor sports',
          category: 'personal'
        },
        {
          id: 8,
          src: '/images/gallery/personal-2.jpg',
          title: 'Travel Experience',
          description: 'Exploring new places and cultures',
          category: 'personal'
        },
        {
          id: 9,
          src: '/images/gallery/personal-3.jpg',
          title: 'Creative Hobbies',
          description: 'Pursuing creative interests and hobbies',
          category: 'personal'
        }
      ]
    },
    {
      id: 'achievements',
      title: 'Achievement Moments',
      photos: [
        {
          id: 10,
          src: '/images/gallery/achievement-1.jpg',
          title: 'Award Ceremony',
          description: 'Receiving academic excellence award',
          category: 'achievements'
        },
        {
          id: 11,
          src: '/images/gallery/achievement-2.jpg',
          title: 'Certificate Distribution',
          description: 'Getting recognized for achievements',
          category: 'achievements'
        },
        {
          id: 12,
          src: '/images/gallery/achievement-3.jpg',
          title: 'Project Showcase',
          description: 'Demonstrating completed projects',
          category: 'achievements'
        }
      ]
    }
  ]

  const openModal = (photo) => {
    setSelectedImage(photo)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    if (!selectedImage) return

    const allPhotos = galleryCategories.flatMap(cat => cat.photos)
    const currentIndex = allPhotos.findIndex(photo => photo.id === selectedImage.id)
    
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % allPhotos.length
      setSelectedImage(allPhotos[nextIndex])
    } else {
      const prevIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length
      setSelectedImage(allPhotos[prevIndex])
    }
  }

  return (
    <section id="photo-gallery" className="photo-gallery-section">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>
        <p className="gallery-description">
          Capturing memorable moments from my academic journey, research work, and personal life
        </p>

        {galleryCategories.map((category) => (
          <div key={category.id} className="gallery-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="gallery-grid">
              {category.photos.map((photo) => (
                <div 
                  key={photo.id} 
                  className="gallery-item"
                  onClick={() => openModal(photo)}
                >
                  <div className="photo-placeholder">
                    <i className="fas fa-image"></i>
                    <span className="photo-title">{photo.title}</span>
                  </div>
                  <div className="photo-overlay">
                    <div className="overlay-content">
                      <h4>{photo.title}</h4>
                      <p>{photo.description}</p>
                      <button className="view-btn">
                        <i className="fas fa-expand"></i>
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <button className="modal-nav modal-prev" onClick={() => navigateImage('prev')}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="modal-image">
              <div className="image-placeholder-large">
                <i className="fas fa-image"></i>
                <p>{selectedImage.title}</p>
              </div>
              <div className="image-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
            
            <button className="modal-nav modal-next" onClick={() => navigateImage('next')}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}