import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import './Navbar.css';

const primaryLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' }
];

const moreLinks = [
  { name: 'Careers', path: '/careers' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Our Team', path: '/team' },
  { name: 'Company Details', path: '/company-details' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const [prevPathname, setPrevPathname] = useState(location.pathname);

  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const isMoreActive = moreLinks.some(link => link.path === location.pathname);

  return (
    <header className="site-header">
      <div className="container navbar-container">
        {/* Logo strictly ONE time */}
        <Link to="/" className="brand-link" aria-label="Technoplus Home" onClick={closeMenu}>
          <img
            src="/technoplus-logo.png"
            alt="Technoplus Solutions"
            className="brand-logo"
          />
        </Link>

        {/* Desktop Navlinks */}
        <nav className="desktop-nav">
          {primaryLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && <span className="active-nav-indicator" />}
                </>
              )}
            </NavLink>
          ))}

          {/* More Dropdown Menu */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`nav-item nav-dropdown-trigger ${isMoreActive ? 'active' : ''} ${dropdownOpen ? 'open' : ''}`}
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              aria-label="More navigation links"
            >
              <span>More</span>
              <ChevronDown size={14} className={`dropdown-chevron ${dropdownOpen ? 'rotated' : ''}`} />
              {isMoreActive && <span className="active-nav-indicator" />}
            </button>

            {dropdownOpen && (
              <div className="nav-dropdown-menu">
                {moreLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setDropdownOpen(false)}
                    className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                  >
                    <span className="dropdown-item-title">{item.name}</span>
                    <span className="dropdown-item-desc">{item.desc}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary desktop-cta">
            <span>Get in Touch</span>
            <ArrowUpRight size={15} />
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-nav-group">
            {primaryLinks.map((link) => (
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

          <div className="mobile-drawer-divider" />
          <div className="mobile-section-heading">More Pages</div>

          <div className="mobile-nav-group">
            {moreLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
              >
                <div>
                  <div className="mobile-item-title">{link.name}</div>
                  <div className="mobile-item-desc">{link.desc}</div>
                </div>
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
