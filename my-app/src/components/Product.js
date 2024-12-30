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






// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// // import './product.css';

// function Product() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products/categories')
//       .then((response) => response.json())
//       .then((data) => setCategories(data))
//       .catch((error) => console.error('Error fetching categories:', error));
//   }, []);

//   const getImagePath = (category) => {
//     const sanitizedCategory = category
//       .toLowerCase()
//       .replace(/ /g, '-')  // Replace spaces with dashes
//       .replace(/[^a-z0-9-]/g, '');  // Remove any non-alphanumeric characters except for dashes

//     const imagePath = `/images/${sanitizedCategory}.jpg`;  // Corrected path construction
//     console.log(imagePath); 
//     return imagePath;
//   };

//   return (
//     <div className="card-product-container">
//       {categories.length > 0 ? (
//         categories.map((category) => {
//           const imagePath = getImagePath(category);
//           return (
//             <div key={category} className="products-card">
//               <Link to={`/${category.toLowerCase().replace(/ /g, '')}`}>  {/* Fixed Link component */}
//                 <img
//                   src={imagePath}
//                   alt={category}
//                   onError={(e) => { 
//                     e.target.src = '/images/default.jpg';  // Fallback image if image path fails
//                   }}
//                 />
//               </Link>
//               <h2>{category}</h2>
//               <p>Explore the latest in {category.toLowerCase()} products.</p>
//             </div>
//           );
//         })
//       ) : (
//         <p>Loading categories...</p>
//       )}
//     </div>
//   );
// }

// export default Product;
