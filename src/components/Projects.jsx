import React from 'react';
import './Projects.css'; 
import image1 from '../assets/bonzai.png'; 
import image2 from '../assets/deve deDesktopVersion.png'; 
import image3 from '../assets/ewalletDesktop.png'; 
import image4 from '../assets/HandyHub mobile version.png'; 
import image5 from '../assets/little lemon.png'; 
import image6 from '../assets/solaris.png'; 

const projects = [
  { id: 1, image: image1, link: 'https://github.com/Soheilaa/Hotel-Bonz.ai.tiny.homes' },
  { id: 2, image: image2, link: 'https://github.com/Soheilaa/de_ve_de' },
  { id: 3, image: image3, link: 'https://github.com/Soheilaa/e-wallet' },
  { id: 4, image: image4, link: 'https://github.com/Soheilaa/HandyHub' },
  { id: 5, image: image5, link: 'https://github.com/Soheilaa/little-lemon-resturant' },
  { id: 6, image: image6, link: 'https://github.com/Soheilaa/SolarisExplorer' }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map(project => (
          <a
            key={project.id}
            href={project.link}
            className="project-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className="project-image"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
