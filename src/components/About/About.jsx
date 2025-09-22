import React from 'react';
import './About.css';
import Hero from './Hero';
import Mission from './Mission';
import CoreValues from './CoreValues';

const About = () => {
  return (
    <div className="about-page">
      <Hero />
      <Mission />
      <CoreValues />
    </div>
  );
};

export default About;
