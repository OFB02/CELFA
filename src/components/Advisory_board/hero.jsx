import React from 'react'
import './hero.css'
// Images are in public/pictures — reference them with absolute public paths
const businessTeamImage = '/pictures/corporate-businessmen-working-tablet-office.jpg';
const femaleExecutiveImage = '/pictures/female-business-executive-giving-speech.jpg';

function AdvisoryBoardHero() {
  return (
    <section className="advisory-hero">
      <div className="advisory-hero-container">
        <div className="advisory-hero-content">
          <h1 className="advisory-hero-title">
            <span className="title-main">Advisory </span>
            <span className="title-highlight">Board</span>
          </h1>
          <p className="advisory-hero-subtitle">
            Leaders and visionaries from across Europe's financial and technology sectors, 
            united in shaping the future of ethical AI innovation and establishing industry-leading standards 
            for responsible artificial intelligence in finance.
          </p>
          <div className="advisory-hero-stats">
            <div className="advisory-stat-item">
              <div className="advisory-stat-number">15+</div>
              <div className="advisory-stat-label">Board Members</div>
            </div>
            <div className="advisory-stat-divider"></div>
            <div className="advisory-stat-item">
              <div className="advisory-stat-number">20+</div>
              <div className="advisory-stat-label">Years Experience</div>
            </div>
            <div className="advisory-stat-divider"></div>
            <div className="advisory-stat-item">
              <div className="advisory-stat-number">10</div>
              <div className="advisory-stat-label">Countries</div>
            </div>
          </div>
        </div>
        
        <div className="advisory-hero-visual">
          <div className="advisory-images-grid">
            <div className="advisory-image-container primary-image">
              <img 
                src={businessTeamImage} 
                alt="Corporate businessmen working with tablet in office" 
                className="advisory-hero-image"
                loading="lazy"
                decoding="async"
                style={{ imageRendering: 'auto' }}
              />
              <div className="advisory-image-overlay"></div>
            </div>
            <div className="advisory-image-container secondary-image">
              <img 
                src={femaleExecutiveImage} 
                alt="Female business executive giving speech" 
                className="advisory-hero-image"
                loading="lazy"
                decoding="async"
                style={{ imageRendering: 'auto' }}
              />
              <div className="advisory-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvisoryBoardHero