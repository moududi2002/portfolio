'use client'
import { useState } from 'react'
import '../../styles/ProjectExperience/webProjectsSection.css'

export default function WebProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Research Ustad",
      description: "A comprehensive full-stack web platform for research collaboration using Next.js with TypeScript for frontend, and Node.js, Express.js, and MongoDB for backend development.",
      category: "fullstack",
      technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "https://www.researchustad.org",
      githubUrl: "#",
      status: "live",
      features: [
        "Research Collaboration Platform",
        "Real-time Communication",
        "Project Management",
        "User Authentication",
        "File Sharing System"
      ],
      image: "/images/projects/research-ustad.jpg"
    },
    {
      id: 2,
      title: "Sabilillah Foundation Website",
      description: "Built a full-stack charity donation website using Next.js with integrated backend features, ensuring optimized performance, responsive design, and SEO enhancement.",
      category: "fullstack",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://www.sabilillahfoundation.org",
      githubUrl: "#",
      status: "live",
      features: [
        "Charity Donation System",
        "Payment Integration",
        "Content Management",
        "SEO Optimized",
        "Responsive Design"
      ],
      image: "/images/projects/sabilillah.jpg"
    },
    {
      id: 3,
      title: "Research Ustad Joining Page",
      description: "Developed a modern, responsive, and dynamic joining application page for Research Ustad using Next.js, featuring seamless user interaction and real-time data handling.",
      category: "frontend",
      technologies: ["Next.js", "React", "CSS3", "JavaScript", "API Integration"],
      liveUrl: "https://join.researchustad.org/",
      githubUrl: "#",
      status: "live",
      features: [
        "Dynamic Application Form",
        "Real-time Validation",
        "Responsive Design",
        "Fast Performance",
        "Modern UI/UX"
      ],
      image: "/images/projects/joining-page.jpg"
    },
    {
      id: 4,
      title: "Personal Portfolio - Moududi",
      description: "Designed and developed a personal portfolio website using advanced React Framework (NextJs) and Backend NodeJS, showcasing projects, skills, and professional achievements.",
      category: "fullstack",
      technologies: ["Next.js", "React", "Node.js", "CSS3", "JavaScript"],
      liveUrl: "https://moududi.researchustad.org",
      githubUrl: "#",
      status: "live",
      features: [
        "Modern Portfolio Design",
        "Interactive UI/UX",
        "Project Showcase",
        "Contact Integration",
        "Performance Optimized"
      ],
      image: "/images/projects/portfolio-moududi.jpg"
    },
    {
      id: 5,
      title: "Personal Portfolio - Anis",
      description: "Designed and developed a personal portfolio website for the CEO of Research Ustad using advanced HTML, CSS, and JavaScript, featuring modern design principles.",
      category: "frontend",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
      liveUrl: "https://anis.researchustad.org",
      githubUrl: "#",
      status: "live",
      features: [
        "Advanced CSS Animations",
        "Responsive Layout",
        "Modern Design",
        "Fast Loading",
        "SEO Friendly"
      ],
      image: "/images/projects/portfolio-anis.jpg"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const openProjectModal = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="web-projects" className="web-projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Web-Based Projects</h2>
          <p className="section-subtitle">Modern, responsive, and functional web applications built with cutting-edge technologies</p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
              <span className="filter-count">{filter.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className={`project-card ${project.category}`}
              onClick={() => openProjectModal(project)}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="project-status">
                  <span className={`status-badge ${project.status}`}>
                    <i className="fas fa-circle"></i>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="more-features">+{project.features.length - 3} more</li>
                    )}
                  </ul>
                </div>

                <div className="project-actions">
                  <a 
                    href={project.liveUrl} 
                    className="action-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Visit Live
                  </a>
                  <button className="action-btn secondary">
                    <i className="fas fa-info-circle"></i>
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-image">
                  <div className="image-placeholder-large">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                </div>
                <div className="modal-title-section">
                  <h2>{selectedProject.title}</h2>
                  <div className="project-meta">
                    <span className={`category-badge ${selectedProject.category}`}>
                      {selectedProject.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                    </span>
                    <span className={`status-badge ${selectedProject.status}`}>
                      <i className="fas fa-circle"></i>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-description">
                  <h3>Project Description</h3>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="modal-features">
                  <h3>Key Features</h3>
                  <div className="features-grid">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-technologies">
                  <h3>Technologies Used</h3>
                  <div className="technologies-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag large">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a 
                    href={selectedProject.liveUrl} 
                    className="action-btn primary large"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Visit Live Website
                  </a>
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl} 
                      className="action-btn secondary large"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}