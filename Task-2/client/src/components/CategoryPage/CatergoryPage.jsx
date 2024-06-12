import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  let { category } = useParams();
  

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <div className="category-page">
      <h1>{category ? category.toUpperCase() : 'Loading...'}</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
