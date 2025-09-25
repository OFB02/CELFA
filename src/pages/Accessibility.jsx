import React from 'react';
import './Accessibility.css';

const Accessibility = () => {
  return (
    <div className="accessibility">
      <div className="accessibility-container">
        {/* Header Section */}
        <div className="accessibility-header">
          <h1 className="accessibility-title">Accessibility Statement</h1>
          <p className="accessibility-subtitle">
            Centre for European Leadership in Financial AI (CELFA)
          </p>
          <div className="accessibility-meta">
            <span className="effective-date">Effective Date: September 25, 2024</span>
            <span className="last-updated">Last Updated: September 25, 2024</span>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="accessibility-toc">
          <h2 className="toc-title">Table of Contents</h2>
          <ul className="toc-list">
            <li><a href="#commitment" className="toc-link">1. Our Commitment</a></li>
            <li><a href="#standards" className="toc-link">2. Accessibility Standards</a></li>
            <li><a href="#features" className="toc-link">3. Accessibility Features</a></li>
            <li><a href="#testing" className="toc-link">4. Testing & Validation</a></li>
            <li><a href="#limitations" className="toc-link">5. Known Limitations</a></li>
            <li><a href="#feedback" className="toc-link">6. Feedback & Support</a></li>
            <li><a href="#improvements" className="toc-link">7. Ongoing Improvements</a></li>
            <li><a href="#contact" className="toc-link">8. Contact Information</a></li>
          </ul>
        </div>

        {/* Content Sections */}
        <div className="accessibility-content">
          {/* Our Commitment */}
          <section id="commitment" className="accessibility-section">
            <h2 className="section-title">1. Our Commitment</h2>
            <div className="section-content">
              <p>
                The Centre for European Leadership in Financial AI (CELFA) is committed to ensuring 
                digital accessibility for people with disabilities. We strive to provide an inclusive 
                online experience that enables all visitors to access our research, insights, and 
                advisory services regardless of their abilities or technologies they use.
              </p>
              <p>
                We believe that accessibility is not just a legal requirement, but a moral imperative 
                that reflects our values of inclusion, innovation, and excellence in the financial AI sector.
              </p>
            </div>
          </section>

          {/* Accessibility Standards */}
          <section id="standards" className="accessibility-section">
            <h2 className="section-title">2. Accessibility Standards</h2>
            <div className="section-content">
              <p>Our website aims to conform to the following accessibility standards:</p>
              <ul className="info-list">
                <li><strong>WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines 2.1 at Level AA conformance</li>
                <li><strong>Section 508:</strong> US Federal accessibility requirements for electronic content</li>
                <li><strong>EN 301 549:</strong> European standard that references WCAG 2.1 for web accessibility</li>
                <li><strong>ADA Compliance:</strong> Americans with Disabilities Act digital accessibility requirements</li>
              </ul>
              <p>
                These standards ensure that our website is accessible to users with a wide range of 
                disabilities, including visual, auditory, motor, and cognitive impairments.
              </p>
            </div>
          </section>

          {/* Accessibility Features */}
          <section id="features" className="accessibility-section">
            <h2 className="section-title">3. Accessibility Features</h2>
            <div className="section-content">
              <p>Our website includes the following accessibility features:</p>

              <h3 className="subsection-title">3.1 Navigation & Structure</h3>
              <ul className="info-list">
                <li>Logical heading structure (H1-H6) for screen reader navigation</li>
                <li>Skip links to main content areas</li>
                <li>Consistent navigation across all pages</li>
                <li>Breadcrumb navigation where appropriate</li>
                <li>Clear page titles that describe content</li>
              </ul>

              <h3 className="subsection-title">3.2 Visual & Design</h3>
              <ul className="info-list">
                <li>High contrast color schemes meeting WCAG AA standards</li>
                <li>Scalable text that can be enlarged up to 200% without loss of functionality</li>
                <li>Alternative text for all informative images</li>
                <li>Visual focus indicators for keyboard navigation</li>
                <li>Consistent visual design and layout patterns</li>
              </ul>

              <h3 className="subsection-title">3.3 Keyboard & Interaction</h3>
              <ul className="info-list">
                <li>Full keyboard navigation support</li>
                <li>Logical tab order throughout the site</li>
                <li>Visible focus indicators on interactive elements</li>
                <li>No keyboard traps or inaccessible content areas</li>
                <li>Sufficient click/touch target sizes (minimum 44x44 pixels)</li>
              </ul>

              <h3 className="subsection-title">3.4 Content & Language</h3>
              <ul className="info-list">
                <li>Clear and simple language appropriate for our professional audience</li>
                <li>Proper language attributes for screen readers</li>
                <li>Descriptive link text that makes sense out of context</li>
                <li>Form labels clearly associated with their controls</li>
                <li>Error messages that are clear and helpful</li>
              </ul>
            </div>
          </section>

          {/* Testing & Validation */}
          <section id="testing" className="accessibility-section">
            <h2 className="section-title">4. Testing & Validation</h2>
            <div className="section-content">
              <p>We regularly test our website using various methods and tools:</p>

              <h3 className="subsection-title">4.1 Automated Testing</h3>
              <ul className="info-list">
                <li>WAVE (Web Accessibility Evaluation Tool)</li>
                <li>axe DevTools for accessibility scanning</li>
                <li>Lighthouse accessibility audits</li>
                <li>Pa11y command-line accessibility testing</li>
              </ul>

              <h3 className="subsection-title">4.2 Manual Testing</h3>
              <ul className="info-list">
                <li>Keyboard-only navigation testing</li>
                <li>Screen reader testing (NVDA, JAWS, VoiceOver)</li>
                <li>Color contrast verification</li>
                <li>Mobile accessibility testing</li>
                <li>User testing with assistive technologies</li>
              </ul>

              <h3 className="subsection-title">4.3 Browser & Device Testing</h3>
              <p>We test our website across multiple browsers and devices:</p>
              <ul className="info-list">
                <li>Modern browsers (Chrome, Firefox, Safari, Edge)</li>
                <li>Mobile devices (iOS and Android)</li>
                <li>Various screen sizes and resolutions</li>
                <li>High contrast and dark mode settings</li>
              </ul>
            </div>
          </section>

          {/* Known Limitations */}
          <section id="limitations" className="accessibility-section">
            <h2 className="section-title">5. Known Limitations</h2>
            <div className="section-content">
              <p>
                While we strive for full accessibility, we acknowledge some current limitations 
                that we are actively working to address:
              </p>
              <ul className="info-list">
                <li><strong>Third-party Content:</strong> Some embedded content from external sources may not meet our accessibility standards</li>
                <li><strong>PDF Documents:</strong> Legacy PDF documents are being updated to ensure accessibility compliance</li>
                <li><strong>Complex Data Visualizations:</strong> Some research charts and graphs may require alternative text descriptions</li>
                <li><strong>Video Content:</strong> We are working to add captions and transcriptions to all video materials</li>
              </ul>
              <p>
                We are committed to addressing these limitations as part of our ongoing accessibility 
                improvement program.
              </p>
            </div>
          </section>

          {/* Feedback & Support */}
          <section id="feedback" className="accessibility-section">
            <h2 className="section-title">6. Feedback & Support</h2>
            <div className="section-content">
              <p>
                We welcome feedback about the accessibility of our website. If you encounter 
                accessibility barriers or have suggestions for improvement, please let us know.
              </p>

              <h3 className="subsection-title">6.1 How to Report Issues</h3>
              <p>When reporting accessibility issues, please include:</p>
              <ul className="info-list">
                <li>The specific page or section where you encountered the issue</li>
                <li>A description of the accessibility barrier</li>
                <li>The assistive technology you were using (if applicable)</li>
                <li>Your browser and operating system information</li>
                <li>Any steps to reproduce the issue</li>
              </ul>

              <h3 className="subsection-title">6.2 Response Time</h3>
              <p>We aim to respond to accessibility feedback within:</p>
              <ul className="info-list">
                <li><strong>Critical issues:</strong> 24-48 hours</li>
                <li><strong>Non-critical issues:</strong> 5-7 business days</li>
                <li><strong>General feedback:</strong> 10 business days</li>
              </ul>

              <h3 className="subsection-title">6.3 Alternative Access</h3>
              <p>
                If you cannot access content on our website due to accessibility barriers, 
                we can provide the information in alternative formats such as:
              </p>
              <ul className="info-list">
                <li>Plain text or accessible PDF versions</li>
                <li>Audio recordings of written content</li>
                <li>Large print versions</li>
                <li>Email or phone consultation</li>
              </ul>
            </div>
          </section>

          {/* Ongoing Improvements */}
          <section id="improvements" className="accessibility-section">
            <h2 className="section-title">7. Ongoing Improvements</h2>
            <div className="section-content">
              <p>
                Accessibility is an ongoing commitment. We continuously work to improve the 
                accessibility of our website through:
              </p>
              <ul className="info-list">
                <li><strong>Regular Audits:</strong> Quarterly accessibility assessments and testing</li>
                <li><strong>Staff Training:</strong> Ongoing education for our development and content teams</li>
                <li><strong>User Research:</strong> Feedback sessions with users of assistive technologies</li>
                <li><strong>Technology Updates:</strong> Implementing new accessibility features and tools</li>
                <li><strong>Policy Reviews:</strong> Regular updates to our accessibility policies and procedures</li>
              </ul>

              <h3 className="subsection-title">7.1 Future Enhancements</h3>
              <p>Planned accessibility improvements include:</p>
              <ul className="info-list">
                <li>Enhanced voice navigation support</li>
                <li>Improved mobile accessibility features</li>
                <li>Additional language support options</li>
                <li>Advanced content personalization for different accessibility needs</li>
                <li>Integration with emerging assistive technologies</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section id="contact" className="accessibility-section">
            <h2 className="section-title">8. Contact Information</h2>
            <div className="section-content">
              <p>
                For accessibility-related questions, feedback, or to request alternative formats 
                of our content, please contact us:
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <strong>Centre for European Leadership in Financial AI (CELFA)</strong>
                </div>
                <div className="contact-item">
                  <strong>Accessibility Team</strong>
                </div>
                <div className="contact-item">
                  <strong>Location:</strong> Frankfurt, Germany
                </div>
                <div className="contact-item">
                  <strong>LinkedIn:</strong> 
                  <a href="https://www.linkedin.com/company/celfa/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/company/celfa/
                  </a>
                </div>
                <div className="contact-item">
                  <strong>Website Contact Form:</strong> Use the contact form on our website to reach us
                </div>
              </div>
              <p>
                For accessibility inquiries specifically, please include "Accessibility Support" 
                in your subject line to ensure your message is directed to the appropriate team member.
              </p>
              <p>
                <strong>Accessibility Statement Updates:</strong> This statement was last reviewed on 
                September 25, 2024, and will be updated regularly to reflect our ongoing accessibility 
                improvements and compliance efforts.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="accessibility-footer">
          <div className="footer-nav">
            <a href="#top" className="back-to-top">Back to Top</a>
            <a href="/" className="home-link">Return to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
