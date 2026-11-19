import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-main-row">
          {/* Brand info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link" aria-label="Technoplus Home">
              <img
                src="/technoplus-logo-transparent.png"
                alt="Technoplus Solutions"
                className="footer-logo"
              />
            </Link>
            <p className="footer-desc">
              Engineering modern web applications, cloud infrastructure, and intelligent software systems.
            </p>
            <div className="footer-socials">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="footer-icon-btn"
              >
                <LinkedinIcon size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="footer-icon-btn"
              >
                <TwitterIcon size={14} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="footer-icon-btn"
              >
                <GithubIcon size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav">
            <h4 className="footer-title">Pages</h4>
            <div className="footer-links-grid">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
              <Link to="/blog" className="footer-link">Blog</Link>
              <Link to="/careers" className="footer-link">Careers</Link>
              <Link to="/faq" className="footer-link">FAQ</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4 className="footer-title">Contact</h4>
            <div className="footer-contact-list">
              <a href="mailto:dhruvishamaheta284@gmail.com" className="footer-contact-item">
                <Mail size={14} className="contact-icon" />
                <span>dhruvishamaheta284@gmail.com</span>
              </a>
              <a href="tel:+919173589925" className="footer-contact-item">
                <Phone size={14} className="contact-icon" />
                <span>+91 91735 89925</span>
              </a>
              <div className="footer-contact-item">
                <MapPin size={14} className="contact-icon" />
                <span>Rajkot, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Technoplus Solutions Private Limited. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
