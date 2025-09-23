import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(href.substring(1));
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Link to="/" className="logo-link">
            <img 
              src="/src/pictures/CELFA Logo FULL DARK.png" 
              alt="CELFA - Centre for European Leadership in Financial AI" 
              className="logo-image"
            />
            <div className="logo-text-container">
              <h1 className="logo-text">CELFA</h1>
              <span className="logo-subtitle">Centre for European Leadership in Financial AI</span>
            </div>
          </Link>
        </div>
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                aria-label="Home page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/advisory-board" 
                className={`nav-link ${location.pathname === '/advisory-board' ? 'active' : ''}`}
                aria-label="Advisory Board section"
              >
                Advisory Board
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/research" 
                className={`nav-link ${location.pathname === '/research' ? 'active' : ''}`}
                aria-label="Research page"
              >
                Research
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                aria-label="About page"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;