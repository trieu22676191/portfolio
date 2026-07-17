import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../../data/projectsData';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (showGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [showGallery]);

  if (!project) {
    return (
      <section className="project-detail-section">
        <div className="container" style={{ textAlign: 'center', paddingTop: '10rem' }}>
          <h2>Project Not Found</h2>
          <button className="btn btn-primary" onClick={() => navigate('/project')} style={{ marginTop: '2rem' }}>
            Back to Projects
          </button>
        </div>
      </section>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <section className="project-detail-section">
      <div className="detail-hero">
        <img src={project.image} alt={project.title} />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container detail-content-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>

        <div className="detail-body">
          <div className="detail-header-info">
            <h2>{project.title}</h2>
            <span className="detail-category">{project.category}</span>
          </div>
          
          <p className="detail-desc">{project.description}</p>

          <div className="detail-links">
            {(project.images && project.images.length > 0) ? (
              <button className="btn btn-primary" onClick={() => { setShowGallery(true); setCurrentImageIndex(0); }}>
                <FaExternalLinkAlt /> Live Demo
              </button>
            ) : (
              project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaGithub /> GitHub
              </a>
            )}
          </div>

          <div className="detail-grid">
            <div className="detail-col">
              <h3>Technologies</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => <span key={i}>{tech}</span>)}
              </div>

              <h3>Key Features</h3>
              <ul className="feature-list">
                {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
            </div>

            <div className="detail-col">
              <h3>My Role</h3>
              <p>{project.role}</p>

              {project.teamSize && (
                <>
                  <h3>Team Size</h3>
                  <p>{project.teamSize} members</p>
                </>
              )}

              <h3>Challenges</h3>
              <p>{project.challenges}</p>

              <h3>Solutions</h3>
              <p>{project.solutions}</p>

              <h3>Lessons Learned</h3>
              <p>{project.lessonsLearned}</p>

              {project.note && (
                <div className="project-note" style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255, 193, 7, 0.1)', borderLeft: '4px solid #ffc107', borderRadius: '4px' }}>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#ffc107', lineHeight: '1.5' }}>
                    <strong>Note:</strong> {project.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {showGallery && project.images && (
        <div className="gallery-modal">
          <button className="gallery-close" onClick={() => setShowGallery(false)}>
            <FaTimes />
          </button>
          
          <button className="gallery-nav prev" onClick={prevImage}>
            <FaChevronLeft />
          </button>
          
          <div className="gallery-content">
            <img src={project.images[currentImageIndex]} alt={`Screenshot ${currentImageIndex + 1}`} />
            <div className="gallery-counter">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>

          <button className="gallery-nav next" onClick={nextImage}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
