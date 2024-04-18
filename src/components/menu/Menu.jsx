import React from 'react';
import './Menu.css';
import menuImage1 from '../assets/menuImage1.jpg';
import menuImage2 from '../assets/menuImage2.jpg';
import menuImage3 from '../assets/menuImage3.jpg';
import menuImage4 from '../assets/menuImage4.jpg';

const Menu = () => (
  <div className="menu_container" id='home'>
    <div className="menu_text">
        <h1>Pizza Bite</h1>
        <h2>
            The tasty pizza of <br/> your choice
        </h2>
        <a href='#' className='menuButton'>View Menu</a>
    </div>
    <div className="menu_gallery">
        <img src={menuImage1} />
        <img src={menuImage2}/>
        <img src={menuImage3}/>
        <img src={menuImage4}/>
    </div>

  </div>
);

export default Menu;
