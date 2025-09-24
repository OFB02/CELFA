import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
  const values = [
    {
      title: "Excellence",
      description: "Delivering exceptional results through rigorous standards and unwavering commitment to surpassing expectations in every engagement."
    },
    {
      title: "Integrity",
      description: "Operating with absolute transparency and ethical leadership that builds enduring trust and credibility with all stakeholders."
    },
    {
      title: "Innovation",
      description: "Pioneering cutting-edge AI solutions that redefine the boundaries of financial leadership and organizational performance."
    },
    {
      title: "Expertise",
      description: "Leveraging profound domain knowledge and decades of collective experience to deliver unparalleled strategic insights."
    },
    {
      title: "Partnership",
      description: "Fostering collaborative relationships built on mutual respect and shared vision for creating sustainable long-term value."
    },
    {
      title: "Impact",
      description: "Driving measurable transformation through strategic initiatives that create lasting competitive advantages."
    }
  ];

  return (
    <section id="core-values" className="about-core-values">
      <div className="about-core-values-container">
        <div className="about-core-values-header">
          <h2 className="about-core-values-title">Core Values</h2>
          <p className="about-core-values-subtitle">
            The foundational principles that guide our decisions and define our commitment to excellence in financial AI leadership
          </p>
        </div>
        <div className="about-core-values-grid">
          <div className="about-core-values-center">
            <img 
              src="/src/pictures/CELFA Logo FULL DARK.png" 
              alt="CELFA Logo" 
              className="core-values-logo"
            />
          </div>
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
