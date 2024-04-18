import React from 'react';
import './Menuextend.css';
import menuImage1 from '../assets/menuImage1.jpg';
import menuImage2 from '../assets/menuImage2.jpg';
import menuImage3 from '../assets/menuImage3.jpg';

const Menuextend = () => (
  <div className="menuextent" id='menu'>
    <div className="menuHeading">
        <span>Menu</span>
        <h2>Tasty menu of the week</h2>
    </div>
    <table>
        <tr>
            <div className="menu_containers">
                <td>
                    <div className="menu_box">
                        <div className="menu_box_image">
                            <img src={menuImage1}/>
                        </div>
                        <h2>Cheese Pizza</h2>
                        <h3>Tasty Food</h3>
                        <span>$30.05</span>
                        <i class='bx bx-cart-alt'></i>
                    </div>
                </td>
                <td>
                <div className="menu_box">
                    <div className="menu_box_image">
                        <img src={menuImage2}/>
                    </div>
                    <h2>Tropical Pizza</h2>
                    <h3>Tasty Food</h3>
                    <span>$42.05</span>
                    <i class='bx bx-cart-alt'></i>
                    </div>
                </td>
                <td>
                <div className="menu_box">
                    <div className="menu_box_image">
                        <img src={menuImage3}/>
                    </div>
                    <h2>Mecaroni Pizza</h2>
                    <h3>Tasty Food</h3>
                    <span>$12.05</span>
                    <i class='bx bx-cart-alt'></i>
                    </div>
                </td>
            </div>
        </tr>
    </table>

  </div>
);

export default Menuextend;
