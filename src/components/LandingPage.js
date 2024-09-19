import React from 'react';
import './LandingPage.css'; // Import the CSS for styling
import rightImage from '../assets/soheila-pic.jpg'; // Replace with your image path
import { FaLinkedin, FaFacebookF, FaInstagram, FaArrowDown } from 'react-icons/fa';
import AboutMe from './AboutPage'; 
import Projects from './Projects';
import GetInTouch from './GetInTouch';

const LandingPage = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='landingPage' className="landing-page">
      <div className='landing-content'>
        <div className="left-side">
          <h1>HELLO</h1>
          <p>I’m Soheila Golestani, a Frontend developer based in Somewhere</p>
          <div className="buttons">
            {/* Updated the onClick for About Me button */}
            <button className="btn" onClick={() => scrollToSection('about-me')}>
              ABOUT ME
            </button>
            {/* GET IN TOUCH Button */}
            <button className="btn" onClick={() => scrollToSection('getInTouch')}>
              GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="right-side">
          <img src={rightImage} alt="Right Side" />
          <a href="/S.Golestani's CV.pdf" target="_blank" rel="noopener noreferrer">
            <button className="btn" id='right-button'>
              GET MY CV
            </button>
          </a>

          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <div className="arrow-down" onClick={() => scrollToSection('about-me')}>
              <FaArrowDown className="icon" />
            </div>
          </div>
        </div>
      </div>
      {/* Other Sections */}
      <AboutMe />
      <Projects />
      <GetInTouch />
    </div>
  );
};

export default LandingPage;
