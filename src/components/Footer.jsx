import React from "react";
import "./Css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-container">

        
        <div className="footer-section">
          <h2>Shoppy</h2>
          <p>Your one-stop shop for fashion & lifestyle.</p>
        </div>

        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
        </div>

       
        <div className="footer-section">
          <h3>Support</h3>
          <p>Contact Us</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>

      </div>

      
      <div className="footer-bottom">
        <p>© 2026 Shopy All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;