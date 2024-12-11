import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
 
import useFetchItems from './useFetchItems';

function Cart() {
  const { id } = useParams();
  // const [item, setItem] = useState(null);

  const [data]=useFetchItems((`https://fakestoreapi.com/products/${id}`),[id])

  // useEffect(() => {
  //   if (id) {
  //     // Fetch data for the specific item
  //     fetch(https://fakestoreapi.com/products/${id})
  //       .then(res => res.json())
  //       .then(json => setItem(json))  // Update the state with fetched data
  //       .catch(error => console.error('Error fetching item:', error));
  //   }
  // }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <center>
    <div className="card">
      <h3>ID={data.id}</h3>
      {/* <hr /> */}
      <center> 
      <h2>{data.title}</h2></center>
      <img src={data.image} alt={data.title} className="item-image" />
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
      {/* <button className="btn" onClick={() => Popup(data.id)}>Buy Now</button> */}
    </div>
    </center>
  );
}

export default Cart;