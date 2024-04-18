import React from 'react';
import './Header.css';

const Header = () => (
  <div className="headerStyle" >
    <div className="headerTopic">
        <h2>Pizza Bite</h2>

    </div>
    <div className="navItems">
        <p><a href='#home'>Home</a></p>
        <p><a href='#About'>About</a></p>
        <p><a href='#menu'>Menu</a></p>
        <p><a href='#services'>Service</a></p>
        <p><a href='#contact'>Contact</a></p>
        
        <div class="bx bx-moon" id="darkmode"></div>
    </div>
    

  </div>
);

export default Header;
