import React from 'react';
import { FaFacebook, FaTwitter, FaGooglePlus, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>Organic Vegetables And Fruits</h3>
        <p> Farmers and food producers grow organic and produce food without using synthetic chemicals such as pesticides and artificial fertilisers. They do not use genetically modified (GM) components or expose food to irradiation. Animal welfare and environmental sustainability are important issues for organic farmers.</p>
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
          Farm Fresh
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/About'>
              <li>About</li>
            </Link>
            <Link to='/Admin'>
              <li>Admin</li>
            </Link>
            <Link to='/BlogPage'> 
              <li>Blog</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
