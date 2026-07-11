import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import avt from '../../assets/home/avt.jpg';
import cvFile from '../../assets/home/IT_INTERN_NGUYEN_PHU_TRIEU_CV.pdf';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <div className="home-text">
          <h3 className="greeting">Hello, I'm</h3>
          <h1 className="name">Nguyễn Phú Triệu</h1>
          <h2 className="title">Front-End Developer</h2>
          <p className="bio">
            Final-year Software Engineering student with hands-on experience in building web applications using React, TypeScript, and Spring Boot. Passionate about developing responsive, user-friendly interfaces and integrating RESTful APIs. Seeking an Internship to contribute to real-world products while continuously growing as a software engineer.
          </p>
          
          <div className="home-buttons">
            <Link to="/project" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
            <a href={cvFile} className="btn btn-outline" download="IT_INTERN_NGUYEN_PHU_TRIEU_CV.pdf">Download CV</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/trieu22676191" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/nguyenphutrieu2004" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com/teerius" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/_teerius_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
        
        <div className="home-image">
          <div className="img-box">
            <img src={avt} alt="Nguyễn Phú Triệu" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
