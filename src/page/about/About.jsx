import React from 'react';
import './About.css';
import { FaGraduationCap, FaBullseye, FaCode, FaServer, FaDatabase, FaTools, FaBookReader } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        
        <div className="about-grid">
          {/* Left Column: Intro */}
          <div className="about-intro">
            <h3>Hi, I'm <span>Nguyen Phu Trieu</span></h3>
            <p>
              A final-year <strong>Software Engineering</strong> student at the <strong>Industrial University of Ho Chi Minh City (IUH)</strong> with a passion for creating modern, responsive, and user-centered web applications.
            </p>
            <p>
              I specialize in <strong>Front-End Development</strong>, focusing on building clean, interactive interfaces using <strong>React</strong>, <strong>TypeScript</strong>, and modern web technologies. Through academic and personal projects, I have also gained experience in full-stack development with <strong>Spring Boot</strong>, RESTful APIs, and relational databases.
            </p>
            <p>
              I enjoy turning ideas into functional digital products while continuously improving my skills, exploring new technologies, and following industry best practices. I'm currently seeking an opportunity as a <strong>Front-End Developer Intern</strong>, where I can contribute to real-world projects, collaborate with experienced developers, and continue growing as a software engineer.
            </p>
          </div>

          {/* Right Column: Education & Goals */}
          <div className="about-info">
            <div className="info-card">
              <div className="info-icon"><FaGraduationCap /></div>
              <h4>Education</h4>
              <p><strong>Industrial University of Ho Chi Minh City (IUH)</strong></p>
              <p>Bachelor of Software Engineering</p>
              <span className="info-date">2022 – 2026</span>
            </div>
            <div className="info-card">
              <div className="info-icon"><FaBullseye /></div>
              <h4>Career Goal</h4>
              <p>
                To become a professional <strong>Front-End Developer</strong> who creates intuitive, accessible, and high-performance web applications. I believe great software is built by combining clean code, thoughtful design, and continuous learning.
              </p>
            </div>
          </div>
        </div>

        <div className="skills-journey-container">
          {/* Tech Stack */}
          <div className="tech-stack-section">
            <h3 className="sub-title">Tech Stack & Skills</h3>
            
            <div className="skill-category">
              <h4><FaCode /> Front-End</h4>
              <div className="skill-tags">
                <span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>TypeScript</span><span>React</span><span>Next.js</span><span>Bootstrap</span>
              </div>
            </div>

            <div className="skill-category">
              <h4><FaServer /> Back-End</h4>
              <div className="skill-tags">
                <span>Java</span><span>Spring Boot</span><span>REST API</span>
              </div>
            </div>

            <div className="skill-category">
              <h4><FaDatabase /> Database</h4>
              <div className="skill-tags">
                <span>PostgreSQL</span><span>MySQL</span><span>Redis</span><span>DynamoDB</span>
              </div>
            </div>

            <div className="skill-category">
              <h4><FaTools /> Tools</h4>
              <div className="skill-tags">
                <span>Git</span><span>GitHub</span><span>Docker</span><span>Figma</span><span>VS Code</span><span>Postman</span>
              </div>
            </div>

            <div className="skill-category">
              <h4><FaBookReader /> Currently Learning</h4>
              <div className="skill-tags">
                <span>Next.js</span><span>Docker Compose</span><span>CI/CD</span><span>Clean Architecture</span><span>Web Performance</span>
              </div>
            </div>

            <div className="core-skills">
              <h4>Core Skills</h4>
              <ul>
                <li>Front-End Development</li>
                <li>Responsive Web Design</li>
                <li>RESTful API Integration</li>
                <li>Full-Stack Development</li>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="journey-section">
            <h3 className="sub-title">My Journey</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2022</div>
                <div className="timeline-content">
                  <p>Started my Software Engineering journey and built a strong foundation in programming, object-oriented design, and software engineering principles.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2023</div>
                <div className="timeline-content">
                  <p>Explored web development with HTML, CSS, JavaScript, Java, and database systems while strengthening problem-solving skills.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2024</div>
                <div className="timeline-content">
                  <p>Focused on modern Front-End technologies, learning React, TypeScript, Git, and RESTful APIs through personal and academic projects.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2025 – Present</div>
                <div className="timeline-content">
                  <p>Developed full-stack applications, including an Online Bookstore and a Real-time Chat Application, using React, React Native, Spring Boot, PostgreSQL, Redis, Docker, and WebSocket technologies. Currently preparing to begin my professional career as a Front-End Developer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
