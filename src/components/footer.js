import React from 'react';
import '../styles/Footer.css';

const footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Important Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About The Portal</a></li>
              <li><a href="#">Going Electric</a></li>
              <li><a href="#">E-Mobility Businesses</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li><a href="#">Tools</a></li>
              <li><a href="#">Charging Map</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Website Policies</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Accessibility Statement</a></li>
            </ul>
          </div>
          <div className="footer-section contact-info">
            <h3>Contact Us</h3>
            <p><i className="fa fa-envelope"></i></p>
            <div className="social-media">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Visitors Count</h3>
            <p>Total Visitors</p>
            <p>123862</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; A joint initiative between NITI Aayog and UK Government</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
