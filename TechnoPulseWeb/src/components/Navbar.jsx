import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Careers', path: '/careers' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Team', path: '/team' },
  { name: 'Company Details', path: '/company-details' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [prevPathname, setPrevPathname] = useState(location.pathname);

  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setMobileMenuOpen(false);
  }

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="brand-link" aria-label="Technoplus Home" onClick={closeMenu}>
          <img
            src="/technoplus-logo-light.png"
            alt="Technoplus Solutions"
            className="brand-logo"
          />
        </Link>

        {/* Desktop Navlinks - Direct items, no dropdown */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {isActive && <span className="active-nav-indicator" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary desktop-cta">
            <span>Get in Touch</span>
            <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - All links directly listed */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-nav-group">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
              >
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>

          <div className="mobile-cta-wrapper">
            <Link to="/contact" onClick={closeMenu} className="btn btn-primary mobile-cta-btn">
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
