import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import Projects from './components/Projects';
import GetInTouch from './components/GetInTouch';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AboutMe" element={<AboutPage />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/GetInTouch" element={<GetInTouch />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
