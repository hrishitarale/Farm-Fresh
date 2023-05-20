import React from 'react';
import { FaFacebook, FaTwitter, FaGooglePlus, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>Organic Vegetables And Fruits</h3>
        <p>Organic farmers and food producers grow and produce food without using synthetic chemicals such as pesticides and artificial fertilisers. They do not use genetically modified (GM) components or expose food to irradiation. Animal welfare and environmental sustainability are important issues for organic farmers.</p>
        <ul className="socials">
          <li><FaFacebook /></li>
          <li><FaTwitter /></li>
          <li><FaGooglePlus /></li>
          <li><FaYoutube /></li>
          <li><FaLinkedin /></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy; 
          Organic Vegetables
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
