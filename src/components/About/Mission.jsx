import React from 'react';
import './Mission.css';

const Mission = () => {
  return (
    <section id="mission" className="about-mission">
      <div className="about-mission-container">
        <div className="about-mission-header">
          <h2 className="about-mission-title">Our Mission</h2>
          <p className="mission-subtitle">
            Bringing together Europe's leading financial AI experts to deliver unparalleled 
            leadership development and intelligent financial solutions.
          </p>
        </div>
        
        <div className="about-mission-content">
          <div className="mission-text">
            <p>
              CELFA exists to unite the highest competencies within financial AI knowledge 
              and AI-driven financial leadership. Our carefully selected advisory board 
              comprises distinguished experts from across Europe, each bringing decades 
              of experience in artificial intelligence, financial innovation, and strategic leadership.
            </p>
            <p>
              Through this unprecedented convergence of expertise, we deliver cutting-edge 
              solutions that harness the power of AI to transform financial decision-making, 
              optimize organizational performance, and cultivate leaders who can navigate 
              the intersection of technology and finance with confidence and precision.
            </p>
          </div>
          
          <div className="mission-cta">
            <div className="cta-content">
              <h3>Transforming Finance Through Intelligence</h3>
              <p>Join the future of financial leadership with CELFA's AI-powered approach to organizational excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
