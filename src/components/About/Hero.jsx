import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 90; // Header height
      // Different offsets for different sections
      const additionalOffset = sectionId === 'mission' ? -200 : -200; // Both sections scroll further down
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - additionalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <div className="about-hero-content">
          <div className="about-hero-illustration">
            <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Central Information Icon */}
              <g transform="translate(100,40)">
                {/* Main circle background */}
                <circle cx="0" cy="0" r="18" fill="#3b82f6" opacity="0.1"/>
                <circle cx="0" cy="0" r="18" fill="none" stroke="#1d4ed8" strokeWidth="2"/>
                
                {/* Information symbol */}
                <circle cx="0" cy="-6" r="2" fill="#1d4ed8"/>
                <rect x="-1.5" y="-2" width="3" height="12" rx="1.5" fill="#1d4ed8"/>
                
                {/* Inner details */}
                <circle cx="0" cy="0" r="14" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3"/>
              </g>
              
              {/* European Stars arranged in a circle around the icon */}
              
              {/* Top stars */}
              <g transform="translate(100,40)">
                {/* 12 o'clock */}
                <g transform="translate(0,-35)">
                  <path d="M0,-5 L1.5,-1.5 L5,0 L1.5,1.5 L0,5 L-1.5,1.5 L-5,0 L-1.5,-1.5 Z" fill="#1d4ed8" opacity="0.9"/>
                </g>
                
                {/* 1 o'clock */}
                <g transform="translate(17.5,-30) rotate(30)">
                  <path d="M0,-4 L1.2,-1.2 L4,0 L1.2,1.2 L0,4 L-1.2,1.2 L-4,0 L-1.2,-1.2 Z" fill="#1d4ed8" opacity="0.8"/>
                </g>
                
                {/* 2 o'clock */}
                <g transform="translate(30,-17.5) rotate(60)">
                  <path d="M0,-4 L1.2,-1.2 L4,0 L1.2,1.2 L0,4 L-1.2,1.2 L-4,0 L-1.2,-1.2 Z" fill="#1d4ed8" opacity="0.7"/>
                </g>
                
                {/* 3 o'clock */}
                <g transform="translate(35,0) rotate(90)">
                  <path d="M0,-5 L1.5,-1.5 L5,0 L1.5,1.5 L0,5 L-1.5,1.5 L-5,0 L-1.5,-1.5 Z" fill="#1d4ed8" opacity="0.9"/>
                </g>
                
                {/* 4 o'clock */}
                <g transform="translate(30,17.5) rotate(120)">
                  <path d="M0,-4 L1.2,-1.2 L4,0 L1.2,1.2 L0,4 L-1.2,1.2 L-4,0 L-1.2,-1.2 Z" fill="#1d4ed8" opacity="0.7"/>
                </g>
                
                {/* 5 o'clock */}
                <g transform="translate(17.5,30) rotate(150)">
                  <path d="M0,-4 L1.2,-1.2 L4,0 L1.2,1.2 L0,4 L-1.2,1.2 L-4,0 L-1.2,-1.2 Z" fill="#1d4ed8" opacity="0.8"/>
                </g>
                
                {/* 6 o'clock */}
                <g transform="translate(0,35) rotate(180)">
                  <path d="M0,-5 L1.5,-1.5 L5,0 L1.5,1.5 L0,5 L-1.5,1.5 L-5,0 L-1.5,-1.5 Z" fill="#1d4ed8" opacity="0.9"/>
                </g>
                
                {/* 7 o'clock */}
                <g transform="translate(-17.5,30) rotate(210)">
                  <path d="M0,-4 L1.2,-1.2 L4,0 L1.2,1.2 L0,4 L-1.2,1.2 L-4,0 L-1.2,-1.2 Z" fill="#1d4ed8" opacity="0.8"/>
                </g>
                
                {/* 8 o'clock */}
                <g transform="translate(-30,17.5) rotate(240)">
                  <path d="M0,-4 L1.2,-1.2 L4,0 L1.2,1.2 L0,4 L-1.2,1.2 L-4,0 L-1.2,-1.2 Z" fill="#1d4ed8" opacity="0.7"/>
                </g>
                
                {/* 9 o'clock */}
                <g transform="translate(-35,0) rotate(270)">
                  <path d="M0,-5 L1.5,-1.5 L5,0 L1.5,1.5 L0,5 L-1.5,1.5 L-5,0 L-1.5,-1.5 Z" fill="#1d4ed8" opacity="0.9"/>
                </g>
                
                {/* 10 o'clock */}
                <g transform="translate(-30,-17.5) rotate(300)">
                  <path d="M0,-4 L1.2,-1.2 L4,0 L1.2,1.2 L0,4 L-1.2,1.2 L-4,0 L-1.2,-1.2 Z" fill="#1d4ed8" opacity="0.7"/>
                </g>
                
                {/* 11 o'clock */}
                <g transform="translate(-17.5,-30) rotate(330)">
                  <path d="M0,-4 L1.2,-1.2 L4,0 L1.2,1.2 L0,4 L-1.2,1.2 L-4,0 L-1.2,-1.2 Z" fill="#1d4ed8" opacity="0.8"/>
                </g>
              </g>
              
              {/* Connecting subtle lines */}
              <g transform="translate(100,40)" opacity="0.2">
                <circle cx="0" cy="0" r="28" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2,3"/>
              </g>
            </svg>
          </div>
          <h1 className="about-hero-title">
            <span className="title-main">About </span>
            <span className="title-highlight">CELFA</span>
          </h1>
          <p className="about-hero-subtitle">
            At CELFA, we believe in the transformative power of exceptional leadership and strategic financial management. 
            Our organization stands as a beacon for professionals seeking to elevate their expertise, expand their networks, 
            and drive meaningful change in the financial sector.
          </p>
          <div className="about-hero-stats">
            <div className="about-founding-info">
              <span className="founding-text">Established</span>
              <span className="founding-year">2025</span>
              <span className="founding-location">Frankfurt, Germany</span>
            </div>
          </div>
          <div className="about-hero-cta">
            <button 
              className="about-cta-button primary"
              onClick={() => scrollToSection('mission')}
            >
              Our Mission
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="about-cta-button secondary"
              onClick={() => scrollToSection('core-values')}
            >
              Core Values
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
