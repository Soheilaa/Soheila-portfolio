import React from 'react';
import './AboutMe.css'; // Ensure this file exists and is styled accordingly

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section">
      {/* Large "01" with overlapping "About Me." */}
      <div className="about-me-header">
        <h1 className="about-me-number">01</h1>
        <h2 className="about-me-title">About Me.</h2>
      </div>

      {/* About Me Description */}
      <p className="about-me-description">
        I'm a Frontend developer based in Gothenburg, Sweden. Since 2016, I've enjoyed turning complex problems into simple, beautiful, and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening, or working out in the gym.
      </p>

      {/* Row with three columns */}
      <div className="about-me-details">
        <div className="vertical-line"></div> {/* Vertical line next to the columns */}
        <div className="about-me-columns">
          <div className="column">
            <h3>Experience</h3>
            <ul className="experience-list">
              <li>
                <strong>JENSEN yrkeshögskola</strong>
                <br /> student - frontend developer
              </li>
              <li>
                <strong>MSGROUP</strong>
                <br /> junior frontend developer
              </li>
              <li>
                <strong>INESC Technology and Science</strong>
                <br /> researcher
              </li>
              <li>
                Golestan Dezful Co.
                <br /> web developer
              </li>
            </ul>
          </div>
          <div className="column">
            <h3>Certifications</h3>
            <ul className="certifications-list">
              <li><a href='https://www.coursera.org/account/accomplishments/verify/MFNNKRBJH2JS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'>Meta - HTML and CSS in Depth</a></li>
              <li><a href='https://www.coursera.org/account/accomplishments/certificate/X5CWC8LZG5Q5'>Coursera - Build Your First React Website</a></li>
            </ul>
          </div>
          <div className="column">
            <h3>Skills</h3>
            <ul className="skills-list">
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>React</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>GIT</li>
              <li>Scrum</li>
              <li>SASS</li>
              <li>Agile</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>
      </div>
      <div id='projects' className="selected-works-header"> 
        <h1 className="selected-works-number">02</h1>
        <h2 className="selected-works-title">Selected Works.</h2>
      </div>
    </section>
    
  );
};

export default AboutMe;
