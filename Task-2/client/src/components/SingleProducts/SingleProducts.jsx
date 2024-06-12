
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './SingleProducts.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

   useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  


  if (!product) return <div>Loading...</div>;
  return (
   <>
    <div className="product-details-container">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p className='price' style={{color:'red'}}>Price: ${product.price}</p>
      {/* Add more details here as needed */}
    </div>
    <div className="buttons">
            <button>Buy Now</button>
            <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
   </>
  );
};

export default ProductDetails;
