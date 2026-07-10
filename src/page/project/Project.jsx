import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';
import { projects, categories } from '../../data/projectsData';

const Project = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="project-section" id="project">
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>
        
        {/* Filter Buttons */}
        <div className="project-filters">
          {categories.map((cat, index) => (
            <button 
              key={index} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} />
                <div className="card-overlay">
                  <span>View Details</span>
                </div>
              </div>
              <div className="card-content">
                <span className="card-category">{project.category}</span>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
