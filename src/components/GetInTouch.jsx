import React from 'react';
import './GetInTouch.css'; 

const GetInTouch = () => {
  return (
    <div id='getInTouch' className="getInTouch-container">
        <div className="getInTouch-header"> 
            <h1 className="getInTouch-number">03</h1>
            <h2 className="getInTouch-title">Get In Touch.</h2>
        </div>
        
        <div className="getInTouch-content">
            <p className="getInTouch-text">Get in touch with me via social media or email.</p>
            <div className="getInTouch-social-icons">
                <div className="social-icon">
                    <a href="mailto:soheilaa.golestanii@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/soheila-golestani-160431173" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://github.com/Soheilaa" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.facebook.com/profile.php?id=100087737652572" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default GetInTouch;
