import React from 'react';
import './Services.css';
import order from '../assets/order.jpeg';
import shipping from '../assets/shipping.jpeg';
import deliver from '../assets/deliver.jpeg';

const Services = () => (
  <div className="services" id='services' >
   <div className="menuHeading">
     <span>Services</span>
     <h2>We provide best food services</h2>
    </div> 
    <div className="services_container">
        <div className="service_box">
            <img src={order}/>
            <h3>You Order</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ea fugiat esse tempore ipsum temporibus.</p>
        </div>
        <div className="service_box">
            <img src={shipping}/>
            <h3>Shipping</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ea fugiat esse tempore ipsum temporibus.</p>
        </div>
        <div className="service_box">
            <img src={deliver}/>
            <h3>Delivered</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ea fugiat esse tempore ipsum temporibus.</p>
        </div>
    </div>
    

  </div>
);

export default Services;
