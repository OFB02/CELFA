import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false);
  const [isEventsModalOpen, setIsEventsModalOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form and close modal
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    setIsContactModalOpen(false);
    
    // Show success message (you could use a toast library here)
    alert('Thank you for your message! We will get back to you soon.');
  };

  const closeModal = () => {
    setIsContactModalOpen(false);
  };

  const closeResearchModal = () => {
    setIsResearchModalOpen(false);
  };

  const closeEventsModal = () => {
    setIsEventsModalOpen(false);
  };

  const closeNewsletterModal = () => {
    setIsNewsletterModalOpen(false);
    setNewsletterEmail('');
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the email to your newsletter service
    console.log('Newsletter subscription:', newsletterEmail);
    
    // Reset form and close modal
    setNewsletterEmail('');
    setIsSubmitting(false);
    setIsNewsletterModalOpen(false);
    
    // Show success message
    alert('Thank you for subscribing to our newsletter!');
  };
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
              <button 
                onClick={() => setIsContactModalOpen(true)} 
                className="social-link" 
                aria-label="Contact Us"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About CELFA</Link></li>
              <li><Link to="/advisory-board" className="footer-link">Advisory Board</Link></li>
              <li><Link to="/research" className="footer-link">Research</Link></li>
              <li><button onClick={() => setIsResearchModalOpen(true)} className="footer-link footer-link-button">Insights</button></li>
              <li><button onClick={() => setIsContactModalOpen(true)} className="footer-link footer-link-button">Contact</button></li>
            </ul>
          </div>

          {/* Research Areas */}
          <div className="footer-section">
            <h4 className="footer-section-title">Research Areas</h4>
            <ul className="footer-links">
              <li><button onClick={() => setIsResearchModalOpen(true)} className="footer-link footer-link-button">AI Ethics in Finance</button></li>
              <li><button onClick={() => setIsResearchModalOpen(true)} className="footer-link footer-link-button">Regulatory Technology</button></li>
              <li><button onClick={() => setIsResearchModalOpen(true)} className="footer-link footer-link-button">Risk Management</button></li>
              <li><button onClick={() => setIsResearchModalOpen(true)} className="footer-link footer-link-button">Digital Transformation</button></li>
              <li><button onClick={() => setIsResearchModalOpen(true)} className="footer-link footer-link-button">Sustainable Finance</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-section-title">Resources</h4>
            <ul className="footer-links">
              <li><button onClick={() => setIsResearchModalOpen(true)} className="footer-link footer-link-button">Publications</button></li>
              <li><button onClick={() => setIsResearchModalOpen(true)} className="footer-link footer-link-button">White Papers</button></li>
              <li><button onClick={() => setIsEventsModalOpen(true)} className="footer-link footer-link-button">Events</button></li>
              <li><button onClick={() => setIsNewsletterModalOpen(true)} className="footer-link footer-link-button">Newsletter</button></li>
              <li><Link to="/press-kit" className="footer-link">Press Kit</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-section-title">Connect With Us</h4>
            <ul className="footer-links">
              <li className="footer-link">
                <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{color: '#94a3b8'}}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  Frankfurt, Germany
                </span>
              </li>
              <li className="footer-link footer-linkedin">
                <a href="https://www.linkedin.com/company/celfa/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none'}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{color: '#94a3b8'}}>
                    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zm15.11 13.019h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" fill="currentColor"/>
                  </svg>
                  Connect with us on LinkedIn
                </a>
              </li>
            </ul>
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
              <p>&copy; 2025 Centre for European Leadership in Financial AI. All rights reserved.</p>
              <div className="legal-links">
                <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>
                <span className="legal-divider">|</span>
                <Link to="/terms-of-service" className="legal-link">Terms of Service</Link>
                <span className="legal-divider">|</span>
                <Link to="/cookie-policy" className="legal-link">Cookie Policy</Link>
                <span className="legal-divider">|</span>
                <Link to="/accessibility" className="legal-link">Accessibility</Link>
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

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Contact CELFA</h2>
              <button 
                className="modal-close-btn" 
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className="modal-body">
              <p className="modal-description">
                Get in touch with our team. We're here to answer your questions about 
                financial AI, research opportunities, or partnership possibilities.
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input form-select"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="research">Research Collaboration</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="press">Press & Media</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="Please provide details about your inquiry..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="btn-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.25"/>
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" fill="none"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Research Portal Modal */}
      {isResearchModalOpen && (
        <div className="modal-overlay" onClick={closeResearchModal}>
          <div className="research-portal-modal" onClick={(e) => e.stopPropagation()}>
            <div className="research-modal-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <div className="research-modal-subtitle">Development Update</div>
            <h3 className="research-modal-title">Research Portal In Development</h3>
            <p className="research-modal-text">
              Our comprehensive research database and publications library are currently being developed by our expert team. 
              This portal will provide access to cutting-edge insights from <span className="research-modal-highlight">CELFA</span>'s 
              advisory board on ethical AI implementation and regulatory frameworks in financial services.
            </p>
            <div className="research-modal-actions">
              <button className="research-modal-close" onClick={closeResearchModal}>
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Events Modal */}
      {isEventsModalOpen && (
        <div className="modal-overlay" onClick={closeEventsModal}>
          <div className="events-modal" onClick={(e) => e.stopPropagation()}>
            <div className="events-modal-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <div className="events-modal-subtitle">Stay Connected</div>
            <h3 className="events-modal-title">Follow Us for Events</h3>
            <p className="events-modal-text">
              Stay up-to-date with <span className="events-modal-highlight">CELFA</span>'s latest events, conferences, 
              and networking opportunities by following us on LinkedIn. We regularly share updates about upcoming 
              industry events, expert panels, and exclusive gatherings for financial AI professionals.
            </p>
            <div className="events-modal-actions">
              <button className="events-modal-close" onClick={closeEventsModal}>
                Maybe Later
              </button>
              <a 
                href="https://www.linkedin.com/company/celfa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="events-modal-linkedin"
                onClick={closeEventsModal}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                </svg>
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Modal */}
      {isNewsletterModalOpen && (
        <div className="modal-overlay" onClick={closeNewsletterModal}>
          <div className="newsletter-modal" onClick={(e) => e.stopPropagation()}>
            <div className="newsletter-modal-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="newsletter-modal-subtitle">Stay Informed</div>
            <h3 className="newsletter-modal-title">Subscribe to Our Newsletter</h3>
            <p className="newsletter-modal-text">
              Get the latest insights from <span className="newsletter-modal-highlight">CELFA</span>'s experts on 
              artificial intelligence in finance, regulatory updates, research findings, and upcoming events 
              delivered directly to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="newsletter-signup-form">
              <div className="newsletter-form-group">
                <label htmlFor="newsletter-email" className="newsletter-form-label">Email Address</label>
                <input
                  type="email"
                  id="newsletter-email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="newsletter-form-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div className="newsletter-modal-actions">
                <button
                  type="button"
                  className="newsletter-modal-close"
                  onClick={closeNewsletterModal}
                >
                  Maybe Later
                </button>
                <button
                  type="submit"
                  className="newsletter-modal-subscribe"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="btn-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.25"/>
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                      Subscribe Now
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;