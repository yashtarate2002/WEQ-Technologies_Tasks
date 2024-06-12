import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './prodstyle.css'; 

const ProductId = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProductById();
  }, [id]);

  return (
    <div className="product-containerid">
      {product ? (
        <div className="product-details">
          <div className="product-image-container">
            <img src={product.image} alt={product.title} className="product-imageid" />
          </div>
          <div className="product-info">
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
          <div className="description">
            <p>{product.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductId;
