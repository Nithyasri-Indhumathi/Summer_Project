/*import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <FacebookIcon /><TwitterIcon /><InstagramIcon /><LinkedInIcon />
        </div>
        <p>Copywrite &copy; 2023 All rights reserved</p>
    </div>
  )
}

export default Footer*/
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>Follow us</p>
      <div className="socialMedia">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
      <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact</Link>
      </nav>
      <p className="p">Copyright &copy; 2023 All rights reserved</p>
    </div>
  );
}

export default Footer;
