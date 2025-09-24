import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <h3 className="footer-logo-text">CELFA</h3>
              <span className="footer-logo-subtitle">Centre for European Leadership in Financial AI</span>
            </div>
            <p className="footer-description">
              Bringing together Europe's foremost experts in artificial intelligence 
              and finance to drive responsible innovation and establish ethical standards.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/celfa/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About CELFA</Link></li>
              <li><Link to="/advisory-board" className="footer-link">Advisory Board</Link></li>
              <li><a href="#research" className="footer-link">Research</a></li>
              <li><a href="#insights" className="footer-link">Insights</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Research Areas */}
          <div className="footer-section">
            <h4 className="footer-section-title">Research Areas</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">AI Ethics in Finance</a></li>
              <li><a href="#" className="footer-link">Regulatory Technology</a></li>
              <li><a href="#" className="footer-link">Risk Management</a></li>
              <li><a href="#" className="footer-link">Digital Transformation</a></li>
              <li><a href="#" className="footer-link">Sustainable Finance</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-section-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Publications</a></li>
              <li><a href="#" className="footer-link">White Papers</a></li>
              <li><a href="#" className="footer-link">Events</a></li>
              <li><a href="#" className="footer-link">Newsletter</a></li>
              <li><a href="#" className="footer-link">Press Kit</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-section-title">Connect With Us</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <span>Brussels, Belgium</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <span>info@celfa.eu</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <span>+32 2 XXX XXXX</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="footer-newsletter">
              <h5 className="newsletter-title">Stay Updated</h5>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                  aria-label="Email address for newsletter"
                />
                <button className="newsletter-btn" aria-label="Subscribe to newsletter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p>&copy; 2024 Centre for European Leadership in Financial AI. All rights reserved.</p>
              <div className="legal-links">
                <a href="#" className="legal-link">Privacy Policy</a>
                <span className="legal-divider">|</span>
                <a href="#" className="legal-link">Terms of Service</a>
                <span className="legal-divider">|</span>
                <a href="#" className="legal-link">Cookie Policy</a>
                <span className="legal-divider">|</span>
                <a href="#" className="legal-link">Accessibility</a>
              </div>
            </div>
            <div className="footer-certifications">
              <div className="certification-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <span>EU Compliant</span>
              </div>
              <div className="certification-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <polyline points="9,12 12,15 23,4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <span>ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;