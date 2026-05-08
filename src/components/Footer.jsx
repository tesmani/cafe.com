import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-section brand">
          <h2 className="footer-logo">THE SANCTUARY</h2>
          <p className="brand-tagline">Crafting the perfect brew and a relaxing atmosphere since 2010.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#menu">The Menu</a></li>
            <li><a href="#contact">Find Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Visit Us</h3>
          <div className="contact-item">
            <FaMapMarkerAlt className="footer-icon" />
            <p>123 Coffee Lane, Brewtown</p>
          </div>
          <div className="contact-item">
            <FaClock className="footer-icon" />
            <div>
              <p>Mon — Fri: 08:00 — 20:00</p>
              <p>Sat — Sun: 09:00 — 22:00</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Connect</h3>
          <div className="social-icons-row">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} THE SANCTUARY. All Rights Reserved.</p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <span className="separator"></span>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;