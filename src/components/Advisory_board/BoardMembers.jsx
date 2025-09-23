import React from 'react'
import './BoardMembers.css'

function BoardMembers() {
  return (
    <section className="board-members">
      <div className="board-members-container">
        <div className="board-members-header">
          <h2 className="board-members-title">Advisory Board Members</h2>
          <p className="board-members-description">
            We are in the process of assembling Europe's most distinguished leaders from financial institutions, 
            academic centers, and technology companies. Our advisory board will unite visionary experts committed 
            to responsible AI innovation and ethical financial technology development.
          </p>
        </div>
        
        <div className="coming-soon-container">
          <div className="coming-soon-card">
            <div className="coming-soon-header">
              <div className="coming-soon-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <path d="M20 8v6"/>
                  <path d="M23 11v2"/>
                  <path d="M17 11v2"/>
                </svg>
              </div>
              <div className="coming-soon-badge">
                <span>Announcement Pending</span>
              </div>
            </div>
            
            <h3 className="coming-soon-title">Distinguished Advisory Board</h3>
            <p className="coming-soon-subtitle">Member Profiles Coming Soon</p>
            
            <p className="coming-soon-description">
              We are currently building our advisory board with experienced leaders from AI, financial services, 
              and regulatory sectors across Europe. These professionals will bring practical expertise from 
              leading institutions to help guide CELFA's mission and strategic direction.
            </p>
            
            <div className="coming-soon-timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6"/>
                  </svg>
                </div>
                <div className="timeline-content">
                  <h4>Selection Process</h4>
                  <p>Final candidate evaluations underway</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="9"/>
                  </svg>
                </div>
                <div className="timeline-content">
                  <h4>Appointments Confirmed</h4>
                  <p>Official announcements expected Q4 2025</p>
                </div>
              </div>
            </div>
            
            <div className="coming-soon-features">
              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">15+</div>
                  <span>Senior Executives & Academics</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">10</div>
                  <span>European Countries Represented</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">20+</div>
                  <span>Years Average Industry Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoardMembers
