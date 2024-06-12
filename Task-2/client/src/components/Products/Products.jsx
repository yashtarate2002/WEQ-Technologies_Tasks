import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list-container" >
      <h1>Product List</h1>
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        centerMode
        centerSlidePercentage={25}
        showStatus={false}
      >
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <Link to={`/product/${product.id}`} className="product-button">View Details</Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Products;
