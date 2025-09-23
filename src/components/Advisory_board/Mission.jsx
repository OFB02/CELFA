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
              financial technology, and regulatory frameworks. Drawing from decades of combined experience across 
              leading financial institutions, technology companies, and regulatory bodies, our board members bring 
              unparalleled expertise to the complex challenges of AI integration in financial services.
              <br /><br />
              <div className="mission-quote">
                <em>"Bridging financial AI competencies across Europe is essential to compete in the globally accelerating market and secure our continent's position as a leader in responsible innovation."</em>
                <span className="quote-attribution">— CELFA Advisory Board</span>
              </div>
            </p>
            <div className="mission-points">
            </div>
          </div>
          <div className="mission-stats">
            <div className="stat-card">
              <div className="stat-number">01</div>
              <div className="stat-label">Ethical AI Governance</div>
              <div className="stat-description">Establishing comprehensive frameworks for responsible AI development and deployment in European financial markets</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">02</div>
              <div className="stat-label">European Leadership</div>
              <div className="stat-description">Positioning Europe at the forefront of global financial AI innovation while maintaining our values and regulatory excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">03</div>
              <div className="stat-label">Industry Collaboration</div>
              <div className="stat-description">Fostering partnerships between academic institutions, financial organizations, and technology leaders across Europe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
