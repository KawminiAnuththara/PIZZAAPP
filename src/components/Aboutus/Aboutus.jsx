import React from 'react';
import './Aboutus.css';
import aboutImage1 from '../assets/aboutImage1.jpg';

const Aboutus = () => (
  <div className="Aboutus" id='About'>
    <div className="aboutus_image">
       <img src={aboutImage1} />
    </div>
    <div className="about_text">
        <span>About Us</span>
        <h2>We make good and <br/> tasty pizzas</h2>
        <p>Welcome to our pizza app, where every slice tells a 
            delicious story! At <b>Pizza Bite</b> , we're passionate about 
            delivering the ultimate pizza experience right to your fingertips.
            Explore our extensive menu featuring handcrafted pizzas made with the finest ingredients, 
            carefully selected to tantalize your taste buds. Customize your order with
             a variety of crusts, sauces, and toppings to create your perfect pie, just the way you like it. 
            With user-friendly navigation and seamless ordering,
             getting your favorite pizza has never been easier. 
              Track your order in real-time and enjoy speedy 
              delivery or convenient pickup options.</p>

              <a href='#' class='menuButton'>Learn More</a>
    </div>
    

  </div>
);

export default Aboutus;
