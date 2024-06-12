import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './hero.css';
import hero from '../../assets/Home.jpg';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="main-hero fadeIn">
        <div className='left'>
          <h1 className="hero-title">
            Find the Best <br/> Style for You
          </h1>
          <p className="hero-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus   <br /> voluptatibus, rerum eveniet quae laudantium cumque ipsam 
          </p>
          {/* Replace button with Link */}
          <Link to="/products" className='shop-now'> {/* Set the to prop to the desired route */}
            Shop Now
          </Link>
        </div>
        <div className="right">
          <img src={hero} alt="hero" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
