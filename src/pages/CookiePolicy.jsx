import React from 'react';
import './CookiePolicy.css';

const CookiePolicy = () => {
  return (
    <div className="cookie-policy">
      <div className="cookie-container">
        {/* Header Section */}
        <div className="cookie-header">
          <h1 className="cookie-title">Cookie Policy</h1>
          <p className="cookie-subtitle">
            Centre for European Leadership in Financial AI (CELFA)
          </p>
          <div className="cookie-meta">
            <span className="effective-date">Effective Date: September 25, 2024</span>
            <span className="last-updated">Last Updated: September 25, 2024</span>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="cookie-toc">
          <h2 className="toc-title">Table of Contents</h2>
          <ul className="toc-list">
            <li><a href="#what-are-cookies" className="toc-link">1. What Are Cookies?</a></li>
            <li><a href="#how-we-use-cookies" className="toc-link">2. How We Use Cookies</a></li>
            <li><a href="#types-of-cookies" className="toc-link">3. Types of Cookies We Use</a></li>
            <li><a href="#third-party-cookies" className="toc-link">4. Third-Party Cookies</a></li>
            <li><a href="#cookie-settings" className="toc-link">5. Managing Cookie Settings</a></li>
            <li><a href="#cookie-retention" className="toc-link">6. Cookie Retention</a></li>
            <li><a href="#updates" className="toc-link">7. Updates to This Policy</a></li>
            <li><a href="#contact" className="toc-link">8. Contact Information</a></li>
          </ul>
        </div>

        {/* Content Sections */}
        <div className="cookie-content">
          {/* What Are Cookies */}
          <section id="what-are-cookies" className="cookie-section">
            <h2 className="section-title">1. What Are Cookies?</h2>
            <div className="section-content">
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                when you visit our website. They help us provide you with a better browsing experience 
                by remembering your preferences and understanding how you interact with our site.
              </p>
              <p>
                Cookies contain information that is transferred to your device's hard drive. They help us 
                improve our services and deliver a more personalized and convenient website experience.
              </p>
            </div>
          </section>

          {/* How We Use Cookies */}
          <section id="how-we-use-cookies" className="cookie-section">
            <h2 className="section-title">2. How We Use Cookies</h2>
            <div className="section-content">
              <p>CELFA uses cookies for the following purposes:</p>
              <ul className="info-list">
                <li><strong>Essential Website Function:</strong> To enable basic website functionality and navigation</li>
                <li><strong>User Experience:</strong> To remember your preferences and settings</li>
                <li><strong>Analytics:</strong> To understand how visitors use our website and improve our services</li>
                <li><strong>Content Delivery:</strong> To deliver relevant content and research insights</li>
                <li><strong>Security:</strong> To detect and prevent fraudulent activity and enhance security</li>
                <li><strong>Performance:</strong> To optimize website loading times and functionality</li>
              </ul>
            </div>
          </section>

          {/* Types of Cookies */}
          <section id="types-of-cookies" className="cookie-section">
            <h2 className="section-title">3. Types of Cookies We Use</h2>
            <div className="section-content">
              
              <h3 className="subsection-title">3.1 Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable basic 
                functions like page navigation and access to secure areas of the website. The website 
                cannot function properly without these cookies.
              </p>
              <ul className="info-list">
                <li>Session management cookies</li>
                <li>Authentication cookies</li>
                <li>Security cookies</li>
                <li>Accessibility preference cookies</li>
              </ul>

              <h3 className="subsection-title">3.2 Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously. This helps us improve our website's performance 
                and user experience.
              </p>
              <ul className="info-list">
                <li>Google Analytics cookies (anonymized IP addresses)</li>
                <li>Page view tracking cookies</li>
                <li>User behavior analysis cookies</li>
                <li>Site performance monitoring cookies</li>
              </ul>

              <h3 className="subsection-title">3.3 Functional Cookies</h3>
              <p>
                These cookies enable the website to provide enhanced functionality and personalization. 
                They may be set by us or by third-party providers whose services we use on our pages.
              </p>
              <ul className="info-list">
                <li>Language preference cookies</li>
                <li>Theme selection cookies</li>
                <li>Newsletter subscription preferences</li>
                <li>Contact form data retention</li>
              </ul>

              <h3 className="subsection-title">3.4 Marketing Cookies</h3>
              <p>
                We currently do not use marketing or advertising cookies. However, we may implement 
                these in the future to deliver relevant content about our research and advisory services. 
                Any changes will be reflected in this policy.
              </p>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section id="third-party-cookies" className="cookie-section">
            <h2 className="section-title">4. Third-Party Cookies</h2>
            <div className="section-content">
              <p>
                Some cookies on our website are set by third-party services that appear on our pages. 
                We work with the following trusted partners:
              </p>

              <h3 className="subsection-title">4.1 Google Analytics</h3>
              <p>
                We use Google Analytics to analyze website traffic and user behavior. Google Analytics 
                uses cookies to help us understand how visitors interact with our site. The information 
                generated is transmitted to and stored by Google.
              </p>
              <ul className="info-list">
                <li>Cookie Names: _ga, _ga_*, _gid</li>
                <li>Purpose: Website analytics and performance measurement</li>
                <li>Data Anonymization: IP addresses are anonymized</li>
                <li>Retention: Up to 2 years</li>
              </ul>

              <h3 className="subsection-title">4.2 LinkedIn Integration</h3>
              <p>
                Our website includes LinkedIn social media integration for professional networking 
                and content sharing purposes.
              </p>
              <ul className="info-list">
                <li>Purpose: Social media integration and professional networking</li>
                <li>Data Shared: Limited to public profile information when you interact</li>
                <li>Privacy: Governed by LinkedIn's Privacy Policy</li>
              </ul>

              <h3 className="subsection-title">4.3 Content Delivery Networks (CDN)</h3>
              <p>
                We use CDN services to ensure fast and reliable delivery of our website content, 
                including fonts, images, and scripts.
              </p>
              <ul className="info-list">
                <li>Purpose: Optimize website performance and loading speeds</li>
                <li>Data: Technical information about your browser and connection</li>
                <li>Retention: Typically 30 days or less</li>
              </ul>
            </div>
          </section>

          {/* Managing Cookie Settings */}
          <section id="cookie-settings" className="cookie-section">
            <h2 className="section-title">5. Managing Cookie Settings</h2>
            <div className="section-content">
              <p>
                You have several options for managing cookies on our website:
              </p>

              <h3 className="subsection-title">5.1 Browser Settings</h3>
              <p>
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="info-list">
                <li>Block all cookies</li>
                <li>Accept or decline cookies on a case-by-case basis</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for different types of cookies</li>
              </ul>

              <h3 className="subsection-title">5.2 Browser-Specific Instructions</h3>
              <ul className="info-list">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>

              <h3 className="subsection-title">5.3 Opt-Out Tools</h3>
              <p>For analytics cookies, you can opt out using these tools:</p>
              <ul className="info-list">
                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong>Do Not Track:</strong> Enable "Do Not Track" in your browser settings</li>
              </ul>

              <p>
                <strong>Important Note:</strong> Disabling certain cookies may impact your experience 
                on our website and limit access to some features and content.
              </p>
            </div>
          </section>

          {/* Cookie Retention */}
          <section id="cookie-retention" className="cookie-section">
            <h2 className="section-title">6. Cookie Retention</h2>
            <div className="section-content">
              <p>Different types of cookies are stored for different periods:</p>

              <h3 className="subsection-title">6.1 Session Cookies</h3>
              <p>
                These cookies are temporary and are deleted when you close your browser. They are 
                essential for website functionality during your visit.
              </p>

              <h3 className="subsection-title">6.2 Persistent Cookies</h3>
              <p>These cookies remain on your device for a specified period:</p>
              <ul className="info-list">
                <li><strong>Essential cookies:</strong> Up to 1 year</li>
                <li><strong>Analytics cookies:</strong> Up to 2 years</li>
                <li><strong>Functional cookies:</strong> Up to 1 year</li>
                <li><strong>Preference cookies:</strong> Up to 6 months</li>
              </ul>

              <h3 className="subsection-title">6.3 Automatic Deletion</h3>
              <p>
                Cookies are automatically deleted when they expire. You can also manually delete 
                them at any time through your browser settings.
              </p>
            </div>
          </section>

          {/* Updates to Policy */}
          <section id="updates" className="cookie-section">
            <h2 className="section-title">7. Updates to This Policy</h2>
            <div className="section-content">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons.
              </p>
              <p>When we make changes, we will:</p>
              <ul className="info-list">
                <li>Update the "Last Updated" date at the top of this policy</li>
                <li>Post the revised policy on our website</li>
                <li>Notify users of significant changes through website notifications</li>
                <li>Send email notifications for material changes (if you've subscribed)</li>
              </ul>
              <p>
                We encourage you to review this Cookie Policy periodically to stay informed 
                about how we use cookies and protect your information.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section id="contact" className="cookie-section">
            <h2 className="section-title">8. Contact Information</h2>
            <div className="section-content">
              <p>
                If you have any questions about this Cookie Policy or our use of cookies, 
                please contact us:
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <strong>Centre for European Leadership in Financial AI (CELFA)</strong>
                </div>
                <div className="contact-item">
                  <strong>Data Protection Team</strong>
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
                For cookie-related inquiries specifically, please include "Cookie Policy Inquiry" 
                in your subject line to help us direct your message to the appropriate team member.
              </p>
              <p>
                <strong>Your Rights:</strong> Under GDPR and other applicable privacy laws, you have 
                the right to know what cookies we use, access your data, request corrections, and 
                withdraw consent for non-essential cookies.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="cookie-footer">
          <div className="footer-nav">
            <a href="#top" className="back-to-top">Back to Top</a>
            <a href="/" className="home-link">Return to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
