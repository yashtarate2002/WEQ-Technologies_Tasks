import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./home.module.css";
import  Hero from  '../Hero/Hero.jsx'
import TrendingProducts from '../TrendingProducts/TrendingProducts.jsx'
import Deal from '../Deal/Deal.jsx'
import ProductList from '../ProductList/ProductList.jsx'
const Home = () => {
  

  return (
    <div className={classes.container}>
     
      <Hero/>
      <TrendingProducts/>
      <Deal/>
      <ProductList/>
      
    </div>
  );
};

export default Home;
