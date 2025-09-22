import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About CELFA</h1>
          <p className="about-hero-subtitle">
            Championing Excellence in Leadership and Financial Advancement
          </p>
          <p className="about-hero-description">
            At CELFA, we believe in the transformative power of exceptional leadership and strategic financial management. 
            Our organization stands as a beacon for professionals seeking to elevate their expertise, expand their networks, 
            and drive meaningful change in the financial sector. Through innovative programs, expert guidance, and a 
            commitment to excellence, we empower leaders to shape the future of finance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
