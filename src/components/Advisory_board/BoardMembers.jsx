import React from 'react'
import './BoardMembers.css'

function BoardMembers() {
  const boardMembers = [
    {
      id: 1,
      name: "Dr. Elisabeth Müller",
      title: "Former Head of AI Ethics, European Central Bank",
      expertise: "AI Ethics & Regulation",
      bio: "Leading authority on ethical AI frameworks in financial services. Instrumental in developing EU AI regulations for banking sector.",
      initials: "EM"
    },
    {
      id: 2,
      name: "Prof. Alessandro Rossi",
      title: "Director of Financial Technology, University of Milan",
      expertise: "Financial Technology",
      bio: "Renowned researcher in computational finance and machine learning applications in European markets with 100+ publications.",
      initials: "AR"
    },
    {
      id: 3,
      name: "Marie Dubois",
      title: "Chief Innovation Officer, BNP Paribas",
      expertise: "Digital Innovation",
      bio: "Pioneer in digital banking transformation across Europe, leading AI adoption initiatives in retail and corporate banking.",
      initials: "MD"
    },
    {
      id: 4,
      name: "Dr. Henrik Larsson",
      title: "Former CEO, Nordic Investment Bank",
      expertise: "Banking Leadership",
      bio: "Veteran banking executive with extensive experience in European financial markets and sustainable finance initiatives.",
      initials: "HL"
    },
    {
      id: 5,
      name: "Sophia Komnenos",
      title: "Managing Director, European Venture Partners",
      expertise: "Investment Strategy",
      bio: "Leading venture capitalist focused on fintech and AI startups across Europe, with €2B+ in successful investments.",
      initials: "SK"
    },
    {
      id: 6,
      name: "Dr. Jan de Vries",
      title: "Head of Risk Technology, ING Group",
      expertise: "Risk Management",
      bio: "Expert in AI-driven risk assessment and regulatory compliance, shaping industry standards for responsible AI in finance.",
      initials: "JV"
    }
  ]

  return (
    <section className="board-members">
      <div className="board-members-container">
        <div className="board-members-header">
          <h2 className="board-members-title">Advisory Board Members</h2>
          <p className="board-members-description">
            Distinguished leaders from Europe's financial institutions, academic centers, 
            and technology companies, united by their commitment to responsible AI innovation 
            and ethical financial technology development.
          </p>
        </div>
        
        <div className="board-members-grid">
          {boardMembers.map(member => (
            <div key={member.id} className="board-member-card">
              <div className="member-image-container">
                <div className="member-image">
                  {member.initials}
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-title">{member.title}</p>
                <span className="member-expertise">{member.expertise}</span>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BoardMembers
