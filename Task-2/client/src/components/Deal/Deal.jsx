// src/components/Deal/Deal.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Deal.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import dealimg from '../../assets/deal.png';

const Deal = () => {
  return (
    <div className='main-deal'style={{backgroundcolor:"white"}}>
      <div className="left-deal">
        <h1>WEEK DEAL</h1>
        <p>ALL NEW FASHION CLOTHS COLLECTION.</p>
        
        <Link to="/products" className='buttonshop'> 
        Shop Now <span><FaLongArrowAltRight style={{position:'relative',left:'10px',top:'3px'}}/></span>
          </Link>
      </div>
      <div className="right-deal">
        <img src={dealimg} alt="deal img" />
      </div>
    </div>
  );
};

export default Deal;
