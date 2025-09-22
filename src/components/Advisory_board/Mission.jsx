import React from 'react'
import './Mission.css'

function Mission() {
  return (
    <section className="advisory-mission">
      <div className="advisory-mission-container">
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="mission-title">Our Advisory Mission</h2>
            <p className="mission-description">
              CELFA's distinguished advisory board comprises Europe's foremost experts in artificial intelligence, 
              financial technology, and regulatory frameworks. Together, they provide strategic oversight, 
              ensure ethical AI development, and guide our mission to establish Europe as the global leader 
              in responsible financial AI innovation.
            </p>
            <div className="mission-points">
              <div className="mission-point">
                <div className="point-icon">01</div>
                <div className="point-content">
                  <h3>Ethical AI Governance</h3>
                  <p>Establishing comprehensive frameworks for responsible AI development and deployment in European financial markets</p>
                </div>
              </div>
              <div className="mission-point">
                <div className="point-icon">02</div>
                <div className="point-content">
                  <h3>European Leadership</h3>
                  <p>Positioning Europe at the forefront of global financial AI innovation while maintaining our values and regulatory excellence</p>
                </div>
              </div>
              <div className="mission-point">
                <div className="point-icon">03</div>
                <div className="point-content">
                  <h3>Industry Collaboration</h3>
                  <p>Fostering partnerships between academic institutions, financial organizations, and technology leaders across Europe</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mission-stats">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15</div>
              <div className="stat-label">European Countries</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Research Publications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
