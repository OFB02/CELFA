import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import businessPeopleImage from '../pictures/silhouette-busy-businesspeople.jpg';
import handshakeImage from '../pictures/corporate-business-handshake-business-partners.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Leading Europe's
            <br />
            <span className="title-highlight">Financial AI</span> Innovation
          </h1>
          
          <p className="hero-description">
            Bringing together Europe's foremost experts in artificial intelligence 
            and finance to drive responsible innovation and establish ethical standards.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary">
              Explore Research
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link to="/advisory-board" className="btn-secondary">
              Advisory Board
            </Link>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Experts</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Publications</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-images-grid">
            <div className="hero-image-container primary-image">
              <img 
                src={businessPeopleImage} 
                alt="Professional business team silhouettes" 
                className="hero-image"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="hero-image-container secondary-image">
              <img 
                src={handshakeImage} 
                alt="Corporate business handshake between partners" 
                className="hero-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;