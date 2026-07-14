import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import avt from '../../assets/home/avt.jpg';
import cvFile from '../../assets/home/IT_INTERN_NGUYEN_PHU_TRIEU_CV.pdf';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaReact, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiSpringboot, SiJavascript } from 'react-icons/si';

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
            <Link to="/project" className="btn btn-outline">View Projects</Link>
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
            
            <div className="floating-icons">
              <div className="icon-wrapper react"><FaReact title="React" /></div>
              <div className="icon-wrapper ts"><SiTypescript title="TypeScript" /></div>
              <div className="icon-wrapper js"><SiJavascript title="JavaScript" /></div>
              <div className="icon-wrapper html"><FaHtml5 title="HTML5" /></div>
              <div className="icon-wrapper css"><FaCss3Alt title="CSS3" /></div>
              <div className="icon-wrapper java"><FaJava title="Java" /></div>
              <div className="icon-wrapper spring"><SiSpringboot title="Spring Boot" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
