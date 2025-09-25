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
            <h3 className="coming-soon-title">Advisory Board Members</h3>
            <p className="coming-soon-subtitle">Coming Soon</p>
            
            <p className="coming-soon-description">
              We are assembling a distinguished advisory board of experienced leaders from 
              financial services, AI, and regulatory sectors across Europe.
            </p>
            
            <div className="coming-soon-timeline">
              <p className="timeline-text">Member announcements expected Q4 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoardMembers
