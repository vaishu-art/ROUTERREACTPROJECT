import React, { useState, useEffect } from 'react';
import Router from './Router';
import { Link } from 'react-router-dom';


function Product() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <>
    <br/>
    <center>
      <Link to="tableproduct">
    <button className='btn-product'>All Product Details</button> </Link>
    </center>
    <div className="card-product-container">
      
      {categories.map((category) => (
        <div key={category} className="product-card">
          {/* <h2>{category}</h2> */}
          <Link to={category}> 
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <button className="btn">View {category} </button> </Link>
        </div>
      ))}
    </div>
    </>
  );
}
// target='_blank'
export default Product;