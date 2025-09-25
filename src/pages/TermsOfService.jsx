import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-of-service">
      <div className="terms-container">
        {/* Header Section */}
        <div className="terms-header">
          <h1 className="terms-title">Terms of Service</h1>
          <p className="terms-subtitle">
            Centre for European Leadership in Financial AI (CELFA)
          </p>
          <div className="terms-meta">
            <span className="effective-date">Effective Date: September 25, 2024</span>
            <span className="last-updated">Last Updated: September 25, 2024</span>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="terms-toc">
          <h2 className="toc-title">Table of Contents</h2>
          <ul className="toc-list">
            <li><a href="#acceptance" className="toc-link">1. Acceptance of Terms</a></li>
            <li><a href="#description" className="toc-link">2. Description of Service</a></li>
            <li><a href="#user-eligibility" className="toc-link">3. User Eligibility</a></li>
            <li><a href="#user-responsibilities" className="toc-link">4. User Responsibilities</a></li>
            <li><a href="#intellectual-property" className="toc-link">5. Intellectual Property</a></li>
            <li><a href="#prohibited-uses" className="toc-link">6. Prohibited Uses</a></li>
            <li><a href="#research-collaboration" className="toc-link">7. Research and Collaboration</a></li>
            <li><a href="#disclaimers" className="toc-link">8. Disclaimers</a></li>
            <li><a href="#limitation-liability" className="toc-link">9. Limitation of Liability</a></li>
            <li><a href="#indemnification" className="toc-link">10. Indemnification</a></li>
            <li><a href="#termination" className="toc-link">11. Termination</a></li>
            <li><a href="#governing-law" className="toc-link">12. Governing Law</a></li>
            <li><a href="#modifications" className="toc-link">13. Modifications to Terms</a></li>
            <li><a href="#contact" className="toc-link">14. Contact Information</a></li>
          </ul>
        </div>

        {/* Content Sections */}
        <div className="terms-content">
          {/* Acceptance of Terms */}
          <section id="acceptance" className="terms-section">
            <h2 className="section-title">1. Acceptance of Terms</h2>
            <div className="section-content">
              <p>
                Welcome to the Centre for European Leadership in Financial AI (CELFA). By accessing 
                or using our website, services, research publications, or participating in our 
                advisory activities, you agree to be bound by these Terms of Service ("Terms") and 
                our Privacy Policy.
              </p>
              <p>
                If you do not agree to these Terms, please do not use our website or services. 
                These Terms constitute a legally binding agreement between you and CELFA.
              </p>
            </div>
          </section>

          {/* Description of Service */}
          <section id="description" className="terms-section">
            <h2 className="section-title">2. Description of Service</h2>
            <div className="section-content">
              <p>CELFA provides the following services and resources:</p>
              <ul className="info-list">
                <li><strong>Advisory Services:</strong> Expert guidance on financial AI ethics, regulation, and implementation</li>
                <li><strong>Research Publications:</strong> White papers, reports, and insights on financial AI trends</li>
                <li><strong>Educational Content:</strong> Webinars, conferences, and educational materials</li>
                <li><strong>Industry Networking:</strong> Platform for connecting professionals in financial AI</li>
                <li><strong>Website Resources:</strong> Information, news, and updates about financial AI developments</li>
                <li><strong>Advisory Board Insights:</strong> Expert opinions and recommendations from our board members</li>
              </ul>
            </div>
          </section>

          {/* User Eligibility */}
          <section id="user-eligibility" className="terms-section">
            <h2 className="section-title">3. User Eligibility</h2>
            <div className="section-content">
              <p>To use our services, you must:</p>
              <ul className="info-list">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding agreements</li>
                <li>Not be prohibited from using our services under applicable laws</li>
                <li>Provide accurate and complete information when requested</li>
                <li>Maintain the confidentiality of any account credentials</li>
              </ul>
              <p>
                CELFA reserves the right to refuse service to anyone at any time for any reason 
                consistent with applicable law.
              </p>
            </div>
          </section>

          {/* User Responsibilities */}
          <section id="user-responsibilities" className="terms-section">
            <h2 className="section-title">4. User Responsibilities</h2>
            <div className="section-content">
              <p>As a user of CELFA's services, you agree to:</p>
              <ul className="info-list">
                <li><strong>Lawful Use:</strong> Use our services in compliance with all applicable laws and regulations</li>
                <li><strong>Accurate Information:</strong> Provide truthful and accurate information in all interactions</li>
                <li><strong>Professional Conduct:</strong> Maintain professional standards in all communications</li>
                <li><strong>Respect Privacy:</strong> Protect the privacy and confidentiality of other users</li>
                <li><strong>No Misrepresentation:</strong> Not misrepresent your identity, affiliation, or qualifications</li>
                <li><strong>Security:</strong> Maintain the security of your account and notify us of any breaches</li>
                <li><strong>Compliance:</strong> Follow all posted guidelines and policies</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section id="intellectual-property" className="terms-section">
            <h2 className="section-title">5. Intellectual Property</h2>
            <div className="section-content">
              <h3 className="subsection-title">5.1 CELFA Content</h3>
              <p>
                All content on our website, including but not limited to text, graphics, logos, 
                images, research papers, and software, is the property of CELFA or its content 
                suppliers and is protected by international copyright and trademark laws.
              </p>
              
              <h3 className="subsection-title">5.2 Limited License</h3>
              <p>We grant you a limited, non-exclusive, non-transferable license to:</p>
              <ul className="info-list">
                <li>Access and use our website for personal and professional purposes</li>
                <li>Download and print materials for non-commercial use</li>
                <li>Share our research publications with proper attribution</li>
                <li>Reference our work in academic and professional contexts</li>
              </ul>

              <h3 className="subsection-title">5.3 User Content</h3>
              <p>
                By submitting content to CELFA (comments, feedback, ideas), you grant us a 
                worldwide, royalty-free license to use, modify, and distribute such content 
                for our advisory and research purposes.
              </p>
            </div>
          </section>

          {/* Prohibited Uses */}
          <section id="prohibited-uses" className="terms-section">
            <h2 className="section-title">6. Prohibited Uses</h2>
            <div className="section-content">
              <p>You may not use our services to:</p>
              <ul className="info-list">
                <li><strong>Illegal Activities:</strong> Engage in any unlawful or fraudulent activities</li>
                <li><strong>Harmful Content:</strong> Upload or distribute malicious software, viruses, or harmful code</li>
                <li><strong>Harassment:</strong> Harass, abuse, or harm other users or CELFA staff</li>
                <li><strong>Spam:</strong> Send unsolicited communications or spam</li>
                <li><strong>Misrepresentation:</strong> Impersonate others or misrepresent your credentials</li>
                <li><strong>Data Mining:</strong> Extract data from our website using automated means without permission</li>
                <li><strong>Commercial Exploitation:</strong> Use our content for commercial purposes without authorization</li>
                <li><strong>System Interference:</strong> Attempt to interfere with or disrupt our services</li>
              </ul>
            </div>
          </section>

          {/* Research and Collaboration */}
          <section id="research-collaboration" className="terms-section">
            <h2 className="section-title">7. Research and Collaboration</h2>
            <div className="section-content">
              <h3 className="subsection-title">7.1 Research Participation</h3>
              <p>
                Participation in CELFA research initiatives is voluntary and subject to separate 
                agreements. All research activities must comply with ethical standards and 
                applicable regulations.
              </p>

              <h3 className="subsection-title">7.2 Confidentiality</h3>
              <p>
                Research collaborations may involve confidential information. Participants must 
                maintain confidentiality and may be required to sign additional non-disclosure 
                agreements.
              </p>

              <h3 className="subsection-title">7.3 Publication Rights</h3>
              <p>
                CELFA reserves the right to publish research findings while protecting participant 
                confidentiality. Publication policies will be clearly communicated to all participants.
              </p>
            </div>
          </section>

          {/* Disclaimers */}
          <section id="disclaimers" className="terms-section">
            <h2 className="section-title">8. Disclaimers</h2>
            <div className="section-content">
              <p>
                CELFA's services are provided "as is" and "as available" without warranties of any 
                kind, either express or implied. We disclaim all warranties, including but not limited to:
              </p>
              <ul className="info-list">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Accuracy, completeness, or reliability of content</li>
                <li>Uninterrupted or error-free service</li>
                <li>Security of data transmission</li>
              </ul>
              <p>
                <strong>Advisory Nature:</strong> CELFA provides general guidance and research insights. 
                Our advice should not be considered as specific legal, financial, or regulatory counsel. 
                Users should consult with qualified professionals for specific situations.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section id="limitation-liability" className="terms-section">
            <h2 className="section-title">9. Limitation of Liability</h2>
            <div className="section-content">
              <p>
                To the maximum extent permitted by law, CELFA and its board members, employees, 
                and affiliates shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="info-list">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Interruption of business or service</li>
                <li>Cost of substitute services</li>
                <li>Damage to reputation or goodwill</li>
              </ul>
              <p>
                Our total liability for any claims arising from these Terms or your use of our 
                services shall not exceed €1,000 or the amount you paid to us in the 12 months 
                preceding the claim, whichever is greater.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section id="indemnification" className="terms-section">
            <h2 className="section-title">10. Indemnification</h2>
            <div className="section-content">
              <p>
                You agree to indemnify, defend, and hold harmless CELFA, its board members, 
                employees, and affiliates from and against any claims, damages, losses, costs, 
                and expenses arising from:
              </p>
              <ul className="info-list">
                <li>Your use of our services in violation of these Terms</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Your infringement of third-party rights</li>
                <li>Content you submit or share through our services</li>
                <li>Your negligent or wrongful conduct</li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section id="termination" className="terms-section">
            <h2 className="section-title">11. Termination</h2>
            <div className="section-content">
              <p>
                Either party may terminate this agreement at any time. CELFA reserves the right 
                to suspend or terminate your access to our services immediately, without notice, 
                for any reason, including:
              </p>
              <ul className="info-list">
                <li>Violation of these Terms</li>
                <li>Illegal or harmful conduct</li>
                <li>Threat to the security or integrity of our services</li>
                <li>Prolonged inactivity</li>
              </ul>
              <p>
                Upon termination, your right to use our services ceases immediately, but the 
                provisions regarding intellectual property, disclaimers, limitation of liability, 
                and indemnification shall survive.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section id="governing-law" className="terms-section">
            <h2 className="section-title">12. Governing Law</h2>
            <div className="section-content">
              <p>
                These Terms are governed by and construed in accordance with the laws of Germany. 
                Any disputes arising from these Terms shall be subject to the exclusive jurisdiction 
                of the courts in Frankfurt, Germany.
              </p>
              <p>
                The application of the United Nations Convention on Contracts for the International 
                Sale of Goods is explicitly excluded.
              </p>
            </div>
          </section>

          {/* Modifications to Terms */}
          <section id="modifications" className="terms-section">
            <h2 className="section-title">13. Modifications to Terms</h2>
            <div className="section-content">
              <p>
                CELFA reserves the right to modify these Terms at any time. We will notify users 
                of material changes by:
              </p>
              <ul className="info-list">
                <li>Posting the updated Terms on our website</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending email notifications for significant changes</li>
                <li>Displaying prominent notices on our website</li>
              </ul>
              <p>
                Your continued use of our services after the changes take effect constitutes 
                acceptance of the modified Terms. If you do not agree to the changes, you must 
                discontinue using our services.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section id="contact" className="terms-section">
            <h2 className="section-title">14. Contact Information</h2>
            <div className="section-content">
              <p>
                If you have any questions about these Terms of Service, please contact us:
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
                For legal matters specifically related to these Terms of Service, please include 
                "Terms of Service Inquiry" in your subject line.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="terms-footer">
          <div className="footer-nav">
            <a href="#top" className="back-to-top">Back to Top</a>
            <a href="/" className="home-link">Return to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;