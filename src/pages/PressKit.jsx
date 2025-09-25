import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PressKit.css';
// Logo files live in the public/pictures folder. Use absolute public paths (e.g. /pictures/...) so Vite
// serves them at runtime instead of trying to bundle from src/.

const PressKit = () => {
  const [downloadedItems, setDownloadedItems] = useState(new Set());

  const handleDownload = (itemName, url) => {
    // Create a temporary link element for download
    const link = document.createElement('a');
    link.href = url;
    link.download = itemName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Track downloaded items
    setDownloadedItems(prev => new Set([...prev, itemName]));
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${type} copied to clipboard!`);
    });
  };

  const brandAssets = [
    {
      name: 'CELFA Full Logo (Dark)',
      file: 'CELFA-Logo-Full-Dark.png',
      description: 'Primary logo with full name for light backgrounds',
      url: '/pictures/CELFA Logo FULL DARK.png',
      type: 'PNG',
      size: '300x120px'
    },
    {
      name: 'CELFA Logo (Light)',
      file: 'CELFA-Logo-Light.png',
      description: 'Logo version for dark backgrounds',
      url: '/pictures/CELFA Logo LIGHT.png',
      type: 'PNG',
      size: '120x120px'
    },
    {
      name: 'CELFA Logo (Dark)',
      file: 'CELFA-Logo-Dark.png',
      description: 'Logo version for light backgrounds',
      url: '/pictures/CELFA Logo DARK.png',
      type: 'PNG',
      size: '120x120px'
    }
  ];

  const brandColors = [
    { name: 'Primary Blue', hex: '#3b82f6', rgb: 'rgb(59, 130, 246)', description: 'Main brand color for buttons and accents' },
    { name: 'Deep Blue', hex: '#1d4ed8', rgb: 'rgb(29, 78, 216)', description: 'Secondary blue for gradients and hover states' },
    { name: 'Dark Slate', hex: '#0f172a', rgb: 'rgb(15, 23, 42)', description: 'Primary text color and dark backgrounds' },
    { name: 'Slate Gray', hex: '#334155', rgb: 'rgb(51, 65, 85)', description: 'Secondary text and subtle elements' },
    { name: 'Light Gray', hex: '#f8fafc', rgb: 'rgb(248, 250, 252)', description: 'Background color and light text' },
    { name: 'Emerald Green', hex: '#10b981', rgb: 'rgb(16, 185, 129)', description: 'Success states and newsletter accents' }
  ];

  const typography = [
    {
      name: 'Playfair Display',
      usage: 'Headlines, Logo Text, Page Titles',
      weights: ['400', '500', '600', '700'],
      description: 'Elegant serif font used for the CELFA logo and major headings',
      example: 'CELFA - Centre for European Leadership in Financial AI'
    },
    {
      name: 'Inter',
      usage: 'Body Text, Navigation, UI Elements',
      weights: ['300', '400', '500', '600', '700'],
      description: 'Modern sans-serif font for readability and user interface',
      example: 'Bringing together Europe\'s foremost experts in artificial intelligence and finance.'
    }
  ];

  return (
    <div className="press-kit-page">
      {/* Hero Section */}
      <section className="press-kit-hero">
        <div className="press-kit-container">
          <div className="press-kit-header">
            <div className="hero-badge">Brand Resources</div>
            <h1 className="press-kit-title">CELFA Press Kit</h1>
            <p className="press-kit-subtitle">
              Official brand assets, visual identity guidelines, and digital resources for media, 
              partners, and professional communications.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Logo Variants</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6</div>
                <div className="stat-label">Brand Colors</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Typography Fonts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Assets Section */}
      <section className="press-section">
        <div className="press-kit-container">
          <h2 className="section-title">Official Brand Assets</h2>
          <p className="section-description">
            Premium logo files and brand elements designed for professional use across all media channels. 
            Each asset is optimized for both digital and print applications.
          </p>
          
          <div className="brand-assets-grid">
            {brandAssets.map((asset, index) => (
              <div key={index} className="asset-card">
                <div className="asset-preview">
                  <img src={asset.url} alt={asset.name} className="asset-image" />
                </div>
                <div className="asset-info">
                  <h3 className="asset-name">{asset.name}</h3>
                  <p className="asset-description">{asset.description}</p>
                  <div className="asset-details">
                    <span className="asset-detail">{asset.type}</span>
                    <span className="asset-detail">{asset.size}</span>
                  </div>
                  <button 
                    className={`download-btn ${downloadedItems.has(asset.file) ? 'downloaded' : ''}`}
                    onClick={() => handleDownload(asset.file, asset.url)}
                  >
                    {downloadedItems.has(asset.file) ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Downloaded
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Download
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="press-section typography-section">
        <div className="press-kit-container">
          <h2 className="section-title">Typography System</h2>
          <p className="section-description">
            Carefully selected typefaces that embody CELFA's professional excellence and forward-thinking approach. 
            Our typography system combines classical elegance with modern readability.
          </p>
          
          <div className="typography-grid">
            {typography.map((font, index) => (
              <div key={index} className="typography-card">
                <div className="font-header">
                  <h3 className="font-name" style={{ fontFamily: font.name === 'Playfair Display' ? 'Playfair Display, serif' : 'Inter, sans-serif' }}>
                    {font.name}
                  </h3>
                  <button 
                    className="copy-btn"
                    onClick={() => copyToClipboard(font.name, 'Font name')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </button>
                </div>
                <p className="font-usage">{font.usage}</p>
                <p className="font-description">{font.description}</p>
                <div className="font-weights">
                  <span className="weights-label">Available weights:</span>
                  {font.weights.map((weight, i) => (
                    <span key={i} className="weight-badge">{weight}</span>
                  ))}
                </div>
                <div className="font-example" style={{ 
                  fontFamily: font.name === 'Playfair Display' ? 'Playfair Display, serif' : 'Inter, sans-serif',
                  fontSize: font.name === 'Playfair Display' ? '1.25rem' : '1rem'
                }}>
                  {font.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="press-section">
        <div className="press-kit-container">
          <h2 className="section-title">Brand Color System</h2>
          <p className="section-description">
            A sophisticated color palette designed to convey trust, innovation, and professionalism. 
            Each color has been carefully calibrated for optimal performance across digital and print media.
          </p>
          
          <div className="colors-grid">
            {brandColors.map((color, index) => (
              <div key={index} className="color-card">
                <div 
                  className="color-swatch" 
                  style={{ backgroundColor: color.hex }}
                ></div>
                <div className="color-info">
                  <h3 className="color-name">{color.name}</h3>
                  <p className="color-description">{color.description}</p>
                  <div className="color-values">
                    <div className="color-value">
                      <span className="value-label">HEX:</span>
                      <span 
                        className="value-code"
                        onClick={() => copyToClipboard(color.hex, 'HEX color')}
                      >
                        {color.hex}
                      </span>
                    </div>
                    <div className="color-value">
                      <span className="value-label">RGB:</span>
                      <span 
                        className="value-code"
                        onClick={() => copyToClipboard(color.rgb, 'RGB color')}
                      >
                        {color.rgb}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines Section */}
      <section className="press-section guidelines-section">
        <div className="press-kit-container">
          <h2 className="section-title">Brand Guidelines & Usage Rights</h2>
          
          <div className="guidelines-grid">
            <div className="guideline-card">
              <div className="guideline-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="guideline-title">Logo Standards</h3>
              <ul className="guideline-list">
                <li>Maintain clear space around the logo equal to the height of the "C" in CELFA</li>
                <li>Use the full logo when space permits for maximum brand recognition</li>
                <li>Ensure sufficient contrast against background colors</li>
                <li>Scale proportionally to maintain legibility and visual integrity</li>
                <li>Minimum size: 120px width for digital, 1 inch for print applications</li>
              </ul>
            </div>

            <div className="guideline-card">
              <div className="guideline-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 1z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="guideline-title">Usage Rights & Restrictions</h3>
              <ul className="guideline-list">
                <li>All rights to CELFA logos and brand assets are reserved by the organization</li>
                <li>Assets must be used exclusively for professional, legitimate business purposes</li>
                <li>Modification, alteration, or derivative works of logos are strictly prohibited</li>
                <li>Usage must align with CELFA's mission and maintain brand integrity</li>
                <li>Commercial use requires prior written authorization from CELFA</li>
              </ul>
            </div>

            <div className="guideline-card">
              <div className="guideline-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="4" y1="22" x2="4" y2="15" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="guideline-title">Visual Standards</h3>
              <ul className="guideline-list">
                <li>Primary blue (#3b82f6) for call-to-action elements and brand accents</li>
                <li>Maintain high contrast ratios for accessibility compliance</li>
                <li>Consistent application across all touchpoints and materials</li>
                <li>Test color reproduction in both digital and print environments</li>
                <li>Playfair Display for headlines, Inter for body text and interfaces</li>
              </ul>
            </div>


          </div>
        </div>
      </section>


    </div>
  );
};

export default PressKit;
