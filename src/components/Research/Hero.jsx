import React from 'react'
import './Hero.css'

function ResearchHero() {
  return (
    <section className="research-hero">
      <div className="research-hero-container">
        <div className="research-hero-content">
          <div className="research-hero-illustration">
            <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Central element - simplified */}
              <g transform="translate(90,30)">
                <circle cx="0" cy="0" r="3" fill="none" stroke="#1d4ed8" strokeWidth="1.5"/>
                <circle cx="0" cy="0" r="1.5" fill="#3b82f6" opacity="0.6"/>
              </g>
              
              {/* Left flourish - minimalistic */}
              <g transform="translate(90,30)">
                {/* Main curved stem */}
                <path d="M-8 0C-15 -2 -25 -4 -35 -3C-45 -2 -50 0 -48 2C-46 3 -40 2 -35 1C-25 0 -15 1 -8 0" 
                      stroke="#1d4ed8" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                
                {/* Simple leaf elements */}
                <path d="M-20 -2C-25 -4 -30 -3 -28 -1C-26 0 -23 -1 -20 -2Z" 
                      fill="#3b82f6" opacity="0.4"/>
                <path d="M-20 2C-25 4 -30 3 -28 1C-26 0 -23 1 -20 2Z" 
                      fill="#3b82f6" opacity="0.4"/>
                
                <path d="M-35 -1C-40 -2 -43 -1 -42 0C-41 1 -38 0 -35 -1Z" 
                      fill="#1d4ed8" opacity="0.3"/>
                <path d="M-35 1C-40 2 -43 1 -42 0C-41 -1 -38 0 -35 1Z" 
                      fill="#1d4ed8" opacity="0.3"/>
                
                {/* Minimal decorative dots */}
                <circle cx="-15" cy="0" r="0.8" fill="#3b82f6" opacity="0.6"/>
                <circle cx="-30" cy="0" r="1" fill="#1d4ed8" opacity="0.5"/>
              </g>
              
              {/* Right flourish - mirrored */}
              <g transform="translate(90,30) scale(-1,1)">
                {/* Main curved stem */}
                <path d="M-8 0C-15 -2 -25 -4 -35 -3C-45 -2 -50 0 -48 2C-46 3 -40 2 -35 1C-25 0 -15 1 -8 0" 
                      stroke="#1d4ed8" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                
                {/* Simple leaf elements */}
                <path d="M-20 -2C-25 -4 -30 -3 -28 -1C-26 0 -23 -1 -20 -2Z" 
                      fill="#3b82f6" opacity="0.4"/>
                <path d="M-20 2C-25 4 -30 3 -28 1C-26 0 -23 1 -20 2Z" 
                      fill="#3b82f6" opacity="0.4"/>
                
                <path d="M-35 -1C-40 -2 -43 -1 -42 0C-41 1 -38 0 -35 -1Z" 
                      fill="#1d4ed8" opacity="0.3"/>
                <path d="M-35 1C-40 2 -43 1 -42 0C-41 -1 -38 0 -35 1Z" 
                      fill="#1d4ed8" opacity="0.3"/>
                
                {/* Minimal decorative dots */}
                <circle cx="-15" cy="0" r="0.8" fill="#3b82f6" opacity="0.6"/>
                <circle cx="-30" cy="0" r="1" fill="#1d4ed8" opacity="0.5"/>
              </g>
            </svg>
          </div>
          <h1 className="research-hero-title">
            <span className="title-main">Pioneering </span>
            <span className="title-highlight">Research</span>
          </h1>
          <p className="research-hero-subtitle">
            Discover research and publications from CELFA's distinguished advisory board. 
            Our experts lead the conversation on ethical AI implementation, regulatory frameworks, 
            and transformative technologies shaping Europe's financial future.
          </p>
          <div className="research-hero-stats">
            <div className="research-stat-item">
              <div className="research-stat-number">50+</div>
              <div className="research-stat-label">Publications</div>
            </div>
            <div className="research-stat-divider"></div>
            <div className="research-stat-item">
              <div className="research-stat-number">12</div>
              <div className="research-stat-label">Research Areas</div>
            </div>
            <div className="research-stat-divider"></div>
            <div className="research-stat-item">
              <div className="research-stat-number">3M+</div>
              <div className="research-stat-label">Citations</div>
            </div>
          </div>
          <div className="research-hero-cta">
            <button className="research-cta-button primary">
              Explore Research
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="research-cta-button secondary">
              Latest Publications
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResearchHero