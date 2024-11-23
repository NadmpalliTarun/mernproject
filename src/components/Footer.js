import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>USEFUL LINKS</h4>
          <ul className="footer-links">
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/vacancies">Vacancies</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>ADDRESS</h4>
          <address>
           India-Andhrapradesh,<br />
            Guntur-vadlamudi,<br />
            VFSTR-522201<br />
            <a href="https://www.google.com/maps">Google Map</a>
          </address>
        </div>
        <div className="footer-section">
          <h4>LEGAL</h4>
          <p>&copy; 2022 - 2026. All rights reserved.</p>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </div>
      <div className="footer-socials">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://rss.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-rss"></i></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-google-plus"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
