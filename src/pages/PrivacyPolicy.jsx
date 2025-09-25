import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-container">
        {/* Header Section */}
        <div className="privacy-header">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">
            Centre for European Leadership in Financial AI (CELFA)
          </p>
          <div className="privacy-meta">
            <span className="effective-date">Effective Date: September 25, 2024</span>
            <span className="last-updated">Last Updated: September 25, 2024</span>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="privacy-toc">
          <h2 className="toc-title">Table of Contents</h2>
          <ul className="toc-list">
            <li><a href="#introduction" className="toc-link">1. Introduction</a></li>
            <li><a href="#information-collection" className="toc-link">2. Information We Collect</a></li>
            <li><a href="#how-we-use" className="toc-link">3. How We Use Your Information</a></li>
            <li><a href="#information-sharing" className="toc-link">4. Information Sharing and Disclosure</a></li>
            <li><a href="#data-security" className="toc-link">5. Data Security</a></li>
            <li><a href="#your-rights" className="toc-link">6. Your Rights and Choices</a></li>
            <li><a href="#cookies" className="toc-link">7. Cookies and Similar Technologies</a></li>
            <li><a href="#international-transfers" className="toc-link">8. International Data Transfers</a></li>
            <li><a href="#data-retention" className="toc-link">9. Data Retention</a></li>
            <li><a href="#children-privacy" className="toc-link">10. Children's Privacy</a></li>
            <li><a href="#updates" className="toc-link">11. Updates to This Policy</a></li>
            <li><a href="#contact" className="toc-link">12. Contact Information</a></li>
          </ul>
        </div>

        {/* Content Sections */}
        <div className="privacy-content">
          {/* Introduction */}
          <section id="introduction" className="privacy-section">
            <h2 className="section-title">1. Introduction</h2>
            <div className="section-content">
              <p>
                Welcome to the Centre for European Leadership in Financial AI (CELFA). CELFA is an 
                advisory board that brings together Europe's foremost experts in artificial intelligence 
                and finance to drive responsible innovation and establish ethical standards. We are 
                committed to protecting your privacy and ensuring the security of your personal 
                information when you visit our website or engage with our research initiatives.
              </p>
              <p>
                As a European advisory organization, we comply with the General Data Protection 
                Regulation (GDPR) and other applicable privacy laws. By using our website, you consent 
                to the practices described in this Privacy Policy.
              </p>
            </div>
          </section>

          {/* Information Collection */}
          <section id="information-collection" className="privacy-section">
            <h2 className="section-title">2. Information We Collect</h2>
            <div className="section-content">
              <h3 className="subsection-title">2.1 Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul className="info-list">
                <li><strong>Contact Information:</strong> Name and professional contact details</li>
                <li><strong>Professional Information:</strong> Job title, organization name, industry, and professional interests</li>
                <li><strong>Communication Data:</strong> Messages, inquiries, and feedback you send to us</li>
                <li><strong>Event Data:</strong> Registration information for webinars, conferences, and events</li>
                <li><strong>Newsletter Data:</strong> Contact preferences for our newsletter and updates</li>
              </ul>

              <h3 className="subsection-title">2.2 Technical Information</h3>
              <p>We automatically collect certain technical information, including:</p>
              <ul className="info-list">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click-through rates, and navigation patterns</li>
                <li><strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons, and similar tracking technologies</li>
              </ul>
            </div>
          </section>

          {/* How We Use Information */}
          <section id="how-we-use" className="privacy-section">
            <h2 className="section-title">3. How We Use Your Information</h2>
            <div className="section-content">
              <p>We use your information for the following purposes:</p>
              <ul className="info-list">
                <li><strong>Communication:</strong> To respond to your inquiries and provide information</li>
                <li><strong>Research and Publications:</strong> To conduct research and publish insights in the field of financial AI</li>
                <li><strong>Events and Webinars:</strong> To organize and manage events, webinars, and educational programs</li>
                <li><strong>Newsletters:</strong> To send you our newsletter and updates about CELFA activities</li>
                <li><strong>Website Improvement:</strong> To analyze website usage and improve our advisory services</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                <li><strong>Advisory Activities:</strong> To facilitate our role as an advisory board and connect with relevant stakeholders</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section id="information-sharing" className="privacy-section">
            <h2 className="section-title">4. Information Sharing and Disclosure</h2>
            <div className="section-content">
              <p>We do not sell your personal information. As an advisory board, we may share your information in the following circumstances:</p>
              <ul className="info-list">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and advisory activities</li>
                <li><strong>Research Partners:</strong> With academic institutions and research partners for collaborative projects (with your consent)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Advisory Board Members:</strong> With our advisory board members for legitimate advisory purposes (with appropriate confidentiality measures)</li>
                <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section id="data-security" className="privacy-section">
            <h2 className="section-title">5. Data Security</h2>
            <div className="section-content">
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. Our 
                security measures include:
              </p>
              <ul className="info-list">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection practices</li>
                <li>Compliance with ISO 27001 standards</li>
              </ul>
              <p>
                While we strive to protect your information, no method of transmission over the internet 
                or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section id="your-rights" className="privacy-section">
            <h2 className="section-title">6. Your Rights and Choices</h2>
            <div className="section-content">
              <p>Under GDPR and other applicable laws, you have the following rights:</p>
              <ul className="info-list">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another organization</li>
                <li><strong>Restriction:</strong> Request limitation of processing your information</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the 
                "Contact Information" section below.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section id="cookies" className="privacy-section">
            <h2 className="section-title">7. Cookies and Similar Technologies</h2>
            <div className="section-content">
              <p>We use cookies and similar technologies to enhance your browsing experience. Types of cookies we use include:</p>
              <ul className="info-list">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
              </ul>
              <p>
                You can control cookies through your browser settings. However, disabling certain 
                cookies may affect the functionality of our website.
              </p>
            </div>
          </section>

          {/* International Transfers */}
          <section id="international-transfers" className="privacy-section">
            <h2 className="section-title">8. International Data Transfers</h2>
            <div className="section-content">
              <p>
                Your information may be transferred to and processed in countries outside the European 
                Economic Area (EEA). When we transfer your data internationally, we ensure appropriate 
                safeguards are in place, including:
              </p>
              <ul className="info-list">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions by the European Commission</li>
                <li>Binding Corporate Rules</li>
                <li>Other appropriate safeguards as required by applicable law</li>
              </ul>
            </div>
          </section>

          {/* Data Retention */}
          <section id="data-retention" className="privacy-section">
            <h2 className="section-title">9. Data Retention</h2>
            <div className="section-content">
              <p>
                We retain your personal information only for as long as necessary to fulfill the 
                purposes outlined in this Privacy Policy, unless a longer retention period is 
                required by law. Our retention periods are based on:
              </p>
              <ul className="info-list">
                <li>The nature and purpose of the data processing</li>
                <li>Legal and regulatory requirements</li>
                <li>Your relationship with CELFA as an advisory organization</li>
                <li>Legitimate advisory and research interests</li>
              </ul>
            </div>
          </section>

          {/* Children's Privacy */}
          <section id="children-privacy" className="privacy-section">
            <h2 className="section-title">10. Children's Privacy</h2>
            <div className="section-content">
              <p>
                Our services are not directed to individuals under the age of 16. We do not knowingly 
                collect personal information from children under 16. If we become aware that we have 
                collected personal information from a child under 16, we will take steps to delete 
                such information promptly.
              </p>
            </div>
          </section>

          {/* Updates */}
          <section id="updates" className="privacy-section">
            <h2 className="section-title">11. Updates to This Policy</h2>
            <div className="section-content">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or applicable laws. We will notify you of material changes by posting the updated policy 
                on our website and updating the "Last Updated" date. Your continued use of our services 
                after such changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section id="contact" className="privacy-section">
            <h2 className="section-title">12. Contact Information</h2>
            <div className="section-content">
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, 
                please contact us:
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <strong>Centre for European Leadership in Financial AI (CELFA)</strong>
                </div>
                <div className="contact-item">
                  <strong>Advisory Board</strong>
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
                You also have the right to lodge a complaint with your local data protection authority 
                if you believe we have not handled your personal information appropriately.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="privacy-footer">
          <div className="footer-nav">
            <a href="#top" className="back-to-top">Back to Top</a>
            <a href="/" className="home-link">Return to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
