import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section about">
          <h3>About Consult Park</h3>
          <p>
            We connect professionals and clients for streamlined consultation
            services, tailored to your needs.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><strong>Email:</strong> support@consultpark.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p>
            <strong>Location:</strong>{" "}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              123 Park Ave, New York, NY
            </a>
          </p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Consult Park. All rights reserved.</p>
        <p>
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;