import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => (
  <div className="footerStyle" >
    <div className="contact_box">
        <h3>Pizza Bite</h3>
        <span>Connect With Us</span>
        <div className="social">
            <a href="#"><i><FacebookIcon/></i></a>
            <a href="#"><i><TwitterIcon/></i></a>
            <a href="#"><i><InstagramIcon/></i></a>
        </div>
    </div>
    <div className="contact_box">
            <h3>Menu Links</h3>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#contact">Contact</a></li> 
    </div>
    <div className="contact_box">
            <h3>Quick Links</h3>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#Privacy Policy">Privacy Policy</a></li>
            <li><a href="#Disclaimer">Disclaimer</a></li>
            <li><a href="#Terms Of Use">Terms Of Use</a></li>
    </div>
    <div className="contact_box_address">
        <h3>Contact</h3>
        <i><AddLocationIcon/><span>005, Lorem ipsum dolor, sit amet consectetur, Colombo</span></i>
        <i><PhoneIcon/><span>+91 000 999 5555</span></i>
        <i><EmailIcon/><span>Example@email.com</span></i>
    </div>
    
  </div>
);

export default Footer;
