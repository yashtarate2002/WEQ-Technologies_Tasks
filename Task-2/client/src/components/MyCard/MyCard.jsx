import React from 'react';
import './MyCard.css';
import { Link } from 'react-router-dom';

const MyCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-buttons">
          <button className="product-button" style={{width:'48%',position:'relative',left:'-50px'}}>Add to Cart</button>
          <Link  to={`/products/${product.id}`}style={{width:'48%',position:'relative',left:'60px',top:'-36px'}} className="product-button"> Details</Link>
        </div>
      </div>
    </div>
  );
};

export default MyCard;