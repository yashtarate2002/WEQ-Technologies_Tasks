import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TrendingProducts.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [products.length]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

 

  return (
    <div className="product-list-containertrend">
      <h1> Trending Products</h1>
      <div className="products-container">
        {products.slice(currentIndex, currentIndex + 3).map((product) => (
          <div key={product.id} className="product-cardtrend">
            <div className="product-image-container">
              <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-details">
              <h2 className="product-title">
                {truncateText(product.title, 20)} 
              </h2>
              <p className="product-price">${product.price}</p>
             
              <div className="product-buttons">
          <button className="product-button" style={{width:'48%',position:'relative',left:'-50px'}} >Add to Cart</button>
          <Link to={`/products/${product.id}`}style={{width:'48%',position:'relative',left:'70px',top:'-36px'}} className="product-button"> Details</Link>
        </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
